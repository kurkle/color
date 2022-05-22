/**
 * @packageDocumentation
 * @module utils
 */

/**
 * Rounds decimal to nearest integer
 * @param {number} v - the number to round
 */
export function round(v) {
  return v + 0.5 | 0;
}

export const lim = (v, l, h) => Math.max(Math.min(v, h), l);

/**
 * convert percent to byte 0..255
 * @param {number} v - 0..100
 */
export function p2b(v) {
  return lim(round(v * 2.55), 0, 255);
}

/**
 * convert byte to percet 0..100
 * @param {number} v - 0..255
 */
export function b2p(v) {
  return lim(round(v / 2.55), 0, 100);
}

/**
 * convert normalized to byte 0..255
 * @param {number} v - 0..1
 */
export function n2b(v) {
  return lim(round(v * 255), 0, 255);
}

/**
 * convert byte to normalized 0..1
 * @param {number} v - 0..255
 */
export function b2n(v) {
  return lim(round(v / 2.55) / 100, 0, 1);
}

/**
 * convert normalized to percent 0..100
 * @param {number} v - 0..1
 */
export function n2p(v) {
  return lim(round(v * 100), 0, 100);
}
