/**
 * @packageDocumentation
 * @module utils
 */

import {RGBA} from './color.js';

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
 * @hidden
 */
const singleToDouble = (digit: number): number => (digit << 4) + digit;

/**
 * Parse HEX to color
 * @param str - the string
 */
export function hexParse(str: string): RGBA | undefined {
  if (!str.startsWith('#')) {
    return; // undefined
  }

  const v = parseInt(str.slice(1), 16);
  const len = str.length - 1;
  switch (len) {
  case 3: return {
    r: singleToDouble((v & 0xf00) >> 8),
    g: singleToDouble((v & 0xf0) >> 4),
    b: singleToDouble((v & 0xf)),
    a: 255,
  };
  case 4: return {
    r: singleToDouble((v & 0xf000) >> 12),
    g: singleToDouble((v & 0xf00) >> 8),
    b: singleToDouble((v & 0xf0) >> 4),
    a: singleToDouble(v & 0xf),
  };
  case 6: return {
    r: (v & 0xff0000) >> 16,
    g: (v & 0xff00) >> 8,
    b: (v & 0xff),
    a: 255,
  };
  case 8: return {
    r: (v & 0xff000000) >>> 24,
    g: (v & 0xff0000) >> 16,
    b: (v & 0xff00) >> 8,
    a: v & 0xff
  };
  default: return;
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
