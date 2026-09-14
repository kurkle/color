import names from 'color-name'
import { describe, expect, it } from 'vitest'

import { generateTypeScriptCode, packColorNames, unpackColorNames } from '../scripts/packUtils.js'

describe('Color name packing utilities', () => {
  // Pack the color names
  const packed = packColorNames(names)

  // Unpack the color names
  const unpacked = unpackColorNames(packed)

  it('should pack and unpack all original color names', () => {
    // Get the original color names
    const originalNames = Object.keys(names)
    const unpackedNames = Object.keys(unpacked)

    // Check that all original color names are present in the unpacked result
    expect(unpackedNames.length).toBe(originalNames.length)

    // Check that each original color name exists in the unpacked result
    for (const name of originalNames) {
      expect(unpackedNames).toContain(name)
    }
  })

  it('should preserve the correct RGB values for each color', () => {
    // Check that each color has the correct RGB values
    for (const name of Object.keys(names)) {
      const originalRgb = names[name]
      const unpackedRgb = unpacked[name]

      expect(unpackedRgb).toEqual(originalRgb)
    }
  })

  it('should handle edge cases correctly', () => {
    // Test colors with extreme RGB values
    const edgeCases = [
      'white', // [255, 255, 255]
      'black', // [0, 0, 0]
      'red', // [255, 0, 0]
      'lime', // [0, 255, 0]
      'blue', // [0, 0, 255]
      'magenta', // [255, 0, 255]
      'cyan', // [0, 255, 255]
      'yellow', // [255, 255, 0]
    ]

    for (const name of edgeCases) {
      const originalRgb = names[name]
      const unpackedRgb = unpacked[name]

      expect(unpackedRgb).toEqual(originalRgb)
    }
  })

  it('should format the packed string as space-separated name+hex entries', () => {
    // Check that the packed string has exactly one entry per color name
    const entries = packed.split(' ')
    expect(entries.length).toBe(Object.keys(names).length)

    // Check that each entry ends with six lowercase hex digits
    for (const entry of entries) {
      expect(entry).toMatch(/[0-9a-f]{6}$/)
    }
  })

  it('should generate TypeScript code containing the packed string and the unpack function', () => {
    const code = generateTypeScriptCode(packed)

    expect(code).toContain(packed)
    expect(code).toContain('export default function unpack')
  })
})
