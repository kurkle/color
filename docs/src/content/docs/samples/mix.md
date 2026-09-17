---
title: Mix and interpolate
description: The same two colours blended two ways, and why the answers differ.
---

`mix()` blends in the sRGB values you see in a hex string. `interpolate()` converts to
linear light first, blends there, and converts back. Halfway between black and white,
`mix()` gives `#808080` and `interpolate()` gives `#BCBCBC` — a difference of 60 in every
channel, which is why the two strips below do not line up.

```js chart-editor height=250
// <block:config:0>
const config = {
  from: 'black',
  to: 'white',
  steps: 9,
  render: ({ from, to, steps }) => {
    const a = new color.Color(from)
    const b = new color.Color(to)
    const mixed = []
    const interpolated = []
    for (let i = 0; i < steps; i++) {
      const t = i / (steps - 1)
      mixed.push(a.clone().mix(b, 1 - t).hexString())
      interpolated.push(a.clone().interpolate(b, t).hexString())
    }
    return [
      { label: 'mix()', swatches: mixed },
      { label: 'interpolate()', swatches: interpolated },
    ]
  },
}
// </block:config>

module.exports = {
  config,
  choices: [
    { path: 'from', values: ['black', 'red', 'navy', '#004400'], control: 'radio', label: 'From' },
    { path: 'to', values: ['white', 'lime', 'orange', '#ffcc00'], control: 'radio', label: 'To' },
  ],
}
```
