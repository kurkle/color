---
title: Named colors
description: Every CSS color name, grouped by hue.
---

The 148 CSS color names plus `transparent`, ordered by the hue `rgb2hsl` reports.
Each row is one sixth of the hue circle; names that land on the same hue are ordered
light to dark. The last row holds the ones with no hue at all: when saturation is
zero the hue is undefined and `rgb2hsl` returns `0`, so sorting those among the reds
would put every grey next to `firebrick` for no reason.

```js chart-editor height=420
// <block:config:0>
const NAMES = [
  'aliceblue', 'antiquewhite', 'aqua', 'aquamarine', 'azure', 'beige', 'bisque', 'black',
  'blanchedalmond', 'blue', 'blueviolet', 'brown', 'burlywood', 'cadetblue', 'chartreuse',
  'chocolate', 'coral', 'cornflowerblue', 'cornsilk', 'crimson', 'cyan', 'darkblue', 'darkcyan',
  'darkgoldenrod', 'darkgray', 'darkgreen', 'darkgrey', 'darkkhaki', 'darkmagenta',
  'darkolivegreen', 'darkorange', 'darkorchid', 'darkred', 'darksalmon', 'darkseagreen',
  'darkslateblue', 'darkslategray', 'darkslategrey', 'darkturquoise', 'darkviolet', 'deeppink',
  'deepskyblue', 'dimgray', 'dimgrey', 'dodgerblue', 'firebrick', 'floralwhite', 'forestgreen',
  'fuchsia', 'gainsboro', 'ghostwhite', 'gold', 'goldenrod', 'gray', 'green', 'greenyellow',
  'grey', 'honeydew', 'hotpink', 'indianred', 'indigo', 'ivory', 'khaki', 'lavender',
  'lavenderblush', 'lawngreen', 'lemonchiffon', 'lightblue', 'lightcoral', 'lightcyan',
  'lightgoldenrodyellow', 'lightgray', 'lightgreen', 'lightgrey', 'lightpink', 'lightsalmon',
  'lightseagreen', 'lightskyblue', 'lightslategray', 'lightslategrey', 'lightsteelblue',
  'lightyellow', 'lime', 'limegreen', 'linen', 'magenta', 'maroon', 'mediumaquamarine',
  'mediumblue', 'mediumorchid', 'mediumpurple', 'mediumseagreen', 'mediumslateblue',
  'mediumspringgreen', 'mediumturquoise', 'mediumvioletred', 'midnightblue', 'mintcream',
  'mistyrose', 'moccasin', 'navajowhite', 'navy', 'oldlace', 'olive', 'olivedrab', 'orange',
  'orangered', 'orchid', 'palegoldenrod', 'palegreen', 'paleturquoise', 'palevioletred',
  'papayawhip', 'peachpuff', 'peru', 'pink', 'plum', 'powderblue', 'purple', 'rebeccapurple',
  'red', 'rosybrown', 'royalblue', 'saddlebrown', 'salmon', 'sandybrown', 'seagreen', 'seashell',
  'sienna', 'silver', 'skyblue', 'slateblue', 'slategray', 'slategrey', 'snow', 'springgreen',
  'steelblue', 'tan', 'teal', 'thistle', 'tomato', 'turquoise', 'violet', 'wheat', 'white',
  'whitesmoke', 'yellow', 'yellowgreen', 'transparent',
]

const SEXTANTS = [
  ['0-60\u00b0', 0, 60],
  ['60-120\u00b0', 60, 120],
  ['120-180\u00b0', 120, 180],
  ['180-240\u00b0', 180, 240],
  ['240-300\u00b0', 240, 300],
  ['300-360\u00b0', 300, 360],
]

const config = {
  render: () => {
    const hsl = (name) => color.rgb2hsl(color.nameParse(name))
    // Hue first, then light to dark, so each row reads as one gradient.
    const byHue = (a, b) => hsl(a)[0] - hsl(b)[0] || hsl(b)[2] - hsl(a)[2]
    const rows = SEXTANTS.map(([label, lo, hi]) => ({
      label,
      swatches: NAMES.filter((n) => hsl(n)[1] > 0 && hsl(n)[0] >= lo && hsl(n)[0] < hi)
        .sort(byHue)
        .map((css) => ({ css })),
    }))
    rows.push({
      label: 'no hue',
      swatches: NAMES.filter((n) => hsl(n)[1] === 0)
        .sort((a, b) => hsl(b)[2] - hsl(a)[2])
        .map((css) => ({ css })),
    })
    return rows
  },
}
// </block:config>

module.exports = { config }
```
