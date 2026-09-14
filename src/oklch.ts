/**
 * @packageDocumentation
 * @module utils
 */

import type { RGBA } from './color.js'

import { b2n, lim, n2b, parseAlpha } from './byte.js'
import { linear2srgb, srgb2linear } from './srgb.js'

/**
 * @hidden
 */
const OKLCH_RE =
  /^oklch\(\s*([-+.e\d]+|none)(%)?[\s,]+([-+.e\d]+|none)(%)?[\s,]+([-+.e\d]+|none)(deg|rad|grad|turn)?(?:[\s,/]+([-+.e\d]+|none)(%)?)?\s*\)$/

/**
 * Hue unit conversion factors to degrees
 * @hidden
 */
const HUE_UNITS: Record<string, number> = {
  deg: 1,
  grad: 0.9,
  rad: 180 / Math.PI,
  turn: 360,
}

/**
 * Convert sRGB bytes to OKLab
 * @param r - red [0..255]
 * @param g - green [0..255]
 * @param b - blue [0..255]
 * @returns - [L, a, b]
 * @hidden
 */
function rgb2oklab(r: number, g: number, b: number): number[] {
  const R = srgb2linear(r / 255)
  const G = srgb2linear(g / 255)
  const B = srgb2linear(b / 255)
  const l = Math.cbrt(0.4122214708 * R + 0.5363325363 * G + 0.0514459929 * B)
  const m = Math.cbrt(0.2119034982 * R + 0.6806995451 * G + 0.1073969566 * B)
  const s = Math.cbrt(0.0883024619 * R + 0.2817188376 * G + 0.6299787005 * B)
  return [
    0.2104542553 * l + 0.793617785 * m - 0.0040720468 * s,
    1.9779984951 * l - 2.428592205 * m + 0.4505937099 * s,
    0.0259040371 * l + 0.7827717662 * m - 0.808675766 * s,
  ]
}

/**
 * Convert OKLab to normalized sRGB. The result may fall outside [0..1] for
 * out-of-gamut colors; callers are expected to clip (see {@link oklch2rgb}).
 * @param L - lightness
 * @param a - green-red axis
 * @param b - blue-yellow axis
 * @returns - [r, g, b] normalized, may exceed [0..1]
 * @hidden
 */
function oklab2rgbn(L: number, a: number, b: number): number[] {
  const l = (L + 0.3963377774 * a + 0.2158037573 * b) ** 3
  const m = (L - 0.1055613458 * a - 0.0638541728 * b) ** 3
  const s = (L - 0.0894841775 * a - 1.291485548 * b) ** 3
  return [
    4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s,
    -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s,
    -0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s,
  ].map(linear2srgb)
}

/**
 * Convert rgb to oklch
 * @param v - the color
 * @returns - [L, C, H] where L is [0..1], C >= 0 and H is in degrees [0..360]
 */
export function rgb2oklch(v: RGBA): number[] {
  const [L, a, b] = rgb2oklab(v.r, v.g, v.b)
  const C = Math.hypot(a, b)
  let H = 0
  if (C >= 1e-4) {
    H = (Math.atan2(b, a) * 180) / Math.PI
    if (H < 0) {
      H += 360
    }
  }
  return [L, C, H]
}

/**
 * Convert oklch to rgb. Out-of-gamut results are clipped to sRGB, matching
 * what browsers draw on a canvas (no CSS gamut-mapping / chroma reduction).
 * @param l - lightness | [l, c, h]
 * @param c - chroma
 * @param h - hue in degrees
 * @returns - [r, g, b] bytes
 */
export function oklch2rgb(l: number | number[], c?: number, h?: number): number[] {
  const [L, C, H] = Array.isArray(l) ? l : [l, c!, h!]
  const a = C * Math.cos((H * Math.PI) / 180)
  const b = C * Math.sin((H * Math.PI) / 180)
  return oklab2rgbn(L, a, b).map(n2b)
}

/**
 * Parse a `none` aware numeric component
 * @param v
 * @hidden
 */
function component(v: string): number {
  return v === 'none' ? 0 : +v
}

/**
 * Parse oklch(a) color string
 * @param str - the oklch string
 * @returns - the parsed color
 */
export function oklchParse(str: string): RGBA | undefined {
  const m = OKLCH_RE.exec(str)

  if (!m) {
    return undefined
  }

  const rawL = component(m[1])
  const l = lim(m[2] ? rawL / 100 : rawL, 0, 1)

  const rawC = component(m[3])
  const c = Math.max(m[4] ? (rawC / 100) * 0.4 : rawC, 0)

  const h = component(m[5]) * (m[6] ? HUE_UNITS[m[6]] : 1)
  const a = parseAlpha(m[7], !!m[8])

  const rgb = oklch2rgb(l, c, h)

  return {
    a,
    b: rgb[2],
    g: rgb[1],
    r: rgb[0],
  }
}

/**
 * Return oklch string from color
 * @param v - the color
 */
export function oklchString(v: RGBA | undefined): string | undefined {
  if (!v) {
    return undefined
  }
  const [L, C, H] = rgb2oklch(v)
  const l = +L.toFixed(4)
  const c = +C.toFixed(4)
  const h = +H.toFixed(2)
  return v.a < 255 ? `oklch(${l} ${c} ${h} / ${b2n(v.a)})` : `oklch(${l} ${c} ${h})`
}
