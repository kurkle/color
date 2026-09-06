import { color, getHoverColor } from 'chart.js/helpers'

import assert from 'node:assert/strict'
import { test } from 'node:test'

// Chart.js does not import this package's `Color` class directly in
// application code. Instead, Chart.js itself (and any plugin built against
// its public `chart.js/helpers` API, e.g. chartjs-plugin-autocolors) calls
// two small helpers, `color()` and `getHoverColor()`, that wrap
// `@kurkle/color`:
//
//   function color(value) {
//     return isPatternOrGradient(value) ? value : new Color(value)
//   }
//   function getHoverColor(value) {
//     return isPatternOrGradient(value) ? value : new Color(value).saturate(0.5).darken(0.1).hexString()
//   }
//
// That is the runtime contract this package must not break: a named `Color`
// export, `new Color(input)`, chainable `saturate()`/`darken()`, and
// `hexString()` - including its `undefined` return for invalid input.
//
// This fixture's own `package.json` `overrides` field forces chart.js's own
// `@kurkle/color` dependency (chart.js declares ^0.3.0) to resolve to this
// repo instead, so importing `chart.js/helpers` below runs Chart.js's real,
// installed code against this repo's own built `dist/color.esm.js`
// artifact - the same artifact real consumers get from npm - through the
// same `exports` entry point a real consumer would use. That's what makes
// this an integration test rather than a hand-rolled re-creation of the
// pattern: it fails if this package's `exports` map stops resolving
// correctly for Chart.js, not just if `Color`'s behavior changes.

test('color() wraps a valid CSS color string in a Color instance', () => {
  assert.equal(color('#ff0000').hexString(), '#F00')
})

test('color() wraps an invalid CSS color string in an invalid Color instance', () => {
  assert.equal(color('not-a-color').hexString(), undefined)
})

test('getHoverColor works through chart.js against the local build', () => {
  // Values measured directly against this repo's built dist, running
  // through chart.js's actual getHoverColor() implementation.
  assert.equal(getHoverColor('#ff0000'), '#E60000')
  assert.equal(getHoverColor('rgb(0,128,255)'), '#0073E6')
  assert.equal(getHoverColor('red'), '#E60000')
  assert.equal(getHoverColor('#abc'), '#88A8C9')
  assert.equal(getHoverColor('rgba(1,2,3,0.5)'), '#0102047F')
})

test('getHoverColor returns undefined for an invalid CSS color string', () => {
  assert.equal(getHoverColor('not-a-color'), undefined)
})
