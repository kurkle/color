#!/usr/bin/env node
/**
 * Normalise the @kurkle/color benchmark history so runs can be compared across the
 * different GitHub-hosted runners that happened to execute them.
 *
 * Background and the method itself are documented in ../README.md. In short: for every
 * run we compute a single "machine factor" from a basket of third-party benches (i.e.
 * everything that is not this package), then divide every bench's value in that run by
 * that factor. This does not make numbers physically accurate; it makes them comparable
 * to each other.
 *
 * Usage:
 *   node normalize.mjs [--data <path>] [--out <path>] [--check]
 *
 *   --data <path>  Data file to read. Defaults to ../archive/gh-pages-2026-09-17.json.gz.
 *                  Accepts either that gzip archive (the shape this repo captures:
 *                  { capturedAt, source, repoUrl, lastUpdate, entries }) or a raw data.js
 *                  as served by github-action-benchmark, i.e. a file whose contents are
 *                  `window.BENCHMARK_DATA = { lastUpdate, repoUrl, entries }`.
 *   --out <path>   Write the normalised dataset as JSON to this path. Without --out,
 *                  prints it to stdout.
 *   --check        Instead of emitting data, print the mean coefficient of variation
 *                  (raw vs. normalised) for this package's own benches in the comparison
 *                  suite, so the claims in the README can be reproduced by running this
 *                  rather than by trusting it.
 *
 * Only run() below is intended for reuse; everything else is an implementation detail.
 */

import { readFileSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { gunzipSync } from 'node:zlib'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const DEFAULT_DATA_PATH = path.join(__dirname, '..', 'archive', 'gh-pages-2026-09-17.json.gz')
const PACKAGE_JSON_PATH = path.join(__dirname, '..', '..', 'package.json')

// The suite that carries the multi-library comparison. Its shape - one bench per
// "<case>|<library>" - is what lets us tell this package's own benches apart from
// everyone else's, and it is the only suite the machine factor is computed from.
const COMPARISON_SUITE = 'Comparison'

function median(values) {
  const sorted = [...values].sort((a, b) => a - b)
  const mid = Math.floor(sorted.length / 2)
  return sorted.length % 2 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2
}

function mean(values) {
  return values.reduce((a, b) => a + b, 0) / values.length
}

function stddev(values) {
  const m = mean(values)
  return Math.sqrt(mean(values.map((v) => (v - m) ** 2)))
}

function coefficientOfVariation(values) {
  return stddev(values) / mean(values)
}

/** Load a benchmark dataset from a `.json.gz` archive or a raw `data.js`. */
function loadData(dataPath) {
  const raw = readFileSync(dataPath)
  const isGzip = dataPath.endsWith('.gz') || (raw[0] === 0x1f && raw[1] === 0x8b)
  const text = (isGzip ? gunzipSync(raw) : raw).toString('utf8')
  const jsonText = text.trim().startsWith('window.BENCHMARK_DATA')
    ? text
        .trim()
        .replace(/^window\.BENCHMARK_DATA\s*=\s*/, '')
        .replace(/;\s*$/, '')
    : text
  const parsed = JSON.parse(jsonText)
  if (!parsed.entries) {
    throw new Error(`${dataPath} has no "entries" - is this a github-action-benchmark data file?`)
  }
  return parsed
}

/** The name suffix that marks a bench as belonging to this package, e.g. "|@kurkle/color". */
function ownBenchSuffix() {
  const { name } = JSON.parse(readFileSync(PACKAGE_JSON_PATH, 'utf8'))
  return `|${name}`
}

/** Benches present in every run of a suite - the only ones a per-run factor can use. */
function benchesInEveryRun(runs) {
  const perRunNames = runs.map((run) => new Set(run.benches.map((b) => b.name)))
  const allNames = new Set(perRunNames.flatMap((s) => [...s]))
  return [...allNames].filter((name) => perRunNames.every((s) => s.has(name)))
}

function benchValue(run, benchName) {
  return run.benches.find((b) => b.name === benchName).value
}

/**
 * Compute, for the comparison suite, the per-bench median M_b (across all runs) and the
 * per-run machine factor F_r (median over third-party benches of value[r][b] / M_b).
 * Returns { commonBenches, thirdPartyBenches, ownBenches, medianByBench, factorByCommit }.
 */
function computeMachineFactors(comparisonRuns, ownSuffix) {
  const commonBenches = benchesInEveryRun(comparisonRuns)
  const ownBenches = commonBenches.filter((name) => name.endsWith(ownSuffix))
  const thirdPartyBenches = commonBenches.filter((name) => !name.endsWith(ownSuffix))

  const medianByBench = new Map(
    commonBenches.map((name) => [name, median(comparisonRuns.map((run) => benchValue(run, name)))])
  )

  const factorByCommit = new Map()
  for (const run of comparisonRuns) {
    const factor = median(
      thirdPartyBenches.map((name) => benchValue(run, name) / medianByBench.get(name))
    )
    factorByCommit.set(run.commit.id, factor)
  }

  return { commonBenches, factorByCommit, medianByBench, ownBenches, thirdPartyBenches }
}

/** Build a normalised copy of the dataset: same shape, every bench value divided by F_r. */
function normalizeDataset(data, factorByCommit) {
  const entries = {}
  for (const [suiteName, runs] of Object.entries(data.entries)) {
    entries[suiteName] = runs.map((run) => {
      const factor = factorByCommit.get(run.commit.id)
      if (factor === undefined) {
        // Only happens if a suite has runs the comparison suite does not (not the case
        // for this repo's history, but a raw data.js from a fork might differ) - leave
        // that run's values unnormalised rather than guess, and say so once.
        process.stderr.write(
          `normalize.mjs: no machine factor for commit ${run.commit.id} (suite "${suiteName}") - left unnormalised\n`
        )
      }
      return {
        ...run,
        benches: run.benches.map((bench) => ({
          ...bench,
          rawValue: bench.value,
          value: factor === undefined ? bench.value : bench.value / factor,
        })),
        machineFactor: factor ?? null,
      }
    })
  }
  return entries
}

function runCheck(data, ownSuffix) {
  const comparisonRuns = data.entries[COMPARISON_SUITE]
  if (!comparisonRuns) {
    throw new Error(`--check needs a "${COMPARISON_SUITE}" suite in the data`)
  }
  const { commonBenches, thirdPartyBenches, ownBenches, factorByCommit } = computeMachineFactors(
    comparisonRuns,
    ownSuffix
  )
  const libraries = new Set(thirdPartyBenches.map((name) => name.slice(name.indexOf('|') + 1)))

  const rawCv = mean(
    ownBenches.map((name) =>
      coefficientOfVariation(comparisonRuns.map((run) => benchValue(run, name)))
    )
  )
  const normalizedCv = mean(
    ownBenches.map((name) =>
      coefficientOfVariation(
        comparisonRuns.map((run) => benchValue(run, name) / factorByCommit.get(run.commit.id))
      )
    )
  )

  console.log(`${COMPARISON_SUITE} suite: ${comparisonRuns.length} runs`)
  console.log(
    `${commonBenches.length} benches present in every run ` +
      `(${thirdPartyBenches.length} third-party across ${libraries.size} libraries, ${ownBenches.length} own)`
  )
  console.log(`Raw mean CV, this package's own benches:        ${(rawCv * 100).toFixed(1)}%`)
  console.log(`Normalised mean CV, this package's own benches: ${(normalizedCv * 100).toFixed(1)}%`)
}

function parseArgs(argv) {
  const args = { check: false, data: DEFAULT_DATA_PATH, out: null }
  for (let i = 0; i < argv.length; i++) {
    if (argv[i] === '--data') args.data = argv[++i]
    else if (argv[i] === '--out') args.out = argv[++i]
    else if (argv[i] === '--check') args.check = true
    else throw new Error(`unrecognised argument: ${argv[i]}`)
  }
  return args
}

function main() {
  const args = parseArgs(process.argv.slice(2))
  const data = loadData(args.data)
  const ownSuffix = ownBenchSuffix()

  if (args.check) {
    runCheck(data, ownSuffix)
    return
  }

  const comparisonRuns = data.entries[COMPARISON_SUITE]
  if (!comparisonRuns) {
    throw new Error(
      `can't compute a machine factor without a "${COMPARISON_SUITE}" suite in the data`
    )
  }
  const { factorByCommit } = computeMachineFactors(comparisonRuns, ownSuffix)
  const normalized = {
    entries: normalizeDataset(data, factorByCommit),
    generatedAt: new Date().toISOString(),
    lastUpdate: data.lastUpdate,
    method: `median over third-party benches only of value[r][b] / median(value[*][b]); see bench/README.md`,
    repoUrl: data.repoUrl,
    sourceData: path.resolve(args.data),
  }

  const output = JSON.stringify(normalized, null, 2)
  if (args.out) {
    writeFileSync(args.out, output)
    console.error(`wrote ${args.out}`)
  } else {
    console.log(output)
  }
}

main()
