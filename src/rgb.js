// eslint-disable-next-line no-useless-escape
const RGB_RE = /^rgba?\(\s*([+-]?[\d\.]+)(%)?[\s,]+([+-]?[\d\.]+)(%)?[\s,]+([+-]?[\d\.]+)(%)?\s*(?:[\s,/]+([+-]?[\d\.]+)(%)?\s*)?\)$/;

export function rgbParse(str) {
	var m = RGB_RE.exec(str);
	var a = 1;
	var r, g, b;

	if (!m) {
		// r is undefined
		return r;
	}

	// r is undefined
	if (m[7] !== r) {
		a = m[8] ? (m[7] | 0) / 100 : +m[7];
	}

	r = 255 & (m[2] ? m[1] * 2.55 + 0.5 : m[1]);
	g = 255 & (m[4] ? m[3] * 2.55 + 0.5 : m[3]);
	b = 255 & (m[6] ? m[5] * 2.55 + 0.5 : m[5]);

	return {
		r: r,
		g: g,
		b: b,
		a: a
	};
}

export function rgb2hsl(v) {
	var r = v.r / 255;
	var g = v.g / 255;
	var b = v.b / 255;
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
