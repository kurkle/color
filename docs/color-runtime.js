import * as color from '../dist/color.esm.js'

export const globals = { color }

const CHECKER = 8

function checkerboard(ctx, x, y, w, h) {
  for (let cy = 0; cy < h; cy += CHECKER) {
    for (let cx = 0; cx < w; cx += CHECKER) {
      ctx.fillStyle = ((cx / CHECKER + cy / CHECKER) & 1) === 0 ? '#ffffff' : '#d8dcdd'
      ctx.fillRect(x + cx, y + cy, Math.min(CHECKER, w - cx), Math.min(CHECKER, h - cy))
    }
  }
}

function toSwatch(entry) {
  const swatch = typeof entry === 'string' ? { css: entry } : entry
  // A swatch whose colour did not parse must be visible, not silently painted
  // in whatever fill was left over from the checkerboard.
  return typeof swatch.css === 'string' ? swatch : { bad: true, css: '#ff00ff', label: String(swatch.css) }
}

function normalizeRows(config) {
  const raw = config.render ? config.render(config) : config.rows || config.swatches
  if (!Array.isArray(raw)) {
    throw new Error('The sample must return an array of swatches, or an array of { label, swatches } rows.')
  }
  const rows = raw.length > 0 && raw[0] && !Array.isArray(raw[0]) && Array.isArray(raw[0].swatches) ? raw : [{ swatches: raw }]
  return rows.map((row) => ({ label: row.label, swatches: row.swatches.map(toSwatch) }))
}

export function createChart(canvas, config) {
  const ctx = canvas.getContext('2d')
  const rows = normalizeRows(config)
  const { width, height } = canvas
  ctx.clearRect(0, 0, width, height)
  const rowH = height / rows.length
  ctx.textBaseline = 'middle'
  rows.forEach((row, ri) => {
    const top = ri * rowH
    const labelW = row.label ? 150 : 0
    if (row.label) {
      ctx.fillStyle = '#3a4a4e'
      ctx.font = '600 15px system-ui, sans-serif'
      ctx.textAlign = 'right'
      ctx.fillText(row.label, labelW - 14, top + rowH / 2)
    }
    const n = row.swatches.length
    const w = (width - labelW) / n
    const showText = n <= 8 && rowH > 46
    const blockH = showText ? rowH - 26 : rowH - 4
    row.swatches.forEach((s, i) => {
      const x = labelW + i * w
      checkerboard(ctx, x, top + 2, w, blockH)
      ctx.fillStyle = s.css
      ctx.fillRect(x, top + 2, w, blockH)
      if (s.bad) {
        ctx.fillStyle = '#ffffff'
        ctx.font = '600 12px system-ui, sans-serif'
        ctx.textAlign = 'center'
        ctx.fillText('not a color', x + w / 2, top + blockH / 2)
      }
      if (showText && s.label !== false) {
        ctx.fillStyle = '#3a4a4e'
        ctx.font = '13px ui-monospace, monospace'
        ctx.textAlign = 'center'
        ctx.fillText(s.label ?? s.css, x + w / 2, top + rowH - 12)
      }
    })
  })
  return { destroy() {} }
}
