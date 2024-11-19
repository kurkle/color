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

const parsedStrings = [
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

const called = ['tinycolor2', 'chroma-js', 'color-parse', 'color-parser', 'color-string'];
const constructed = ['@kurkle/color', 'chartjs-color'];
const manipulators = ['@kurkle/color', 'chroma-js', 'chartjs-color'];

const options = {
  initCount: 1,
  maxTime: 4
};

const cycle = (event) => !event.target.error && console.log(`${event.target}`);

const benchmarkSuites = [];

// parsing suites

for (const str of parsedStrings) {
  const suite = new benchmark.Suite();

  for (const lib of constructed) {
    suite.add(`parse ${str}|${lib}`, () => {
      const c = new parsers[lib](str);
      if (!c) {
        throw new Error('failed');
      }
    }, options);
  }

  for (const lib of called) {
    suite.add(`parse ${str}|${lib}`, () => {
      const c = parsers[lib](str);
      if (!c) {
        throw new Error('failed');
      }
    }, options);
  }

  benchmarkSuites.push(suite);
}

// manipulation suites

const manipulationParams = {
  alpha: [0.5],
  negate: [],
  lighten: [0, 1],
  darken: [0, 1],
  saturate: [0.5],
  desaturate: [0.5],
  clearer: [0.5],
  opaquer: [0.5],
  mix: ['#33333380', 0.5],
  clone: [],
  hexString: [],
  hslString: [],
  rgbString: [],
};

const manupulatedColors = {
  alpha: '#aaaaaa',
  negate: 'rgb(0, 100, 255)',
  lighten: '#aaaaaa',
  darken: '#aaaaaa',
  mix: '#aaaaaa',
};

const parserFn = (lib, input) => constructed.includes(lib) ? new parsers[lib](input) : parsers[lib](input);

for (const fn of Object.keys(manipulationParams)) {
  const suite = new benchmark.Suite();
  const args = manipulationParams[fn];
  const input = manupulatedColors[fn] ?? 'hsl(100, 50%, 50%)';

  for (const lib of manipulators) {
    const instance = parserFn(lib, input);

    if (!(fn in instance)) {
      continue;
    } // not supported

    const instanceArgs = args.map((arg) => typeof arg === 'string' ? parserFn(lib, arg) : arg);

    suite.add(`${fn}|${lib}`, () => {
      instance[fn](...instanceArgs);
    }, options);
  }
  benchmarkSuites.push(suite);
}

// run the suites
const filter = process.argv[2];
const filterFn = filter ? (bench) => bench.name.startsWith(filter) : () => true;

for (const suite of benchmarkSuites) {
  suite.filter(filterFn).on('cycle', cycle).run();
}
