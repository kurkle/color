import benchmark from 'benchmark'

// Pre-compute the hex value map for faster lookups
const map = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  A: 10,
  a: 10,
  B: 11,
  b: 11,
  C: 12,
  c: 12,
  D: 13,
  d: 13,
  E: 14,
  e: 14,
  F: 15,
  f: 15,
}

// Use a typical hex color string for testing
const str = '#Af08Df88'

// Pre-warm the JS engine to avoid cold-start performance issues
function warmup() {
  for (let i = 0; i < 1000; i++) {
    parseInt(str.slice(0, 2), 16)
    ;(map[str[0]] << 4) | map[str[1]]
  }
}
warmup()

const suite = new benchmark.Suite({
  maxTime: 1,
  minSamples: 5,
})

suite
  .add('parseInt +', () => [
    parseInt(str[1] + str[2], 16),
    parseInt(str[3] + str[4], 16),
    parseInt(str[5] + str[6], 16),
    parseInt(str[7] + str[8], 16),
  ])
  .add('parseInt slice', () => [
    parseInt(str.slice(1, 3), 16),
    parseInt(str.slice(3, 5), 16),
    parseInt(str.slice(5, 7), 16),
    parseInt(str.slice(7, 9), 16),
  ])
  .add('map', () => [
    (map[str[1]] << 4) | map[str[2]],
    (map[str[3]] << 4) | map[str[4]],
    (map[str[5]] << 4) | map[str[6]],
    (map[str[7]] << 4) | map[str[8]],
  ])
  .add('map obj', () => ({
    a: (map[str[7]] << 4) | map[str[8]],
    b: (map[str[5]] << 4) | map[str[6]],
    g: (map[str[3]] << 4) | map[str[4]],
    r: (map[str[1]] << 4) | map[str[2]],
  }))
  .add('parseInt + shift', () => {
    const v = parseInt(str.slice(1), 16)
    return [(v & 0xff000000) >>> 24, (v & 0xff0000) >> 16, (v & 0xff00) >> 8, v & 0xff]
  })
  .add('parseInt + shift obj', () => {
    const v = parseInt(str.slice(1), 16)
    return {
      a: v & 0xff,
      b: (v & 0xff00) >> 8,
      g: (v & 0xff0000) >> 16,
      r: (v & 0xff000000) >>> 24,
    }
  })
  .on('cycle', (event) => {
    console.log(String(event.target))
    // Force garbage collection between benchmarks if available
    global.gc?.()
  })
  .on('complete', function () {
    console.log(`Fastest is ${this.filter('fastest').map('name')}`)
  })
  .run()
