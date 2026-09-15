/**
 * @packageDocumentation
 * @module utils
 */

/**
 * Rounds decimal to nearest integer
 * @param v - the number to round
 */
export function round(v: number): number {
  return (v + 0.5) | 0
}

export const lim = (v: number, l: number, h: number): number => Math.max(Math.min(v, h), l)

/**
 * convert percent to byte 0..255
 * @param v - 0..100
 */
export function p2b(v: number): number {
  return lim(round(v * 2.55), 0, 255)
}

/**
 * convert byte to percet 0..100
 * @param v - 0..255
 */
export function b2p(v: number): number {
  return lim(round(v / 2.55), 0, 100)
}

/**
 * convert normalized to byte 0..255
 * @param v - 0..1
 */
export function n2b(v: number): number {
  return lim(round(v * 255), 0, 255)
}

/**
 * convert byte to normalized 0..1
 * @param v - 0..255
 */
export function b2n(v: number): number {
  return lim(round(v / 2.55) / 100, 0, 1)
}

/**
 * convert normalized to percent 0..100
 * @param v - 0..1
 */
export function n2p(v: number): number {
  return lim(round(v * 100), 0, 100)
}

/**
 * Convert the optional alpha capture of a color function to a byte.
 * `none` and a missing numeric value are 0, matching how browsers resolve
 * `none` in a color component; an absent capture is fully opaque.
 * @param value - the raw capture, or undefined when the function had no alpha
 * @param percent - truthy when the capture carried a `%`
 * @hidden
 */
export function parseAlpha(value: string | undefined, percent?: unknown): number {
  if (value === undefined) {
    return 255
  }
  const v = value === 'none' ? 0 : +value
  return percent ? p2b(v) : n2b(v)
}
