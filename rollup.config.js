/* eslint-env es6 */

import { terser } from 'rollup-plugin-terser';
import { version, homepage } from './package.json';

const input = 'src/index.js';
const banner = `/*!
 * @kurkle/color.js v${version}
 * ${homepage}
 * (c) ${new Date().getFullYear()} Jukka Kurkela
 * Released under the MIT License
 */`;

export default [
	{
		input: input,
		output: {
			name: '@kurkle/color.js',
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
			})
		],
		output: {
			name: '@kurkle/color.js',
			file: 'dist/color.min.js',
			format: 'umd',
			indent: false
		}
	}
];
