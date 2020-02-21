/**
 * @packageDocumentation
 * @module helpers
 */

import {names} from '../packed';

/**
 * @typedef {import('./index.js').RGBA} RGBA
 */

names.transparent = [0, 0, 0, 0];

/**
 * Parse color name
 * @param {string} str - the color name
 * @return {RGBA} - the color
 */
export function nameParse(str) {
	var a = names[str];
	return a && {
		r: a[0],
		g: a[1],
		b: a[2],
		a: a.length === 4 ? a[3] : 255
	};
}
