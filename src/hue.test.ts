import {describe, it, expect} from 'vitest';
import {rgb2hsl, hsl2rgb, hwb2rgb, hsv2rgb, hueParse, rotate, hslString} from './hue.js';
import {RGBA} from './color.js';

describe('hue.ts', () => {
  describe('rgb2hsl', () => {
    it('should convert RGB to HSL correctly', () => {
      // Red
      expect(rgb2hsl({r: 255, g: 0, b: 0, a: 255})).toEqual([0, 1, 0.5]);

      // Green
      expect(rgb2hsl({r: 0, g: 255, b: 0, a: 255})).toEqual([120, 1, 0.5]);

      // Blue
      expect(rgb2hsl({r: 0, g: 0, b: 255, a: 255})).toEqual([240, 1, 0.5]);

      // White
      expect(rgb2hsl({r: 255, g: 255, b: 255, a: 255})).toEqual([0, 0, 1]);

      // Black
      expect(rgb2hsl({r: 0, g: 0, b: 0, a: 255})).toEqual([0, 0, 0]);

      // Gray
      expect(rgb2hsl({r: 128, g: 128, b: 128, a: 255})).toEqual([0, 0, 0.5019607843137255]);

      // Purple
      expect(rgb2hsl({r: 128, g: 0, b: 128, a: 255})).toEqual([300, 1, 0.25098039215686274]);

      // Yellow
      expect(rgb2hsl({r: 255, g: 255, b: 0, a: 255})).toEqual([60, 1, 0.5]);

      // Cyan
      expect(rgb2hsl({r: 0, g: 255, b: 255, a: 255})).toEqual([180, 1, 0.5]);

      // Magenta
      expect(rgb2hsl({r: 255, g: 0, b: 255, a: 255})).toEqual([300, 1, 0.5]);
    });

    it('should handle alpha channel correctly', () => {
      // Alpha should not affect HSL values
      expect(rgb2hsl({r: 255, g: 0, b: 0, a: 128})).toEqual([0, 1, 0.5]);
    });
  });

  describe('hsl2rgb', () => {
    it('should convert HSL to RGB correctly', () => {
      // Red
      expect(hsl2rgb(0, 1, 0.5)).toEqual([255, 0, 0]);

      // Green
      expect(hsl2rgb(120, 1, 0.5)).toEqual([0, 255, 0]);

      // Blue
      expect(hsl2rgb(240, 1, 0.5)).toEqual([0, 0, 255]);

      // White
      expect(hsl2rgb(0, 0, 1)).toEqual([255, 255, 255]);

      // Black
      expect(hsl2rgb(0, 0, 0)).toEqual([0, 0, 0]);

      // Gray
      expect(hsl2rgb(0, 0, 0.5)).toEqual([128, 128, 128]);

      // Purple
      expect(hsl2rgb(300, 1, 0.25)).toEqual([128, 0, 128]);

      // Yellow
      expect(hsl2rgb(60, 1, 0.5)).toEqual([255, 255, 0]);

      // Cyan
      expect(hsl2rgb(180, 1, 0.5)).toEqual([0, 255, 255]);

      // Magenta
      expect(hsl2rgb(300, 1, 0.5)).toEqual([255, 0, 255]);
    });

    it('should accept array input', () => {
      // Red as array
      expect(hsl2rgb([0, 1, 0.5])).toEqual([255, 0, 0]);

      // Green as array
      expect(hsl2rgb([120, 1, 0.5])).toEqual([0, 255, 0]);

      // Blue as array
      expect(hsl2rgb([240, 1, 0.5])).toEqual([0, 0, 255]);
    });
  });

  describe('hwb2rgb', () => {
    it('should convert HWB to RGB correctly', () => {
      // Red
      expect(hwb2rgb(0, 0, 0)).toEqual([255, 0, 0]);

      // Green
      expect(hwb2rgb(120, 0, 0)).toEqual([0, 255, 0]);

      // Blue
      expect(hwb2rgb(240, 0, 0)).toEqual([0, 0, 255]);

      // White
      expect(hwb2rgb(0, 1, 0)).toEqual([255, 255, 255]);

      // Black
      expect(hwb2rgb(0, 0, 1)).toEqual([0, 0, 0]);

      // Gray (50% white, 50% black)
      expect(hwb2rgb(0, 0.5, 0.5)).toEqual([128, 128, 128]);

      // Yellow
      expect(hwb2rgb(60, 0, 0)).toEqual([255, 255, 0]);

      // Cyan
      expect(hwb2rgb(180, 0, 0)).toEqual([0, 255, 255]);

      // Magenta
      expect(hwb2rgb(300, 0, 0)).toEqual([255, 0, 255]);
    });

    it('should accept array input', () => {
      // Red as array
      expect(hwb2rgb([0, 0, 0])).toEqual([255, 0, 0]);

      // Green as array
      expect(hwb2rgb([120, 0, 0])).toEqual([0, 255, 0]);

      // Blue as array
      expect(hwb2rgb([240, 0, 0])).toEqual([0, 0, 255]);
    });

    it('should handle w+b > 1 correctly', () => {
      // When w+b > 1, they should be normalized
      expect(hwb2rgb(0, 0.6, 0.6)).toEqual([128, 128, 128]);
      expect(hwb2rgb(120, 0.7, 0.7)).toEqual([128, 128, 128]);
    });
  });

  describe('hsv2rgb', () => {
    it('should convert HSV to RGB correctly', () => {
      // Red
      expect(hsv2rgb(0, 1, 1)).toEqual([255, 0, 0]);

      // Green
      expect(hsv2rgb(120, 1, 1)).toEqual([0, 255, 0]);

      // Blue
      expect(hsv2rgb(240, 1, 1)).toEqual([0, 0, 255]);

      // White
      expect(hsv2rgb(0, 0, 1)).toEqual([255, 255, 255]);

      // Black
      expect(hsv2rgb(0, 0, 0)).toEqual([0, 0, 0]);

      // Gray
      expect(hsv2rgb(0, 0, 0.5)).toEqual([128, 128, 128]);

      // Yellow
      expect(hsv2rgb(60, 1, 1)).toEqual([255, 255, 0]);

      // Cyan
      expect(hsv2rgb(180, 1, 1)).toEqual([0, 255, 255]);

      // Magenta
      expect(hsv2rgb(300, 1, 1)).toEqual([255, 0, 255]);
    });

    it('should accept array input', () => {
      // Red as array
      expect(hsv2rgb([0, 1, 1])).toEqual([255, 0, 0]);

      // Green as array
      expect(hsv2rgb([120, 1, 1])).toEqual([0, 255, 0]);

      // Blue as array
      expect(hsv2rgb([240, 1, 1])).toEqual([0, 0, 255]);
    });
  });

  describe('hueParse', () => {
    it('should parse HSL color strings correctly', () => {
      // Red
      expect(hueParse('hsl(0, 100%, 50%)')).toEqual({
        r: 255,
        g: 0,
        b: 0,
        a: 255
      });

      // Green
      expect(hueParse('hsl(120, 100%, 50%)')).toEqual({
        r: 0,
        g: 255,
        b: 0,
        a: 255
      });

      // Blue
      expect(hueParse('hsl(240, 100%, 50%)')).toEqual({
        r: 0,
        g: 0,
        b: 255,
        a: 255
      });

      // White
      expect(hueParse('hsl(0, 0%, 100%)')).toEqual({
        r: 255,
        g: 255,
        b: 255,
        a: 255
      });

      // Black
      expect(hueParse('hsl(0, 0%, 0%)')).toEqual({
        r: 0,
        g: 0,
        b: 0,
        a: 255
      });
    });

    it('should parse HSLA color strings correctly', () => {
      // Red with 50% opacity
      expect(hueParse('hsla(0, 100%, 50%, 0.5)')).toEqual({
        r: 255,
        g: 0,
        b: 0,
        a: 128
      });

      // Green with 75% opacity
      expect(hueParse('hsla(120, 100%, 50%, 0.75)')).toEqual({
        r: 0,
        g: 255,
        b: 0,
        a: 191
      });

      // Blue with 25% opacity
      expect(hueParse('hsla(240, 100%, 50%, 0.25)')).toEqual({
        r: 0,
        g: 0,
        b: 255,
        a: 64
      });

      // Fully transparent
      expect(hueParse('hsla(0, 100%, 50%, 0)')).toEqual({
        r: 255,
        g: 0,
        b: 0,
        a: 0
      });
    });

    it('should parse HSV color strings correctly', () => {
      // Red
      expect(hueParse('hsv(0, 100%, 100%)')).toEqual({
        r: 255,
        g: 0,
        b: 0,
        a: 255
      });

      // Green
      expect(hueParse('hsv(120, 100%, 100%)')).toEqual({
        r: 0,
        g: 255,
        b: 0,
        a: 255
      });

      // Blue
      expect(hueParse('hsv(240, 100%, 100%)')).toEqual({
        r: 0,
        g: 0,
        b: 255,
        a: 255
      });
    });

    it('should parse HWB color strings correctly', () => {
      // Red
      expect(hueParse('hwb(0, 0%, 0%)')).toEqual({
        r: 255,
        g: 0,
        b: 0,
        a: 255
      });

      // Green
      expect(hueParse('hwb(120, 0%, 0%)')).toEqual({
        r: 0,
        g: 255,
        b: 0,
        a: 255
      });

      // Blue
      expect(hueParse('hwb(240, 0%, 0%)')).toEqual({
        r: 0,
        g: 0,
        b: 255,
        a: 255
      });

      // White
      expect(hueParse('hwb(0, 100%, 0%)')).toEqual({
        r: 255,
        g: 255,
        b: 255,
        a: 255
      });

      // Black
      expect(hueParse('hwb(0, 0%, 100%)')).toEqual({
        r: 0,
        g: 0,
        b: 0,
        a: 255
      });

      // Gray (50% white, 50% black)
      expect(hueParse('hwb(0, 50%, 50%)')).toEqual({
        r: 128,
        g: 128,
        b: 128,
        a: 255
      });
    });

    it('should handle hue angles correctly', () => {
      // Negative hue should be normalized
      expect(hueParse('hsl(-60, 100%, 50%)')).toEqual({
        r: 255,
        g: 0,
        b: 255,
        a: 255
      });

      // Hue > 360 should be normalized (420 % 360 = 60, which is yellow)
      expect(hueParse('hsl(420, 100%, 50%)')).toEqual({
        r: 255,
        g: 255,
        b: 0,
        a: 255
      });
    });

    it('should return undefined for invalid formats', () => {
      expect(hueParse('not a color')).toBeUndefined();
      expect(hueParse('rgb(255, 0, 0)')).toBeUndefined();
      expect(hueParse('hsl()')).toBeUndefined();
      expect(hueParse('hsl(0)')).toBeUndefined();
      expect(hueParse('hsl(0, 100%)')).toBeUndefined();
    });
  });

  describe('rotate', () => {
    it('should rotate colors correctly', () => {
      // Rotate red to green
      const red: RGBA = {r: 255, g: 0, b: 0, a: 255};
      rotate(red, 120);
      expect(red).toEqual({r: 0, g: 255, b: 0, a: 255});

      // Rotate green to blue
      const green: RGBA = {r: 0, g: 255, b: 0, a: 255};
      rotate(green, 120);
      expect(green).toEqual({r: 0, g: 0, b: 255, a: 255});

      // Rotate blue to red
      const blue: RGBA = {r: 0, g: 0, b: 255, a: 255};
      rotate(blue, 120);
      expect(blue).toEqual({r: 255, g: 0, b: 0, a: 255});
    });

    it('should handle negative rotation', () => {
      // Rotate red to blue
      const red: RGBA = {r: 255, g: 0, b: 0, a: 255};
      rotate(red, -120);
      expect(red).toEqual({r: 0, g: 0, b: 255, a: 255});
    });

    it('should handle rotation > 360', () => {
      // Rotate red to green (360 + 120 = 480)
      const red: RGBA = {r: 255, g: 0, b: 0, a: 255};
      rotate(red, 480);
      expect(red).toEqual({r: 0, g: 255, b: 0, a: 255});
    });

    it('should not change alpha', () => {
      // Alpha should remain unchanged
      const red: RGBA = {r: 255, g: 0, b: 0, a: 128};
      rotate(red, 120);
      expect(red.a).toBe(128);
    });
  });

  describe('hslString', () => {
    it('should convert RGBA to HSL string correctly', () => {
      // Red
      expect(hslString({r: 255, g: 0, b: 0, a: 255})).toBe('hsl(0, 100%, 50%)');

      // Green
      expect(hslString({r: 0, g: 255, b: 0, a: 255})).toBe('hsl(120, 100%, 50%)');

      // Blue
      expect(hslString({r: 0, g: 0, b: 255, a: 255})).toBe('hsl(240, 100%, 50%)');

      // White
      expect(hslString({r: 255, g: 255, b: 255, a: 255})).toBe('hsl(0, 0%, 100%)');

      // Black
      expect(hslString({r: 0, g: 0, b: 0, a: 255})).toBe('hsl(0, 0%, 0%)');

      // Gray
      expect(hslString({r: 128, g: 128, b: 128, a: 255})).toBe('hsl(0, 0%, 50%)');
    });

    it('should convert RGBA to HSLA string when alpha < 255', () => {
      // Red with 50% opacity
      expect(hslString({r: 255, g: 0, b: 0, a: 128})).toBe('hsla(0, 100%, 50%, 0.5)');

      // Green with 75% opacity
      expect(hslString({r: 0, g: 255, b: 0, a: 191})).toBe('hsla(120, 100%, 50%, 0.75)');

      // Blue with 25% opacity
      expect(hslString({r: 0, g: 0, b: 255, a: 64})).toBe('hsla(240, 100%, 50%, 0.25)');

      // Fully transparent
      expect(hslString({r: 255, g: 0, b: 0, a: 0})).toBe('hsla(0, 100%, 50%, 0)');
    });

    it('should return undefined for undefined input', () => {
      expect(hslString(undefined)).toBeUndefined();
    });
  });
});
