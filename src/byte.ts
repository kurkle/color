/**
 * @packageDocumentation
 * @module utils
 */

/**
 * Rounds decimal to nearest integer
 * @param value - the number to round
 */
export function round(value: number): number {
  return (value + 0.5) | 0
}

export const lim = (value: number, min: number, max: number): number =>
  Math.max(Math.min(value, max), min)

/**
 * convert percent to byte 0..255
 * @param percent - 0..100
 */
export function p2b(percent: number): number {
  return lim(round(percent * 2.55), 0, 255)
}

/**
 * convert byte to percet 0..100
 * @param byte - 0..255
 */
export function b2p(byte: number): number {
  return lim(round(byte / 2.55), 0, 100)
}

/**
 * convert normalized to byte 0..255
 * @param ratio - 0..1
 */
export function n2b(ratio: number): number {
  return lim(round(ratio * 255), 0, 255)
}

/**
 * convert byte to normalized 0..1
 * @param byte - 0..255
 */
export function b2n(byte: number): number {
  return lim(round(byte / 2.55) / 100, 0, 1)
}

/**
 * convert normalized to percent 0..100
 * @param ratio - 0..1
 */
export function n2p(ratio: number): number {
  return lim(round(ratio * 100), 0, 100)
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
