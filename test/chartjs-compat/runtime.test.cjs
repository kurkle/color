const assert = require('node:assert/strict')
const { test } = require('node:test')

// Same contract as runtime.test.mjs, but through Chart.js's CommonJS build
// (dist/helpers.cjs). That build does `require('@kurkle/color')` and then
// `new color.Color(value)`, so it resolves this package through the
// `require` condition (dist/color.cjs) and needs `Color` as a named export
// of `module.exports`, not only under `default`.

const { color, getHoverColor } = require('chart.js/helpers')

test('require: @kurkle/color exposes Color as a named export', () => {
  const kurkle = require('@kurkle/color')
  assert.equal(typeof kurkle.Color, 'function')
  assert.equal(typeof kurkle.default, 'function')
  assert.equal(kurkle.default('#f00').hexString(), '#F00')
})

test('require: color() wraps a valid CSS color string in a Color instance', () => {
  assert.equal(color('#ff0000').hexString(), '#F00')
})

test('require: getHoverColor works through chart.js against the local build', () => {
  assert.equal(getHoverColor('#ff0000'), '#E60000')
  assert.equal(getHoverColor('not-a-color'), undefined)
})
