/**
 * @packageDocumentation
 * @module utils
 */

import unpack from '../packed.js';
let names;

/**
 * @typedef {import('./index.js').RGBA} RGBA
 */

/**
 * Parse color name
 * @param {string} str - the color name
 * @return {RGBA} - the color
 */
export function nameParse(str) {
  if (!names) {
    names = unpack();
    names.transparent = [0, 0, 0, 0];
  }
  const a = names[str.toLowerCase()];
  return a && {
    r: a[0],
    g: a[1],
    b: a[2],
    a: a.length === 4 ? a[3] : 255
  };
}
