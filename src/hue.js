/**
 * @packageDocumentation
 * @module Index
 */

import {b2n, n2p, n2b} from './byte';

/**
 * @typedef {import('./index.js').RGBA} RGBA
 */

/**
 * @private
 */
const HUE_RE = /^(hsla?|hwb|hsv)\(\s*([+-]?\d+)(?:deg)?[\s,]+([+-]?[\d\.]+)%[\s,]+([+-]?[\d\.]+)%\s*(?:[\s,]+([+-]?[\d\.]+)\s*)?\)/; // eslint-disable-line no-useless-escape

// https://jsfiddle.net/Lamik/reuk63ay/91
function hsl2rgbn(h, s, l) {
	let a = s * Math.min(l, 1 - l);
	let f = (n, k = (n + h / 30) % 12) => l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
	return [f(0), f(8), f(4)];
}

// https://jsfiddle.net/Lamik/Lr61wqub/15/
function hsv2rgbn(h, s, v) {
	let f = (n, k = (n + h / 60) % 6) => v - v * s * Math.max(Math.min(k, 4 - k, 1), 0);
	return [f(5), f(3), f(1)];
}

function hwb2rgbn(h, w, b) {
	var rgb = hsl2rgbn(h, 1, 0.5);
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

export function rgb2hsl(v) {
	var range = 255;
	var r = v.r / range;
	var g = v.g / range;
	var b = v.b / range;
	var max = Math.max(r, g, b);
	var min = Math.min(r, g, b);
	var l = (max + min) / 2;
	var h, s, d;
	if (max !== min) {
		d = max - min;
		s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
		h = max === r
			? ((g - b) / d) + (g < b ? 6 : 0)
			: max === g
				? (b - r) / d + 2
				: (r - g) / d + 4;
		h = h * 60 + 0.5;
	}
	return [h | 0, s || 0, l];
}

function calln(f, a, b, c) {
	return (
		Array.isArray(a)
			? f(a[0], a[1], a[2])
			: f(a, b, c)
	).map(n2b);
}

export function hsl2rgb(h, s, l) {
	return calln(hsl2rgbn, h, s, l);
}

export function hwb2rgb(h, w, b) {
	return calln(hwb2rgbn, h, w, b);
}

export function hsv2rgb(h, w, b) {
	return calln(hsv2rgbn, h, w, b);
}

function hue(h) {
	return h < 0
		? h % 360 + 360
		: h % 360;
}

/**
 * Parse hsl/hsv/hwb color string
 * @param {string} str - hsl/hsv/hwb color string
 * @returns {RGBA} - the parsed color components
 */
export function hueParse(str) {
	const m = HUE_RE.exec(str);
	let a = 255;
	let v;
	if (!m) {
		return;
	}
	// v is undefined
	if (m[5] !== v) {
		a = n2b(+m[5]);
	}
	const h = hue(+m[2]);
	const p1 = +m[3] / 100;
	const p2 = +m[4] / 100;
	if (m[1] === 'hwb') {
		v = hwb2rgb(h, p1, p2);
	} else if (m[1] === 'hsv') {
		v = hsv2rgb(h, p1, p2);
	} else {
		v = hsl2rgb(h, p1, p2);
	}
	return {
		r: v[0],
		g: v[1],
		b: v[2],
		a: a
	};
}

/**
 * Rotate the `v` color by `deg` degrees
 * @param {RGBA} v - the color
 * @param {number} deg - degrees to rotate
 */
export function rotate(v, deg) {
	var h = rgb2hsl(v);
	h[0] = hue(h[0] + deg);
	h = hsl2rgb(h);
	v.r = h[0];
	v.g = h[1];
	v.b = h[2];
}

/**
 * Return hsl(a) string from color components
 * @param {RGBA} v - the color
 */
export function hslString(v) {
	const a = rgb2hsl(v);
	const h = n2p(a[0]);
	const s = n2p(a[1]);
	const l = n2p(a[2]);
	return v.a < 255
		? `hsla(${h}, ${s}%, ${l}%, ${b2n(v.a)})`
		: `hsl(${h}, ${s}%, ${l}%)`;
}
