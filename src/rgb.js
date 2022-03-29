/**
 * @packageDocumentation
 * @module utils
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

/**
 * Mix rgb2 to rgb1 by percent ratio (in place).
 * @param {RGBA} rgb1 - the color (also the return value)
 * @param {RGBA} rgb2 - the mixed color
 * @param {number} t - 0..1 (default 0.5)
 */
export function rgbMix(rgb1, rgb2, t = 0.5) {
  t = 1 - t;
  rgb1.r = 0xFF & rgb1.r + t * (rgb2.r - rgb1.r) + 0.5;
  rgb1.g = 0xFF & rgb1.g + t * (rgb2.g - rgb1.g) + 0.5;
  rgb1.b = 0xFF & rgb1.b + t * (rgb2.b - rgb1.b) + 0.5;
  rgb1.a = rgb1.a + t * (rgb2.a - rgb1.a);
}
