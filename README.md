# @kurkle/color

## Overview

NOTE: WIP, not released yet.

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
 - @kurkle/color x 63,161,570 ops/sec ±2.64% (77 runs sampled)
 - chartjs-color x 1,124,062 ops/sec ±0.43% (79 runs sampled)
 - tinycolor2 x 955,330 ops/sec ±0.55% (76 runs sampled)
 - chroma-js x 737,623 ops/sec ±0.69% (75 runs sampled)
 - color-parse x 4,024,568 ops/sec ±0.33% (77 runs sampled)
 - color-parser x 4,237,729 ops/sec ±1.69% (78 runs sampled)
 - color-string x 2,673,456 ops/sec ±0.54% (78 runs sampled)
fastest is @kurkle/color
1390% faster than 2nd fastest color-parser
5519% faster than chartjs-color

parsing "#AABB":
 - @kurkle/color x 69,132,903 ops/sec ±0.58% (74 runs sampled)
 - chartjs-color x 1,026,032 ops/sec ±1.57% (75 runs sampled)
 - tinycolor2 x 857,093 ops/sec ±0.38% (78 runs sampled)
 - chroma-js: Error: unknown format: #AABB
 - color-parse x 2,873,641 ops/sec ±0.46% (76 runs sampled)
 - color-parser: failedfailed
 - color-string x 2,242,504 ops/sec ±0.28% (79 runs sampled)
fastest is @kurkle/color
2306% faster than 2nd fastest color-parse
6638% faster than chartjs-color

parsing "#555555":
 - @kurkle/color x 23,569,690 ops/sec ±0.62% (76 runs sampled)
 - chartjs-color x 1,084,882 ops/sec ±0.65% (77 runs sampled)
 - tinycolor2 x 1,125,621 ops/sec ±0.34% (77 runs sampled)
 - chroma-js x 954,635 ops/sec ±0.40% (78 runs sampled)
 - color-parse x 3,559,342 ops/sec ±0.81% (76 runs sampled)
 - color-parser x 4,913,728 ops/sec ±0.86% (77 runs sampled)
 - color-string x 3,242,008 ops/sec ±0.44% (76 runs sampled)
fastest is @kurkle/color
380% faster than 2nd fastest color-parser
2073% faster than chartjs-color

parsing "#a7a7a779":
 - @kurkle/color x 25,766,289 ops/sec ±1.63% (75 runs sampled)
 - chartjs-color x 993,531 ops/sec ±0.22% (72 runs sampled)
 - tinycolor2 x 1,019,513 ops/sec ±0.78% (77 runs sampled)
 - chroma-js x 903,031 ops/sec ±1.28% (74 runs sampled)
 - color-parse x 2,852,934 ops/sec ±0.15% (78 runs sampled)
 - color-parser: failedfailed
 - color-string x 2,528,126 ops/sec ±1.09% (73 runs sampled)
fastest is @kurkle/color
803% faster than 2nd fastest color-parse
2493% faster than chartjs-color

parsing "rgb(255, 0, 0)":
 - @kurkle/color x 4,561,542 ops/sec ±0.60% (77 runs sampled)
 - chartjs-color x 1,049,681 ops/sec ±2.08% (74 runs sampled)
 - tinycolor2 x 1,311,023 ops/sec ±0.98% (75 runs sampled)
 - chroma-js x 1,228,431 ops/sec ±0.75% (74 runs sampled)
 - color-parse x 1,356,254 ops/sec ±3.53% (77 runs sampled)
 - color-parser x 1,994,737 ops/sec ±1.72% (78 runs sampled)
 - color-string x 3,345,024 ops/sec ±1.38% (76 runs sampled)
fastest is @kurkle/color
36% faster than 2nd fastest color-string
335% faster than chartjs-color

parsing "rgba(255, 0, 0, 0.5)":
 - @kurkle/color x 2,726,998 ops/sec ±0.33% (77 runs sampled)
 - chartjs-color x 1,029,488 ops/sec ±0.67% (75 runs sampled)
 - tinycolor2 x 1,111,268 ops/sec ±0.46% (79 runs sampled)
 - chroma-js x 949,500 ops/sec ±0.83% (78 runs sampled)
 - color-parse x 1,058,259 ops/sec ±0.30% (76 runs sampled)
 - color-parser x 1,260,230 ops/sec ±1.36% (75 runs sampled)
 - color-string x 2,513,585 ops/sec ±0.98% (76 runs sampled)
fastest is @kurkle/color
8% faster than 2nd fastest color-string
165% faster than chartjs-color

parsing "hsla(240, 100, 60, 0.5)":
 - @kurkle/color x 9,745,598 ops/sec ±0.35% (76 runs sampled)
 - chartjs-color x 2,434,027 ops/sec ±2.13% (72 runs sampled)
 - tinycolor2 x 785,851 ops/sec ±0.52% (76 runs sampled)
 - chroma-js: Error: unknown format: hsla(240, 100, 60, 0.5)
 - color-parse x 895,608 ops/sec ±0.88% (77 runs sampled)
 - color-parser: failedfailed
 - color-string: failedfailed
fastest is @kurkle/color
300% faster than 2nd fastest chartjs-color

parsing "blue":
 - @kurkle/color x 41,112,412 ops/sec ±1.50% (78 runs sampled)
 - chartjs-color x 1,275,423 ops/sec ±0.84% (75 runs sampled)
 - tinycolor2 x 1,056,602 ops/sec ±0.91% (75 runs sampled)
 - chroma-js x 1,136,324 ops/sec ±1.65% (78 runs sampled)
 - color-parse x 19,660,433 ops/sec ±1.01% (77 runs sampled)
 - color-parser x 25,270,275 ops/sec ±1.89% (76 runs sampled)
 - color-string x 5,169,485 ops/sec ±0.88% (76 runs sampled)
fastest is @kurkle/color
63% faster than 2nd fastest color-parser
3123% faster than chartjs-color

alpha:
 - @kurkle/color x 967,919,102 ops/sec ±0.18% (75 runs sampled)
 - chroma-js x 1,279,594 ops/sec ±0.88% (74 runs sampled)
 - chartjs-color x 129,291,111 ops/sec ±0.34% (78 runs sampled)
fastest is @kurkle/color
649% faster than 2nd fastest chartjs-color

negate:
 - @kurkle/color x 484,351,041 ops/sec ±0.15% (70 runs sampled)
 - chroma-js: TypeError: c1.negate is not a function
 - chartjs-color x 1,362,146 ops/sec ±0.76% (77 runs sampled)
fastest is @kurkle/color
35458% faster than 2nd fastest chartjs-color

lighten:
 - @kurkle/color x 28,767,273 ops/sec ±1.13% (77 runs sampled)
 - chroma-js: TypeError: c1.lighten is not a function
 - chartjs-color x 1,634,607 ops/sec ±0.23% (78 runs sampled)
fastest is @kurkle/color
1660% faster than 2nd fastest chartjs-color

darken:
 - @kurkle/color x 9,392,494 ops/sec ±1.70% (78 runs sampled)
 - chroma-js x 479,962 ops/sec ±0.70% (78 runs sampled)
 - chartjs-color x 1,597,520 ops/sec ±0.64% (76 runs sampled)
fastest is @kurkle/color
488% faster than 2nd fastest chartjs-color

saturate:
 - @kurkle/color x 12,102,262 ops/sec ±0.52% (75 runs sampled)
 - chroma-js x 386,067 ops/sec ±0.40% (78 runs sampled)
 - chartjs-color x 1,454,584 ops/sec ±2.28% (74 runs sampled)
fastest is @kurkle/color
732% faster than 2nd fastest chartjs-color

desaturate:
 - @kurkle/color x 8,720,564 ops/sec ±1.34% (76 runs sampled)
 - chroma-js x 384,617 ops/sec ±0.42% (72 runs sampled)
 - chartjs-color x 1,476,576 ops/sec ±1.79% (77 runs sampled)
fastest is @kurkle/color
491% faster than 2nd fastest chartjs-color

clearer:
 - @kurkle/color x 21,156,790 ops/sec ±0.08% (78 runs sampled)
 - chroma-js: TypeError: c1.clearer is not a function
 - chartjs-color x 20,647,802 ops/sec ±1.28% (76 runs sampled)
fastest is @kurkle/color
2% faster than 2nd fastest chartjs-color

opaquer:
 - @kurkle/color x 136,018,429 ops/sec ±0.15% (77 runs sampled)
 - chroma-js: TypeError: c1.opaquer is not a function
 - chartjs-color x 102,912,201 ops/sec ±0.73% (78 runs sampled)
fastest is @kurkle/color
32% faster than 2nd fastest chartjs-color

mix:
 - @kurkle/color x 4,042,074 ops/sec ±0.77% (77 runs sampled)
 - chroma-js x 491,091 ops/sec ±0.18% (79 runs sampled)
 - chartjs-color x 1,227,911 ops/sec ±0.52% (76 runs sampled)
fastest is @kurkle/color
229% faster than 2nd fastest chartjs-color

clone:
 - @kurkle/color x 7,743,721 ops/sec ±0.68% (79 runs sampled)
 - chroma-js: TypeError: c1.clone is not a function
 - chartjs-color x 4,765,489 ops/sec ±1.11% (73 runs sampled)
fastest is @kurkle/color
62% faster than 2nd fastest chartjs-color
```

## License

`@kurkle/color` is available under the [MIT license](LICENSE.md).
