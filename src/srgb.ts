/**
 * @packageDocumentation
 * @module utils
 */

import type { RGBA } from './color.js'

import { b2n, n2b } from './byte.js'

/**
 * Convert a linear-light sRGB component (0..1) to a gamma-encoded sRGB component (0..1)
 * @param linear - linear-light 0..1
 */
export function linear2srgb(linear: number): number {
  return linear <= 0.0031308 ? linear * 12.92 : linear ** (1.0 / 2.4) * 1.055 - 0.055
}

/**
 * Convert a gamma-encoded sRGB component (0..1) to a linear-light sRGB component (0..1)
 * @param srgb - gamma-encoded 0..1
 */
export function srgb2linear(srgb: number): number {
  return srgb <= 0.04045 ? srgb / 12.92 : ((srgb + 0.055) / 1.055) ** 2.4
}

/**
 * @param from from color
 * @param to to color
 * @param t 0..1
 * @returns interpolated
 */
export function interpolate(from: RGBA, to: RGBA, t: number): RGBA {
  const r = srgb2linear(b2n(from.r))
  const g = srgb2linear(b2n(from.g))
  const b = srgb2linear(b2n(from.b))
  return {
    a: from.a + t * (to.a - from.a),
    b: n2b(linear2srgb(b + t * (srgb2linear(b2n(to.b)) - b))),
    g: n2b(linear2srgb(g + t * (srgb2linear(b2n(to.g)) - g))),
    r: n2b(linear2srgb(r + t * (srgb2linear(b2n(to.r)) - r))),
  }
}
