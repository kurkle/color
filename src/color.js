/**
 * @packageDocumentation
 * @module index
 */

import {b2n, n2b, round} from './byte.js';
import {hexParse, hexString} from './hex.js';
import {hsl2rgb, hslString, hueParse, rgb2hsl, rotate} from './hue.js';
import {nameParse} from './names.js';
import {rgbParse, rgbString} from './rgb.js';
import {interpolate} from './srgb.js';

/**
 * @typedef {import('./index.js').RGBA} RGBA
 */

/**
 * Modify HSL properties
 * @param {RGBA} v - the color
 * @param {number} i - index [0=h, 1=s, 2=l]
 * @param {number} ratio - ratio [0..1]
 * @hidden
 */
function modHSL(v, i, ratio) {
  if (v) {
    let tmp = rgb2hsl(v);
    tmp[i] = Math.max(0, Math.min(tmp[i] + tmp[i] * ratio, i === 0 ? 360 : 1));
    tmp = hsl2rgb(tmp);
    v.r = tmp[0];
    v.g = tmp[1];
    v.b = tmp[2];
  }
}

/**
 * Clone color
 * @param {RGBA} v - the color
 * @param {object} [proto] - prototype
 * @hidden
 */
function clone(v, proto) {
  return v ? Object.assign(proto || {}, v) : v;
}

/**
 * @param {RGBA|number[]} input
 * @hidden
 */
function fromObject(input) {
  var v = {r: 0, g: 0, b: 0, a: 255};
  if (Array.isArray(input)) {
    if (input.length >= 3) {
      v = {r: input[0], g: input[1], b: input[2], a: 255};
      if (input.length > 3) {
        v.a = n2b(input[3]);
      }
    }
  } else {
    v = clone(input, {r: 0, g: 0, b: 0, a: 1});
    v.a = n2b(v.a);
  }
  return v;
}

/**
 * @param {string} str
 * @hidden
 */
function functionParse(str) {
  if (str.charAt(0) === 'r') {
    return rgbParse(str);
  }
  return hueParse(str);
}

export default class Color {
  /**
   * constructor
   * @param {Color|RGBA|string|number[]} input
   */
  constructor(input) {
    if (input instanceof Color) {
      return input;
    }
    const type = typeof input;
    let v;
    if (type === 'object') {
      // @ts-ignore
      v = fromObject(input);
    } else if (type === 'string') {
      // @ts-ignore
      v = hexParse(input) || nameParse(input) || functionParse(input);
    }

    /** @type {RGBA} */
    this._rgb = v;
    /** @type {boolean} */
    this._valid = !!v;
  }

  /**
   * `true` if this is a valid color
   * @returns {boolean}
   */
  get valid() {
    return this._valid;
  }

  /**
   * @returns {RGBA} - the color
   */
  get rgb() {
    var v = clone(this._rgb);
    if (v) {
      v.a = b2n(v.a);
    }
    return v;
  }

  /**
   * @param {RGBA} obj - the color
   */
  set rgb(obj) {
    this._rgb = fromObject(obj);
  }

  /**
   * rgb(a) string
   * @return {string|undefined}
   */
  rgbString() {
    return this._valid ? rgbString(this._rgb) : undefined;
  }

  /**
   * hex string
   * @return {string|undefined}
   */
  hexString() {
    return this._valid ? hexString(this._rgb) : undefined;
  }

  /**
   * hsl(a) string
   * @return {string|undefined}
   */
  hslString() {
    return this._valid ? hslString(this._rgb) : undefined;
  }

  /**
   * Mix another color to this color.
   * @param {Color} color - Color to mix in
   * @param {number} weight - 0..1
   * @returns {Color}
   */
  mix(color, weight) {
    if (color) {
      const c1 = this.rgb;
      const c2 = color.rgb;
      let w2; // using instead of undefined in the next line
      const p = weight === w2 ? 0.5 : weight;
      const w = 2 * p - 1;
      const a = c1.a - c2.a;
      const w1 = ((w * a === -1 ? w : (w + a) / (1 + w * a)) + 1) / 2.0;
      w2 = 1 - w1;
      c1.r = 0xFF & w1 * c1.r + w2 * c2.r + 0.5;
      c1.g = 0xFF & w1 * c1.g + w2 * c2.g + 0.5;
      c1.b = 0xFF & w1 * c1.b + w2 * c2.b + 0.5;
      c1.a = p * c1.a + (1 - p) * c2.a;
      this.rgb = c1;
    }
    return this;
  }

  /**
   * Interpolate a color value between this and `color`
   * @param {Color} color
   * @param {number} t - 0..1
   * @returns {Color}
   */
  interpolate(color, t) {
    if (color) {
      this._rgb = interpolate(this._rgb, color._rgb, t);
    }
    return this;
  }

  /**
   * Clone
   * @returns {Color}
   */
  clone() {
    return new Color(this.rgb);
  }

  /**
   * Set aplha
   * @param {number} a - the alpha [0..1]
   * @returns {Color}
   */
  alpha(a) {
    this._rgb.a = n2b(a);
    return this;
  }

  /**
   * Make clearer
   * @param {number} ratio - ratio [0..1]
   * @returns {Color}
   */
  clearer(ratio) {
    const rgb = this._rgb;
    rgb.a *= 1 - ratio;
    return this;
  }

  /**
   * Convert to grayscale
   * @returns {Color}
   */
  greyscale() {
    const rgb = this._rgb;
    // http://en.wikipedia.org/wiki/Grayscale#Converting_color_to_grayscale
    const val = round(rgb.r * 0.3 + rgb.g * 0.59 + rgb.b * 0.11);
    rgb.r = rgb.g = rgb.b = val;
    return this;
  }

  /**
   * Opaquer
   * @param {number} ratio - ratio [0..1]
   * @returns {Color}
   */
  opaquer(ratio) {
    const rgb = this._rgb;
    rgb.a *= 1 + ratio;
    return this;
  }

  /**
   * Negates the rgb value
   * @returns {Color}
   */
  negate() {
    const v = this._rgb;
    v.r = 255 - v.r;
    v.g = 255 - v.g;
    v.b = 255 - v.b;
    return this;
  }

  /**
   * Lighten
   * @param {number} ratio - ratio [0..1]
   * @returns {Color}
   */
  lighten(ratio) {
    modHSL(this._rgb, 2, ratio);
    return this;
  }

  /**
   * Darken
   * @param {number} ratio - ratio [0..1]
   * @returns {Color}
   */
  darken(ratio) {
    modHSL(this._rgb, 2, -ratio);
    return this;
  }

  /**
   * Saturate
   * @param {number} ratio - ratio [0..1]
   * @returns {Color}
   */
  saturate(ratio) {
    modHSL(this._rgb, 1, ratio);
    return this;
  }

  /**
   * Desaturate
   * @param {number} ratio - ratio [0..1]
   * @returns {Color}
   */
  desaturate(ratio) {
    modHSL(this._rgb, 1, -ratio);
    return this;
  }

  /**
   * Rotate
   * @param {number} deg - degrees to rotate
   * @returns {Color}
   */
  rotate(deg) {
    rotate(this._rgb, deg);
    return this;
  }
}
