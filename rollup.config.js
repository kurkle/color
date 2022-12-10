import analyze from 'rollup-plugin-analyzer';
import cleanup from 'rollup-plugin-cleanup';
import terser from '@rollup/plugin-terser';
import {visualizer} from 'rollup-plugin-visualizer';
import {readFileSync} from 'fs';

const {homepage, name, main, module, version} = JSON.parse(readFileSync('./package.json'));

const input = 'src/index.js';
const inputESM = 'src/index.esm.js';
const banner = `/*!
 * ${name} v${version}
 * ${homepage}
 * (c) ${(new Date(process.env.SOURCE_DATE_EPOCH ? (process.env.SOURCE_DATE_EPOCH * 1000) : new Date().getTime())).getFullYear()} Jukka Kurkela
 * Released under the MIT License
 */`;

export default [
  {
    input: inputESM,
    plugins: [
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
  {
    input: input,
    plugins: [
      analyze({summaryOnly: true}),
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
      file: main.replace('.cjs', '.min.js'),
      format: 'umd',
      sourcemap: true,
      indent: false
    }
  },
];
