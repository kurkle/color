/**
 * @packageDocumentation
 * @module utils
 */

import type { RGBA } from './color.js'

import unpack from './packed.js'

let names: Record<string, number[]>

/**
 * Parse color name
 * @param str - the color name
 * @return - the color
 */
export function nameParse(str: string): RGBA | undefined {
  if (!names) {
    names = unpack()
    names.transparent = [0, 0, 0, 0]
  }
  const a = names[str.toLowerCase()]
  return (
    a && {
      a: a.length === 4 ? a[3] : 255,
      b: a[2],
      g: a[1],
      r: a[0],
    }
  )
}
