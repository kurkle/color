import {describe, it, expect} from 'vitest';
import {Color} from '../dist/color.esm.js';

describe('Color Parsing', () => {
  describe('Hex Color Parsing', () => {
    it('should parse 3-digit hex colors correctly', () => {
      expect(new Color('#fef').rgb).toEqual({r: 255, g: 238, b: 255, a: 1});
      expect(new Color('#123').rgb).toEqual({r: 17, g: 34, b: 51, a: 1});
    });

    it('should parse 6-digit hex colors correctly', () => {
      expect(new Color('#fffFEF').rgb).toEqual({r: 255, g: 255, b: 239, a: 1});
      expect(new Color('#112233').rgb).toEqual({r: 17, g: 34, b: 51, a: 1});
    });

    it('should parse 4-digit hex colors with alpha correctly', () => {
      expect(new Color('#feff').rgb).toEqual({r: 255, g: 238, b: 255, a: 1});
      expect(new Color('#fef0').rgb).toEqual({r: 255, g: 238, b: 255, a: 0});
      expect(new Color('#fefa').rgbString()).toBe('rgba(255, 238, 255, 0.67)');
      expect(new Color('#1234').hexString()).toBe('#1234');
    });

    it('should parse 8-digit hex colors with alpha correctly', () => {
      expect(new Color('#c814e933').rgb).toEqual({r: 200, g: 20, b: 233, a: 0.2});
      expect(new Color('#c814e900').rgb).toEqual({r: 200, g: 20, b: 233, a: 0});
      expect(new Color('#c814e9ff').rgb).toEqual({r: 200, g: 20, b: 233, a: 1});
      expect(new Color('#45ab45ed').hexString()).toBe('#45AB45ED');
    });

    it('should handle invalid hex values', () => {
      expect(new Color('#1').rgb).toBeUndefined();
      expect(new Color('#f').rgb).toBeUndefined();
      expect(new Color('#4f').rgb).toBeUndefined();
      expect(new Color('#45ab4').rgb).toBeUndefined();
      expect(new Color('#45ab45e').rgb).toBeUndefined();
    });
  });

  describe('RGB Color Parsing', () => {
    it('should parse rgb() format correctly', () => {
      expect(new Color('rgb(244, 233, 100)').rgb).toEqual({r: 244, g: 233, b: 100, a: 1});
      expect(new Color('rgb(255, 0, 0)').rgb).toEqual({r: 255, g: 0, b: 0, a: 1});
      expect(new Color('rgb(0 255 0)').rgb).toEqual({r: 0, g: 255, b: 0, a: 1});
    });

    it('should parse rgb() with percentages correctly', () => {
      expect(new Color('rgb(100%, 30%, 90%)').rgb).toEqual({r: 255, g: 77, b: 229, a: 1});
    });

    it('should parse rgba() format correctly', () => {
      expect(new Color('rgba(200, 20, 233, 0.2)').rgb).toEqual({r: 200, g: 20, b: 233, a: 0.2});
      expect(new Color('rgba(200, 20, 233, 0)').rgb).toEqual({r: 200, g: 20, b: 233, a: 0});
      expect(new Color('rgba(200, 20, 233, 1e-15)').rgb).toEqual({r: 200, g: 20, b: 233, a: 0});
      expect(new Color('rgba(255, 0, 0, .5)').rgb).toEqual({r: 255, g: 0, b: 0, a: 0.5});
    });

    it('should parse rgba() with percentages correctly', () => {
      expect(new Color('rgba(100%, 30%, 90%, 0.2)').rgb).toEqual({r: 255, g: 77, b: 229, a: 0.2});
      expect(new Color('rgb(0 0 100% / 80%)').rgb).toEqual({r: 0, g: 0, b: 255, a: 0.8});
    });

    it('should handle comment blocks in rgb/rgba values', () => {
      expect(new Color('rgba(10, 20, 30, /* comment, block */ 0.5)').rgbString()).toBe('rgba(10, 20, 30, 0.5)');
      expect(new Color('rgba(10 /* r */, 20 /* g */, 30 /* b */, /* a */ 0.5)').rgbString()).toBe('rgba(10, 20, 30, 0.5)');
    });

    it('should clamp out-of-range rgb values', () => {
      expect(new Color('rgba(267, 292, 60, 0.2)').rgbString()).toBe('rgba(255, 255, 60, 0.2)');
    });
  });

  describe('HSL Color Parsing', () => {
    it('should parse hsl() format correctly', () => {
      expect(new Color('hsl(240, 100%, 50.5%)').rgb).toEqual({r: 3, g: 3, b: 255, a: 1});
      expect(new Color('hsl(240deg, 100%, 50.5%)').rgb).toEqual({r: 3, g: 3, b: 255, a: 1});
      expect(new Color('hsl(0deg 100% 50%)').rgb).toEqual({r: 255, g: 0, b: 0, a: 1});
      expect(new Color('hsl(100, 50%, 50%)').rgb).toEqual({r: 106, g: 191, b: 64, a: 1});
    });

    it('should parse hsla() format correctly', () => {
      expect(new Color('hsla(12, 10%, 50%, .3)').rgb).toEqual({r: 140, g: 120, b: 115, a: 0.3});
      expect(new Color('hsla(12, 10%, 50%, 30%)').rgb).toEqual({r: 140, g: 120, b: 115, a: 0.3});
      expect(new Color('hsla(240.0384227364303, 4.12843378950259%, 48.71943371204973%, 0.3)').rgb).toEqual({r: 119, g: 119, b: 129, a: 0.3});
    });

    it('should handle negative values and scientific notation in hsla()', () => {
      expect(new Color('hsla(-10.0, 100%, 50%, -0.2)').hslString()).toBe('hsla(350, 100%, 50%, 0)');
      expect(new Color('hsla(-1e1, 1e2%, 50%, -2e-1)').hslString()).toBe('hsla(350, 100%, 50%, 0)');
    });
  });

  describe('Other Color Format Parsing', () => {
    it('should parse hwb() format correctly', () => {
      expect(new Color('hwb(240, 100%, 50.5%)').rgb).toEqual({r: 169, g: 169, b: 169, a: 1});
      expect(new Color('hwb(244, 100%, 100%, 0.6)').rgb).toEqual({r: 128, g: 128, b: 128, a: 0.6});
    });

    it('should parse hsv() format correctly', () => {
      expect(new Color('hsv(240, 100%, 50.5%)').rgb).toEqual({r: 0, g: 0, b: 129, a: 1});
      expect(new Color('hsv(244, 100%, 100%, 0.6)').rgb).toEqual({r: 17, g: 0, b: 255, a: 0.6});
    });

    it('should parse named colors correctly', () => {
      expect(new Color('blue').rgb).toEqual({r: 0, g: 0, b: 255, a: 1});
      expect(new Color('BluE').rgb).toEqual({r: 0, g: 0, b: 255, a: 1});
      expect(new Color('moccasin').rgb).toEqual({r: 255, g: 228, b: 181, a: 1});
      expect(new Color('transparent').rgb).toEqual({r: 0, g: 0, b: 0, a: 0});
    });

    it('should handle invalid color names', () => {
      expect(new Color('yellowblue').rgb).toBeUndefined();
      expect(new Color('yellowblue').hexString()).toBeUndefined();
    });
  });

  describe('Object and Array Parsing', () => {
    it('should parse RGB object correctly', () => {
      expect(new Color({r: 255, g: 254, b: 253}).rgb).toEqual({r: 255, g: 254, b: 253, a: 1});
      expect(new Color({r: 255, g: 254, b: 253, a: 0.3}).rgb).toEqual({r: 255, g: 254, b: 253, a: 0.3});
    });

    it('should parse RGB array correctly', () => {
      expect(new Color([255, 254, 253]).rgb).toEqual({r: 255, g: 254, b: 253, a: 1});
      expect(new Color([255, 254, 253, 0.5]).rgb).toEqual({r: 255, g: 254, b: 253, a: 0.5});
    });
  });
});

describe('Color String Output', () => {
  it('should output correct hex strings', () => {
    expect(new Color('#45ab45ed').hexString()).toBe('#45AB45ED');
    expect(new Color('hsl(100, 50%, 50%)').hexString()).toBe('#6ABF40');
    expect(new Color('hsl(100, 50%, 75%)').hexString()).toBe('#B5DF9F');
    expect(new Color('#123').hexString()).toBe('#123');
    expect(new Color('#123F').hexString()).toBe('#123');
    expect(new Color('#112233').hexString()).toBe('#123');
    expect(new Color('#112233FF').hexString()).toBe('#123');
  });

  it('should output correct rgb strings', () => {
    expect(new Color('rgba(10, 10, 10, 0.8)').rgbString()).toBe('rgba(10, 10, 10, 0.8)');
    expect(new Color('rgb(255, 0, 0)').rgbString()).toBe('rgb(255, 0, 0)');
  });

  it('should output correct hsl strings', () => {
    expect(new Color('hsl(100, 50%, 50%)').hslString()).toBe('hsl(100, 50%, 50%)');
    expect(new Color('rgb(54, 162, 235)').hslString()).toBe('hsl(204, 82%, 57%)');
  });
});

describe('Color Manipulation', () => {
  describe('Alpha Manipulation', () => {
    it('should adjust alpha correctly', () => {
      expect(new Color('#7743CE').alpha(0.5).lighten(0.5).hslString()).toBe('hsla(262, 58%, 80%, 0.5)');
      expect(new Color('rgba(10, 10, 10, 0.8)').clearer(0.5).rgbString()).toBe('rgba(10, 10, 10, 0.4)');
      expect(new Color('rgba(10, 10, 10, 0.8)').opaquer(0.5).rgbString()).toBe('rgb(10, 10, 10)');
    });
  });

  describe('Lightness Manipulation', () => {
    it('should lighten colors correctly', () => {
      expect(new Color('hsl(100, 50%, 50%)').lighten(0.5).hslString()).toBe('hsl(100, 50%, 75%)');
    });

    it('should darken colors correctly', () => {
      expect(new Color('hsl(100, 50%, 50%)').darken(0.5).hslString()).toBe('hsl(100, 50%, 25%)');
    });
  });

  describe('Saturation Manipulation', () => {
    it('should saturate colors correctly', () => {
      expect(new Color('hsl(100, 50%, 50%)').saturate(0.5).hslString()).toBe('hsl(100, 75%, 50%)');
      expect(new Color('hsl(204, 82%, 57%)').saturate(0.5).hslString()).toBe('hsl(204, 100%, 57%)');
      expect(new Color('rgb(54, 162, 235)').saturate(0.5).hslString()).toBe('hsl(204, 100%, 57%)');
      expect(new Color('rgb(54, 162, 235)').saturate(0.5).rgbString()).toBe('rgb(34, 167, 255)');
    });

    it('should desaturate colors correctly', () => {
      expect(new Color('hsl(100, 50%, 50%)').desaturate(0.5).hslString()).toBe('hsl(100, 25%, 50%)');
    });

    it('should convert to greyscale correctly', () => {
      expect(new Color('#5CBF54').greyscale().hexString()).toBe('#969696');
    });
  });

  describe('Hue Manipulation', () => {
    it('should rotate hue correctly', () => {
      expect(new Color('hsl(60, 20%, 20%)').rotate(180).hslString()).toBe('hsl(240, 20%, 20%)');
      expect(new Color('hsl(60, 20%, 20%)').rotate(-90).hslString()).toBe('hsl(330, 20%, 20%)');
    });
  });

  describe('Color Negation', () => {
    it('should negate colors correctly', () => {
      expect(new Color('rgb(0, 100, 255)').negate().rgbString()).toBe('rgb(255, 155, 0)');
    });
  });

  describe('Color Mixing', () => {
    it('should mix colors correctly', () => {
      expect(new Color('cyan').mix(new Color('yellow')).rgbString()).toBe('rgb(128, 255, 128)');
      expect(new Color('cyan').mix(new Color('yellow'), 0.3).rgbString()).toBe('rgb(179, 255, 77)');
    });
  });

  describe('Color Interpolation', () => {
    it('should interpolate between colors correctly', () => {
      expect(new Color('red').interpolate(new Color('green'), 0).rgbString()).toBe('rgb(255, 0, 0)');
      expect(new Color('red').interpolate(new Color('green'), 0.25).rgbString()).toBe('rgb(225, 65, 0)');
      expect(new Color('red').interpolate(new Color('green'), 0.5).rgbString()).toBe('rgb(188, 92, 0)');
      expect(new Color('red').interpolate(new Color('green'), 0.75).rgbString()).toBe('rgb(137, 112, 0)');
      expect(new Color('red').interpolate(new Color('green'), 1).rgbString()).toBe('rgb(0, 128, 0)');
    });

    it('should interpolate colors with alpha correctly', () => {
      expect(new Color('#fefa').interpolate(new Color('#ced5'), 0.6).hexString()).toBe('#E2EDEC77');
    });
  });

  describe('Other Operations', () => {
    it('should clone colors correctly', () => {
      expect(new Color('rgba(10, 10, 10, 0.8)').clone().rgbString()).toBe('rgba(10, 10, 10, 0.8)');
    });
  });
});

describe('Edge Cases and Invalid Inputs', () => {
  it('should handle invalid color values gracefully', () => {
    expect(new Color('invalid-color-value').lighten(0.1).hslString()).toBeUndefined();
    expect(new Color('invalid-color-value').mix(undefined, 0.5).rgbString()).toBeUndefined();
  });

  it('should handle extreme RGB values', () => {
    expect(new Color('rgb(255, 255, 255)').rgb).toEqual({r: 255, g: 255, b: 255, a: 1});
    expect(new Color('rgb(0, 0, 0)').rgb).toEqual({r: 0, g: 0, b: 0, a: 1});
  });

  it('should handle extreme HSL values', () => {
    expect(new Color('hsl(0, 100%, 100%)').rgb).toEqual({r: 255, g: 255, b: 255, a: 1});
    expect(new Color('hsl(0, 0%, 0%)').rgb).toEqual({r: 0, g: 0, b: 0, a: 1});
    expect(new Color('hsl(360, 100%, 50%)').rgb).toEqual({r: 255, g: 0, b: 0, a: 1});
  });

  it('should handle hue wrapping correctly', () => {
    expect(new Color('hsl(360, 50%, 50%)').hslString()).toBe('hsl(0, 50%, 50%)');
    expect(new Color('hsl(720, 50%, 50%)').hslString()).toBe('hsl(0, 50%, 50%)');
    expect(new Color('hsl(-360, 50%, 50%)').hslString()).toBe('hsl(0, 50%, 50%)');
  });

  it('should handle alpha clamping correctly', () => {
    expect(new Color('rgba(255, 0, 0, 1.5)').rgb).toEqual({r: 255, g: 0, b: 0, a: 1});
    expect(new Color('rgba(255, 0, 0, -0.5)').rgb).toEqual({r: 255, g: 0, b: 0, a: 0});
  });
});
