/* eslint-env es6 */

const commonjs = require('rollup-plugin-commonjs');
const resolve = require('rollup-plugin-node-resolve');
const terser = require('rollup-plugin-terser').terser;
const pkg = require('./package.json');

const input = 'src/index.js';
const banner = `/*!
 * css-color.js v${pkg.version}
 * ${pkg.homepage}
 * (c) ${new Date().getFullYear()} Jukka Kurkela
 * Released under the MIT License
 */`;

module.exports = [
	{
		input: input,
		plugins: [
			resolve(),
			commonjs(),
		],
		output: {
			name: 'css-color',
			file: 'dist/css-color.js',
			banner: banner,
			format: 'umd',
			indent: false
		}
	},
	{
		input: input,
		plugins: [
			resolve(),
			commonjs(),
			terser({
				output: {
					preamble: banner
				}
			})
		],
		output: {
			name: 'css-color',
			file: 'dist/css-color.min.js',
			format: 'umd',
			indent: false,
		}
	},
];
