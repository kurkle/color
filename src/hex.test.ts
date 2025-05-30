import {describe, it, expect} from 'vitest';
import {hexParse, hexString} from './hex.js';
import {RGBA} from './color.js';

describe('hex.ts', () => {
  describe('hexParse', () => {
    it('should parse 3-digit hex colors correctly', () => {
      expect(hexParse('#123')).toEqual({
        r: 17,
        g: 34,
        b: 51,
        a: 255
      });

      expect(hexParse('#fff')).toEqual({
        r: 255,
        g: 255,
        b: 255,
        a: 255
      });
    });

    it('should parse 4-digit hex colors with alpha correctly', () => {
      expect(hexParse('#123f')).toEqual({
        r: 17,
        g: 34,
        b: 51,
        a: 255
      });

      expect(hexParse('#1230')).toEqual({
        r: 17,
        g: 34,
        b: 51,
        a: 0
      });

      expect(hexParse('#12f8')).toEqual({
        r: 17,
        g: 34,
        b: 255,
        a: 136
      });
    });

    it('should parse 6-digit hex colors correctly', () => {
      expect(hexParse('#123456')).toEqual({
        r: 18,
        g: 52,
        b: 86,
        a: 255
      });

      expect(hexParse('#ffffff')).toEqual({
        r: 255,
        g: 255,
        b: 255,
        a: 255
      });
    });

    it('should parse 8-digit hex colors with alpha correctly', () => {
      expect(hexParse('#12345678')).toEqual({
        r: 18,
        g: 52,
        b: 86,
        a: 120
      });

      expect(hexParse('#ffffffff')).toEqual({
        r: 255,
        g: 255,
        b: 255,
        a: 255
      });

      expect(hexParse('#ffffff00')).toEqual({
        r: 255,
        g: 255,
        b: 255,
        a: 0
      });
    });

    it('should handle case-insensitive hex values', () => {
      expect(hexParse('#abc')).toEqual({
        r: 170,
        g: 187,
        b: 204,
        a: 255
      });

      expect(hexParse('#ABC')).toEqual({
        r: 170,
        g: 187,
        b: 204,
        a: 255
      });

      expect(hexParse('#AbC')).toEqual({
        r: 170,
        g: 187,
        b: 204,
        a: 255
      });
    });

    it('should return undefined for invalid hex formats', () => {
      // These formats are actually invalid and should return undefined
      expect(hexParse('123')).toBeUndefined();
      expect(hexParse('#1')).toBeUndefined();
      expect(hexParse('#12')).toBeUndefined();
      expect(hexParse('#12345')).toBeUndefined();
      expect(hexParse('#1234567')).toBeUndefined();
      expect(hexParse('#123456789')).toBeUndefined();

      // The implementation treats invalid hex characters as 0
      // So #xyz is treated as #000
      const xyzResult = hexParse('#xyz');
      expect(xyzResult).toEqual({r: 0, g: 0, b: 0, a: 255});
    });
  });

  describe('hexString', () => {
    it('should convert RGBA to short hex string when possible', () => {
      const color: RGBA = {
        r: 17,
        g: 17,
        b: 17,
        a: 255
      };

      expect(hexString(color)).toBe('#111');
    });

    it('should convert RGBA to full hex string when needed', () => {
      const color: RGBA = {
        r: 18,
        g: 52,
        b: 86,
        a: 255
      };

      expect(hexString(color)).toBe('#123456');
    });

    it('should include alpha in hex string when alpha < 255', () => {
      const color: RGBA = {
        r: 17,
        g: 17,
        b: 17,
        a: 136
      };

      expect(hexString(color)).toBe('#1118');

      const color2: RGBA = {
        r: 18,
        g: 52,
        b: 86,
        a: 120
      };

      expect(hexString(color2)).toBe('#12345678');
    });

    it('should return undefined for undefined input', () => {
      expect(hexString(undefined)).toBeUndefined();
    });

    it('should handle edge cases', () => {
      // Black
      expect(hexString({r: 0, g: 0, b: 0, a: 255})).toBe('#000');

      // White
      expect(hexString({r: 255, g: 255, b: 255, a: 255})).toBe('#FFF');

      // Transparent
      expect(hexString({r: 0, g: 0, b: 0, a: 0})).toBe('#0000');

      // Semi-transparent white
      expect(hexString({r: 255, g: 255, b: 255, a: 128})).toBe('#FFFFFF80');
    });
  });
});
