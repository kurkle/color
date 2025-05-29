/**
 * @packageDocumentation
 * @module utils
 */

import {b2n, lim, p2b} from './byte.js';
import { RGBA } from './color.js';

/**
 * @hidden
 */
const RGB_RE = /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;

/**
 * Parse rgb(a) string to RGBA
 * @param str - the rgb string
 * @returns - the parsed color
 */
export function rgbParse(str: string): RGBA | undefined {
  const m = RGB_RE.exec(str);
  let a = 255;
  let r: number, g: number, b: number;

  if (!m) {
    return undefined;
  }

  // r is undefined
  if (m[7] !== undefined) {
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
 * @param v - the color
 */
export function rgbString(v: RGBA | undefined): string | undefined {
  return v && (
    v.a < 255
      ? `rgba(${v.r}, ${v.g}, ${v.b}, ${b2n(v.a)})`
      : `rgb(${v.r}, ${v.g}, ${v.b})`
  );
}
