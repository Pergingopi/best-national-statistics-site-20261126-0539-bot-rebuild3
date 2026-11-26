// NusaStat data: every figure below was checked against Badan Pusat Statistik
// (BPS) releases in November 2026 and carries its source and year with it.
// Nothing here is estimated, projected by us, or fetched from the network.

export const META = {
  name: 'NusaStat',
  tagline: 'Statistik Indonesia',
  updated: '26 November 2026',
  latestYear: 2025,
};

// The six headline indicators on the home page.
export const KPIS = [
  {
    label: 'Jumlah penduduk',
    value: 284.67,
    decimals: 2,
    unit: 'juta jiwa',
    context: 'SUPAS 2025 — naik dari 237,64 juta pada Sensus 2010',
    route: 'kependudukan',
  },
  {
    label: 'PDB atas dasar harga berlaku',
    value: 23821.1,
    decimals: 1,
    unit: 'Rp triliun',
    context: '2025 — PDB per kapita Rp83,7 juta (USD 5.083,4)',
    route: 'ekonomi',
  },
  {
    label: 'Pertumbuhan ekonomi',
    value: 5.11,
    decimals: 2,
    unit: '%',
    context: '2025 (c-to-c) — naik dari 5,03% pada 2024',
    route: 'ekonomi',
  },
  {
    label: 'Inflasi tahunan',
    value: 2.92,
    decimals: 2,
    unit: '%',
    context: 'Desember 2025 (yoy) — dalam sasaran 2,5% ± 1%',
    route: 'ekonomi',
  },
  {
    label: 'Tingkat kemiskinan',
    value: 8.25,
    decimals: 2,
    unit: '%',
    context: 'September 2025 — 23,36 juta orang',
    route: 'sosial',
  },
  {
    label: 'Indeks Pembangunan Manusia',
    value: 75.9,
    decimals: 2,
    unit: '',
    context: '2025 — kategori tinggi, naik dari 75,02 pada 2024',
    route: 'sosial',
  },
];

// Time series. Each point: { label, x, y } where x is a year (or a fractional
// year for March/September readings) so the line chart spaces points in time.
export const SERIES = {
  growth: {
    title: 'Pertumbuhan ekonomi, 2021–2025',
    unit: '% per tahun',
    source: 'BPS, Berita Resmi Statistik Pertumbuhan Ekonomi 2025 (5 Februari 2026).',
    points: [
      { label: '2021', x: 2021, y: 3.7 },
      { label: '2022', x: 2022, y: 5.31 },
      { label: '2023', x: 2023, y: 5.05 },
      { label: '2024', x: 2024, y: 5.03 },
      { label: '2025', x: 2025, y: 5.11 },
    ],
  },
  pdbNominal: {
    title: 'PDB atas dasar harga berlaku, 2024–2025',
    unit: 'Rp triliun',
    source: 'BPS, Berita Resmi Statistik Pertumbuhan Ekonomi (2025 dan 2026).',
    points: [
      { label: '2024', x: 2024, y: 22139.0 },
      { label: '2025', x: 2025, y: 23821.1 },
    ],
  },
  inflation: {
    title: 'Inflasi tahunan (IHK, yoy), 2020–2025',
    unit: '%',
    source: 'BPS, Berita Resmi Statistik Inflasi Desember 2025; Bank Indonesia, Analisis Inflasi Desember 2025.',
    points: [
      { label: '2020', x: 2020, y: 1.68 },
      { label: '2021', x: 2021, y: 1.87 },
      { label: '2022', x: 2022, y: 5.51 },
      { label: '2023', x: 2023, y: 2.61 },
      { label: '2024', x: 2024, y: 1.57 },
      { label: '2025', x: 2025, y: 2.92 },
    ],
  },
  poverty: {
    title: 'Tingkat kemiskinan, Sep 2020–Mar 2025',
    unit: '% penduduk',
    source: 'BPS, Berita Resmi Statistik Profil Kemiskinan di Indonesia Maret 2025 (No. 63/07/Th. XXVIII, 25 Juli 2025).',
    points: [
      { label: 'Sep 2020', x: 2020.67, y: 10.19 },
      { label: 'Mar 2021', x: 2021.25, y: 10.14 },
      { label: 'Sep 2021', x: 2021.67, y: 9.71 },
      { label: 'Mar 2022', x: 2022.25, y: 9.54 },
      { label: 'Sep 2022', x: 2022.67, y: 9.57 },
      { label: 'Mar 2023', x: 2023.25, y: 9.36 },
      { label: 'Mar 2024', x: 2024.25, y: 9.03 },
      { label: 'Sep 2024', x: 2024.67, y: 8.57 },
      { label: 'Mar 2025', x: 2025.25, y: 8.47 },
    ],
  },
  tpt: {
    title: 'Tingkat Pengangguran Terbuka (TPT), Agu 2023–Agu 2025',
    unit: '% angkatan kerja',
    source: 'BPS, Berita Resmi Statistik Keadaan Ketenagakerjaan Indonesia Agustus 2025 (No. 103/11/Th. XXVIII, 5 November 2025).',
    points: [
      { label: 'Agu 2023', x: 2023.67, y: 5.32 },
      { label: 'Feb 2024', x: 2024.17, y: 4.82 },
      { label: 'Agu 2024', x: 2024.67, y: 4.91 },
      { label: 'Feb 2025', x: 2025.17, y: 4.76 },
      { label: 'Agu 2025', x: 2025.67, y: 4.85 },
    ],
  },
  ipm: {
    title: 'Indeks Pembangunan Manusia, 2010–2025',
    unit: 'indeks (0–100)',
    source: 'BPS, Berita Resmi Statistik Indeks Pembangunan Manusia 2025 (5 November 2025) dan publikasi IPM 2025.',
    points: [
      { label: '2010', x: 2010, y: 66.53 },
      { label: '2020', x: 2020, y: 72.81 },
      { label: '2024', x: 2024, y: 75.02 },
      { label: '2025', x: 2025, y: 75.9 },
    ],
  },
};

// Population by generation, SUPAS 2025 (juta jiwa).
export const GENERATIONS = {
  title: 'Penduduk menurut generasi, 2025',
  unit: 'juta jiwa',
  source: 'BPS, Hasil Survei Penduduk Antar Sensus (SUPAS) 2025.',
  items: [
    { label: 'Generasi Z (1997–2012)', value: 70.98 },
    { label: 'Milenial (1981–1996)', value: 69.3 },
    { label: 'Generasi X (1965–1980)', value: 56.08 },
    { label: 'Pasca-Gen Z (2013 ke atas)', value: 55.93 },
    { label: 'Baby Boomer (1946–1964)', value: 29.35 },
    { label: 'Pra-Boomer (1945 ke bawah)', value: 3.04 },
  ],
};

// Human Development Index by province, 2025.
export const IPM_PROVINCES = {
  title: 'IPM menurut provinsi, 2025',
  unit: 'indeks (0–100)',
  source: 'BPS, Indeks Pembangunan Manusia Menurut Provinsi 2025.',
  items: [
    { label: 'DKI Jakarta (tertinggi)', value: 85.05 },
    { label: 'DI Yogyakarta', value: 82.48 },
    { label: 'Kepulauan Riau', value: 80.53 },
    { label: 'Indonesia (nasional)', value: 75.9, highlight: true },
    { label: 'Nusa Tenggara Timur', value: 69.89 },
    { label: 'Papua Selatan', value: 69.54 },
    { label: 'Papua Pegunungan (terendah)', value: 54.91 },
  ],
};

// Poverty by area, September 2025.
export const POVERTY_SPLIT = {
  title: 'Tingkat kemiskinan menurut daerah, September 2025',
  unit: '% penduduk',
  source: 'BPS, Berita Resmi Statistik Profil Kemiskinan di Indonesia September 2025 (No. 19/02/Th. XXIX, 5 Februari 2026).',
  items: [
    { label: 'Perdesaan', value: 10.72 },
    { label: 'Nasional', value: 8.25, highlight: true },
    { label: 'Perkotaan', value: 6.6 },
  ],
};

// The explorer's rows. sortYear is a plain number so the table can sort time
// (2025.25 = Maret 2025, 2025.67 = Agustus 2025, 2025.75 = September 2025).
// value is numeric, decimals says how to print it, unit is shown after it.
export const EXPLORER_ROWS = [
  // Kependudukan
  { group: 'Kependudukan', indicator: 'Jumlah penduduk', year: '2025', sortYear: 2025, value: 284.67, decimals: 2, unit: 'juta jiwa', source: 'BPS, SUPAS 2025' },
  { group: 'Kependudukan', indicator: 'Jumlah penduduk', year: '2010', sortYear: 2010, value: 237.64, decimals: 2, unit: 'juta jiwa', source: 'BPS, Sensus Penduduk 2010' },
  { group: 'Kependudukan', indicator: 'Laju pertumbuhan penduduk', year: '2020–2025', sortYear: 2025, value: 1.08, decimals: 2, unit: '% per tahun', source: 'BPS, SUPAS 2025' },
  { group: 'Kependudukan', indicator: 'Penduduk usia produktif', year: '2025', sortYear: 2025, value: 69.3, decimals: 2, unit: '% penduduk', source: 'BPS, SUPAS 2025' },
  { group: 'Kependudukan', indicator: 'Penduduk di Pulau Jawa', year: '2025', sortYear: 2025, value: 55, decimals: 0, unit: '% penduduk', source: 'BPS, SUPAS 2025' },
  { group: 'Kependudukan', indicator: 'Penduduk Jawa Barat', year: '2025', sortYear: 2025, value: 50.76, decimals: 2, unit: 'juta jiwa', source: 'BPS, Proyeksi Penduduk 2020–2050 (pertengahan 2025)' },
  { group: 'Kependudukan', indicator: 'Generasi Z', year: '2025', sortYear: 2025, value: 70.98, decimals: 2, unit: 'juta jiwa', source: 'BPS, SUPAS 2025' },
  { group: 'Kependudukan', indicator: 'Milenial', year: '2025', sortYear: 2025, value: 69.3, decimals: 2, unit: 'juta jiwa', source: 'BPS, SUPAS 2025' },
  { group: 'Kependudukan', indicator: 'Generasi X', year: '2025', sortYear: 2025, value: 56.08, decimals: 2, unit: 'juta jiwa', source: 'BPS, SUPAS 2025' },
  { group: 'Kependudukan', indicator: 'Pasca-Gen Z', year: '2025', sortYear: 2025, value: 55.93, decimals: 2, unit: 'juta jiwa', source: 'BPS, SUPAS 2025' },
  { group: 'Kependudukan', indicator: 'Baby Boomer', year: '2025', sortYear: 2025, value: 29.35, decimals: 2, unit: 'juta jiwa', source: 'BPS, SUPAS 2025' },
  { group: 'Kependudukan', indicator: 'Pra-Boomer', year: '2025', sortYear: 2025, value: 3.04, decimals: 2, unit: 'juta jiwa', source: 'BPS, SUPAS 2025' },
  // Ekonomi
  { group: 'Ekonomi', indicator: 'PDB atas dasar harga berlaku', year: '2025', sortYear: 2025, value: 23821.1, decimals: 1, unit: 'Rp triliun', source: 'BPS, BRS Ekonomi 2025 (5 Feb 2026)' },
  { group: 'Ekonomi', indicator: 'PDB atas dasar harga berlaku', year: '2024', sortYear: 2024, value: 22139.0, decimals: 1, unit: 'Rp triliun', source: 'BPS, BRS Ekonomi 2024' },
  { group: 'Ekonomi', indicator: 'PDB per kapita', year: '2025', sortYear: 2025, value: 83.7, decimals: 1, unit: 'Rp juta', source: 'BPS, BRS Ekonomi 2025 (5 Feb 2026)' },
  { group: 'Ekonomi', indicator: 'PDB per kapita', year: '2025', sortYear: 2025, value: 5083.4, decimals: 1, unit: 'USD', source: 'BPS, BRS Ekonomi 2025 (5 Feb 2026)' },
  { group: 'Ekonomi', indicator: 'PDB per kapita', year: '2024', sortYear: 2024, value: 78.6, decimals: 1, unit: 'Rp juta', source: 'BPS, BRS Ekonomi 2024' },
  { group: 'Ekonomi', indicator: 'PDB per kapita', year: '2024', sortYear: 2024, value: 4960.3, decimals: 1, unit: 'USD', source: 'BPS, BRS Ekonomi 2024' },
  { group: 'Ekonomi', indicator: 'Pertumbuhan ekonomi', year: '2025', sortYear: 2025, value: 5.11, decimals: 2, unit: '%', source: 'BPS, BRS Ekonomi 2025 (5 Feb 2026)' },
  { group: 'Ekonomi', indicator: 'Pertumbuhan ekonomi', year: '2024', sortYear: 2024, value: 5.03, decimals: 2, unit: '%', source: 'BPS, BRS Ekonomi 2024' },
  { group: 'Ekonomi', indicator: 'Pertumbuhan ekonomi', year: '2023', sortYear: 2023, value: 5.05, decimals: 2, unit: '%', source: 'BPS, BRS Ekonomi 2023' },
  { group: 'Ekonomi', indicator: 'Pertumbuhan ekonomi', year: '2022', sortYear: 2022, value: 5.31, decimals: 2, unit: '%', source: 'BPS, BRS Ekonomi 2022' },
  { group: 'Ekonomi', indicator: 'Pertumbuhan ekonomi', year: '2021', sortYear: 2021, value: 3.7, decimals: 2, unit: '%', source: 'BPS, BRS Ekonomi 2021' },
  { group: 'Ekonomi', indicator: 'Pertumbuhan ekonomi triwulan IV', year: '2025', sortYear: 2025, value: 5.39, decimals: 2, unit: '% yoy', source: 'BPS, BRS Ekonomi 2025 (5 Feb 2026)' },
  { group: 'Ekonomi', indicator: 'Inflasi tahunan (IHK, yoy)', year: '2025', sortYear: 2025, value: 2.92, decimals: 2, unit: '%', source: 'BPS, BRS Inflasi Desember 2025' },
  { group: 'Ekonomi', indicator: 'Inflasi tahunan (IHK, yoy)', year: '2024', sortYear: 2024, value: 1.57, decimals: 2, unit: '%', source: 'BPS, BRS Inflasi Desember 2024' },
  { group: 'Ekonomi', indicator: 'Inflasi tahunan (IHK, yoy)', year: '2023', sortYear: 2023, value: 2.61, decimals: 2, unit: '%', source: 'BPS, BRS Inflasi Desember 2023' },
  { group: 'Ekonomi', indicator: 'Inflasi tahunan (IHK, yoy)', year: '2022', sortYear: 2022, value: 5.51, decimals: 2, unit: '%', source: 'BPS, BRS Inflasi Desember 2022' },
  { group: 'Ekonomi', indicator: 'Inflasi tahunan (IHK, yoy)', year: '2021', sortYear: 2021, value: 1.87, decimals: 2, unit: '%', source: 'BPS, BRS Inflasi Desember 2021' },
  { group: 'Ekonomi', indicator: 'Inflasi tahunan (IHK, yoy)', year: '2020', sortYear: 2020, value: 1.68, decimals: 2, unit: '%', source: 'BPS, BRS Inflasi Desember 2020' },
  { group: 'Ekonomi', indicator: 'Inflasi inti', year: '2025', sortYear: 2025, value: 2.38, decimals: 2, unit: '%', source: 'BPS, BRS Inflasi Desember 2025' },
  { group: 'Ekonomi', indicator: 'Inflasi volatile food', year: '2025', sortYear: 2025, value: 6.21, decimals: 2, unit: '%', source: 'BPS, BRS Inflasi Desember 2025' },
  { group: 'Ekonomi', indicator: 'Inflasi administered prices', year: '2025', sortYear: 2025, value: 1.93, decimals: 2, unit: '%', source: 'BPS, BRS Inflasi Desember 2025' },
  { group: 'Ekonomi', indicator: 'Pangsa industri pengolahan dalam PDB', year: '2025', sortYear: 2025, value: 19.07, decimals: 2, unit: '%', source: 'BPS, BRS Ekonomi 2025 (5 Feb 2026)' },
  // Sosial & pembangunan
  { group: 'Sosial', indicator: 'Tingkat kemiskinan', year: 'Sep 2025', sortYear: 2025.75, value: 8.25, decimals: 2, unit: '%', source: 'BPS, Susenas Sep 2025' },
  { group: 'Sosial', indicator: 'Tingkat kemiskinan', year: 'Mar 2025', sortYear: 2025.25, value: 8.47, decimals: 2, unit: '%', source: 'BPS, Susenas Mar 2025' },
  { group: 'Sosial', indicator: 'Tingkat kemiskinan', year: 'Sep 2024', sortYear: 2024.75, value: 8.57, decimals: 2, unit: '%', source: 'BPS, Susenas Sep 2024' },
  { group: 'Sosial', indicator: 'Tingkat kemiskinan', year: 'Mar 2024', sortYear: 2024.25, value: 9.03, decimals: 2, unit: '%', source: 'BPS, Susenas Mar 2024' },
  { group: 'Sosial', indicator: 'Tingkat kemiskinan', year: 'Mar 2023', sortYear: 2023.25, value: 9.36, decimals: 2, unit: '%', source: 'BPS, Susenas Mar 2023' },
  { group: 'Sosial', indicator: 'Jumlah penduduk miskin', year: 'Sep 2025', sortYear: 2025.75, value: 23.36, decimals: 2, unit: 'juta orang', source: 'BPS, Susenas Sep 2025' },
  { group: 'Sosial', indicator: 'Jumlah penduduk miskin', year: 'Mar 2025', sortYear: 2025.25, value: 23.85, decimals: 2, unit: 'juta orang', source: 'BPS, Susenas Mar 2025' },
  { group: 'Sosial', indicator: 'Kemiskinan perkotaan', year: 'Sep 2025', sortYear: 2025.75, value: 6.6, decimals: 2, unit: '%', source: 'BPS, Susenas Sep 2025' },
  { group: 'Sosial', indicator: 'Kemiskinan perdesaan', year: 'Sep 2025', sortYear: 2025.75, value: 10.72, decimals: 2, unit: '%', source: 'BPS, Susenas Sep 2025' },
  { group: 'Sosial', indicator: 'Garis kemiskinan', year: 'Sep 2025', sortYear: 2025.75, value: 641443, decimals: 0, unit: 'Rp/kapita/bulan', source: 'BPS, Susenas Sep 2025' },
  { group: 'Sosial', indicator: 'Garis kemiskinan', year: 'Mar 2025', sortYear: 2025.25, value: 609160, decimals: 0, unit: 'Rp/kapita/bulan', source: 'BPS, Susenas Mar 2025' },
  { group: 'Sosial', indicator: 'Kemiskinan ekstrem', year: 'Mar 2025', sortYear: 2025.25, value: 0.85, decimals: 2, unit: '%', source: 'BPS, Susenas Mar 2025' },
  { group: 'Sosial', indicator: 'Tingkat Pengangguran Terbuka (TPT)', year: 'Agu 2025', sortYear: 2025.67, value: 4.85, decimals: 2, unit: '%', source: 'BPS, Sakernas Agu 2025' },
  { group: 'Sosial', indicator: 'Tingkat Pengangguran Terbuka (TPT)', year: 'Feb 2025', sortYear: 2025.17, value: 4.76, decimals: 2, unit: '%', source: 'BPS, Sakernas Feb 2025' },
  { group: 'Sosial', indicator: 'Tingkat Pengangguran Terbuka (TPT)', year: 'Agu 2024', sortYear: 2024.67, value: 4.91, decimals: 2, unit: '%', source: 'BPS, Sakernas Agu 2024' },
  { group: 'Sosial', indicator: 'Tingkat Pengangguran Terbuka (TPT)', year: 'Feb 2024', sortYear: 2024.17, value: 4.82, decimals: 2, unit: '%', source: 'BPS, Sakernas Feb 2024' },
  { group: 'Sosial', indicator: 'Tingkat Pengangguran Terbuka (TPT)', year: 'Agu 2023', sortYear: 2023.67, value: 5.32, decimals: 2, unit: '%', source: 'BPS, Sakernas Agu 2023' },
  { group: 'Sosial', indicator: 'Jumlah penganggur', year: 'Agu 2025', sortYear: 2025.67, value: 7.46, decimals: 2, unit: 'juta orang', source: 'BPS, Sakernas Agu 2025' },
  { group: 'Sosial', indicator: 'Angkatan kerja', year: 'Agu 2025', sortYear: 2025.67, value: 154.0, decimals: 2, unit: 'juta orang', source: 'BPS, Sakernas Agu 2025' },
  { group: 'Sosial', indicator: 'TPT usia 15–24 tahun', year: 'Agu 2025', sortYear: 2025.67, value: 16.89, decimals: 2, unit: '%', source: 'BPS, Sakernas Agu 2025' },
  { group: 'Sosial', indicator: 'Upah rata-rata buruh', year: 'Agu 2025', sortYear: 2025.67, value: 3.33, decimals: 2, unit: 'Rp juta/bulan', source: 'BPS, Sakernas Agu 2025' },
  { group: 'Sosial', indicator: 'TPT tertinggi (Papua)', year: 'Agu 2025', sortYear: 2025.67, value: 6.96, decimals: 2, unit: '%', source: 'BPS, Sakernas Agu 2025' },
  { group: 'Sosial', indicator: 'TPT terendah (Bali)', year: 'Agu 2025', sortYear: 2025.67, value: 1.49, decimals: 2, unit: '%', source: 'BPS, Sakernas Agu 2025' },
  { group: 'Sosial', indicator: 'Indeks Pembangunan Manusia (IPM)', year: '2025', sortYear: 2025, value: 75.9, decimals: 2, unit: 'indeks', source: 'BPS, BRS IPM 2025 (5 Nov 2025)' },
  { group: 'Sosial', indicator: 'Indeks Pembangunan Manusia (IPM)', year: '2024', sortYear: 2024, value: 75.02, decimals: 2, unit: 'indeks', source: 'BPS, BRS IPM 2024' },
  { group: 'Sosial', indicator: 'Indeks Pembangunan Manusia (IPM)', year: '2020', sortYear: 2020, value: 72.81, decimals: 2, unit: 'indeks', source: 'BPS, Publikasi IPM 2025' },
  { group: 'Sosial', indicator: 'Indeks Pembangunan Manusia (IPM)', year: '2010', sortYear: 2010, value: 66.53, decimals: 2, unit: 'indeks', source: 'BPS, Publikasi IPM 2025' },
  { group: 'Sosial', indicator: 'Umur harapan hidup', year: '2025', sortYear: 2025, value: 74.47, decimals: 2, unit: 'tahun', source: 'BPS, BRS IPM 2025 (5 Nov 2025)' },
  { group: 'Sosial', indicator: 'Harapan lama sekolah', year: '2025', sortYear: 2025, value: 13.3, decimals: 2, unit: 'tahun', source: 'BPS, BRS IPM 2025 (5 Nov 2025)' },
  { group: 'Sosial', indicator: 'Rata-rata lama sekolah', year: '2025', sortYear: 2025, value: 9.07, decimals: 2, unit: 'tahun', source: 'BPS, BRS IPM 2025 (5 Nov 2025)' },
  { group: 'Sosial', indicator: 'Pengeluaran riil per kapita', year: '2025', sortYear: 2025, value: 12.8, decimals: 2, unit: 'Rp juta/tahun', source: 'BPS, BRS IPM 2025 (5 Nov 2025)' },
  { group: 'Sosial', indicator: 'IPM DKI Jakarta', year: '2025', sortYear: 2025, value: 85.05, decimals: 2, unit: 'indeks', source: 'BPS, IPM Menurut Provinsi 2025' },
  { group: 'Sosial', indicator: 'IPM DI Yogyakarta', year: '2025', sortYear: 2025, value: 82.48, decimals: 2, unit: 'indeks', source: 'BPS, IPM Menurut Provinsi 2025' },
  { group: 'Sosial', indicator: 'IPM Kepulauan Riau', year: '2025', sortYear: 2025, value: 80.53, decimals: 2, unit: 'indeks', source: 'BPS, IPM Menurut Provinsi 2025' },
  { group: 'Sosial', indicator: 'IPM Nusa Tenggara Timur', year: '2025', sortYear: 2025, value: 69.89, decimals: 2, unit: 'indeks', source: 'BPS, IPM Menurut Provinsi 2025' },
  { group: 'Sosial', indicator: 'IPM Papua Selatan', year: '2025', sortYear: 2025, value: 69.54, decimals: 2, unit: 'indeks', source: 'BPS, IPM Menurut Provinsi 2025' },
  { group: 'Sosial', indicator: 'IPM Papua Pegunungan', year: '2025', sortYear: 2025, value: 54.91, decimals: 2, unit: 'indeks', source: 'BPS, IPM Menurut Provinsi 2025' },
];

// Sources and methods, shown on #/sumber.
export const SOURCES = [
  {
    name: 'BPS — Hasil Survei Penduduk Antar Sensus (SUPAS) 2025',
    detail: 'Jumlah penduduk 284,67 juta jiwa; laju pertumbuhan 1,08% per tahun (2020–2025); penduduk usia produktif 69,30%; penduduk menurut generasi. Rilis 5 Mei 2026, BRS No. 51/05/Th. XXIX.',
  },
  {
    name: 'BPS — Berita Resmi Statistik Pertumbuhan Ekonomi 2025',
    detail: 'PDB ADHB Rp23.821,1 triliun; pertumbuhan 5,11% (c-to-c); PDB per kapita Rp83,7 juta (USD 5.083,4); triwulan IV-2025 tumbuh 5,39% (yoy). Rilis 5 Februari 2026.',
  },
  {
    name: 'BPS — Berita Resmi Statistik Inflasi Desember 2025',
    detail: 'Inflasi tahunan 2,92% (yoy); inflasi inti 2,38%; volatile food 6,21%; administered prices 1,93%. Rilis 5 Januari 2026.',
  },
  {
    name: 'BPS — Profil Kemiskinan di Indonesia Maret 2025',
    detail: 'Tingkat kemiskinan 8,47% (23,85 juta orang); garis kemiskinan Rp609.160 per kapita per bulan; kemiskinan ekstrem 0,85%. BRS No. 63/07/Th. XXVIII, 25 Juli 2025.',
  },
  {
    name: 'BPS — Profil Kemiskinan di Indonesia September 2025',
    detail: 'Tingkat kemiskinan 8,25% (23,36 juta orang); perkotaan 6,60%, perdesaan 10,72%; garis kemiskinan Rp641.443 per kapita per bulan. BRS No. 19/02/Th. XXIX, 5 Februari 2026.',
  },
  {
    name: 'BPS — Keadaan Ketenagakerjaan Indonesia Agustus 2025',
    detail: 'TPT 4,85% (7,46 juta penganggur); angkatan kerja 154,00 juta orang; TPT usia 15–24 tahun 16,89%; upah rata-rata Rp3,33 juta per bulan; TPT tertinggi Papua 6,96%, terendah Bali 1,49%. BRS No. 103/11/Th. XXVIII, 5 November 2025.',
  },
  {
    name: 'BPS — Indeks Pembangunan Manusia 2025',
    detail: 'IPM 75,90 (kategori tinggi); umur harapan hidup 74,47 tahun; harapan lama sekolah 13,30 tahun; rata-rata lama sekolah 9,07 tahun; pengeluaran riil per kapita Rp12,80 juta per tahun; IPM tertinggi DKI Jakarta 85,05, terendah Papua Pegunungan 54,91. Rilis 5 November 2025.',
  },
];

export const METHODS = [
  {
    term: 'SUPAS',
    meaning: 'Survei Penduduk Antar Sensus — survei BPS di antara dua sensus penduduk untuk mengukur jumlah dan komposisi penduduk.',
  },
  {
    term: 'PDB atas dasar harga berlaku (ADHB)',
    meaning: 'Nilai seluruh barang dan jasa yang dihasilkan suatu negara dalam setahun, dihitung dengan harga tahun berjalan.',
  },
  {
    term: 'Pertumbuhan ekonomi (c-to-c)',
    meaning: 'Perubahan PDB atas dasar harga konstan tahun berjalan dibanding tahun sebelumnya, dalam persen.',
  },
  {
    term: 'Inflasi (yoy)',
    meaning: 'Perubahan Indeks Harga Konsumen (IHK) suatu bulan dibanding bulan yang sama tahun sebelumnya.',
  },
  {
    term: 'Garis kemiskinan',
    meaning: 'Batas pengeluaran per kapita per bulan; penduduk dengan pengeluaran di bawahnya digolongkan miskin.',
  },
  {
    term: 'TPT',
    meaning: 'Tingkat Pengangguran Terbuka — penganggur sebagai persentase angkatan kerja, dari Survei Angkatan Kerja Nasional (Sakernas).',
  },
  {
    term: 'IPM',
    meaning: 'Indeks Pembangunan Manusia — ukuran gabungan umur harapan hidup, pendidikan, dan standar hidup layak, skala 0–100. Di bawah 60 rendah, 60–69 sedang, 70–79 tinggi, 80 ke atas sangat tinggi.',
  },
];
