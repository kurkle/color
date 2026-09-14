/**
 * @packageDocumentation
 * @module utils
 */

import type { RGBA } from './color.js'

import { b2n, n2b } from './byte.js'

/**
 * Convert a linear-light sRGB component (0..1) to a gamma-encoded sRGB component (0..1)
 * @param v - linear-light 0..1
 */
export function linear2srgb(v: number): number {
  return v <= 0.0031308 ? v * 12.92 : v ** (1.0 / 2.4) * 1.055 - 0.055
}

/**
 * Convert a gamma-encoded sRGB component (0..1) to a linear-light sRGB component (0..1)
 * @param v - gamma-encoded 0..1
 */
export function srgb2linear(v: number): number {
  return v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4
}

/**
 * @param rgb1 from color
 * @param rgb2 to color
 * @param t 0..1
 * @returns interpolaced
 */
export function interpolate(rgb1: RGBA, rgb2: RGBA, t: number): RGBA {
  const r = srgb2linear(b2n(rgb1.r))
  const g = srgb2linear(b2n(rgb1.g))
  const b = srgb2linear(b2n(rgb1.b))
  return {
    a: rgb1.a + t * (rgb2.a - rgb1.a),
    b: n2b(linear2srgb(b + t * (srgb2linear(b2n(rgb2.b)) - b))),
    g: n2b(linear2srgb(g + t * (srgb2linear(b2n(rgb2.g)) - g))),
    r: n2b(linear2srgb(r + t * (srgb2linear(b2n(rgb2.r)) - r))),
  }
}
