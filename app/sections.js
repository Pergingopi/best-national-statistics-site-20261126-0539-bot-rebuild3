// Shared page pieces for NusaStat: the KPI cards, chart panels, source notes
// and section headings every view reuses. Each piece is one small function
// returning its HTML string, so a view reads as the page it builds.

import { escHtml as esc, fmtNum } from './format.js';

export function pageHead(kicker, title, intro) {
  return `<p class="kicker">${esc(kicker)}</p>
<h1>${esc(title)}</h1>
<p class="lede">${esc(intro)}</p>`;
}

/** The unit shown small after a KPI value, or nothing when there is no unit. */
function unitSpan(unit) {
  return unit ? ` <span class="kpi-unit">${esc(unit)}</span>` : '';
}

export function kpiCard(kpi) {
  return `<a class="kpi" href="#/${kpi.route}">
  <span class="kpi-label">${esc(kpi.label)}</span>
  <span class="kpi-value">${fmtNum(kpi.value, kpi.decimals)}${unitSpan(kpi.unit)}</span>
  <span class="kpi-context">${esc(kpi.context)}</span>
</a>`;
}

export function kpiGrid(kpis) {
  return `<div class="kpi-grid">${kpis.map(kpiCard).join('')}</div>`;
}

export function chartPanel(title, unit, chartHtml, source) {
  return `<section class="panel" aria-label="${esc(title)}">
  <h2>${esc(title)}</h2>
  <p class="panel-unit">Satuan: ${esc(unit)}</p>
  ${chartHtml}
  <p class="source">Sumber: ${esc(source)}</p>
</section>`;
}

/** A chart panel for a whole data series: title, unit and source come from it. */
export function seriesPanel(series, chartHtml) {
  return chartPanel(series.title, series.unit, chartHtml, series.source);
}

export function factList(items) {
  const rows = items
    .map((item) => `<dt>${esc(item.term)}</dt><dd>${esc(item.text)}</dd>`)
    .join('');
  return `<dl class="facts">${rows}</dl>`;
}

export function noteBox(title, text) {
  return `<aside class="note"><h2>${esc(title)}</h2><p>${esc(text)}</p></aside>`;
}
