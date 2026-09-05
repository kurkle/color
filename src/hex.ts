/**
 * @packageDocumentation
 * @module utils
 */

import type { RGBA } from './color.js'

/**
 * @hidden
 */
const map: Record<string, number> = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  A: 10,
  a: 10,
  B: 11,
  b: 11,
  C: 12,
  c: 12,
  D: 13,
  d: 13,
  E: 14,
  e: 14,
  F: 15,
  f: 15,
}

/**
 * @hidden
 */
const hex = [...'0123456789ABCDEF']

/**
 * @param b - byte
 * @hidden
 */
const h1 = (b: number): string => hex[b & 0xf]

/**
 * @param b - byte
 * @hidden
 */
const h2 = (b: number): string => hex[(b & 0xf0) >> 4] + hex[b & 0xf]

/**
 * @param b - byte
 * @hidden
 */
const eq = (b: number): boolean => (b & 0xf0) >> 4 === (b & 0xf)

/**
 * @param v - the color
 * @hidden
 */
const isShort = (v: RGBA): boolean => eq(v.r) && eq(v.g) && eq(v.b) && eq(v.a)

/**
 * Parse HEX to color
 * @param str - the string
 */
export function hexParse(str: string): RGBA | undefined {
  if (str[0] !== '#') {
    return // undefined
  }
  const len = str.length

  if (len === 4 || len === 5) {
    return {
      a: len === 5 ? (map[str[4]] << 4) | map[str[4]] : 255,
      b: (map[str[3]] << 4) | map[str[3]],
      g: (map[str[2]] << 4) | map[str[2]],
      r: (map[str[1]] << 4) | map[str[1]],
    }
  }
  if (len === 7 || len === 9) {
    return {
      a: len === 9 ? (map[str[7]] << 4) | map[str[8]] : 255,
      b: (map[str[5]] << 4) | map[str[6]],
      g: (map[str[3]] << 4) | map[str[4]],
      r: (map[str[1]] << 4) | map[str[2]],
    }
  }
}

const alpha = (a: number, f: (b: number) => string): string => (a < 255 ? f(a) : '')

/**
 * Return HEX string from color
 * @param v - the color
 * @return {string|undefined}
 */
export function hexString(v: RGBA | undefined): string | undefined {
  const f = v && isShort(v) ? h1 : h2
  return v ? `#${f(v.r)}${f(v.g)}${f(v.b)}${alpha(v.a, f)}` : undefined
}
