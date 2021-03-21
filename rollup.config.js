import analyze from 'rollup-plugin-analyzer';
import cleanup from 'rollup-plugin-cleanup';
import {sizeSnapshot} from 'rollup-plugin-size-snapshot';
import {terser} from 'rollup-plugin-terser';
import visualizer from 'rollup-plugin-visualizer';
import {homepage, name, main, module, version} from './package.json';

const input = 'src/index.js';
const inputESM = 'src/index.esm.js';
const banner = `/*!
 * ${name} v${version}
 * ${homepage}
 * (c) ${(new Date(process.env.SOURCE_DATE_EPOCH ? (process.env.SOURCE_DATE_EPOCH * 1000) : new Date().getTime())).getFullYear()} Jukka Kurkela
 * Released under the MIT License
 */`;

const snapshotOpts = {snapshotPath: 'dist/.size-snapshot.json'};

export default [
  {
    input: input,
    plugins: [
      analyze({summaryOnly: true}),
      sizeSnapshot(snapshotOpts),
      cleanup({
        sourcemap: true
      })
    ],
    output: {
      name,
      file: main,
      banner: banner,
      format: 'umd',
      indent: false
    }
  },
  {
    input: input,
    plugins: [
      sizeSnapshot(snapshotOpts),
      terser({
        output: {
          preamble: banner
        }
      }),
      visualizer({
        sourcemap: true,
        title: name,
        template: 'treemap',
        filename: 'docs/stats.html'
      })
    ],
    output: {
      name,
      file: main.replace('.js', '.min.js'),
      format: 'umd',
      sourcemap: true,
      indent: false
    }
  },
  {
    input: inputESM,
    plugins: [
      sizeSnapshot(snapshotOpts),
      cleanup({
        sourcemap: true
      })
    ],
    output: {
      name,
      file: module,
      banner: banner,
      format: 'esm',
      indent: false
    }
  },
];
