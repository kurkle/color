//var colorNames = require('color-name');
var colorNames = require('../packed');

colorNames['transparent'] = [0, 0, 0, 0];

var undef = undefined;

const hexMap = {
	'0': 0, '1': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7,
	'8': 8, '9': 9, 'A': 10, 'B': 11, 'C': 12, 'D': 13, 'E': 14, 'F': 15,
	'a': 10, 'b': 11, 'c': 12, 'd': 13, 'e': 14, 'f': 15
};

// https://jsfiddle.net/Lamik/reuk63ay/91
function hslToRgb(h, s, l) {
	var a = s * Math.min(l, 1 - l);
	function f(n) {
		k = (n + h / 30) % 12;
		return l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
	}
	return [f(0), f(8), f(4)];
}

function hwbToRgb(h, w, b) {
	var rgb = hslToRgb(h, 1, .5);
	var i;
	if (w + b > 1) {
		i = 1 / (w + b);
		w *= i;
		b *= i;
	}
	for (i = 0; i < 3; i++) {
		rgb[i] *= 1 - w - b;
		rgb[i] += w;
	}
	return rgb;
}

function rgbToHSL(r, g, b) {
	r /= 255.0;
	g /= 255.0;
	b /= 255.0;
	var max = Math.max(r, g, b);
	var min = Math.min(r, g, b);
	var l = (max + min) / 2;
	var h, s, d;

	if (max !== min) {
		d = max - min;

		s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
		h = max === r
			? (g - b) / d + (g < b ? 6 : 0)
			: max === g
				? (b - r) / d + 2
				: (r - g) / d + 4;
		h /= 6;
	}

	return [h || 0, s || 0, l];
}

function ntor(v) {
	return 0xFF & v * 255 + 0.5;
}

function parse(str) {
	if (!str) {
		return;
	}
	var len = str.length;
	var ret = {r: 0, g: 0, b: 0, a: 1};
	var v;

	if (str[0] === '#' && (len === 4 || len === 5 || len === 7 || len === 9)) {
		switch (len) {
			case 5:
				ret.a = (hexMap[str[4]] / 15 * 100 + 0.5 | 0) / 100;
				// falls through
			case 4:
				ret.r = 0xFF & hexMap[str[1]] * 17;
				ret.g = 0xFF & hexMap[str[2]] * 17;
				ret.b = 0xFF & hexMap[str[3]] * 17;
				break;
			case 9:
				ret.a = ((hexMap[str[7]] << 4 | hexMap[str[8]]) / 255 * 1000 | 0) / 1000;
				// falls through
			case 7:
				ret.r = 0xFF & (hexMap[str[1]] << 4 | hexMap[str[2]]);
				ret.g = 0xFF & (hexMap[str[3]] << 4 | hexMap[str[4]]);
				ret.b = 0xFF & (hexMap[str[5]] << 4 | hexMap[str[6]]);
				break;
		}
	} else if ((m = /^rgba?\(\s*([+-]?[\d\.]+)(%)?[\s,]+([+-]?[\d\.]+)(%)?[\s,]+([+-]?[\d\.]+)(%)?\s*(?:[\s,/]+([+-]?[\d\.]+)(%)?\s*)?\)$/.exec(str)) !== null) {
		ret.r = 0xFF & (m[2] ? m[1] * 2.55 + 0.5 : m[1]);
		ret.g = 0xFF & (m[4] ? m[3] * 2.55 + 0.5 : m[3]);
		ret.b = 0xFF & (m[6] ? m[5] * 2.55 + 0.5 : m[5]);
		if (m[7] !== undef) {
			ret.a = m[8] ? (m[7] | 0) / 100 : +m[7];
		}
	} else if ((m = /^(hsla?|hwb)\(\s*([+-]?\d+)(?:deg)?[\s,]+([+-]?[\d\.]+)%[\s,]+([+-]?[\d\.]+)%\s*(?:[\s,]+([+-]?[\d\.]+)\s*)?\)/.exec(str)) !== null) {
		if (m[1] === 'hwb') {
			v = hwbToRgb((m[2] % 360 + 360) % 360, m[3] / 100, m[4] / 100);
		} else {
			v = hslToRgb((m[2] % 360 + 360) % 360, m[3] / 100, m[4] / 100);
		}
		ret.r = ntor(v[0]);
		ret.g = ntor(v[1]);
		ret.b = ntor(v[2]);
		if (m[5] !== undef) {
			ret.a = +m[5];
		}
	} else {
		if ((ret = colorNames[str]) !== undef) {
			ret = {r: ret[0], g: ret[1], b: ret[2], a: ret.length === 4 ? ret[3] : 1};
		}
	}

	if (ret) {
		if (ret.a > 1)
			ret.a = 1;
		if (ret.a < 0)
			ret.a = 0;
	}
	return ret;
}

function setRGB(v, rgb) {
	v.r = ntor(rgb[0]);
	v.g = ntor(rgb[1]);
	v.b = ntor(rgb[2]);
}

function modL(v, ratio) {
	var hsl = rgbToHSL(v.r, v.g, v.b);
	hsl[2] += hsl[2] * ratio;
	setRGB(v, hslToRgb(hsl[0], hsl[1], hsl[2]));
}

function modS(v, ratio) {
	var hsl = rgbToHSL(v.r, v.g, v.b);
	hsl[1] += hsl[1] * ratio;
	setRGB(v, hslToRgb(hsl[0], hsl[1], hsl[2]));
}

function h2(v) {
	var s = v.toString(16).toUpperCase();
	return s.length < 2 ? `0${s}` : s;
}

var Color = function(obj) {
	var v = {};

	if (obj instanceof Color) {
		return obj;
	}

	if (typeof obj === "object") {
		v.r = obj.r || 0;
		v.g = obj.g || 0;
		v.b = obj.b || 0;
		v.a = obj.a === 0 ? 0 : obj.a || 1;
	} else {
		v = parse(obj);
	}

	this.value = v;
	this.valid = !!v;
};

Color.prototype = {
	isValid: function() {
		return this.valid;
	},

	rgbString: function() {
		var v = this.value;
		return v.a < 1
			? `rgba(${v.r}, ${v.g}, ${v.b}, ${v.a})`
			: `rgb(${v.r}, ${v.g}, ${v.b})`;
	},

	hexString: function() {
		var v = this.value;
		return '#' + h2(v.r) + h2(v.g) + h2(v.b) + (v.a < 1 ? h2(v.a * 255 + 0.5 | 0) : '');
	},

	mix: function(color, weight) {
		var c1 = this.value;
		var c2 = color.value;
		var p = weight === undef ? 0.5 : weight;
		var w = 2 * p - 1;
		var a = c1.a - c2.a;
		var w1 = ((w * a === -1 ? w : (w + a) / (1 + w * a)) + 1) / 2.0;
		var w2 = 1 - w1;
		c1.r = 0xFF & w1 * c1.r + w2 * c2.r;
		c1.g = 0xFF & w1 * c1.g + w2 * c2.g;
		c1.b = 0xFF & w1 * c1.b + w2 * c2.b;
		c1.a = p * c1.a + (1 - p) * c2.a;
		return this;
	},

	clone: function() {
		return new Color(this.value);
	},

	negate: function() {
		var v = this.value;
		v.r = 255 - v.r;
		v.g = 255 - v.g;
		v.b = 255 - v.b;
		return this;
	},

	lighten: function(ratio) {
		modL(this.value, ratio);
	},

	darken: function(ratio) {
		modL(this.value, -ratio);
	},

	saturate: function(ratio) {
		modS(this.value, ratio);
		return this;
	},

	desaturate: function(ratio) {
		modS(this.value, -ratio);
		return this;
	}

};

module.exports = Color;
