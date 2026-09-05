import type { RGBA } from './color.js'

import { describe, expect, it } from 'vitest'

import { rgbParse, rgbString } from './rgb.js'

describe('rgb.ts', () => {
  describe('rgbParse', () => {
    it('should parse rgb() format correctly', () => {
      expect(rgbParse('rgb(255, 0, 0)')).toEqual({
        a: 255,
        b: 0,
        g: 0,
        r: 255,
      })

      expect(rgbParse('rgb(0, 255, 0)')).toEqual({
        a: 255,
        b: 0,
        g: 255,
        r: 0,
      })

      expect(rgbParse('rgb(0, 0, 255)')).toEqual({
        a: 255,
        b: 255,
        g: 0,
        r: 0,
      })
    })

    it('should parse rgba() format correctly', () => {
      expect(rgbParse('rgba(255, 0, 0, 1)')).toEqual({
        a: 255,
        b: 0,
        g: 0,
        r: 255,
      })

      expect(rgbParse('rgba(0, 255, 0, 0.5)')).toEqual({
        a: 127.5,
        b: 0,
        g: 255,
        r: 0,
      })

      expect(rgbParse('rgba(0, 0, 255, 0)')).toEqual({
        a: 0,
        b: 255,
        g: 0,
        r: 0,
      })
    })

    it('should parse rgb() with percentages correctly', () => {
      expect(rgbParse('rgb(100%, 0%, 0%)')).toEqual({
        a: 255,
        b: 0,
        g: 0,
        r: 255,
      })

      expect(rgbParse('rgb(0%, 100%, 0%)')).toEqual({
        a: 255,
        b: 0,
        g: 255,
        r: 0,
      })

      expect(rgbParse('rgb(0%, 0%, 100%)')).toEqual({
        a: 255,
        b: 255,
        g: 0,
        r: 0,
      })

      expect(rgbParse('rgb(50%, 50%, 50%)')).toEqual({
        a: 255,
        b: 127,
        g: 127,
        r: 127,
      })
    })

    it('should parse rgba() with percentages correctly', () => {
      expect(rgbParse('rgba(100%, 0%, 0%, 100%)')).toEqual({
        a: 255,
        b: 0,
        g: 0,
        r: 255,
      })

      expect(rgbParse('rgba(0%, 100%, 0%, 50%)')).toEqual({
        a: 127,
        b: 0,
        g: 255,
        r: 0,
      })

      expect(rgbParse('rgba(0%, 0%, 100%, 0%)')).toEqual({
        a: 0,
        b: 255,
        g: 0,
        r: 0,
      })
    })

    it('should handle whitespace variations', () => {
      expect(rgbParse('rgb(255,0,0)')).toEqual({
        a: 255,
        b: 0,
        g: 0,
        r: 255,
      })

      expect(rgbParse('rgb( 255, 0, 0 )')).toEqual({
        a: 255,
        b: 0,
        g: 0,
        r: 255,
      })

      expect(rgbParse('rgba( 255 , 0 , 0 , 0.5 )')).toEqual({
        a: 127.5,
        b: 0,
        g: 0,
        r: 255,
      })
    })

    it('should handle scientific notation', () => {
      // The implementation doesn't support scientific notation
      expect(rgbParse('rgb(1e2, 2e1, 3e0)')).toBeUndefined()

      // This works because it's parsed as a regular number
      expect(rgbParse('rgba(255, 0, 0, 0.1)')).toEqual({
        a: 25.5,
        b: 0,
        g: 0,
        r: 255,
      })
    })

    it('should clamp values to valid ranges', () => {
      expect(rgbParse('rgb(300, -10, 1000)')).toEqual({
        a: 255,
        b: 255,
        g: 0,
        r: 255,
      })

      expect(rgbParse('rgba(255, 0, 0, 2)')).toEqual({
        a: 255,
        b: 0,
        g: 0,
        r: 255,
      })

      expect(rgbParse('rgba(255, 0, 0, -1)')).toEqual({
        a: 0,
        b: 0,
        g: 0,
        r: 255,
      })
    })

    it('should handle invalid formats', () => {
      // These formats are actually invalid and should return undefined
      expect(rgbParse('rgb()')).toBeUndefined()
      expect(rgbParse('rgb(255)')).toBeUndefined()
      expect(rgbParse('rgb(255, 0)')).toBeUndefined()
      expect(rgbParse('rgba(255, 0)')).toBeUndefined()
      expect(rgbParse('rgba(255)')).toBeUndefined()
      expect(rgbParse('rgba()')).toBeUndefined()

      // The implementation treats these as valid
      expect(rgbParse('rgba(255, 0, 0)')).toEqual({
        a: 255,
        b: 0,
        g: 0,
        r: 255,
      })

      expect(rgbParse('rgb(255, 0, 0, 0)')).toEqual({
        a: 0,
        b: 0,
        g: 0,
        r: 255,
      })

      // The implementation doesn't parse invalid characters
      expect(rgbParse('rgb(a, b, c)')).toBeUndefined()
    })
  })

  describe('rgbString', () => {
    it('should convert RGBA to rgb string when alpha is 255', () => {
      const color: RGBA = {
        a: 255,
        b: 0,
        g: 0,
        r: 255,
      }

      expect(rgbString(color)).toBe('rgb(255, 0, 0)')
    })

    it('should convert RGBA to rgba string when alpha is < 255', () => {
      const color: RGBA = {
        a: 128,
        b: 0,
        g: 0,
        r: 255,
      }

      expect(rgbString(color)).toBe('rgba(255, 0, 0, 0.5)')
    })

    it('should return undefined for undefined input', () => {
      expect(rgbString(undefined)).toBeUndefined()
    })

    it('should handle edge cases', () => {
      // Black
      expect(rgbString({ a: 255, b: 0, g: 0, r: 0 })).toBe('rgb(0, 0, 0)')

      // White
      expect(rgbString({ a: 255, b: 255, g: 255, r: 255 })).toBe('rgb(255, 255, 255)')

      // Transparent black
      expect(rgbString({ a: 0, b: 0, g: 0, r: 0 })).toBe('rgba(0, 0, 0, 0)')

      // Semi-transparent white
      expect(rgbString({ a: 128, b: 255, g: 255, r: 255 })).toBe('rgba(255, 255, 255, 0.5)')
    })
  })
})
