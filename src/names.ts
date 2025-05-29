/**
 * @packageDocumentation
 * @module utils
 */

import unpack from './packed.js';
import {RGBA} from './color.js';

let names: Record<string, number[]>;

/**
 * Parse color name
 * @param str - the color name
 * @return - the color
 */
export function nameParse(str: string): RGBA | undefined {
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
