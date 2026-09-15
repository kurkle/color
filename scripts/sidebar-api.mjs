// Single source of truth for the hand-written API sidebar in astro.config.mjs.
// Imported both by the Starlight config (to build the actual sidebar) and by
// check-sidebar.mjs (to know which pages the sidebar is expected to cover),
// so a function or type name is only ever written once.

export const fn = (name) => ({ label: name, link: `/api/functions/${name.toLowerCase()}/` })

export const colorItems = [
  { label: 'Color', link: '/api/classes/color/' },
  { label: 'color()', link: '/api/functions/default/' },
  { label: 'RGBA', link: '/api/interfaces/rgba/' },
]

export const parseNames = ['hexParse', 'nameParse', 'rgbParse', 'hueParse', 'oklchParse']
export const writeNames = ['hexString', 'rgbString', 'hslString', 'oklchString']
export const convertNames = [
  'rgb2hsl',
  'hsl2rgb',
  'hwb2rgb',
  'hsv2rgb',
  'rgb2oklch',
  'oklch2rgb',
  'srgb2linear',
  'linear2srgb',
]
export const transformNames = ['rotate', 'interpolate']
export const byteNames = ['b2n', 'n2b', 'p2b', 'b2p', 'n2p', 'lim', 'round']

// Every link the sidebar declares under /api/ — the set check-sidebar.mjs
// compares against what TypeDoc actually generated.
export const apiLinks = [
  ...colorItems.map((item) => item.link),
  ...parseNames.map((name) => fn(name).link),
  ...writeNames.map((name) => fn(name).link),
  ...convertNames.map((name) => fn(name).link),
  ...transformNames.map((name) => fn(name).link),
  ...byteNames.map((name) => fn(name).link),
]
