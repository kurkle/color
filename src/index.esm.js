/**
 * @packageDocumentation
 * @module index
 */

import Color from './color';

export {Color};
export * from './byte';
export * from './hex';
export * from './hue';
export * from './names';
export * from './rgb';

/**
 * @typedef {Object} RGBA
 * @property {number} r - red [0..255]
 * @property {number} g - green [0..255]
 * @property {number} b - blue [0..255]
 * @property {number} a - alpha [0..1]
 * @internal
 */

/**
 * Construct new Color instance
 * @param {Color|RGBA|string|number[]} input
 * @internal
 */
export default function(input) {
  return new Color(input);
}
