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

const COMMENT_REGEXP = /\/\*[^]*?\*\//g;

/**
 * RGBA color type
 */
export interface RGBA {
  r: number;
  g: number;
  b: number;
  a: number;
}

/**
 * Modify HSL properties
 * @param v - the color
 * @param i - index [0=h, 1=s, 2=l]
 * @param ratio - ratio [0..1]
 * @hidden
 */
function modHSL(v: RGBA | undefined, i: number, ratio: number): void {
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
 * @param v - the color
 * @param proto - prototype
 * @hidden
 */
function clone(v: RGBA | undefined, proto?: object): RGBA | undefined {
  return v ? Object.assign(proto || {}, v) : v;
}

/**
 * @param input
 * @hidden
 */
function fromObject(input: RGBA | number[]): RGBA {
  let v: RGBA = {r: 0, g: 0, b: 0, a: 255};
  if (Array.isArray(input)) {
    if (input.length >= 3) {
      v = {r: input[0], g: input[1], b: input[2], a: 255};
      if (input.length > 3) {
        v.a = n2b(input[3]);
      }
    }
  } else {
    v = clone(input, {r: 0, g: 0, b: 0, a: 1})!;
    v.a = n2b(v.a);
  }
  return v;
}

/**
 * @param str
 * @hidden
 */
function functionParse(str: string): RGBA | undefined {
  if (str.charAt(0) === 'r') {
    return rgbParse(str);
  }
  return hueParse(str);
}

export default class Color {
  /**
   * @type {RGBA}
   * @hidden
   **/
  _rgb: RGBA;

  /**
   * @type {boolean}
   * @hidden
   **/
  _valid: boolean;

  /**
   * constructor
   * @param input
   */
  constructor(input: Color | RGBA | string | number[]) {
    if (input instanceof Color) {
      return input;
    }
    const type = typeof input;
    let v: RGBA | undefined;
    if (type === 'object') {
      v = fromObject(input as RGBA | number[]);
    } else if (type === 'string') {
      const clean = (input as string).replace(COMMENT_REGEXP, '');
      v = hexParse(clean) || nameParse(clean) || functionParse(clean);
    }

    this._rgb = v as RGBA;
    this._valid = !!v;
  }

  /**
   * `true` if this is a valid color
   * @returns {boolean}
   */
  get valid(): boolean {
    return this._valid;
  }

  /**
   * @returns {RGBA} - the color
   */
  get rgb(): RGBA {
    const v = clone(this._rgb);
    if (v) {
      v.a = b2n(v.a);
    }
    return v as RGBA;
  }

  /**
   * @param obj - the color
   */
  set rgb(obj: RGBA) {
    this._rgb = fromObject(obj);
  }

  /**
   * rgb(a) string
   * @return {string|undefined}
   */
  rgbString(): string | undefined {
    return this._valid ? rgbString(this._rgb) : undefined;
  }

  /**
   * hex string
   * @return {string|undefined}
   */
  hexString(): string | undefined {
    return this._valid ? hexString(this._rgb) : undefined;
  }

  /**
   * hsl(a) string
   * @return {string|undefined}
   */
  hslString(): string | undefined {
    return this._valid ? hslString(this._rgb) : undefined;
  }

  /**
   * Mix another color to this color.
   * @param color - Color to mix in
   * @param weight - 0..1
   * @returns {Color}
   */
  mix(color: Color, weight: number): Color {
    if (color) {
      const c1 = this.rgb;
      const c2 = color.rgb;
      let w2: number; // using instead of undefined in the next line
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
   * @param color
   * @param t - 0..1
   * @returns {Color}
   */
  interpolate(color: Color, t: number): Color {
    if (color) {
      this._rgb = interpolate(this._rgb, color._rgb, t);
    }
    return this;
  }

  /**
   * Clone
   * @returns {Color}
   */
  clone(): Color {
    return new Color(this.rgb);
  }

  /**
   * Set alpha
   * @param a - the alpha [0..1]
   * @returns {Color}
   */
  alpha(a: number): Color {
    this._rgb.a = n2b(a);
    return this;
  }

  /**
   * Make clearer
   * @param ratio - ratio [0..1]
   * @returns {Color}
   */
  clearer(ratio: number): Color {
    const rgb = this._rgb;
    rgb.a *= 1 - ratio;
    return this;
  }

  /**
   * Convert to grayscale
   * @returns {Color}
   */
  greyscale(): Color {
    const rgb = this._rgb;
    // http://en.wikipedia.org/wiki/Grayscale#Converting_color_to_grayscale
    const val = round(rgb.r * 0.3 + rgb.g * 0.59 + rgb.b * 0.11);
    rgb.r = rgb.g = rgb.b = val;
    return this;
  }

  /**
   * Opaquer
   * @param ratio - ratio [0..1]
   * @returns {Color}
   */
  opaquer(ratio: number): Color {
    const rgb = this._rgb;
    rgb.a *= 1 + ratio;
    return this;
  }

  /**
   * Negates the rgb value
   * @returns {Color}
   */
  negate(): Color {
    const v = this._rgb;
    v.r = 255 - v.r;
    v.g = 255 - v.g;
    v.b = 255 - v.b;
    return this;
  }

  /**
   * Lighten
   * @param ratio - ratio [0..1]
   * @returns {Color}
   */
  lighten(ratio: number): Color {
    modHSL(this._rgb, 2, ratio);
    return this;
  }

  /**
   * Darken
   * @param ratio - ratio [0..1]
   * @returns {Color}
   */
  darken(ratio: number): Color {
    modHSL(this._rgb, 2, -ratio);
    return this;
  }

  /**
   * Saturate
   * @param ratio - ratio [0..1]
   * @returns {Color}
   */
  saturate(ratio: number): Color {
    modHSL(this._rgb, 1, ratio);
    return this;
  }

  /**
   * Desaturate
   * @param ratio - ratio [0..1]
   * @returns {Color}
   */
  desaturate(ratio: number): Color {
    modHSL(this._rgb, 1, -ratio);
    return this;
  }

  /**
   * Rotate
   * @param deg - degrees to rotate
   * @returns {Color}
   */
  rotate(deg: number): Color {
    rotate(this._rgb, deg);
    return this;
  }
}
