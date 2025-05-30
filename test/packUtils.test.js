
import {describe, it, expect} from 'vitest';
import names from 'color-name';
import {packColorNames, unpackColorNames} from '../scripts/packUtils.js';

describe('Color name packing utilities', () => {
  // Pack the color names
  const {mapped, mangled, packed} = packColorNames(names);

  // Unpack the color names
  const unpacked = unpackColorNames(mapped, packed);

  it('should pack and unpack all original color names', () => {
    // Get the original color names
    const originalNames = Object.keys(names);
    const unpackedNames = Object.keys(unpacked);

    // Check that all original color names are present in the unpacked result
    expect(unpackedNames.length).toBe(originalNames.length);

    // Check that each original color name exists in the unpacked result
    for (const name of originalNames) {
      expect(unpackedNames).toContain(name);
    }
  });

  it('should preserve the correct RGB values for each color', () => {
    // Check that each color has the correct RGB values
    for (const name of Object.keys(names)) {
      const originalRgb = names[name];
      const unpackedRgb = unpacked[name];

      expect(unpackedRgb).toEqual(originalRgb);
    }
  });

  it('should handle edge cases correctly', () => {
    // Test colors with extreme RGB values
    const edgeCases = [
      'white',       // [255, 255, 255]
      'black',       // [0, 0, 0]
      'red',         // [255, 0, 0]
      'lime',        // [0, 255, 0]
      'blue',        // [0, 0, 255]
      'magenta',     // [255, 0, 255]
      'cyan',        // [0, 255, 255]
      'yellow'       // [255, 255, 0]
    ];

    for (const name of edgeCases) {
      const originalRgb = names[name];
      const unpackedRgb = unpacked[name];

      expect(unpackedRgb).toEqual(originalRgb);
    }
  });

  it('should correctly map compressed names to original names', () => {
    // Check that the mangled names map back to the original names
    const mangledKeys = Object.keys(mangled);

    for (const key of mangledKeys) {
      const originalName = mangled[key];
      expect(names[originalName]).toBeDefined();
    }
  });

  it('should compress the color names effectively', () => {
    // Check that the packed representation is smaller than the original
    const originalSize = JSON.stringify(names).length;
    const packedSize = JSON.stringify(packed).length + JSON.stringify(mapped).length;

    // The packed representation should be smaller than the original
    expect(packedSize).toBeLessThan(originalSize);
    expect(packedSize / originalSize * 100).toBeLessThan(78);
  });
});
