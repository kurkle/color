---
title: Formatting
description: Turning a Color back into a string.
---

Every formatting method returns `undefined` when the color is invalid, so they can be
used directly without a separate validity check.

## hexString

Hex output is uppercase, and shortened to 3 or 4 digits whenever every channel's two
hex digits are equal (falling back to 6 or 8 digits otherwise). It carries alpha only
when the color isn't fully opaque.

```js
new Color("rgb(0, 255, 0)").hexString() // "#0F0"
new Color("rgba(0, 255, 0, 0.5)").hexString() // "#00FF007F"
new Color("nope").hexString() // undefined
```

## rgbString

`rgb(...)`, or `rgba(...)` when the color has alpha.

```js
new Color("#00ff00").rgbString() // "rgb(0, 255, 0)"
new Color("#00ff0080").rgbString() // "rgba(0, 255, 0, 0.5)"
new Color("nope").rgbString() // undefined
```

## hslString

`hsl(...)`, or `hsla(...)` when the color has alpha.

```js
new Color("#00ff00").hslString() // "hsl(120, 100%, 50%)"
new Color("#00ff0080").hslString() // "hsla(120, 100%, 50%, 0.5)"
new Color("nope").hslString() // undefined
```

## oklchString

`oklch(l c h)`, or `oklch(l c h / a)` when the color has alpha. `l` is [0..1], `c` is
the OKLCH chroma, and `h` is in degrees.

```js
new Color("#00ff00").oklchString() // "oklch(0.8664 0.2948 142.5)"
new Color("#00ff0080").oklchString() // "oklch(0.8664 0.2948 142.5 / 0.5)"
new Color("nope").oklchString() // undefined
```
