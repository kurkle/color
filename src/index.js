import { hexParse, hexString } from './hex';
import { rgbParse, rgbString } from './rgb';
import { hueParse, hsl2rgb, rgb2hsl, rotate, hslString } from './hue';
import { nameParse } from './names';
import { b2n, n2b } from './byte';

function modHSL(v, i, ratio) {
	var tmp = rgb2hsl(v);
	tmp[i] += tmp[i] * ratio;
	tmp = hsl2rgb(tmp);
	v.r = tmp[0];
	v.g = tmp[1];
	v.b = tmp[2];
}

function clone(v) {
	return v ? Object.assign({}, v) : v;
}

class Color {
	constructor(obj) {
		if (obj instanceof Color) {
			return obj;
		}
		var v;
		var type = typeof obj;
		if (type === 'object') {
			v = clone(obj);
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
		var n = clone(obj);
		n.a = n2b(n.a);
		this._rgb = n;
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
		return new Color(this._rgb);
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

export { Color as default };
