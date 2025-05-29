// esbuild configuration for @kurkle/color
import * as esbuild from 'esbuild';
import {readFileSync, mkdirSync, existsSync, renameSync} from 'fs';
import {spawnSync} from 'child_process';
import {join} from 'path';

// Get absolute paths for executables
const nodePath = process.execPath; // Path to the Node.js executable
const npmBinPath = join(process.execPath, '..', '..', 'lib', 'node_modules', 'npm', 'bin');
const npxPath = join(npmBinPath, 'npx-cli.js');

// Read package.json
const pkg = JSON.parse(readFileSync('./package.json', 'utf8'));

// Ensure dist directory exists
if (!existsSync('dist')) {
  mkdirSync('dist');
}

// Handle packed.ts file
console.log('Managing packed.ts files...');
try {
  // Backup the placeholder packed.ts file
  if (existsSync('src/packed.ts')) {
    renameSync('src/packed.ts', 'src/packed.ts.placeholder');
    console.log('Backed up placeholder packed.ts file.');
  }

  // Generate the actual packed.ts file
  console.log('Generating packed.ts file...');
  spawnSync(nodePath, ['scripts/pack.js'], {stdio: 'inherit', shell: false});
  console.log('packed.ts file generated successfully.');
} catch (error) {
  console.error(`Error managing packed.ts files: ${error}`);
  process.exit(1);
}

// Generate TypeScript declaration files
try {
  console.log('Generating TypeScript declaration files...');
  spawnSync(nodePath, [npxPath, 'tsc', '--declaration', '--emitDeclarationOnly', '--outDir', 'dist'], {stdio: 'inherit', shell: false});
  console.log('TypeScript declaration files generated successfully.');
} catch (error) {
  console.error(error, 'Error generating TypeScript declaration files');
}

// Banner generation (similar to current rollup config)
const banner = `/*!
 * ${pkg.name} v${pkg.version}
 * ${pkg.homepage}
 * (c) ${new Date().getFullYear()} Jukka Kurkela
 * Released under the MIT License
 */`;

// Run TypeScript compiler for declaration files
console.log('Running TypeScript compiler for type checking...');
try {
  spawnSync(nodePath, [npxPath, 'tsc', '--noEmit'], {stdio: 'inherit', shell: false});
} catch (error) {
  console.error(error, 'TypeScript compilation failed. Fix the errors before building.');
  process.exit(1);
}

// Build functions
async function buildESM() {
  console.log('Building ESM module...');
  try {
    await esbuild.build({
      entryPoints: ['src/index.esm.ts'],
      outfile: 'dist/color.esm.js',
      bundle: true,
      sourcemap: true,
      format: 'esm',
      platform: 'neutral',
      banner: {js: banner},
      minify: false,
    });
    console.log('ESM module built successfully.');
  } catch (error) {
    console.error('ESM build failed:', error);
    process.exit(1);
  }
}

async function buildCJS() {
  console.log('Building CommonJS module...');
  try {
    await esbuild.build({
      entryPoints: ['src/index.ts'],
      outfile: 'dist/color.cjs',
      bundle: true,
      sourcemap: true,
      format: 'cjs',
      platform: 'neutral',
      banner: {js: banner},
      minify: false,
    });
    console.log('CommonJS module built successfully.');
  } catch (error) {
    console.error('CommonJS build failed:', error);
    process.exit(1);
  }
}

async function buildMinified() {
  console.log('Building minified UMD bundle...');
  try {
    await esbuild.build({
      entryPoints: ['src/index.ts'],
      outfile: 'dist/color.min.js',
      bundle: true,
      sourcemap: true,
      format: 'iife',
      globalName: 'kurkleColor',
      platform: 'browser',
      banner: {js: banner},
      minify: true,
    });
    console.log('Minified UMD bundle built successfully.');
  } catch (error) {
    console.error('Minified build failed:', error);
    process.exit(1);
  }
}

// Build all formats
async function buildAll() {
  console.log('Starting build process...');
  await buildESM();
  await buildCJS();
  await buildMinified();
  console.log('All builds completed successfully!');

  // Restore the placeholder packed.ts file
  try {
    if (existsSync('src/packed.ts.placeholder')) {
      renameSync('src/packed.ts.placeholder', 'src/packed.ts');
      console.log('Restored placeholder packed.ts file.');
    }
  } catch (error) {
    console.error(`Error restoring placeholder packed.ts file: ${error}`);
    // Don't exit with error here, as the build was successful
    console.warn('Build was successful, but failed to restore placeholder file.');
  }
}

buildAll();
