// NusaStat router and explorer. Six hash routes, no network: the pages are
// built from data.js and rendered into #app. window.__shotReady is false while
// a page renders and true once it is on screen, so a screenshot script knows
// when to capture.
//
// The explorer keeps one state object — query, group filter, sort key and
// direction — and every control writes through it, then re-renders the table
// from the filtered, sorted rows.

import { EXPLORER_ROWS } from './data.js';
import { escHtml as esc, fmtValue } from './format.js';
import { explorerView, homeView, missingView, populationView, economyView, socialView, sourcesView } from './views.js';

const app = document.getElementById('app');
const navLinks = Array.from(document.querySelectorAll('.site-nav a'));

const ROUTES = {
  '': { title: 'NusaStat — Statistik Indonesia', view: homeView },
  kependudukan: { title: 'Kependudukan | NusaStat', view: populationView },
  ekonomi: { title: 'Ekonomi | NusaStat', view: economyView },
  sosial: { title: 'Sosial & pembangunan | NusaStat', view: socialView },
  penjelajah: { title: 'Penjelajah data | NusaStat', view: explorerView },
  sumber: { title: 'Sumber & metode | NusaStat', view: sourcesView },
};

// --- Explorer: search, group filter, column sort, CSV download. ---

/** The header labels, in column order, without any sort arrow. */
const SORT_LABELS = { indicator: 'Indikator', group: 'Kelompok', sortYear: 'Tahun', value: 'Nilai', source: 'Sumber' };

const explorerState = { query: '', group: '', sortKey: 'sortYear', sortDir: -1 };

function explorerFiltered() {
  const query = explorerState.query.trim().toLowerCase();
  const rows = EXPLORER_ROWS.filter((row) => {
    if (explorerState.group && row.group !== explorerState.group) return false;
    if (!query) return true;
    return `${row.indicator} ${row.group} ${row.year} ${row.source}`.toLowerCase().includes(query);
  });
  const key = explorerState.sortKey;
  const dir = explorerState.sortDir;
  rows.sort((a, b) => {
    const av = a[key];
    const bv = b[key];
    if (typeof av === 'number' && typeof bv === 'number') return (av - bv) * dir;
    return String(av).localeCompare(String(bv), 'id') * dir;
  });
  return rows;
}

/** One table row of the explorer, as HTML. */
function explorerRow(row) {
  return `<tr><td>${esc(row.indicator)}</td><td>${esc(row.group)}</td><td>${esc(row.year)}</td><td class="num">${esc(fmtValue(row.value, row.decimals, row.unit))}</td><td>${esc(row.source)}</td></tr>`;
}

/** Mark the active sort column with its direction arrow; the rest get none. */
function syncSortButtons() {
  document.querySelectorAll('.data-table th button').forEach((button) => {
    const active = button.dataset.sort === explorerState.sortKey;
    button.setAttribute('aria-sort', active ? (explorerState.sortDir === 1 ? 'ascending' : 'descending') : 'none');
    button.textContent = SORT_LABELS[button.dataset.sort];
    if (active) button.textContent += explorerState.sortDir === 1 ? ' ▲' : ' ▼';
  });
}

function explorerRender() {
  const body = document.getElementById('explorer-body');
  const count = document.getElementById('explorer-count');
  if (!body || !count) return;
  const rows = explorerFiltered();
  body.innerHTML = rows.map(explorerRow).join('');
  count.textContent = `Menampilkan ${rows.length} dari ${EXPLORER_ROWS.length} baris.`;
  syncSortButtons();
}

/** A click on a column header: repeat clicks flip direction, a new column starts sorted (newest or largest first for years and values). */
function onSortClick(key) {
  if (explorerState.sortKey === key) {
    explorerState.sortDir *= -1;
  } else {
    explorerState.sortKey = key;
    explorerState.sortDir = key === 'sortYear' || key === 'value' ? -1 : 1;
  }
  explorerRender();
}

function explorerCsv() {
  const rows = explorerFiltered();
  const head = ['Indikator', 'Kelompok', 'Tahun', 'Nilai', 'Satuan', 'Sumber'];
  const quote = (cell) => `"${String(cell).replace(/"/g, '""')}"`;
  const lines = [head.map(quote).join(',')];
  for (const row of rows) {
    lines.push(
      [row.indicator, row.group, row.year, fmtValue(row.value, row.decimals, ''), row.unit, row.source]
        .map(quote)
        .join(','),
    );
  }
  const blob = new Blob([String.fromCharCode(0xfeff) + lines.join('\r\n')], { type: 'text/csv;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'nusastat-data.csv';
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function wireExplorer() {
  const search = document.getElementById('explorer-search');
  const group = document.getElementById('explorer-group');
  const download = document.getElementById('explorer-download');
  if (!search || !group || !download) return;
  search.value = explorerState.query;
  group.value = explorerState.group;
  search.addEventListener('input', () => {
    explorerState.query = search.value;
    explorerRender();
  });
  group.addEventListener('change', () => {
    explorerState.group = group.value;
    explorerRender();
  });
  download.addEventListener('click', explorerCsv);
  document.querySelectorAll('.data-table th button').forEach((button) => {
    button.addEventListener('click', () => onSortClick(button.dataset.sort));
  });
  explorerRender();
}

// --- Router. ---

function render() {
  window.__shotReady = false;
  const route = location.hash.replace(/^#\/?/, '').split('/')[0];
  const found = ROUTES[route] ?? null;
  document.title = found ? found.title : 'Tidak ditemukan | NusaStat';
  app.innerHTML = found ? found.view() : missingView();
  navLinks.forEach((link) => {
    if (link.dataset.route === route) {
      link.setAttribute('aria-current', 'page');
    } else {
      link.removeAttribute('aria-current');
    }
  });
  if (route === 'penjelajah') wireExplorer();
  window.scrollTo(0, 0);
  window.__shotReady = true;
}

window.addEventListener('hashchange', render);
render();
