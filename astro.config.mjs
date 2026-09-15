import starlight from '@astrojs/starlight'
import { defineConfig } from 'astro/config'
import starlightTypeDoc from 'starlight-typedoc'

import { byteNames, colorItems, convertNames, fn, parseNames, transformNames, writeNames } from './docs/scripts/sidebar-api.mjs'

export default defineConfig({
  integrations: [
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
  ],
  outDir: './dist/docs',
  publicDir: './docs/public',
  srcDir: './docs/src',
})
