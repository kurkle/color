import fs from 'fs';
import names from 'color-name';
import {packColorNames, generateTypeScriptCode} from './packUtils.js';

// Pack the color names
const {mapped, packed} = packColorNames(names);

// Generate the TypeScript code
const tsCode = generateTypeScriptCode(mapped, packed);

// Write the TypeScript code to the packed.ts file
fs.writeFileSync('./src/packed.ts', tsCode, 'utf-8');
