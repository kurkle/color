---
title: Transforming
description: The methods that modify a Color in place.
---

All the methods on this page **mutate the `Color` instance and return it**, so calls
can be chained. If you still need the original color afterwards, call `clone()` first:

```js
const base = new Color("#3366cc")
const lighter = base.clone().lighten(0.2)

base.hexString() // "#36C" - unchanged
lighter.hexString() // "#5C85D6"
```

## mix

Mixes another color into this one. `weight` is how much of `this` color to keep,
defaulting to `0.5`.

```js
new Color("#ff0000").mix(new Color("#0000ff"), 0.5).hexString() // "#800080"
```

## interpolate

Interpolates towards `color` by `t` (0..1), in linear sRGB space — a smoother
transition than `mix` for larger steps.

```js
new Color("#ff0000").interpolate(new Color("#0000ff"), 0.5).hexString() // "#BC00BC"
```

## lighten / darken

Adjust HSL lightness by a ratio (0..1).

```js
new Color("#3366cc").lighten(0.2).hexString() // "#5C85D6"
new Color("#3366cc").darken(0.2).hexString() // "#2952A3"
```

## saturate / desaturate

Adjust HSL saturation by a ratio (0..1).

```js
new Color("#6699cc").saturate(0.3).hexString() // "#5799DB"
new Color("#6699cc").desaturate(0.3).hexString() // "#7599BD"
```

## alpha / clearer / opaquer

`alpha` sets the alpha channel directly (0..1). `clearer` and `opaquer` scale the
current alpha by a ratio (0..1).

```js
new Color("#ff0000").alpha(0.5).rgbString() // "rgba(255, 0, 0, 0.5)"
new Color("rgba(255, 0, 0, 0.8)").clearer(0.5).rgbString() // "rgba(255, 0, 0, 0.4)"
new Color("rgba(255, 0, 0, 0.4)").opaquer(0.5).rgbString() // "rgba(255, 0, 0, 0.6)"
```

## rotate

Rotates the hue by the given degrees.

```js
new Color("#ff0000").rotate(120).hexString() // "#0F0"
```

## negate

Inverts the r, g and b channels; alpha is untouched.

```js
new Color("#3366cc").negate().hexString() // "#C93"
```

## greyscale

Converts to grayscale using the perceptual luma weights (0.3, 0.59, 0.11).

```js
new Color("#3366cc").greyscale().hexString() // "#626262"
```
