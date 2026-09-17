---
title: Out-of-gamut oklch
description: A row of oklch() swatches with rising chroma, and where sRGB runs out.
---

Lightness and hue are fixed; chroma rises from 0 up to the slider's value across the row.
Push the slider up and watch the right-hand swatches stop changing — that flat tail is
sRGB clipping, not a rendering bug.

`@kurkle/color` clips out-of-gamut `oklch()` colours to sRGB, the same way a browser
clips them when painting a `<canvas>`, rather than running the CSS gamut-mapping
algorithm a browser uses for `color: oklch(...)` on an element. Measured against
Chromium and Firefox, the canvas result matches this package, not the gamut-mapped one.

```js chart-editor height=220
// <block:config:0>
const config = {
  l: 0.75,
  h: 145,
  maxChroma: 0.4,
  render: ({ l, h, maxChroma }) => {
    const steps = 8
    const swatches = []
    for (let i = 0; i < steps; i++) {
      const c = (maxChroma * i) / (steps - 1)
      const rgb = color.oklchParse(`oklch(${l} ${c} ${h})`)
      swatches.push({ css: color.hexString(rgb), label: c.toFixed(2) })
    }
    return swatches
  },
}
// </block:config>

module.exports = {
  config,
  choices: [{ path: 'maxChroma', min: 0.1, max: 0.5, step: 0.01, label: 'Max chroma' }],
}
```
