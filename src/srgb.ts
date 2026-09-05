/**
 * @packageDocumentation
 * @module utils
 */

import type { RGBA } from './color.js'

import { b2n, n2b } from './byte.js'

const to = (v: number): number => (v <= 0.0031308 ? v * 12.92 : v ** (1.0 / 2.4) * 1.055 - 0.055)
const from = (v: number): number => (v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4)

/**
 * @param rgb1 from color
 * @param rgb2 to color
 * @param t 0..1
 * @returns interpolaced
 */
export function interpolate(rgb1: RGBA, rgb2: RGBA, t: number): RGBA {
  const r = from(b2n(rgb1.r))
  const g = from(b2n(rgb1.g))
  const b = from(b2n(rgb1.b))
  return {
    a: rgb1.a + t * (rgb2.a - rgb1.a),
    b: n2b(to(b + t * (from(b2n(rgb2.b)) - b))),
    g: n2b(to(g + t * (from(b2n(rgb2.g)) - g))),
    r: n2b(to(r + t * (from(b2n(rgb2.r)) - r))),
  }
}
