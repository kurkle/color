import { hexParse, hexString } from './hex';
import { rgbParse, rgb2hsl, rgbString } from './rgb';
import { hueParse, hsl2rgb } from './hue';
import { nameParse } from './names';

function modHSL(v, i, ratio) {
	var tmp = rgb2hsl(v);
	tmp[i] += tmp[i] * ratio;
	tmp = hsl2rgb(tmp);
	v.r = tmp[0];
	v.g = tmp[1];
	v.b = tmp[2];
}

class Color {
	constructor(obj) {
		if (obj instanceof Color) {
			return obj;
		}
		var v;
		var type = typeof obj;
		if (type === 'object') {
			v = {
				r: obj.r || 0,
				g: obj.g || 0,
				b: obj.b || 0,
				a: obj.a === 0 ? 0 : obj.a || 255
			};
		} else if (type === 'string') {
			v = hexParse(obj)
			|| nameParse(obj)
			|| rgbParse(obj)
			|| hueParse(obj);
		}
		this.value = v;
		this.valid = !!v;
	}

	get isValid() {
		return this.valid;
	}

	rgbString() {
		return rgbString(this.value);
	}

	hexString() {
		return hexString(this.value);
	}

	mix(color, weight) {
		var c1 = this.value;
		var c2 = color.value;
		var p = weight === undefined ? 0.5 : weight;
		var w = 2 * p - 1;
		var a = (c1.a - c2.a) / 255;
		var w1 = ((w * a === -1 ? w : (w + a) / (1 + w * a)) + 1) / 2.0;
		var w2 = 1 - w1;
		c1.r = 0xFF & w1 * c1.r + w2 * c2.r;
		c1.g = 0xFF & w1 * c1.g + w2 * c2.g;
		c1.b = 0xFF & w1 * c1.b + w2 * c2.b;
		c1.a = 0xFF & w1 * c1.a + w2 * c2.a;
		return this;
	}

	clone() {
		return new Color(this.value);
	}

	negate() {
		var v = this.value;
		v.r = 255 - v.r;
		v.g = 255 - v.g;
		v.b = 255 - v.b;
		return this;
	}

	lighten(ratio) {
		modHSL(this.value, 2, ratio);
	}

	darken(ratio) {
		modHSL(this.value, 2, -ratio);
	}

	saturate(ratio) {
		modHSL(this.value, 1, ratio);
		return this;
	}

	desaturate(ratio) {
		modHSL(this.value, 1, -ratio);
		return this;
	}

}

export { Color as default };
