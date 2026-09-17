---
title: OKLCH picker
description: Move the three OKLCH axes and read the same colour in every notation.
---

```js chart-editor height=200
// <block:config:0>
const config = {
  l: 0.7,
  c: 0.15,
  h: 200,
  render: ({ l, c, h }) => {
    const rgb = color.oklchParse(`oklch(${l} ${c} ${h})`)
    return [
      { css: color.hexString(rgb) },
      { css: color.rgbString(rgb) },
      { css: color.hslString(rgb) },
      { css: color.oklchString(rgb) },
    ]
  },
}
// </block:config>

module.exports = {
  config,
  choices: [
    { path: 'l', min: 0, max: 1, step: 0.01, label: 'Lightness' },
    { path: 'c', min: 0, max: 0.4, step: 0.01, label: 'Chroma' },
    { path: 'h', min: 0, max: 360, step: 1, label: 'Hue' },
  ],
}
```
