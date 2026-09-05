// esbuild configuration for @kurkle/color
import * as esbuild from 'esbuild'
import { visualizer } from 'esbuild-visualizer'

import { spawnSync } from 'node:child_process'
import { existsSync, mkdirSync, readFileSync, renameSync, rmSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

// Get absolute paths for executables
const nodePath = process.execPath // Path to the Node.js executable
const npmBinPath = join(process.execPath, '..', '..', 'lib', 'node_modules', 'npm', 'bin')
const npxPath = join(npmBinPath, 'npx-cli.js')

// Read package.json
const pkg = JSON.parse(readFileSync('./package.json', 'utf8'))

// Ensure dist directory exists
if (!existsSync('dist')) {
  mkdirSync('dist')
}

// Handle packed.ts file
console.log('Managing packed.ts files...')
try {
  // Backup the placeholder packed.ts file
  if (existsSync('src/packed.ts')) {
    renameSync('src/packed.ts', 'src/packed.ts.placeholder')
    console.log('Backed up placeholder packed.ts file.')
  }

  // Generate the actual packed.ts file
  console.log('Generating packed.ts file...')
  spawnSync(nodePath, ['scripts/pack.js'], { shell: false, stdio: 'inherit' })
  console.log('packed.ts file generated successfully.')
} catch (error) {
  console.error(`Error managing packed.ts files: ${error}`)
  process.exit(1)
}

// Generate TypeScript declaration files
try {
  console.log('Generating TypeScript declaration files...')
  spawnSync(
    nodePath,
    [
      npxPath,
      'tsc',
      '--project',
      'tsconfig.build.json',
      '--declaration',
      '--emitDeclarationOnly',
      '--outDir',
      'dist',
    ],
    { shell: false, stdio: 'inherit' }
  )
  console.log('TypeScript declaration files generated successfully.')
} catch (error) {
  console.error(error, 'Error generating TypeScript declaration files')
}

// Banner generation (similar to current rollup config)
const banner = `/*!
 * ${pkg.name} v${pkg.version}
 * ${pkg.homepage}
 * (c) ${new Date().getFullYear()} Jukka Kurkela
 * Released under the MIT License
 */`

// Run TypeScript compiler for declaration files
console.log('Running TypeScript compiler for type checking...')
try {
  spawnSync(nodePath, [npxPath, 'tsc', '--noEmit'], { shell: false, stdio: 'inherit' })
} catch (error) {
  console.error(error, 'TypeScript compilation failed. Fix the errors before building.')
  process.exit(1)
}

// Build functions
async function buildESM() {
  console.log('Building ESM module...')
  try {
    await esbuild.build({
      banner: { js: banner },
      bundle: true,
      entryPoints: ['src/index.esm.ts'],
      format: 'esm',
      minify: false,
      outfile: 'dist/color.esm.js',
      platform: 'neutral',
      sourcemap: true,
    })
    console.log('ESM module built successfully.')
  } catch (error) {
    console.error('ESM build failed:', error)
    process.exit(1)
  }
}

async function buildCJS() {
  console.log('Building CommonJS module...')
  try {
    await esbuild.build({
      banner: { js: banner },
      bundle: true,
      entryPoints: ['src/index.ts'],
      format: 'cjs',
      minify: false,
      outfile: 'dist/color.cjs',
      platform: 'neutral',
      sourcemap: true,
    })
    console.log('CommonJS module built successfully.')
  } catch (error) {
    console.error('CommonJS build failed:', error)
    process.exit(1)
  }
}

async function buildMinified() {
  console.log('Building minified UMD bundle...')
  try {
    // Create metafile for visualization
    const result = await esbuild.build({
      banner: { js: banner },
      bundle: true,
      entryPoints: ['src/index.ts'],
      format: 'iife',
      globalName: 'kurkleColor',
      metafile: true, // Generate metadata for the visualizer
      minify: true,
      outfile: 'dist/color.min.js',
      platform: 'browser',
      sourcemap: true,
    })

    console.log('Minified UMD bundle built successfully.')

    // Generate visualization
    console.log('Generating bundle visualization...')

    if (existsSync('docs')) {
      rmSync('docs', { force: true, recursive: true })
    }
    mkdirSync('docs')

    // Create visualization with proper error handling
    try {
      const stats = await visualizer(result.metafile, {
        template: 'treemap',
        // filename: 'stats.html',
        title: pkg.name,
      })
      writeFileSync('docs/stats.html', stats)
      console.log('Bundle visualization generated successfully at docs/stats.html')
    } catch (vizError) {
      console.error('Visualization generation failed:', vizError)
      console.error('Visualization error details:', vizError.stack)
    }
  } catch (error) {
    console.error('Minified build failed:', error)
    process.exit(1)
  }
}

// Build all formats
async function buildAll() {
  console.log('Starting build process...')
  await buildESM()
  await buildCJS()
  await buildMinified()
  console.log('All builds completed successfully!')

  // Restore the placeholder packed.ts file
  try {
    if (existsSync('src/packed.ts.placeholder')) {
      renameSync('src/packed.ts.placeholder', 'src/packed.ts')
      console.log('Restored placeholder packed.ts file.')
    }
  } catch (error) {
    console.error(`Error restoring placeholder packed.ts file: ${error}`)
    // Don't exit with error here, as the build was successful
    console.warn('Build was successful, but failed to restore placeholder file.')
  }
}

buildAll()
