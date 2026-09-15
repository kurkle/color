---
title: Parsing
description: Every color syntax the Color constructor accepts.
---

`new Color(input)` accepts a CSS color string, an `{r, g, b, a}` object, or an
`[r, g, b, a]` array. This page lists every supported string syntax. Check
`color.valid` (or that a formatting method didn't return `undefined`) to detect an
unparsable input.

## Hex

3, 4, 6 and 8 digit hex are all supported; 4 and 8 digit forms carry alpha.

```js
new Color("#0f0").rgbString() // "rgb(0, 255, 0)"
new Color("#0f08").rgbString() // "rgba(0, 255, 0, 0.53)"
new Color("#00ff00").rgbString() // "rgb(0, 255, 0)"
new Color("#00ff0080").rgbString() // "rgba(0, 255, 0, 0.5)"
```

## Named colors

Any [CSS named color](https://developer.mozilla.org/en-US/docs/Web/CSS/named-color),
plus `transparent`.

```js
new Color("rebeccapurple").rgbString() // "rgb(102, 51, 153)"
new Color("transparent").rgbString() // "rgba(0, 0, 0, 0)"
```

## rgb() / rgba()

Numbers and percentages can be mixed, comma or space separated, and the alpha channel
can use either a trailing argument or the `/` form.

```js
new Color("rgb(255, 0, 0)").hexString() // "#F00"
new Color("rgba(255, 0, 0, 0.5)").hexString() // "#FF00007F"
new Color("rgb(100%, 0%, 0%)").hexString() // "#F00"
new Color("rgb(255 0 0 / 50%)").hexString() // "#FF00007F"
```

## hsl() / hsla()

```js
new Color("hsl(120, 100%, 50%)").hexString() // "#0F0"
new Color("hsla(120, 100%, 50%, 0.5)").hexString() // "#00FF0080"
```

## hwb()

Hue, whiteness and blackness — no `a` suffix, but it still accepts an optional alpha.

```js
new Color("hwb(120, 20%, 20%)").hexString() // "#3C3"
```

## hsv()

Hue, saturation, value. **Not a CSS syntax** — this is a `@kurkle/color` extension,
useful when converting from color pickers that work in HSV.

```js
new Color("hsv(120, 100%, 100%)").hexString() // "#0F0"
```

## oklch()

Lightness, chroma and hue in the [OKLCH](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/oklch)
color space. Lightness and chroma accept either a plain number or a percentage; hue
accepts a bare number of degrees, or a `deg`, `rad`, `grad` or `turn` unit; any
component can be `none`, which is treated as `0`.

```js
new Color("oklch(0.7 0.15 200)").hexString() // "#00B9C3"
new Color("oklch(70% 0.15 200deg)").hexString() // "#00B9C3"
new Color("oklch(0.7 0.15 3.4907rad)").hexString() // "#00B9C3"
new Color("oklch(0.7 0.15 0.5556turn)").hexString() // "#00B9C3"
new Color("oklch(0.7 0.15 200 / 50%)").hexString() // "#00B9C37F"
new Color("oklch(none 0.15 200)").hexString() // "#000103"
```

Out-of-gamut `oklch()` colors are clipped to sRGB, matching what browsers draw on a
canvas — there is no CSS gamut-mapping or chroma reduction.

```js
new Color("oklch(0.9 0.4 145)").hexString() // "#0F0" - clipped to the closest in-gamut byte
```
