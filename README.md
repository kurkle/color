# @kurkle/color

[![npm](https://img.shields.io/npm/v/@kurkle/color?style=plastic)](https://www.npmjs.com/package/@kurkle/color) [![release](https://img.shields.io/github/release/kurkle/color.svg?style=plastic)](https://github.com/kurkle/color/releases/latest) [![npm bundle size](https://img.shields.io/bundlephobia/minzip/@kurkle/color?style=plastic)](https://www.npmjs.com/package/@kurkle/color) [![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/kurkle/color/ci.yml?style=plastic)](https://github.com/kurkle/color) [![GitHub](https://img.shields.io/github/license/kurkle/color?style=plastic)](https://github.com/kurkle/color/blob/main/LICENSE.md)

## Overview

Fast and small CSS color parsing and manipulation library.

## Parsing

Supported formats:

- named

```text
blue
transparent
```

- hex

```text
#aaa
#bbba
#1A2b3c
#f1f2f388
```

- rgb(a)

```text
rgb(255, 255, 255)
rgb(255, 0, 0, 0.5)
rgb(50%, 50%, 50%, 50%)
rgb(0 0 100% / 80%)
rgba(200, 20, 233, 0.2)
rgba(200, 20, 233, 2e-1)
```

- hsl(a)

```text
hsl(240deg, 100%, 50.5%)
hsl(0deg 100% 50%)
hsla(12, 10%, 50%, .3)
hsla(-1.2, 10.2%, 50.9%, 0.4)
```

- hwb

```text
hwb(240, 100%, 50.5%)
hwb(244, 100%, 100%, 0.6)
```

- hsv

```text
hsv(240, 100%, 50.5%)
hsv(244, 100%, 100%, 0.6)
```

## Docs

[typedocs](https://kurkle.github.io/color/)

**note** The docs are for the ESM module. UMD module only exports the [default export](https://kurkle.github.io/color/modules.html#default)

### Documentation Generation

The documentation is automatically generated using TypeDoc and deployed to GitHub Pages whenever changes are pushed to the main branch.

To generate documentation locally:

```bash
npm run docs
```

This will create documentation in the `docs` directory, which you can preview locally before pushing changes.

## Benchmarks

[benchmarks](https://kurkle.github.io/color/dev/bench/)

## Size visualization

[color.min.js](https://kurkle.github.io/color/stats.html)

## License

`@kurkle/color` is available under the [MIT license](https://github.com/kurkle/color/blob/main/LICENSE.md).
