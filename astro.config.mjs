import mdx from '@astrojs/mdx'
import starlight from '@astrojs/starlight'
import chartEditor from '@kurkle/astro-chartjs-editor'
import { defineConfig } from 'astro/config'
import starlightTypeDoc from 'starlight-typedoc'

import { byteNames, colorItems, convertNames, fn, parseNames, transformNames, writeNames } from './docs/scripts/sidebar-api.mjs'

export default defineConfig({
  integrations: [
    chartEditor({
      runtime: './docs/color-runtime.js',
      sourceBaseUrl: 'https://github.com/kurkle/color/blob/main/',
    }),
    starlight({
      customCss: ['./docs/styles/starlight.css'],
      description: 'Fast and small CSS color parsing and manipulation',
      plugins: [
        starlightTypeDoc({
          entryPoints: ['./src/index.esm.ts'],
          sidebar: { collapsed: false, label: 'API' },
          tsconfig: './tsconfig.docs.json',
          typeDoc: { exclude: ['**/*.test.ts'], excludeExternals: true, readme: 'none' },
        }),
      ],
      sidebar: [
        {
          items: [
            { label: 'Mix and interpolate', link: '/samples/mix/' },
            { label: 'OKLCH picker', link: '/samples/picker/' },
            { label: 'Build a palette', link: '/samples/palette/' },
            { label: 'Out-of-gamut oklch', link: '/samples/gamut/' },
            { label: 'Alpha and blending', link: '/samples/alpha/' },
            { label: 'Every named colour', link: '/samples/names/' },
          ],
          label: 'Samples',
        },
        { items: [{ label: 'Getting started', link: '/' }, 'parsing', 'formatting', 'transforming'], label: 'Guide' },
        { label: 'Color', items: colorItems },
        { label: 'Parse a color', items: parseNames.map(fn) },
        { label: 'Write a color string', items: writeNames.map(fn) },
        { label: 'Convert between models', items: convertNames.map(fn) },
        { label: 'Standalone transforms', items: transformNames.map(fn) },
        { collapsed: true, label: 'Byte helpers', items: byteNames.map(fn) },
      ],
      social: [{ href: 'https://github.com/kurkle/color', icon: 'github', label: 'GitHub' }],
      title: '@kurkle/color',
    }),
    mdx(),
  ],
  outDir: './dist/docs',
  publicDir: './docs/public',
  srcDir: './docs/src',
})
