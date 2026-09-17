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

## History and normalisation

Every result above ends up on the `gh-pages` branch, written by
[`rhysd/github-action-benchmark`](https://github.com/rhysd/github-action-benchmark) since
2020-02-07. That branch is force-pushed by the benchmark action on every run and carries
no other history, so it is one force-push away from losing six years of data. A point-in-time
copy lives in [`archive/`](archive) instead:

- `archive/gh-pages-2026-09-17.json.gz` — a gzip of the `data.js` this repo's `gh-pages`
  branch served on that date, reshaped to plain JSON (`{ capturedAt, source, repoUrl,
  lastUpdate, entries }`). `entries` holds two suites, `HEX parsing` and `Comparison`,
  166 runs each, one per commit that triggered the benchmark workflow. This is a capture,
  not a report: it is not reformatted or re-derived, so it stays useful even if the method
  below turns out to need revisiting.

### Why the numbers need normalising

Each run reports absolute operations per second on whatever GitHub-hosted runner happened
to pick up that job, and runners vary enormously: the fastest run in the history is about
three times the speed of the slowest. A raw plot of this package's numbers over time is
therefore dominated by which machine ran it, not by what the code did.

### Method

`scripts/normalize.mjs` derives a per-run "machine factor" and divides every bench's value
in that run by it:

1. Only benches present in **every** run of the `Comparison` suite are used — 51 of them.
2. For each such bench `b`, compute `M_b`, the median of its value across all 166 runs.
3. For each run `r`, the machine factor `F_r` is the **median over the third-party
   benches only** of `value[r][b] / M_b`. Third-party means every bench whose name does
   not end in `|@kurkle/color` — 43 benches, across six libraries (`chroma-js`,
   `tinycolor2`, `color-parse`, `color-string`, `color-parser`, `chartjs-color`).
4. The normalised value of any bench (in either suite) in run `r` is `value[r][b] / F_r`.

Two choices here were measured, not assumed:

- **This package's own benches are excluded from the factor.** Including all 51 common
  benches scores marginally better on paper — 17.4% mean coefficient of variation for
  this package's benches against 18.1% when they're excluded — but it lets the thing
  being measured influence its own yardstick. The 0.7-point difference is not worth that.
- **No single library is used as the anchor**, not even one whose code has genuinely
  never changed. `chartjs-color` is exactly that: its last release, 2.4.1, is from
  2019-10-25, before this history begins, and the `package.json` caret range here could
  never have moved it. Its eight benches also agree with each other more tightly within a
  run than the 43-bench basket does. Neither of those makes it a better anchor: normalising
  by `chartjs-color` alone *raises* this package's mean coefficient of variation from
  23.3% (unnormalised) to 31.4% — worse than not normalising at all. The two factors
  correlate at 0.93, so they are tracking the same underlying thing, but `chartjs-color`'s
  benches share a systematic response to the runner environment that this package's
  benches don't share to the same degree, and dividing by a single library injects that
  difference back in. A basket of 43 benches across six libraries averages the
  idiosyncrasy out. This is a reasonable-looking shortcut and someone will suggest it
  again — the measurement above is why it isn't taken.

### What normalisation does not buy

Run `node scripts/normalize.mjs --check` to reproduce the headline numbers against the
archive: this package's own benches have a mean coefficient of variation of about 23%
raw and about 18% normalised. That is a real improvement, but an 18% residual means this
history can show a large regression unmistakably and cannot resolve the small,
single-digit improvements this package has actually been shipping.

Two worked examples from this repo's own history make the boundary concrete:

- The 0.4.0 release regressed `parse #555555` to about 0.60x of its prior speed, and the
  normalised series shows it plainly: roughly 12.1M ops/s in the runs immediately before
  the release, 7.3M during it, back to about 12.1–12.7M ops/s afterwards.
- The comment-regex guard (`perf: skip the comment regex in functionParse when there is
  no comment`) measured a 9% improvement locally. In the normalised CI history it is
  invisible — run-to-run scatter on the affected benches is on the order of 15–30%,
  swamping a 9% step.

Per-release (or per-change) measurement on one machine in one sitting is the right tool
for changes in that range; this archive and `normalize.mjs` are for tracking the shape of
the history and catching regressions large enough to survive the noise.

### Using `normalize.mjs`

```bash
node scripts/normalize.mjs --check              # print the coefficient-of-variation numbers above
node scripts/normalize.mjs                       # print the full normalised dataset as JSON
node scripts/normalize.mjs --out normalized.json # write it to a file instead
node scripts/normalize.mjs --data path/to/data.js --check   # read a raw github-action-benchmark
                                                              # data.js instead of the archive
```

Without `--data`, it reads `archive/gh-pages-2026-09-17.json.gz`. `--data` also accepts a
raw `data.js` as served from `gh-pages` (a `window.BENCHMARK_DATA = {...}` assignment), so
the same script normalises a fresh export without waiting for a new archive.
