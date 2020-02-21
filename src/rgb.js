/**
 * @packageDocumentation
 * @module helpers
 */

import {p2b, b2n} from './byte';

/**
 * @typedef {import('./index.js').RGBA} RGBA
 */

/**
 * @hidden
 */
const RGB_RE = /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;

/**
 * Parse rgb(a) string to RGBA
 * @param {string} str - the rgb string
 * @returns {RGBA} - the parsed color
 */
export function rgbParse(str) {
	const m = RGB_RE.exec(str);
	let a = 255;
	let r, g, b;

	if (!m) {
		return;
	}

	// r is undefined
	if (m[7] !== r) {
		const v = +m[7];
		a = 255 & (m[8] ? p2b(v) : v * 255);
	}

	r = +m[1];
	g = +m[3];
	b = +m[5];
	r = 255 & (m[2] ? p2b(r) : r);
	g = 255 & (m[4] ? p2b(g) : g);
	b = 255 & (m[6] ? p2b(b) : b);

	return {
		r: r,
		g: g,
		b: b,
		a: a
	};
}

/**
 * Return rgb(a) string from color
 * @param {RGBA} v - the color
 */
export function rgbString(v) {
	return v && (
		v.a < 255
			? `rgba(${v.r}, ${v.g}, ${v.b}, ${b2n(v.a)})`
			: `rgb(${v.r}, ${v.g}, ${v.b})`
	);
}
