/**
 * @packageDocumentation
 * @module utils
 */

import {RGBA} from './color.js';

/**
 * @hidden
 */
const map: Record<string, number> = {
  0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9,
  A: 10, B: 11, C: 12, D: 13, E: 14, F: 15,
  a: 10, b: 11, c: 12, d: 13, e: 14, f: 15,
};

/**
 * @hidden
 */
const hex = [...'0123456789ABCDEF'];

/**
 * @param b - byte
 * @hidden
 */
const h1 = (b: number): string => hex[b & 0xF];

/**
 * @param b - byte
 * @hidden
 */
const h2 = (b: number): string => hex[(b & 0xF0) >> 4] + hex[b & 0xF];

/**
 * @param b - byte
 * @hidden
 */
const eq = (b: number): boolean => ((b & 0xF0) >> 4) === (b & 0xF);

/**
 * @param v - the color
 * @hidden
 */
const isShort = (v: RGBA): boolean => eq(v.r) && eq(v.g) && eq(v.b) && eq(v.a);

/**
 * Parse HEX to color
 * @param str - the string
 */
export function hexParse(str: string): RGBA | undefined {
  if (str[0] !== '#') {
    return; // undefined
  }
  const len = str.length;

  if (len === 4 || len === 5) {
    return {
      r: map[str[1]] << 4 | map[str[1]],
      g: map[str[2]] << 4 | map[str[2]],
      b: map[str[3]] << 4 | map[str[3]],
      a: len === 5 ? map[str[4]] << 4 | map[str[4]] : 255
    };
  }
  if (len === 7 || len === 9) {
    return {
      r: map[str[1]] << 4 | map[str[2]],
      g: map[str[3]] << 4 | map[str[4]],
      b: map[str[5]] << 4 | map[str[6]],
      a: len === 9 ? (map[str[7]] << 4 | map[str[8]]) : 255
    };
  }
}

const alpha = (a: number, f: (b: number) => string): string => a < 255 ? f(a) : '';

/**
 * Return HEX string from color
 * @param v - the color
 * @return {string|undefined}
 */
export function hexString(v: RGBA | undefined): string | undefined {
  const f = v && isShort(v) ? h1 : h2;
  return v
    ? '#' + f(v.r) + f(v.g) + f(v.b) + alpha(v.a, f)
    : undefined;
}
