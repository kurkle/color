/**
 * @packageDocumentation
 * @module utils
 */

import {b2n, lim, p2b} from './byte.js';

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
    a = m[8] ? p2b(v) : lim(v * 255, 0, 255);
  }

  r = +m[1];
  g = +m[3];
  b = +m[5];
  r = 255 & (m[2] ? p2b(r) : lim(r, 0, 255));
  g = 255 & (m[4] ? p2b(g) : lim(g, 0, 255));
  b = 255 & (m[6] ? p2b(b) : lim(b, 0, 255));

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
