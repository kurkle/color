import {hexParse, hexString} from './hex';
import {rgbParse, rgbString} from './rgb';
import {hueParse, hsl2rgb, rgb2hsl, rotate, hslString} from './hue';
import {nameParse} from './names';
import {b2n, n2b, round} from './byte';

function modHSL(v, i, ratio) {
	var tmp = rgb2hsl(v);
	tmp[i] += tmp[i] * ratio;
	tmp = hsl2rgb(tmp);
	v.r = tmp[0];
	v.g = tmp[1];
	v.b = tmp[2];
}

function clone(v, proto) {
	return v ? Object.assign(proto || {}, v) : v;
}

function fromObject(obj) {
	var v = {r: 0, g: 0, b: 0, a: 255};
	if (Array.isArray(obj)) {
		if (obj.length >= 3) {
			v = {r: obj[0], g: obj[1], b: obj[2], a: 255};
			if (obj.length > 3) {
				v.a = n2b(obj[3]);
			}
		}
	} else {
		v = clone(obj, {r: 0, g: 0, b: 0, a: 1});
		v.a = n2b(v.a);
	}
	return v;
}

class Color {
	constructor(obj) {
		if (obj instanceof Color) {
			return obj;
		}
		var v;
		var type = typeof obj;
		if (type === 'object') {
			v = fromObject(obj);
		} else if (type === 'string') {
			v = hexParse(obj)
			|| nameParse(obj)
			|| rgbParse(obj)
			|| hueParse(obj);
		}
		this._rgb = v;
		this.valid = !!v;
	}

	get isValid() {
		return this.valid;
	}

	get rgb() {
		var v = clone(this._rgb);
		if (v) {
			v.a = b2n(v.a);
		}
		return v;
	}

	set rgb(obj) {
		this._rgb = fromObject(obj);
	}

	rgbString() {
		return rgbString(this._rgb);
	}

	hexString() {
		return hexString(this._rgb);
	}

	hslString() {
		return hslString(this._rgb);
	}

	/**
	 * Mix another color to this color.
	 * @param {Color} color - Color to mix in
	 * @param {number} weight - 0..1
	 */
	mix(color, weight) {
		var me = this;
		var c1 = me.rgb;
		var c2 = color.rgb;
		var w2; // using instead of undefined in the next line
		var p = weight === w2 ? 0.5 : weight;
		var w = 2 * p - 1;
		var a = c1.a - c2.a;
		var w1 = ((w * a === -1 ? w : (w + a) / (1 + w * a)) + 1) / 2.0;
		w2 = 1 - w1;
		c1.r = 0xFF & w1 * c1.r + w2 * c2.r + 0.5;
		c1.g = 0xFF & w1 * c1.g + w2 * c2.g + 0.5;
		c1.b = 0xFF & w1 * c1.b + w2 * c2.b + 0.5;
		c1.a = p * c1.a + (1 - p) * c2.a;
		me.rgb = c1;
		return me;
	}

	clone() {
		return new Color(this.rgb);
	}

	alpha(a) {
		this._rgb.a = n2b(a);
		return this;
	}

	clearer(a) {
		var rgb = this._rgb;
		var old = rgb.a;
		rgb.a -= old * a;
		return this;
	}

	greyscale() {
		var rgb = this._rgb;
		// http://en.wikipedia.org/wiki/Grayscale#Converting_color_to_grayscale
		var val = round(rgb.r * 0.3 + rgb.g * 0.59 + rgb.b * 0.11);
		rgb.r = rgb.g = rgb.b = val;
		return this;
	}

	opaquer(a) {
		var rgb = this._rgb;
		var old = rgb.a;
		rgb.a += old * a;
		return this;
	}

	negate() {
		var v = this._rgb;
		v.r = 255 - v.r;
		v.g = 255 - v.g;
		v.b = 255 - v.b;
		return this;
	}

	lighten(ratio) {
		modHSL(this._rgb, 2, ratio);
		return this;
	}

	darken(ratio) {
		modHSL(this._rgb, 2, -ratio);
		return this;
	}

	saturate(ratio) {
		modHSL(this._rgb, 1, ratio);
		return this;
	}

	desaturate(ratio) {
		modHSL(this._rgb, 1, -ratio);
		return this;
	}

	rotate(deg) {
		rotate(this._rgb, deg);
		return this;
	}
}

var _color = Color;
Color = function(...args) {
	return new _color(...args);
};
export {Color as default};
