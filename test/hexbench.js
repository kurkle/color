/* eslint-disable no-console */
import benchmark from 'benchmark';

var map = {0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, A: 10, B: 11, C: 12, D: 13, E: 14, F: 15, a: 10, b: 11, c: 12, d: 13, e: 14, f: 15};
var str = 'Af08Df88';

var suite = new benchmark.Suite();

suite
  .add('parseInt +', function() {
    return [
      parseInt(str[0] + str[1], 16),
      parseInt(str[2] + str[3], 16),
      parseInt(str[4] + str[5], 16),
      parseInt(str[6] + str[7], 16) / 255
    ];
  })
  .add('parseInt slice', function() {
    return [
      parseInt(str.slice(0, 2), 16),
      parseInt(str.slice(2, 4), 16),
      parseInt(str.slice(4, 6), 16),
      parseInt(str.slice(6, 8), 16) / 255
    ];
  })
  .add('map', function() {
    return [
      map[str[1]] << 4 | map[str[2]],
      map[str[1]] << 4 | map[str[2]],
      map[str[5]] << 4 | map[str[6]],
      (map[str[7]] << 4 | map[str[8]]) / 255
    ];
  })
  .add('map obj', function() {
    return {
      r: map[str[1]] << 4 | map[str[2]],
      g: map[str[1]] << 4 | map[str[2]],
      b: map[str[5]] << 4 | map[str[6]],
      a: (map[str[7]] << 4 | map[str[8]]) / 255
    };
  })
  .add('parseInt + shift', function() {
    var v = parseInt(str, 16);
    return [
      v & 0xff000000 >>> 24,
      v & 0xff0000 >> 16,
      v & 0xff00 >> 8,
      v & 0xff / 255
    ];
  })
  .on('cycle', function(event) {
    console.log(String(event.target));
  })
  .on('complete', function() {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
  })
  .run();
