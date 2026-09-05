# Benchmarks

Performance comparisons for `@kurkle/color`, including against other color libraries
(`chroma-js`, `tinycolor2`, `color-parse`, `color-string`, `color-parser`, `chartjs-color`).

These comparison libraries are only needed here, so they live in this directory's own
`package.json` instead of the root one — running `npm ci` at the repo root does not
install them.

## Running

```bash
npm run build   # from the repo root, so bench/../dist exists
cd bench
npm install
npm run hex       # node --expose-gc hexbench.js
npm run compare   # node --expose-gc compare.js
```

`compare.js` accepts an optional filter argument, e.g. `node --expose-gc compare.js parse`.

Published results: https://kurkle.github.io/color/dev/bench/
