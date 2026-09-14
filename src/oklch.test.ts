import type { RGBA } from './color.js'

import { describe, expect, it } from 'vitest'

import { oklch2rgb, oklchParse, oklchString, rgb2oklch } from './oklch.js'

describe('oklch.ts', () => {
  describe('rgb2oklch', () => {
    it('should convert RGB to OKLCH correctly', () => {
      const red = rgb2oklch({ a: 255, b: 0, g: 0, r: 255 })
      expect(red[0]).toBeCloseTo(0.628, 3)
      expect(red[1]).toBeCloseTo(0.2577, 3)
      expect(red[2]).toBeCloseTo(29.23, 2)

      const green = rgb2oklch({ a: 255, b: 0, g: 255, r: 0 })
      expect(green[0]).toBeCloseTo(0.8664, 3)
      expect(green[1]).toBeCloseTo(0.2948, 3)
      expect(green[2]).toBeCloseTo(142.5, 1)

      const blue = rgb2oklch({ a: 255, b: 255, g: 0, r: 0 })
      expect(blue[0]).toBeCloseTo(0.452, 3)
      expect(blue[1]).toBeCloseTo(0.3132, 3)
      expect(blue[2]).toBeCloseTo(264.05, 2)

      const white = rgb2oklch({ a: 255, b: 255, g: 255, r: 255 })
      expect(white[0]).toBeCloseTo(1, 3)
      expect(white[1]).toBeCloseTo(0, 3)

      const black = rgb2oklch({ a: 255, b: 0, g: 0, r: 0 })
      expect(black).toEqual([0, 0, 0])
    })

    it('should treat grey as achromatic with H = 0', () => {
      const grey = rgb2oklch({ a: 255, b: 128, g: 128, r: 128 })
      expect(grey[1]).toBeCloseTo(0, 3)
      expect(grey[2]).toBe(0)
    })

    it('should not be affected by alpha', () => {
      const opaque = rgb2oklch({ a: 255, b: 0, g: 0, r: 255 })
      const transparent = rgb2oklch({ a: 0, b: 0, g: 0, r: 255 })
      expect(transparent).toEqual(opaque)
    })
  })

  describe('oklch2rgb', () => {
    it('should accept array input equal to positional input', () => {
      expect(oklch2rgb([0.7, 0.15, 200])).toEqual(oklch2rgb(0.7, 0.15, 200))
    })

    it('should round-trip the sRGB corners exactly', () => {
      expect(oklch2rgb(rgb2oklch({ a: 255, b: 0, g: 0, r: 0 }))).toEqual([0, 0, 0])
      expect(oklch2rgb(rgb2oklch({ a: 255, b: 255, g: 255, r: 255 }))).toEqual([255, 255, 255])
      expect(oklch2rgb(rgb2oklch({ a: 255, b: 0, g: 0, r: 255 }))).toEqual([255, 0, 0])
      expect(oklch2rgb(rgb2oklch({ a: 255, b: 0, g: 255, r: 0 }))).toEqual([0, 255, 0])
      expect(oklch2rgb(rgb2oklch({ a: 255, b: 255, g: 0, r: 0 }))).toEqual([0, 0, 255])
    })

    it('should round-trip every rgb value exactly (stride 5)', () => {
      let mismatches = 0
      for (let r = 0; r <= 255; r += 5) {
        for (let g = 0; g <= 255; g += 5) {
          for (let b = 0; b <= 255; b += 5) {
            const rgb = oklch2rgb(rgb2oklch({ a: 255, b, g, r }))
            if (rgb[0] !== r || rgb[1] !== g || rgb[2] !== b) {
              mismatches++
            }
          }
        }
      }
      expect(mismatches).toBe(0)
    })

    it('should round-trip through the string form within +/-1 per channel', () => {
      let maxDiff = 0
      for (let r = 0; r <= 255; r += 5) {
        for (let g = 0; g <= 255; g += 5) {
          for (let b = 0; b <= 255; b += 5) {
            const str = oklchString({ a: 255, b, g, r })
            const back = oklchParse(str as string) as RGBA
            maxDiff = Math.max(
              maxDiff,
              Math.abs(back.r - r),
              Math.abs(back.g - g),
              Math.abs(back.b - b)
            )
          }
        }
      }
      expect(maxDiff).toBeLessThanOrEqual(1)
    })
  })

  describe('oklchParse', () => {
    it('should parse numeric L, C and H', () => {
      expect(oklchParse('oklch(0.7 0.15 200)')).toEqual({ a: 255, b: 195, g: 185, r: 0 })
    })

    it('should parse percent L the same as a number', () => {
      expect(oklchParse('oklch(70% 0.15 200)')).toEqual({ a: 255, b: 195, g: 185, r: 0 })
    })

    it('should parse percent C as a percentage of 0.4', () => {
      expect(oklchParse('oklch(0.7 50% 200)')).toEqual({ a: 255, b: 207, g: 192, r: 0 })
    })

    it('should parse an explicit deg unit on H', () => {
      expect(oklchParse('oklch(0.7 0.15 200deg)')).toMatchObject({ b: 195, g: 185, r: 0 })
    })

    it('should parse alpha as a number', () => {
      expect(oklchParse('oklch(0.7 0.15 200 / 0.5)')).toMatchObject({
        a: 128,
        b: 195,
        g: 185,
        r: 0,
      })
    })

    it('should parse alpha as a percent', () => {
      // 50% of 255 rounds down to 127 with this codebase's p2b (see byte.test.ts)
      expect(oklchParse('oklch(0.7 0.15 200 / 50%)')).toMatchObject({ a: 127 })
      expect(oklchParse('oklch(0.7 0.15 200/0.5)')).toMatchObject({ a: 128 })
    })

    it('should treat `none` as 0 for L, C, H and alpha', () => {
      expect(oklchParse('oklch(none 0.15 200)')).toMatchObject({ b: 3, g: 1, r: 0 })
      expect(oklchParse('oklch(0.7 none 200)')).toMatchObject({ b: 158, g: 158, r: 158 })
      expect(oklchParse('oklch(0.7 0.15 none)')).toMatchObject({ b: 155, g: 114, r: 231 })
      expect(oklchParse('oklch(0.7 0.15 200 / none)')).toMatchObject({ a: 0 })
    })

    it('should clamp L above 1', () => {
      const expected = { a: 255, b: 255, g: 255, r: 93 }
      expect(oklchParse('oklch(1.5 0.15 200)')).toEqual(expected)
      expect(oklchParse('oklch(120% 0.15 200)')).toEqual(expected)
    })

    it('should clamp L below 0', () => {
      expect(oklchParse('oklch(-0.2 0.1 200)')).toEqual({ a: 255, b: 1, g: 0, r: 0 })
    })

    it('should clamp negative C to 0', () => {
      expect(oklchParse('oklch(0.7 -0.1 200)')).toEqual({ a: 255, b: 158, g: 158, r: 158 })
    })

    it('should normalize out-of-range hue angles', () => {
      const expected = { a: 255, b: 195, g: 185, r: 0 }
      expect(oklchParse('oklch(0.7 0.15 -160)')).toEqual(expected)
      expect(oklchParse('oklch(0.7 0.15 560)')).toEqual(expected)
    })

    it('should support rad, turn and grad hue units', () => {
      const expected = { a: 255, b: 195, g: 185, r: 0 }
      expect(oklchParse('oklch(0.7 0.15 3.4907rad)')).toEqual(expected)
      expect(oklchParse('oklch(0.7 0.15 0.5556turn)')).toEqual(expected)

      const deg = oklchParse('oklch(0.7 0.15 200deg)')
      const grad = oklchParse('oklch(0.7 0.15 222.22grad)')
      expect(grad).toEqual(deg)
    })

    it('should clamp alpha above 1', () => {
      expect(oklchParse('oklch(0.7 0.15 200 / 1.5)')).toMatchObject({ a: 255 })
    })

    it('should accept leading-dot decimals and exponent notation', () => {
      expect(oklchParse('oklch(.7 .15 2e2)')).toEqual({ a: 255, b: 195, g: 185, r: 0 })
    })

    it('should parse a variety of colors', () => {
      expect(oklchParse('oklch(0.5 0.2 30)')).toEqual({ a: 255, b: 1, g: 13, r: 186 })
      expect(oklchParse('oklch(0.85 0.1 100)')).toEqual({ a: 255, b: 129, g: 208, r: 221 })
      expect(oklchParse('oklch(0.3 0.05 300)')).toEqual({ a: 255, b: 67, g: 40, r: 50 })
      expect(oklchParse('oklch(0.6 0 0)')).toEqual({ a: 255, b: 128, g: 128, r: 128 })
      expect(oklchParse('oklch(0.5 0 123)')).toEqual({ a: 255, b: 99, g: 99, r: 99 })
    })

    it('should clip out-of-gamut colors like a browser canvas', () => {
      expect(oklchParse('oklch(0.7 0.3 30)')).toEqual({ a: 255, b: 0, g: 0, r: 255 })
      expect(oklchParse('oklch(0.5 0.4 150)')).toEqual({ a: 255, b: 0, g: 145, r: 0 })
      expect(oklchParse('oklch(0.9 0.3 120)')).toEqual({ a: 255, b: 0, g: 246, r: 200 })
      expect(oklchParse('oklch(0.4 0.35 270)')).toEqual({ a: 255, b: 255, g: 0, r: 51 })
      expect(oklchParse('oklch(0.95 0.2 60)')).toEqual({ a: 255, b: 71, g: 202, r: 255 })
      expect(oklchParse('oklch(0.2 0.3 200)')).toEqual({ a: 255, b: 74, g: 37, r: 0 })
      expect(oklchParse('oklch(1 0.2 90)')).toEqual({ a: 255, b: 33, g: 247, r: 255 })
    })

    it('should parse pure black and white', () => {
      expect(oklchParse('oklch(0 0 0)')).toEqual({ a: 255, b: 0, g: 0, r: 0 })
      expect(oklchParse('oklch(1 0 0)')).toEqual({ a: 255, b: 255, g: 255, r: 255 })
    })

    it('should return undefined for invalid formats', () => {
      expect(oklchParse('oklch()')).toBeUndefined()
      expect(oklchParse('oklch(0.7)')).toBeUndefined()
      expect(oklchParse('oklch(0.7 0.15)')).toBeUndefined()
      expect(oklchParse('not a color')).toBeUndefined()
      expect(oklchParse('hsl(0, 100%, 50%)')).toBeUndefined()
    })
  })

  describe('oklchString', () => {
    it('should format L, C and H with 4/4/2 decimal precision', () => {
      expect(oklchString({ a: 255, b: 0, g: 0, r: 255 })).toBe('oklch(0.628 0.2577 29.23)')
    })

    it('should append alpha when it is below 255', () => {
      expect(oklchString({ a: 128, b: 0, g: 0, r: 255 })).toBe('oklch(0.628 0.2577 29.23 / 0.5)')
    })

    it('should return undefined for undefined input', () => {
      expect(oklchString(undefined)).toBeUndefined()
    })

    it('should format achromatic grey with 0 C and H', () => {
      expect(oklchString({ a: 255, b: 128, g: 128, r: 128 })).toBe('oklch(0.5999 0 0)')
    })
  })
})
