/**
 * @packageDocumentation
 * @module utils
 */

import type { RGBA } from './color.js'

import { b2n, n2b, n2p, parseAlpha } from './byte.js'

/**
 * @hidden
 */
const HUE_RE =
  /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/

/**
 * Converts hsl to rgb normalized
 * @url https://jsfiddle.net/Lamik/reuk63ay/91
 * @param h - hue [0..360]
 * @param s - saturation [0..1]
 * @param l - lightness [0..1]
 * @returns - [r, g, b] each normalized to [0..1]
 * @hidden
 */
export function hsl2rgbn(h: number, s: number, l: number): number[] {
  const a = s * Math.min(l, 1 - l)
  /**
   * @param n
   */
  const f = (n: number, k = (n + h / 30) % 12) => l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1)
  return [f(0), f(8), f(4)]
}

/**
 * Convert hsv to rgb normalized
 * @url https://jsfiddle.net/Lamik/Lr61wqub/15/
 * @param h - hue [0..360]
 * @param s - saturation [0..1]
 * @param v - value [0..1]
 * @returns - [r, g, b] each normalized to [0..1]
 * @hidden
 */
function hsv2rgbn(h: number, s: number, v: number): number[] {
  /**
   * @param n
   */
  const f = (n: number, k = (n + h / 60) % 6) => v - v * s * Math.max(Math.min(k, 4 - k, 1), 0)
  return [f(5), f(3), f(1)]
}

/**
 * Convert hwb to rgb normalized
 * @param h - hue [0..360]
 * @param w - whiteness [0..1]
 * @param b - blackness [0..1]
 * @returns - [r, g, b] each normalized to [0..1]
 * @hidden
 */
function hwb2rgbn(h: number, w: number, b: number): number[] {
  const rgb = hsl2rgbn(h, 1, 0.5)
  let i: number
  if (w + b > 1) {
    i = 1 / (w + b)
    w *= i
    b *= i
  }
  for (i = 0; i < 3; i++) {
    rgb[i] *= 1 - w - b
    rgb[i] += w
  }
  return rgb
}

function hueValue(r: number, g: number, b: number, d: number, max: number): number {
  if (r === max) {
    return (g - b) / d + (g < b ? 6 : 0)
  }
  if (g === max) {
    return (b - r) / d + 2
  }
  return (r - g) / d + 4
}

/**
 * Convert rgb to hsl
 * @param color - the color
 * @returns - [h, s, l]
 */
export function rgb2hsl(color: RGBA): number[] {
  const range = 255
  const r = color.r / range
  const g = color.g / range
  const b = color.b / range
  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  const l = (max + min) / 2
  let h: number = 0
  let s: number = 0
  let d: number
  if (max !== min) {
    d = max - min
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
    h = hueValue(r, g, b, d, max)
    h = h * 60 + 0.5
  }
  return [h | 0, s || 0, l]
}

/**
 * @param f
 * @param a
 * @param b
 * @param c
 * @private
 * @hidden
 */
function calln(
  f: (h: number, s: number, l: number) => number[],
  a: number | number[],
  b?: number,
  c?: number
): number[] {
  return (Array.isArray(a) ? f(a[0], a[1], a[2]) : f(a, b!, c!)).map(n2b)
}

/**
 * Convert hsl to rgb
 * @param h - hue | [h, s, l]
 * @param s - saturation
 * @param l - lightness
 * @returns
 */
export function hsl2rgb(h: number | number[], s?: number, l?: number): number[] {
  return calln(hsl2rgbn, h, s, l)
}

/**
 * Convert hwb to rgb
 * @param h - hue | [h, s, l]
 * @param w - whiteness
 * @param b - blackness
 * @returns
 */
export function hwb2rgb(h: number | number[], w?: number, b?: number): number[] {
  return calln(hwb2rgbn, h, w, b)
}

/**
 * Convert hsv to rgb
 * @param h - hue | [h, s, l]
 * @param s - saturation
 * @param v - value
 * @returns
 */
export function hsv2rgb(h: number | number[], s?: number, v?: number): number[] {
  return calln(hsv2rgbn, h, s, v)
}

/**
 * @param h - the angle
 * @hidden
 */
function hue(h: number): number {
  return ((h % 360) + 360) % 360
}

/**
 * Parse hsl/hsv/hwb color string
 * @param str - hsl/hsv/hwb color string
 * @returns - the parsed color components
 */
export function hueParse(str: string): RGBA | undefined {
  const m = HUE_RE.exec(str)
  let v: number[]

  if (!m) {
    return undefined
  }

  const a = parseAlpha(m[5], m[6])

  const h = hue(+m[2])
  const p1 = +m[3] / 100
  const p2 = +m[4] / 100

  if (m[1] === 'hwb') {
    v = hwb2rgb(h, p1, p2)
  } else if (m[1] === 'hsv') {
    v = hsv2rgb(h, p1, p2)
  } else {
    v = hsl2rgb(h, p1, p2)
  }

  return {
    a: a,
    b: v[2],
    g: v[1],
    r: v[0],
  }
}

/**
 * Rotate the `color` color by `degrees` degrees.
 *
 * The other transforms — `lighten`, `darken`, `saturate`, `desaturate`, `alpha`,
 * `clearer`, `opaquer`, `negate`, `greyscale`, `mix`, and `clone` — are only
 * available as methods on `Color`.
 * @param color - the color
 * @param degrees - degrees to rotate
 */
export function rotate(color: RGBA, degrees: number): void {
  const h = rgb2hsl(color)
  const rgb = hsl2rgbn(hue(h[0] + degrees), h[1], h[2])
  color.r = n2b(rgb[0])
  color.g = n2b(rgb[1])
  color.b = n2b(rgb[2])
}

/**
 * Return hsl(a) string from color components
 * @param color - the color
 * @return
 */
export function hslString(color: RGBA | undefined): string | undefined {
  if (!color) {
    return undefined
  }
  const a = rgb2hsl(color)
  const h = a[0]
  const s = n2p(a[1])
  const l = n2p(a[2])
  return color.a < 255 ? `hsla(${h}, ${s}%, ${l}%, ${b2n(color.a)})` : `hsl(${h}, ${s}%, ${l}%)`
}
