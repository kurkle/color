/* eslint-env es6 */

import cleanup from 'rollup-plugin-cleanup';
import {terser} from 'rollup-plugin-terser';
import visualizer from 'rollup-plugin-visualizer';
import {version, homepage} from './package.json';

const input = 'src/index.js';
const banner = `/*!
 * @kurkle/color v${version}
 * ${homepage}
 * (c) ${(new Date(process.env.SOURCE_DATE_EPOCH ? (process.env.SOURCE_DATE_EPOCH * 1000) : new Date().getTime())).getFullYear()} Jukka Kurkela
 * Released under the MIT License
 */`;

export default [
	{
		input: input,
		plugins: [
			cleanup({
				sourcemap: true
			})
		],
		output: {
			name: '@kurkle/color',
			file: 'dist/color.js',
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
				title: '@kurkle/color',
				template: 'treemap',
				filename: 'docs/stats.html'
			})
		],
		output: {
			name: '@kurkle/color',
			file: 'dist/color.min.js',
			format: 'umd',
			sourcemap: true,
			indent: false
		}
	},
	{
		input: input,
		plugins: [
			cleanup({
				sourcemap: true
			})
		],
		output: {
			name: '@kurkle/color',
			file: 'dist/color.esm.js',
			banner: banner,
			format: 'esm',
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
				title: '@kurkle/color',
				template: 'treemap',
				filename: 'docs/stats.esm.html'
			})
		],
		output: {
			name: '@kurkle/color',
			file: 'dist/color.esm.min.js',
			banner: banner,
			format: 'esm',
			sourcemap: true,
			indent: false
		}
	},
];
