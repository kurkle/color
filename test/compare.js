/* eslint-disable no-console */
import benchmark from 'benchmark';
import colorString from 'color-string';
import tinycolor from 'tinycolor2';
import color from 'chartjs-color';
import chroma from 'chroma-js';
import parse from 'color-parse';
import parser from 'color-parser';
import kcolor from '../dist/color.esm.js';

const {get: ostring} = colorString;

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
  if (!event.target.error) {
    console.log(String(event.target));
  }
};

strings.forEach(function(str) {
  var _suite = new benchmark.Suite();
  parserNames.forEach(function(lib) {
    if (objects[lib]) {
      _suite.add('parse ' + str + '|' + lib, function() {
        var c = new parsers[lib](str);
        if (!c) {
          throw new Error('failed');
        }
      }, options);
    } else {
      _suite.add('parse ' + str + '|' + lib, function() {
        var c = parsers[lib](str);
        if (!c) {
          throw new Error('failed');
        }
      }, options);
    }
  });
  _suite
    .on('cycle', cycle)
    .run();
});

var suites = [];
var suite;

suite = new benchmark.Suite();
manipulatorNames.forEach(function(lib) {
  var c1 = new manipulators[lib]('#aaaaaa');
  suite.add('alpha|' + lib, function() {
    c1.alpha(0.5);
  }, options);
});
suites.push(['alpha', suite]);

suite = new benchmark.Suite();
manipulatorNames.forEach(function(lib) {
  var c1 = new manipulators[lib]('rgb(0, 100, 255)');
  suite.add('negate|' + lib, function() {
    c1.negate();
  }, options);
});
suites.push(['negate', suite]);

suite = new benchmark.Suite();
manipulatorNames.forEach(function(lib) {
  var c1 = new manipulators[lib]('#aaaaaa');
  suite.add('lighten|' + lib, function() {
    c1.lighten(0.1);
  }, options);
});
suites.push(['lighten', suite]);

suite = new benchmark.Suite();
manipulatorNames.forEach(function(lib) {
  var c1 = new manipulators[lib]('#aaaaaa');
  suite.add('darken|' + lib, function() {
    c1.darken(0.1);
  }, options);
});
suites.push(['darken', suite]);

suite = new benchmark.Suite();
manipulatorNames.forEach(function(lib) {
  var c1 = new manipulators[lib]('hsl(100, 50%, 50%)');
  suite.add('saturate|' + lib, function() {
    c1.saturate(0.5);
  }, options);
});
suites.push(['saturate', suite]);

suite = new benchmark.Suite();
manipulatorNames.forEach(function(lib) {
  var c1 = new manipulators[lib]('hsl(100, 50%, 50%)');
  suite.add('desaturate|' + lib, function() {
    c1.desaturate(0.5);
  }, options);
});
suites.push(['desaturate', suite]);

suite = new benchmark.Suite();
manipulatorNames.forEach(function(lib) {
  var c1 = new manipulators[lib]('hsl(100, 50%, 50%)');
  suite.add('clearer|' + lib, function() {
    c1.clearer(0.5);
  }, options);
});
suites.push(['clearer', suite]);

suite = new benchmark.Suite();
manipulatorNames.forEach(function(lib) {
  var c1 = new manipulators[lib]('hsl(100, 50%, 50%)');
  suite.add('opaquer|' + lib, function() {
    c1.opaquer(0.5);
  }, options);
});
suites.push(['opaquer', suite]);

suite = new benchmark.Suite();
manipulatorNames.forEach(function(lib) {
  var c1 = new manipulators[lib]('#aaaaaa');
  var c2 = new manipulators[lib]('#33333380');
  suite.add('mix|' + lib, function() {
    c1.mix(c2, 0.5);
  }, options);
});
suites.push(['mix', suite]);

suite = new benchmark.Suite();
manipulatorNames.forEach(function(lib) {
  var c1 = new manipulators[lib]('hsl(100, 50%, 50%)');
  suite.add('clone|' + lib, function() {
    c1.clone();
  }, options);
});
suites.push(['clone', suite]);

suite = new benchmark.Suite();
manipulatorNames.forEach(function(lib) {
  var c1 = new manipulators[lib]('hsl(100, 50%, 50%)');
  suite.add('hexString|' + lib, function() {
    c1.hexString();
  }, options);
});
suites.push(['hexString', suite]);

suite = new benchmark.Suite();
manipulatorNames.forEach(function(lib) {
  var c1 = new manipulators[lib]('hsl(100, 50%, 50%)');
  suite.add('hslString|' + lib, function() {
    c1.hslString();
  }, options);
});
suites.push(['hslString', suite]);

suite = new benchmark.Suite();
manipulatorNames.forEach(function(lib) {
  var c1 = new manipulators[lib]('hsl(100, 50%, 50%)');
  suite.add('rgbString|' + lib, function() {
    c1.rgbString();
  }, options);
});
suites.push(['rgbString', suite]);

suites.forEach(function(arr) {
  arr[1]
    .on('cycle', cycle)
    .run();
});
