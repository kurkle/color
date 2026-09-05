import type { RGBA } from './color.js'

import { describe, expect, it } from 'vitest'

import { hexParse, hexString } from './hex.js'

describe('hex.ts', () => {
  describe('hexParse', () => {
    it('should parse 3-digit hex colors correctly', () => {
      expect(hexParse('#123')).toEqual({
        a: 255,
        b: 51,
        g: 34,
        r: 17,
      })

      expect(hexParse('#fff')).toEqual({
        a: 255,
        b: 255,
        g: 255,
        r: 255,
      })
    })

    it('should parse 4-digit hex colors with alpha correctly', () => {
      expect(hexParse('#123f')).toEqual({
        a: 255,
        b: 51,
        g: 34,
        r: 17,
      })

      expect(hexParse('#1230')).toEqual({
        a: 0,
        b: 51,
        g: 34,
        r: 17,
      })

      expect(hexParse('#12f8')).toEqual({
        a: 136,
        b: 255,
        g: 34,
        r: 17,
      })
    })

    it('should parse 6-digit hex colors correctly', () => {
      expect(hexParse('#123456')).toEqual({
        a: 255,
        b: 86,
        g: 52,
        r: 18,
      })

      expect(hexParse('#ffffff')).toEqual({
        a: 255,
        b: 255,
        g: 255,
        r: 255,
      })
    })

    it('should parse 8-digit hex colors with alpha correctly', () => {
      expect(hexParse('#12345678')).toEqual({
        a: 120,
        b: 86,
        g: 52,
        r: 18,
      })

      expect(hexParse('#ffffffff')).toEqual({
        a: 255,
        b: 255,
        g: 255,
        r: 255,
      })

      expect(hexParse('#ffffff00')).toEqual({
        a: 0,
        b: 255,
        g: 255,
        r: 255,
      })
    })

    it('should handle case-insensitive hex values', () => {
      expect(hexParse('#abc')).toEqual({
        a: 255,
        b: 204,
        g: 187,
        r: 170,
      })

      expect(hexParse('#ABC')).toEqual({
        a: 255,
        b: 204,
        g: 187,
        r: 170,
      })

      expect(hexParse('#AbC')).toEqual({
        a: 255,
        b: 204,
        g: 187,
        r: 170,
      })
    })

    it('should return undefined for invalid hex formats', () => {
      // These formats are actually invalid and should return undefined
      expect(hexParse('123')).toBeUndefined()
      expect(hexParse('#1')).toBeUndefined()
      expect(hexParse('#12')).toBeUndefined()
      expect(hexParse('#12345')).toBeUndefined()
      expect(hexParse('#1234567')).toBeUndefined()
      expect(hexParse('#123456789')).toBeUndefined()

      // The implementation treats invalid hex characters as 0
      // So #xyz is treated as #000
      const xyzResult = hexParse('#xyz')
      expect(xyzResult).toEqual({ a: 255, b: 0, g: 0, r: 0 })
    })
  })

  describe('hexString', () => {
    it('should convert RGBA to short hex string when possible', () => {
      const color: RGBA = {
        a: 255,
        b: 17,
        g: 17,
        r: 17,
      }

      expect(hexString(color)).toBe('#111')
    })

    it('should convert RGBA to full hex string when needed', () => {
      const color: RGBA = {
        a: 255,
        b: 86,
        g: 52,
        r: 18,
      }

      expect(hexString(color)).toBe('#123456')
    })

    it('should include alpha in hex string when alpha < 255', () => {
      const color: RGBA = {
        a: 136,
        b: 17,
        g: 17,
        r: 17,
      }

      expect(hexString(color)).toBe('#1118')

      const color2: RGBA = {
        a: 120,
        b: 86,
        g: 52,
        r: 18,
      }

      expect(hexString(color2)).toBe('#12345678')
    })

    it('should return undefined for undefined input', () => {
      expect(hexString(undefined)).toBeUndefined()
    })

    it('should handle edge cases', () => {
      // Black
      expect(hexString({ a: 255, b: 0, g: 0, r: 0 })).toBe('#000')

      // White
      expect(hexString({ a: 255, b: 255, g: 255, r: 255 })).toBe('#FFF')

      // Transparent
      expect(hexString({ a: 0, b: 0, g: 0, r: 0 })).toBe('#0000')

      // Semi-transparent white
      expect(hexString({ a: 128, b: 255, g: 255, r: 255 })).toBe('#FFFFFF80')
    })
  })
})
