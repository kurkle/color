/* eslint-disable no-console */
import benchmark from 'benchmark';

// Pre-compute the hex value map for faster lookups
const map = {0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, A: 10, B: 11, C: 12, D: 13, E: 14, F: 15, a: 10, b: 11, c: 12, d: 13, e: 14, f: 15};

// Use a typical hex color string for testing
const str = '#Af08Df88';

// Pre-warm the JS engine to avoid cold-start performance issues
function warmup() {
  for (let i = 0; i < 1000; i++) {
    parseInt(str.slice(0, 2), 16);
    // eslint-disable-next-line no-unused-expressions
    map[str[0]] << 4 | map[str[1]];
  }
}
warmup();

const suite = new benchmark.Suite({
  minSamples: 5,
  maxTime: 1
});

suite
  .add('parseInt +', function() {
    return [
      parseInt(str[1] + str[2], 16),
      parseInt(str[3] + str[4], 16),
      parseInt(str[5] + str[6], 16),
      parseInt(str[7] + str[8], 16),
    ];
  })
  .add('parseInt slice', function() {
    return [
      parseInt(str.slice(1, 3), 16),
      parseInt(str.slice(3, 5), 16),
      parseInt(str.slice(5, 7), 16),
      parseInt(str.slice(7, 9), 16),
    ];
  })
  .add('map', function() {
    return [
      map[str[1]] << 4 | map[str[2]],
      map[str[3]] << 4 | map[str[4]],
      map[str[5]] << 4 | map[str[6]],
      map[str[7]] << 4 | map[str[8]]
    ];
  })
  .add('map obj', function() {
    return {
      r: map[str[1]] << 4 | map[str[2]],
      g: map[str[3]] << 4 | map[str[4]],
      b: map[str[5]] << 4 | map[str[6]],
      a: map[str[7]] << 4 | map[str[8]]
    };
  })
  .add('parseInt + shift', function() {
    const v = parseInt(str.slice(1), 16);
    return [
      (v & 0xff000000) >>> 24,
      (v & 0xff0000) >> 16,
      (v & 0xff00) >> 8,
      v & 0xff
    ];
  })
  .add('parseInt + shift obj', function() {
    const v = parseInt(str.slice(1), 16);
    return {
      r: (v & 0xff000000) >>> 24,
      g: (v & 0xff0000) >> 16,
      b: (v & 0xff00) >> 8,
      a: v & 0xff
    };
  })
  .on('cycle', function(event) {
    console.log(String(event.target));
    // Force garbage collection between benchmarks if available
    global.gc?.();
  })
  .on('complete', function() {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
  })
  .run();
