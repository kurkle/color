/* eslint-disable no-console */
const benchmark = require('benchmark');
const kcolor = require('../dist/color.js');
// const string = require('chartjs-color-string');
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
	'chartjs-color': color,
	tinycolor2: tinycolor,
	'chroma-js': chroma,
	'color-parse': parse,
	'color-parser': parser,
	'color-string': ostring
};
const objects = {
	'@kurkle/color': true,
	'chartjs-color': true
};

const parserNames = Object.keys(parsers);

const manipulators = {
	'@kurkle/color': kcolor,
	'chroma-js': chroma,
	'chartjs-color': color
};
const manipulatorNames = Object.keys(manipulators);

const options = {
	initCount: 1,
	maxTime: 4
};

const cycle = function(event) {
	if (event.target.error) {
		console.log(String(event.target) + String(event.target.error).substring(0, 80));
	} else {
		console.log(String(event.target));
	}
};


const complete = function() {
	var sorted = this.filter('successful').sort((a, b) => {
		a = a.stats;
		b = b.stats;
		return a.mean + a.moe > b.mean + b.moe ? 1 : -1;
	});
	var fastest = sorted.shift();
	var second = sorted.shift();
	var diff = (fastest.hz - second.hz) / second.hz * 100;
	console.log('fastest is ' + fastest.name.substring(3));
	console.log(diff.toFixed(0) + '% faster than 2nd fastest ' + second.name.substring(3));
	if (second.name !== ' - chartjs-color') {
		second = this.filter(function(a) {
			return a.name === ' - chartjs-color';
		}).shift();
		diff = (fastest.hz - second.hz) / second.hz * 100;
		console.log(diff.toFixed(0) + '% faster than chartjs-color');
	}
};

strings.forEach(function(str) {
	console.log('');
	console.log('parsing "' + str + '":');
	var suite = new benchmark.Suite();
	parserNames.forEach(function(lib) {
		if (objects[lib]) {
			suite.add(' - ' + lib, function() {
				var c = new parsers[lib](str);
				if (!c) {
					throw 'failed';
				}
			}, options);
		} else {
			suite.add(' - ' + lib, function() {
				var c = parsers[lib](str);
				if (!c) {
					throw 'failed';
				}
			}, options);
		}
	});
	suite
		.on('cycle', cycle)
		.on('complete', complete)
		.run();
});

var suites = [];

var suite = new benchmark.Suite();
manipulatorNames.forEach(function(lib) {
	var c1 = new manipulators[lib]('#aaaaaa');
	suite.add(' - ' + lib, function() {
		c1.alpha(0.5);
	}, options);
});
suites.push(['alpha', suite]);

suite = new benchmark.Suite();
manipulatorNames.forEach(function(lib) {
	var c1 = new manipulators[lib]('rgb(0, 100, 255)');
	suite.add(' - ' + lib, function() {
		c1.negate();
	}, options);
});
suites.push(['negate', suite]);

suite = new benchmark.Suite();
manipulatorNames.forEach(function(lib) {
	var c1 = new manipulators[lib]('#aaaaaa');
	suite.add(' - ' + lib, function() {
		c1.lighten(0.1);
	}, options);
});
suites.push(['lighten', suite]);

suite = new benchmark.Suite();
manipulatorNames.forEach(function(lib) {
	var c1 = new manipulators[lib]('#aaaaaa');
	suite.add(' - ' + lib, function() {
		c1.darken(0.1);
	}, options);
});
suites.push(['darken', suite]);

suite = new benchmark.Suite();
manipulatorNames.forEach(function(lib) {
	var c1 = new manipulators[lib]('hsl(100, 50%, 50%)');
	suite.add(' - ' + lib, function() {
		c1.saturate(0.5);
	}, options);
});
suites.push(['saturate', suite]);

suite = new benchmark.Suite();
manipulatorNames.forEach(function(lib) {
	var c1 = new manipulators[lib]('hsl(100, 50%, 50%)');
	suite.add(' - ' + lib, function() {
		c1.desaturate(0.5);
	}, options);
});
suites.push(['desaturate', suite]);

suite = new benchmark.Suite();
manipulatorNames.forEach(function(lib) {
	var c1 = new manipulators[lib]('hsl(100, 50%, 50%)');
	suite.add(' - ' + lib, function() {
		c1.clearer(0.5);
	}, options);
});
suites.push(['clearer', suite]);

suite = new benchmark.Suite();
manipulatorNames.forEach(function(lib) {
	var c1 = new manipulators[lib]('hsl(100, 50%, 50%)');
	suite.add(' - ' + lib, function() {
		c1.opaquer(0.5);
	}, options);
});
suites.push(['opaquer', suite]);

suite = new benchmark.Suite();
manipulatorNames.forEach(function(lib) {
	var c1 = new manipulators[lib]('#aaaaaa');
	var c2 = new manipulators[lib]('#33333380');
	suite.add(' - ' + lib, function() {
		c1.mix(c2, 0.5);
	}, options);
});
suites.push(['mix', suite]);

suite = new benchmark.Suite();
manipulatorNames.forEach(function(lib) {
	var c1 = new manipulators[lib]('hsl(100, 50%, 50%)');
	suite.add(' - ' + lib, function() {
		c1.clone();
	}, options);
});
suites.push(['clone', suite]);

suites.forEach(function(arr) {
	console.log('');
	console.log(arr[0] + ':');

	arr[1]
		.on('cycle', cycle)
		.on('complete', complete)
		.run();
});
