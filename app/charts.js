// Pure-SVG charts for NusaStat. No library, no canvas, no network: each chart
// is a string of SVG built from the numbers in data.js, so it renders the same
// on a desktop and on a phone.
//
// A line chart is assembled from four pieces — scales, grid lines, data dots
// and axis labels — so each piece can be read on its own; a bar chart is a
// list of rows scaled against the widest bar.

import { escHtml as esc } from './format.js';

const TEAL = '#0e5f56';
const AMBER = '#d98e1f';
const INK = '#14261f';
const MUTED = '#5c6b66';
const GRID = '#e3e0d6';

const CHART_W = 720;
const CHART_H = 300;

// The frame a line chart draws in: the padding around the plot area.
const FRAME = { left: 56, right: 14, top: 26, bottom: 34 };

/**
 * Pixel scales for a series: xAt maps a year (fractional for March/August/
 * September readings) across the plot, yAt maps a value up it, with a little
 * headroom padded around the values so the line never touches the frame.
 */
function lineScales(points) {
  const innerW = CHART_W - FRAME.left - FRAME.right;
  const innerH = CHART_H - FRAME.top - FRAME.bottom;
  const xs = points.map((p) => p.x);
  const ys = points.map((p) => p.y);
  const xMin = Math.min(...xs);
  const xMax = Math.max(...xs);
  const yMin = Math.min(...ys);
  const yMax = Math.max(...ys);
  const yPad = Math.max((yMax - yMin) * 0.18, 0.5);
  const lo = Math.max(0, yMin - yPad);
  const hi = yMax + yPad;
  const xAt = (x) => FRAME.left + (xMax === xMin ? innerW / 2 : ((x - xMin) / (xMax - xMin)) * innerW);
  const yAt = (y) => FRAME.top + innerH - ((y - lo) / (hi - lo)) * innerH;
  return { xAt, yAt, lo, hi, innerW };
}

/** Five horizontal grid lines with their value labels on the left. */
function gridLines(scales, fmt) {
  let grid = '';
  for (let i = 0; i <= 4; i += 1) {
    const v = scales.lo + ((scales.hi - scales.lo) * i) / 4;
    const y = scales.yAt(v);
    grid += `<line x1="${FRAME.left}" y1="${y}" x2="${CHART_W - FRAME.right}" y2="${y}" stroke="${GRID}" stroke-width="1"/>`;
    grid += `<text x="${FRAME.left - 8}" y="${y + 4}" text-anchor="end" font-size="11" fill="${MUTED}">${fmt(v)}</text>`;
  }
  return grid;
}

/** One dot per point, each with its value above it. */
function dataDots(points, scales, fmt) {
  return points
    .map((p, i) => {
      // The first and last labels sit next to the y-axis numbers, so anchor
      // them away from the axis instead of centring them over the dot.
      const anchor = i === 0 ? 'start' : i === points.length - 1 ? 'end' : 'middle';
      const lx = i === 0 ? scales.xAt(p.x) + 10 : i === points.length - 1 ? scales.xAt(p.x) - 10 : scales.xAt(p.x);
      return (
        `<circle cx="${scales.xAt(p.x).toFixed(1)}" cy="${scales.yAt(p.y).toFixed(1)}" r="4.5" fill="${TEAL}" stroke="#fff" stroke-width="1.5"/>` +
        `<text x="${lx.toFixed(1)}" y="${(scales.yAt(p.y) - 10).toFixed(1)}" text-anchor="${anchor}" font-size="12" font-weight="700" fill="${INK}">${fmt(p.y)}</text>`
      );
    })
    .join('');
}

/** The year labels along the bottom axis. */
function axisLabels(points, scales) {
  return points
    .map((p) => `<text x="${scales.xAt(p.x).toFixed(1)}" y="${CHART_H - 10}" text-anchor="middle" font-size="11" fill="${MUTED}">${esc(p.label)}</text>`)
    .join('');
}

// A line chart with a time axis. points carry { label, x, y }; x is a year
// (fractional for March/August/September readings) so points sit in time.
export function lineChart(series, decimals = 2) {
  const points = series.points;
  const scales = lineScales(points);
  const fmt = (v) => v.toFixed(decimals).replace('.', ',');
  const path = points.map((p, i) => `${i === 0 ? 'M' : 'L'}${scales.xAt(p.x).toFixed(1)},${scales.yAt(p.y).toFixed(1)}`).join(' ');
  return `<svg viewBox="0 0 ${CHART_W} ${CHART_H}" role="img" aria-label="${esc(series.title)}" class="chart-svg">${gridLines(scales, fmt)}<path d="${path}" fill="none" stroke="${TEAL}" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round"/>${dataDots(points, scales, fmt)}${axisLabels(points, scales)}</svg>`;
}

/** One horizontal bar row: label, a track filled to its share of the max, value. */
function barRow(item, max, fmt) {
  const pct = (item.value / max) * 100;
  const color = item.highlight ? AMBER : TEAL;
  return `<div class="bar-row">
  <div class="bar-label">${esc(item.label)}</div>
  <div class="bar-track"><div class="bar-fill" style="width:${pct.toFixed(1)}%;background:${color}"></div></div>
  <div class="bar-value">${fmt(item.value)}</div>
</div>`;
}

// Horizontal bars. items carry { label, value, highlight? }; the widest bar
// fills the track and the rest scale against it.
export function barChart(set, decimals = 2) {
  const max = Math.max(...set.items.map((i) => i.value));
  const fmt = (v) => v.toFixed(decimals).replace('.', ',');
  const rows = set.items.map((item) => barRow(item, max, fmt)).join('');
  return `<div class="bar-chart" role="img" aria-label="${esc(set.title)}">${rows}</div>`;
}

/** A time series' points as a bar set, for the two-point PDB chart. */
export function seriesBars(series) {
  return { title: series.title, items: series.points.map((p) => ({ label: p.label, value: p.y })) };
}
