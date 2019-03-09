/* eslint-disable no-console */
const benchmark = require('benchmark');
const kcolor = require('../dist/color.js');
const string = require('chartjs-color-string');
const ostring = require('color-string').get;
const tinycolor = require('tinycolor2');
const color = require('chartjs-color');
const chroma = require('chroma-js');
const parse = require('color-parse');
const parser = require('color-parser');

const strings = [
	'#d6F',
	'#AABB',
	'#555555',
	'#a7a7a779',
	'rgb(255, 0, 0)',
	'rgba(255, 0, 0, 0.5)',
	'hsla(240, 100, 60, 0.5)',
	'blue'
];

const parsers = {
	'@kurkle/color': kcolor,
	'chartjs-color-string': string.getRgba,
	tinycolor2: tinycolor,
	'chroma-js': chroma,
	'color-parse': parse,
	'color-parser': parser,
	'color-string': ostring
};
const parserNames = Object.keys(parsers);

const manipulators = {
	'@kurkle/color': kcolor,
	'chroma-js': chroma,
	'chartjs-color': color
};
const manipulatorNames = Object.keys(manipulators);

strings.forEach(function(str) {
	console.log('parsing "' + str + '":');
	var suite = new benchmark.Suite();
	parserNames.forEach(function(lib) {
		suite.add(' - ' + lib, function() {
			var c = new parsers[lib](str);
			if (!c) {
				throw 'asdf';
			}
		});
	});
	suite
		.on('cycle', function(event) {
			if (event.target.error) {
				console.log(String(event.target) + String(event.target.error).substring(0, 80));
			} else {
				console.log(String(event.target));
			}
		})
		.on('complete', function() {
			console.log('fastest in "' + str + '" is ' + this.filter('fastest').map('name'));
		})
		.run();
});

console.log('mix:');

var mix = new benchmark.Suite();
manipulatorNames.forEach(function(lib) {
	mix.add(' - ' + lib, function() {
		var c1 = new manipulators[lib]('#aaaaaa');
		var c2 = new manipulators[lib]('#33333380');
		c1.mix(c2, 0.5);
	});
});
mix
	.on('cycle', function(event) {
		if (event.target.error) {
			console.log(String(event.target) + String(event.target.error).substring(0, 80));
		} else {
			console.log(String(event.target));
		}
	})
	.on('complete', function() {
		console.log('fastest is ' + this.filter('fastest').map('name'));
	})
	.run();

console.log('lighten:');

var lighten = new benchmark.Suite();
manipulatorNames.forEach(function(lib) {
	lighten.add(' - ' + lib, function() {
		var c1 = new manipulators[lib]('#aaaaaa');
		c1.lighten(0.1);
	});
});
lighten
	.on('cycle', function(event) {
		if (event.target.error) {
			console.log(String(event.target) + String(event.target.error).substring(0, 80));
		} else {
			console.log(String(event.target));
		}
	})
	.on('complete', function() {
		console.log('fastest is ' + this.filter('fastest').map('name'));
	})
	.run();
