/**
 * @packageDocumentation
 * @module index
 */

import * as color from './index.esm.js'

// Re-export the named exports too: this entry builds dist/color.cjs (the
// `require` condition and `main`) and dist/index.d.ts (the top-level `types`
// read by `moduleResolution: node10`), so without this `require()` consumers
// such as Chart.js's CommonJS build lose `Color` at runtime, and node10
// consumers lose it in the types.
export * from './index.esm.js'

export default Object.assign(color.default, color)
