import names from 'color-name'

import { generateTypeScriptCode, packColorNames } from './packUtils.js'
import fs from 'node:fs'

// Pack the color names
const { mapped, packed } = packColorNames(names)

// Generate the TypeScript code
const tsCode = generateTypeScriptCode(mapped, packed)

// Write the TypeScript code to the packed.ts file
fs.writeFileSync('./src/packed.ts', tsCode, 'utf-8')
