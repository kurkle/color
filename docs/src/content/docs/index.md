---
title: "@kurkle/color"
description: Fast and small CSS color parsing and manipulation.
---

`@kurkle/color` parses CSS color strings and lets you read, convert and manipulate the
result through a small `Color` class. It supports hex, named colors, `rgb()`, `hsl()`,
`hwb()`, `hsv()` and `oklch()`.

## Install

```bash
npm install @kurkle/color
```

## First example

```js
import { Color } from "@kurkle/color"

const color = new Color("oklch(0.7 0.15 200)")

color.valid // true
color.hexString() // "#00B9C3"
color.darken(0.2).rgbString() // "rgb(0, 148, 156)"
```

See [Parsing](/parsing/) for every supported syntax, [Formatting](/formatting/) for
turning a color back into a string, and [Transforming](/transforming/) for the mutating
methods like `mix`, `lighten` and `rotate`.
