const {performance} = require('perf_hooks');
const string = require('chartjs-color-string');
const ostring = require('color-string').get;
const tinycolor = require("tinycolor2");
const csscolor = require('../src/index.js');
const color = require('chartjs-color');
const chroma = require('chroma-js');
const parse = require('color-parse');
const parser = require('color-parser');

const libs = {
	"chartjs-color-string": string.getRgba,
	"tinycolor2": tinycolor,
	"css-color": csscolor,
	//"chroma-js": chroma,
	"color-parse": parse,
	"color-parser": parser,
	"color-string": ostring
};
const libNames = Object.keys(libs);

function measure(str) {
	var res = {};
	libNames.forEach(function(lib) {
		var t0 = performance.now();
		for (var i = 0; i < 500000; i++) {
			libs[lib](str);
		}
		var t1 = performance.now();
		res[lib] = Math.round((t1 - t0) * 100) / 100;
	});
	console.log();
	console.log(str);
	libNames.sort(function(a, b) {
		return res[a] < res[b] ? -1 : res[a] > res[b] ? 1 : 0;
	}).forEach(function(lib) {
		console.log(` - ${res[lib].toFixed(2).padStart(6,' ')} ${lib}`);
	});
}

console.log("parsing 500k times:");
measure('#faf');
measure('#ffaaff');
measure('#ffaaff88');
measure('rgb(255, 0, 0)');
measure('rgba(255, 0, 0, 0.5)');
measure('hsla(240, 100, 60, 0.5)');
measure('blue');
console.log("\nmixing colors 50k times:");
var i;
var t0 = performance.now();
for (i = 0; i < 50000; i++) {
	var c1 = new color('#aaaaaa');
	var c2 = new color("#33333380");
	c1.mix(c2, 0.5);
}
var t1 = performance.now();
for (i = 0; i < 50000; i++) {
	var cc1 = new csscolor('#aaaaaa');
	var cc2 = new csscolor("#33333380");
	cc1.mix(cc2, 0.5);
}
var t2 = performance.now();

console.log(` - ${(Math.round((t2 - t1) * 100) / 100).toFixed(2).padStart(6, ' ')} => ${cc1.rgbString()} - css-color`);
console.log(` - ${(Math.round((t1 - t0) * 100) / 100).toFixed(2).padStart(6, ' ')} => ${c1.rgbString()} - chartjs-color`);
