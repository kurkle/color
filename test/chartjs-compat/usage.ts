import type { ChartOptions } from 'chart.js'

import { Color } from '@kurkle/color'

// Chart.js's own getHoverColor, verbatim (dist/chunks/helpers.dataset.js),
// declares a `string` return type for the wrapped call below:
//
//   function getHoverColor(value) {
//     return isPatternOrGradient(value) ? value : new Color(value).saturate(0.5).darken(0.1).hexString();
//   }
//
// @kurkle/color >= 0.5 correctly types hexString() as `string | undefined`
// (0.4's `string` return type was a lie: it also returned `undefined` for
// invalid input at runtime, only the type didn't say so). That means
// chart.js's own helpers source, typed verbatim against this package's
// current types, no longer type-checks. This is a real, currently-open gap
// in chart.js's own types, not a mistake in this package - it doesn't get
// silently worked around here.
//
// @ts-expect-error @kurkle/color >= 0.5 returns string | undefined here;
// chart.js's own type declarations have not been updated to match, and
// need a fix on chart.js's side when it next bumps its @kurkle/color range.
const chartjsVerbatim: string = new Color('#f00').saturate(0.5).darken(0.1).hexString()

// The pattern a consumer must actually use against @kurkle/color >= 0.5.
const corrected: string = new Color('#f00').saturate(0.5).darken(0.1).hexString() ?? '#f00'

// A corrected value is exactly what Chart.js expects wherever it accepts a
// color.
const opts: ChartOptions<'line'> = {
  elements: { line: { borderColor: corrected } },
}

// Rest of the public surface Chart.js and its plugins (e.g.
// chartjs-plugin-autocolors) rely on.
const valid: boolean = new Color('#f00').valid
const rgb = new Color('#f00').rgb
const rgbString: string | undefined = new Color('#f00').rgbString()
const hslString: string | undefined = new Color('#f00').hslString()
const mixed: Color = new Color('#f00').mix(new Color('#00f'), 0.5)
const cloned: Color = new Color('#f00').clone()
const alphaed: Color = new Color('#f00').alpha(0.5)

void chartjsVerbatim
void opts
void valid
void rgb
void rgbString
void hslString
void mixed
void cloned
void alphaed
