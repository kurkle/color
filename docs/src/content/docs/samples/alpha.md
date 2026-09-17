---
title: Alpha and how it blends
description: alpha, clearer and opaquer over a checkerboard, and why mix() is not alpha-blind.
---

The checkerboard behind each row shows through wherever a colour is transparent.
`alpha()` sets it outright; `clearer()` and `opaquer()` nudge it by a ratio, and — because
each transform mutates — every step below clones the previous swatch before nudging it
again. The last row mixes the same two colours at the same 50/50 weight twice: once both
fully opaque, once with one of them mostly transparent. `mix()` folds alpha into the
weighting, so the transparent pairing leans hard toward the opaque colour instead of
splitting the difference.

```js chart-editor height=280
// <block:config:0>
const config = {
  render: () => {
    const base = '#2f6fed'

    const alphaRow = [1, 0.8, 0.6, 0.4, 0.2, 0].map((a) => new color.Color(base).alpha(a).hexString())

    const clearerRow = []
    let clearing = new color.Color(base)
    clearerRow.push(clearing.hexString())
    for (let i = 0; i < 4; i++) {
      clearing = clearing.clone().clearer(0.35)
      clearerRow.push(clearing.hexString())
    }

    const opaquerRow = []
    let opaquing = new color.Color(base).alpha(0.2)
    opaquerRow.push(opaquing.hexString())
    for (let i = 0; i < 3; i++) {
      opaquing = opaquing.clone().opaquer(0.5)
      opaquerRow.push(opaquing.hexString())
    }

    const red = new color.Color('#ff0000')
    const blue = new color.Color('#0000ff')
    const bothOpaque = red.clone().mix(blue.clone(), 0.5).hexString()
    const oneTransparent = red.clone().mix(blue.clone().alpha(0.15), 0.5).hexString()

    return [
      { label: 'alpha()', swatches: alphaRow },
      { label: 'clearer()', swatches: clearerRow },
      { label: 'opaquer()', swatches: opaquerRow },
      {
        label: 'mix() by alpha',
        swatches: [
          { css: bothOpaque, label: 'both opaque' },
          { css: oneTransparent, label: 'one transparent' },
        ],
      },
    ]
  },
}
// </block:config>

module.exports = { config }
```
