/**
 * @packageDocumentation
 * @module index
 */

import type { RGBA } from './color.js'

import Color from './color.js'

export type { RGBA }

export * from './byte.js'
export * from './hex.js'
export * from './hue.js'
export * from './names.js'
export * from './oklch.js'
export * from './rgb.js'
export * from './srgb.js'
export { Color }

/**
 * Construct new Color instance
 * @param input
 */
export default function (input: Color | RGBA | string | number[]): Color {
  return new Color(input)
}
