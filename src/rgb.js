import {p2b, b2n} from './byte';

// eslint-disable-next-line no-useless-escape
const RGB_RE = /^rgba?\(\s*([+-]?[\d\.]+)(%)?[\s,]+([+-]?[\d\.]+)(%)?[\s,]+([+-]?[\d\.]+)(%)?\s*(?:[\s,/]+([+-]?[\d\.]+)(%)?\s*)?\)$/;

export function rgbParse(str) {
	var m = RGB_RE.exec(str);
	var a = 255;
	var r, g, b;

	if (!m) {
		// r is undefined
		return r;
	}

	// r is undefined
	if (m[7] !== r) {
		a = 255 & (m[8] ? p2b(m[7]) : m[7] * 255);
	}

	r = 255 & (m[2] ? p2b(m[1]) : m[1]);
	g = 255 & (m[4] ? p2b(m[3]) : m[3]);
	b = 255 & (m[6] ? p2b(m[5]) : m[5]);

	return {
		r: r,
		g: g,
		b: b,
		a: a
	};
}

export function rgbString(v) {
	return v.a < 255
		? `rgba(${v.r}, ${v.g}, ${v.b}, ${b2n(v.a)})`
		: `rgb(${v.r}, ${v.g}, ${v.b})`;
}
