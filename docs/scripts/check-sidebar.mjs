// Guards against the hand-written API sidebar (astro.config.mjs) drifting away
// from what TypeDoc actually generates under dist/docs/api/. Run after
// `astro build`, as part of `docs:build`.
//
// Fails when:
//  - a page TypeDoc generated has no sidebar entry (a new export was added
//    but nobody added it to the sidebar), or
//  - the sidebar links to a page that no longer exists (an export was
//    renamed or removed but the sidebar wasn't updated).

import { existsSync, readdirSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

import { apiLinks } from './sidebar-api.mjs'

const scriptDir = path.dirname(fileURLToPath(import.meta.url))
const apiDir = path.resolve(scriptDir, '../../dist/docs/api')

function linksFor(kind) {
  const dir = path.join(apiDir, kind)
  if (!existsSync(dir)) {
    return []
  }
  return readdirSync(dir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => `/api/${kind}/${entry.name}/`)
}

const generated = new Set([...linksFor('functions'), ...linksFor('classes'), ...linksFor('interfaces')])

if (generated.size === 0) {
  console.error(`check-sidebar: found no generated pages under ${apiDir} — run "astro build" first.`)
  process.exit(1)
}

const linked = new Set(apiLinks)

const missingFromSidebar = [...generated].filter((link) => !linked.has(link)).sort()
const staleInSidebar = [...linked].filter((link) => !generated.has(link)).sort()

if (missingFromSidebar.length > 0 || staleInSidebar.length > 0) {
  console.error('Sidebar drift detected between astro.config.mjs and the generated API docs:')
  if (missingFromSidebar.length > 0) {
    console.error('  generated but missing from the sidebar:')
    for (const link of missingFromSidebar) console.error(`    ${link}`)
  }
  if (staleInSidebar.length > 0) {
    console.error('  linked from the sidebar but no longer generated:')
    for (const link of staleInSidebar) console.error(`    ${link}`)
  }
  process.exit(1)
}

console.log(`check-sidebar: ${generated.size} generated API pages all match the sidebar.`)
