# @kurkle/color

[![release](https://img.shields.io/github/release/kurkle/color.svg?style=flat-square)](https://github.com/kurkle/color/releases/latest)

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
```

- hsl(a)

```text
hsl(240deg, 100%, 50.5%)
hsl(0deg 100% 50%)
hsla(12, 10%, 50%, .3)
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

## Benchmarks against other libraries

```bash
node test/compare

parsing "#d6F":
 - @kurkle/color x 27,637,085 ops/sec ±8.02% (68 runs sampled)
 - chartjs-color x 753,149 ops/sec ±2.31% (69 runs sampled)
 - tinycolor2 x 548,107 ops/sec ±0.54% (77 runs sampled)
 - chroma-js x 576,903 ops/sec ±1.96% (73 runs sampled)
 - color-parse x 2,627,980 ops/sec ±0.63% (77 runs sampled)
 - color-parser x 2,441,614 ops/sec ±0.68% (74 runs sampled)
 - color-string x 1,727,209 ops/sec ±1.29% (75 runs sampled)
fastest is @kurkle/color
952% faster than 2nd fastest color-parse
3570% faster than chartjs-color

parsing "#AABB":
 - @kurkle/color x 6,267,293 ops/sec ±0.86% (77 runs sampled)
 - chartjs-color x 435,975 ops/sec ±0.65% (76 runs sampled)
 - tinycolor2 x 478,437 ops/sec ±0.85% (73 runs sampled)
 - chroma-js x 480,046 ops/sec ±0.37% (77 runs sampled)
 - color-parse x 1,845,329 ops/sec ±0.93% (74 runs sampled)
 - color-parser: failedfailed
 - color-string x 1,424,083 ops/sec ±0.67% (78 runs sampled)
fastest is @kurkle/color
240% faster than 2nd fastest color-parse
1338% faster than chartjs-color

parsing "#555555":
 - @kurkle/color x 5,394,154 ops/sec ±0.68% (76 runs sampled)
 - chartjs-color x 457,965 ops/sec ±1.94% (74 runs sampled)
 - tinycolor2 x 672,741 ops/sec ±0.61% (77 runs sampled)
 - chroma-js x 665,565 ops/sec ±0.91% (74 runs sampled)
 - color-parse x 2,359,175 ops/sec ±0.35% (77 runs sampled)
 - color-parser x 3,007,251 ops/sec ±1.14% (75 runs sampled)
 - color-string x 2,062,685 ops/sec ±0.66% (75 runs sampled)
fastest is @kurkle/color
79% faster than 2nd fastest color-parser
1078% faster than chartjs-color

parsing "#a7a7a779":
 - @kurkle/color x 4,024,789 ops/sec ±1.02% (73 runs sampled)
 - chartjs-color x 432,405 ops/sec ±2.10% (73 runs sampled)
 - tinycolor2 x 617,317 ops/sec ±1.14% (76 runs sampled)
 - chroma-js x 589,078 ops/sec ±0.94% (74 runs sampled)
 - color-parse x 1,872,920 ops/sec ±0.71% (76 runs sampled)
 - color-parser: failedfailed
 - color-string x 1,719,312 ops/sec ±0.84% (73 runs sampled)
fastest is @kurkle/color
115% faster than 2nd fastest color-parse
831% faster than chartjs-color

parsing "rgb(255, 0, 0)":
 - @kurkle/color x 2,365,025 ops/sec ±0.56% (74 runs sampled)
 - chartjs-color x 446,212 ops/sec ±1.86% (76 runs sampled)
 - tinycolor2 x 766,364 ops/sec ±0.47% (77 runs sampled)
 - chroma-js x 100,814 ops/sec ±0.83% (77 runs sampled)
 - color-parse x 917,680 ops/sec ±1.07% (76 runs sampled)
 - color-parser x 1,188,128 ops/sec ±0.90% (75 runs sampled)
 - color-string x 2,030,049 ops/sec ±0.89% (73 runs sampled)
fastest is @kurkle/color
17% faster than 2nd fastest color-string
430% faster than chartjs-color

parsing "rgba(255, 0, 0, 0.5)":
 - @kurkle/color x 1,557,290 ops/sec ±0.36% (77 runs sampled)
 - chartjs-color x 434,288 ops/sec ±1.08% (77 runs sampled)
 - tinycolor2 x 651,416 ops/sec ±0.89% (74 runs sampled)
 - chroma-js x 96,468 ops/sec ±1.01% (75 runs sampled)
 - color-parse x 680,018 ops/sec ±0.56% (76 runs sampled)
 - color-parser x 850,328 ops/sec ±0.98% (76 runs sampled)
 - color-string x 1,580,234 ops/sec ±1.42% (73 runs sampled)
fastest is color-string
1% faster than 2nd fastest @kurkle/color
264% faster than chartjs-color

parsing "hsla(240, 100, 60, 0.5)":
 - @kurkle/color x 3,819,817 ops/sec ±0.78% (75 runs sampled)
 - chartjs-color x 1,464,955 ops/sec ±1.58% (73 runs sampled)
 - tinycolor2 x 453,699 ops/sec ±0.42% (78 runs sampled)
 - chroma-js: Error: unknown format: hsla(240, 100, 60, 0.5)
 - color-parse x 578,086 ops/sec ±1.11% (71 runs sampled)
 - color-parser: failedfailed
 - color-string: failedfailed
fastest is @kurkle/color
161% faster than 2nd fastest chartjs-color

parsing "blue":
 - @kurkle/color x 11,339,336 ops/sec ±2.47% (74 runs sampled)
 - chartjs-color x 845,301 ops/sec ±0.75% (76 runs sampled)
 - tinycolor2 x 629,162 ops/sec ±0.32% (77 runs sampled)
 - chroma-js x 642,859 ops/sec ±1.74% (76 runs sampled)
 - color-parse x 8,300,019 ops/sec ±1.44% (75 runs sampled)
 - color-parser x 14,271,235 ops/sec ±2.10% (70 runs sampled)
 - color-string x 2,964,316 ops/sec ±0.66% (75 runs sampled)
fastest is color-parser
26% faster than 2nd fastest @kurkle/color
1588% faster than chartjs-color

alpha:
 - @kurkle/color x 562,575,461 ops/sec ±0.33% (77 runs sampled)
 - chroma-js x 731,205 ops/sec ±0.62% (73 runs sampled)
 - chartjs-color x 72,756,886 ops/sec ±0.83% (75 runs sampled)
fastest is @kurkle/color
673% faster than 2nd fastest chartjs-color

negate:
 - @kurkle/color x 269,594,117 ops/sec ±0.42% (76 runs sampled)
 - chroma-js: TypeError: c1.negate is not a function
 - chartjs-color x 724,144 ops/sec ±2.73% (69 runs sampled)
fastest is @kurkle/color
37129% faster than 2nd fastest chartjs-color

lighten:
 - @kurkle/color x 4,397,728 ops/sec ±0.98% (78 runs sampled)
 - chroma-js: TypeError: c1.lighten is not a function
 - chartjs-color x 890,983 ops/sec ±0.55% (77 runs sampled)
fastest is @kurkle/color
394% faster than 2nd fastest chartjs-color

darken:
 - @kurkle/color x 4,284,134 ops/sec ±1.01% (75 runs sampled)
 - chroma-js x 382,398 ops/sec ±1.25% (76 runs sampled)
 - chartjs-color x 890,571 ops/sec ±0.72% (71 runs sampled)
fastest is @kurkle/color
381% faster than 2nd fastest chartjs-color

saturate:
 - @kurkle/color x 4,503,388 ops/sec ±0.57% (76 runs sampled)
 - chroma-js x 251,772 ops/sec ±1.18% (77 runs sampled)
 - chartjs-color x 825,229 ops/sec ±0.65% (76 runs sampled)
fastest is @kurkle/color
446% faster than 2nd fastest chartjs-color

desaturate:
 - @kurkle/color x 4,321,816 ops/sec ±1.45% (72 runs sampled)
 - chroma-js x 247,255 ops/sec ±1.09% (73 runs sampled)
 - chartjs-color x 820,200 ops/sec ±0.80% (76 runs sampled)
fastest is @kurkle/color
427% faster than 2nd fastest chartjs-color

clearer:
 - @kurkle/color x 11,654,284 ops/sec ±2.25% (73 runs sampled)
 - chroma-js: TypeError: c1.clearer is not a function
 - chartjs-color x 11,807,680 ops/sec ±1.15% (73 runs sampled)
fastest is chartjs-color
1% faster than 2nd fastest @kurkle/color
0% faster than chartjs-color

opaquer:
 - @kurkle/color x 15,692,301 ops/sec ±2.21% (71 runs sampled)
 - chroma-js: TypeError: c1.opaquer is not a function
 - chartjs-color x 35,129,173 ops/sec ±0.89% (77 runs sampled)
fastest is chartjs-color
124% faster than 2nd fastest @kurkle/color
0% faster than chartjs-color

mix:
 - @kurkle/color x 2,422,755 ops/sec ±0.98% (77 runs sampled)
 - chroma-js x 294,015 ops/sec ±1.05% (78 runs sampled)
 - chartjs-color x 595,427 ops/sec ±1.62% (73 runs sampled)
fastest is @kurkle/color
307% faster than 2nd fastest chartjs-color

clone:
 - @kurkle/color x 2,977,462 ops/sec ±0.85% (77 runs sampled)
 - chroma-js: TypeError: c1.clone is not a function
 - chartjs-color x 2,063,402 ops/sec ±0.76% (75 runs sampled)
fastest is @kurkle/color
44% faster than 2nd fastest chartjs-color
```

## License

`@kurkle/color` is available under the [MIT license](LICENSE.md).
