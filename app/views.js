// The six pages of NusaStat, each built from the data in data.js. Every
// figure on a page is shown with the source and year it came from. A chart
// panel for a series is one seriesPanel call: the series carries its own
// title, unit and source, so a view never repeats them.

import { GENERATIONS, IPM_PROVINCES, KPIS, META, METHODS, POVERTY_SPLIT, SERIES, SOURCES } from './data.js';
import { barChart, lineChart, seriesBars } from './charts.js';
import { escHtml as esc } from './format.js';
import { factList, kpiGrid, noteBox, pageHead, seriesPanel } from './sections.js';

export function homeView() {
  return `${pageHead(
    'Angka resmi · Diperbarui ' + META.updated,
    'Indonesia dalam angka',
    'NusaStat mengumpulkan angka resmi Badan Pusat Statistik tentang penduduk, ekonomi, dan pembangunan manusia — lengkap dengan sumber dan tahunnya — supaya satu angka tidak pernah berdiri sendiri.',
  )}
${kpiGrid(KPIS)}
<section class="panel">
  <h2>Sorotan tahun 2025</h2>
  <ul class="highlights">
    <li><strong>284,67 juta jiwa.</strong> Penduduk Indonesia menurut SUPAS 2025, dengan 69,30% berada di usia produktif — jendela bonus demografi yang masih terbuka. <a href="#/kependudukan">Lihat kependudukan</a></li>
    <li><strong>Ekonomi tumbuh 5,11%.</strong> PDB mencapai Rp23.821,1 triliun dan PDB per kapita menembus USD 5.083,4 untuk pertama kalinya. <a href="#/ekonomi">Lihat ekonomi</a></li>
    <li><strong>Kemiskinan 8,25%.</strong> Tingkat kemiskinan September 2025 adalah yang terendah dalam rangkaian Susenas sejak 2020, sementara IPM naik ke 75,90. <a href="#/sosial">Lihat sosial &amp; pembangunan</a></li>
  </ul>
</section>
${seriesPanel(SERIES.growth, lineChart(SERIES.growth))}
${seriesPanel(SERIES.poverty, lineChart(SERIES.poverty))}
${noteBox(
  'Cara membaca situs ini',
  'Setiap grafik mencantumkan sumber dan tahun di bawahnya. Halaman Penjelajah data memuat seluruh angka dalam satu tabel yang bisa dicari, disaring menurut kelompok, dan diurutkan — dan diunduh sebagai CSV. Halaman Sumber & metode menjelaskan istilah seperti TPT, garis kemiskinan, dan IPM.',
)}`;
}

export function populationView() {
  return `${pageHead(
    'Kependudukan',
    '284,67 juta jiwa, dan makin tua perlahan',
    'Survei Penduduk Antar Sensus (SUPAS) 2025 mencatat 284,67 juta penduduk Indonesia. Pertumbuhan melambat menjadi 1,08% per tahun, dan hampir tujuh dari sepuluh penduduk berada di usia produktif.',
  )}
${factList([
  { term: 'Jumlah penduduk 2025', text: '284,67 juta jiwa (SUPAS 2025), naik dari 237,64 juta jiwa pada Sensus Penduduk 2010.' },
  { term: 'Laju pertumbuhan', text: '1,08% per tahun pada 2020–2025, melambat dari 1,43% pada 2010.' },
  { term: 'Usia produktif', text: '69,30% penduduk, sekitar 196 juta jiwa, berada di usia produktif.' },
  { term: 'Pulau Jawa', text: 'Sekitar 55% penduduk tinggal di Jawa; Jawa Barat adalah provinsi terpadat dengan 50,76 juta jiwa (proyeksi pertengahan 2025).' },
  { term: 'Generasi terbesar', text: 'Generasi Z adalah kelompok terbesar dengan 70,98 juta jiwa, disusul Milenial 69,30 juta jiwa.' },
])}
${seriesPanel(GENERATIONS, barChart(GENERATIONS))}
${noteBox(
  'Mengapa pertumbuhan melambat?',
  'Laju pertumbuhan penduduk turun dari 1,43% per tahun pada 2010 menjadi 1,08% pada 2020–2025. Keluarga yang lebih kecil dan usia kawin yang makin muda bergeser ke atas membuat pertambahan penduduk tiap tahun mengecil, meski jumlah totalnya masih naik.',
)}`;
}

export function economyView() {
  return `${pageHead(
    'Ekonomi',
    'PDB Rp23.821,1 triliun, tumbuh 5,11%',
    'Perekonomian Indonesia 2025 tumbuh 5,11% dibanding 2024 yang tumbuh 5,03%. Nilai PDB atas dasar harga berlaku mencapai Rp23.821,1 triliun, dan PDB per kapita Rp83,7 juta atau USD 5.083,4.',
  )}
${seriesPanel(SERIES.growth, lineChart(SERIES.growth))}
${seriesPanel(SERIES.pdbNominal, barChart(seriesBars(SERIES.pdbNominal), 1))}
${seriesPanel(SERIES.inflation, lineChart(SERIES.inflation))}
${factList([
  { term: 'PDB per kapita 2025', text: 'Rp83,7 juta, setara USD 5.083,4 — naik dari Rp78,6 juta (USD 4.960,3) pada 2024.' },
  { term: 'Triwulan IV-2025', text: 'Ekonomi tumbuh 5,39% (yoy) pada triwulan terakhir 2025, triwulan tercepat tahun itu.' },
  { term: 'Industri pengolahan', text: 'Kontributor terbesar PDB dengan pangsa 19,07% pada 2025.' },
  { term: 'Inflasi 2025', text: '2,92% (yoy) pada Desember 2025 — di dalam sasaran 2,5% ± 1%. Inflasi inti 2,38%, volatile food 6,21%, administered prices 1,93%. Pendorong terbesar: emas perhiasan dan kelompok makanan, minuman, dan tembakau (4,58%).' },
  { term: 'Inflasi tertinggi', text: 'Inflasi sempat 5,51% pada 2022, lalu turun ke 2,61% (2023) dan 1,57% (2024) sebelum naik lagi ke 2,92% pada 2025.' },
])}`;
}

export function socialView() {
  return `${pageHead(
    'Sosial & pembangunan',
    'Kemiskinan turun, manusia makin berkembang',
    'Tingkat kemiskinan September 2025 tercatat 8,25% — 23,36 juta orang — dan Indeks Pembangunan Manusia mencapai 75,90. Di balik angka nasional itu, kesenjangan antar daerah masih lebar: IPM DKI Jakarta 85,05, Papua Pegunungan 54,91.',
  )}
${seriesPanel(SERIES.poverty, lineChart(SERIES.poverty))}
${seriesPanel(POVERTY_SPLIT, barChart(POVERTY_SPLIT))}
${seriesPanel(SERIES.tpt, lineChart(SERIES.tpt))}
${seriesPanel(SERIES.ipm, lineChart(SERIES.ipm))}
${seriesPanel(IPM_PROVINCES, barChart(IPM_PROVINCES))}
${factList([
  { term: 'Garis kemiskinan', text: 'Rp641.443 per kapita per bulan pada September 2025 (Rp609.160 pada Maret 2025).' },
  { term: 'Kemiskinan ekstrem', text: '0,85% atau 2,38 juta orang pada Maret 2025, menurut garis Bank Dunia USD 2,15 (PPP 2017) per kapita per hari.' },
  { term: 'Pengangguran', text: 'TPT Agustus 2025 sebesar 4,85% — 7,46 juta orang dari angkatan kerja 154,00 juta orang. TPT usia muda (15–24 tahun) jauh lebih tinggi: 16,89%.' },
  { term: 'Upah', text: 'Upah rata-rata buruh Agustus 2025 mencapai Rp3,33 juta per bulan.' },
  { term: 'Pembangunan manusia', text: 'IPM 2025 didorong umur harapan hidup 74,47 tahun, harapan lama sekolah 13,30 tahun, rata-rata lama sekolah 9,07 tahun, dan pengeluaran riil per kapita Rp12,80 juta per tahun.' },
])}`;
}

export function explorerView() {
  return `${pageHead(
    'Penjelajah data',
    'Semua angka dalam satu tabel',
    'Cari indikator, saring menurut kelompok, atau klik judul kolom untuk mengurutkan. Tombol unduh menyimpan tabel yang sedang tampil sebagai CSV.',
  )}
<div class="explorer-controls">
  <label class="control">Cari indikator
    <input id="explorer-search" type="search" placeholder="mis. inflasi, kemiskinan, IPM…" autocomplete="off">
  </label>
  <label class="control">Kelompok
    <select id="explorer-group">
      <option value="">Semua kelompok</option>
      <option value="Kependudukan">Kependudukan</option>
      <option value="Ekonomi">Ekonomi</option>
      <option value="Sosial">Sosial</option>
    </select>
  </label>
  <button id="explorer-download" type="button" class="button">Unduh CSV</button>
</div>
<p id="explorer-count" class="count" aria-live="polite"></p>
<div class="table-wrap">
<table class="data-table">
  <thead>
    <tr>
      <th><button type="button" data-sort="indicator">Indikator</button></th>
      <th><button type="button" data-sort="group">Kelompok</button></th>
      <th><button type="button" data-sort="sortYear">Tahun</button></th>
      <th><button type="button" data-sort="value">Nilai</button></th>
      <th><button type="button" data-sort="source">Sumber</button></th>
    </tr>
  </thead>
  <tbody id="explorer-body"></tbody>
</table>
</div>
<p class="source">Seluruh baris bersumber dari publikasi BPS yang dirinci di <a href="#/sumber">Sumber &amp; metode</a>. Nilai ditampilkan apa adanya dari rilis BPS; pembulatan mengikuti sumbernya.</p>`;
}

export function sourcesView() {
  const sourceItems = SOURCES.map(
    (s) => `<li><strong>${esc(s.name)}</strong><br>${esc(s.detail)}</li>`,
  ).join('');
  const methodItems = METHODS.map(
    (m) => `<dt>${esc(m.term)}</dt><dd>${esc(m.meaning)}</dd>`,
  ).join('');
  return `${pageHead(
    'Sumber & metode',
    'Dari mana angka-angka ini berasal',
    'Semua angka di NusaStat berasal dari publikasi Badan Pusat Statistik (BPS). Situs ini menyajikan kembali angka-angka itu dengan penjelasan sendiri dan tidak mengambil data dari mana pun saat dibuka.',
  )}
<section class="panel">
  <h2>Publikasi yang dipakai</h2>
  <ul class="sources">${sourceItems}</ul>
</section>
<section class="panel">
  <h2>Istilah yang dipakai</h2>
  <dl class="facts">${methodItems}</dl>
</section>
${noteBox(
  'Tentang situs ini',
  'NusaStat adalah situs statis: seluruh isi tersimpan di berkas situs ini dan tidak ada permintaan jaringan saat dibuka. Angka terakhir diperbarui ' +
    META.updated +
    ' dan memakai tahun penuh 2025 sebagai tahun acuan terbaru. Bila BPS merilis angka baru, tabel di Penjelajah data yang diperbarui — bukan angka yang ditebak.',
)}`;
}

export function missingView() {
  return `${pageHead('Tidak ditemukan', 'Halaman itu tidak ada', 'Alamat yang dibuka tidak cocok dengan halaman mana pun di situs ini.')}
<p><a href="#/">Kembali ke Beranda</a> atau pilih bagian lain dari menu di atas.</p>`;
}
