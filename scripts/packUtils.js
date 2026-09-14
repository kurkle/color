/**
 * Main function to pack color names
 * @param {Object} colorNames - The color names to pack
 * @returns {string} - The packed string
 */
export function packColorNames(colorNames) {
  return Object.keys(colorNames)
    .map((name) => {
      const [r, g, b] = colorNames[name]
      const hex = ((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1)
      return `${name}${hex}`
    })
    .join(' ')
}

/**
 * Generate the TypeScript code for the packed.ts file
 * @param {string} packed - The packed color string
 * @returns {string} - The TypeScript code
 */
export function generateTypeScriptCode(packed) {
  return `/**
 * @packageDocumentation
 * @module utils
 *
 * @note this file is recreated during build.
 */

const names =
  '${packed}'

/**
 * Unpack color names
 * @returns Record of color names to RGB arrays
 */
export default function unpack(): Record<string, number[]> {
  const unpacked: Record<string, number[]> = {}
  for (const entry of names.split(' ')) {
    const k = parseInt(entry.slice(-6), 16)
    unpacked[entry.slice(0, -6)] = [(k >> 16) & 0xff, (k >> 8) & 0xff, k & 0xff]
  }
  return unpacked
}
`
}

/**
 * Unpack the color names from the packed string
 * @param {string} packed - The packed color string
 * @returns {Object} - The unpacked color names
 */
export function unpackColorNames(packed) {
  const unpacked = {}
  for (const entry of packed.split(' ')) {
    const k = parseInt(entry.slice(-6), 16)
    unpacked[entry.slice(0, -6)] = [(k >> 16) & 0xff, (k >> 8) & 0xff, k & 0xff]
  }
  return unpacked
}
