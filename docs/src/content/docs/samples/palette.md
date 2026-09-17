---
title: Build a palette from one colour
description: Lighten, darken, saturate, desaturate and rotate a single base colour in steps.
---

Pick a base colour and a step count. Each row starts from the same colour and applies one
transform again and again — `lighten`, `darken`, `saturate`, `desaturate` and `rotate` — so you
can see how far a single, repeated nudge takes you.

```js chart-editor height=320
// <block:config:0>
const config = {
  base: '#3a6ea5',
  steps: 5,
  render: ({ base, steps }) => {
    const ratio = 0.18
    const rotateStep = 40
    const transforms = [
      { fn: 'lighten', label: 'lighten' },
      { fn: 'darken', label: 'darken' },
      { fn: 'saturate', label: 'saturate' },
      { fn: 'desaturate', label: 'desaturate' },
      { fn: 'rotate', label: 'rotate' },
    ]
    return transforms.map(({ fn, label }) => {
      const arg = fn === 'rotate' ? rotateStep : ratio
      // Every transform mutates in place, so each step clones the previous
      // result rather than reapplying the transform to the original colour.
      let current = new color.Color(base)
      const swatches = [current.hexString()]
      for (let i = 1; i < steps; i++) {
        current = current.clone()[fn](arg)
        swatches.push(current.hexString())
      }
      return { label, swatches }
    })
  },
}
// </block:config>

module.exports = {
  config,
  choices: [
    { path: 'base', values: ['#3a6ea5', '#c0392b', '#27ae60', '#8e44ad'], control: 'radio', label: 'Base colour' },
    { path: 'steps', min: 3, max: 7, step: 1, label: 'Steps' },
  ],
}
```
