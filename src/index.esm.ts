/**
 * @packageDocumentation
 * @module index
 */

import Color, {RGBA} from './color.js';

export {Color, RGBA};
export * from './byte.js';
export * from './hex.js';
export * from './hue.js';
export * from './names.js';
export * from './rgb.js';
export * from './srgb.js';

/**
 * Construct new Color instance
 * @param input
 * @internal
 */
export default function(input: Color | RGBA | string | number[]): Color {
  return new Color(input);
}
