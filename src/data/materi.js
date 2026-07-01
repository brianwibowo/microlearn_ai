// MicroLearn AI — Data Materi: Instalasi Penerangan Listrik

export const materiList = [
  // ===== 1. Dasar Kelistrikan =====
  {
    slug: 'dasar-kelistrikan',
    title: 'Dasar-Dasar Kelistrikan',
    subject: 'instalasi-penerangan',
    description: 'Memahami konsep arus listrik, tegangan, hambatan, dan Hukum Ohm sebagai fondasi instalasi penerangan.',
    thumbnail: '/images/materi-kelistrikan.webp',
    estimatedTime: '20 menit',
    videoUrl: 'https://www.youtube.com/embed/24pLiyIWe_I',
    relatedQuiz: 'kuis-dasar-kelistrikan',
    chapters: [
      {
        id: 'bab-1',
        title: 'Arus, Tegangan, dan Hambatan',
        content: `<h2>Arus, Tegangan, dan Hambatan Listrik</h2>
<p>Untuk memahami instalasi penerangan, kita harus mengenal tiga besaran listrik dasar:</p>

<h3>1. Arus Listrik (I)</h3>
<p><strong>Arus listrik</strong> adalah aliran muatan listrik (elektron) yang mengalir melalui penghantar. Satuan arus listrik adalah <strong>Ampere (A)</strong>.</p>
<ul>
  <li>Arus mengalir dari potensial tinggi (+) ke potensial rendah (-) secara konvensional</li>
  <li>Aliran elektron sebenarnya berlawanan arah</li>
  <li>Diukur menggunakan <strong>Amperemeter</strong> yang dipasang <em>seri</em></li>
</ul>

<h3>2. Tegangan Listrik (V)</h3>
<p><strong>Tegangan listrik</strong> adalah beda potensial antara dua titik yang menyebabkan arus mengalir. Satuan tegangan adalah <strong>Volt (V)</strong>.</p>
<ul>
  <li>Tegangan rumah tangga di Indonesia: <strong>220 Volt AC</strong></li>
  <li>Frekuensi listrik PLN: <strong>50 Hz</strong></li>
  <li>Diukur menggunakan <strong>Voltmeter</strong> yang dipasang <em>paralel</em></li>
</ul>

<h3>3. Hambatan Listrik (R)</h3>
<p><strong>Hambatan listrik</strong> adalah kemampuan suatu bahan untuk menahan aliran arus listrik. Satuan hambatan adalah <strong>Ohm (Ω)</strong>.</p>
<ul>
  <li><strong>Konduktor</strong> — hambatan kecil (tembaga, aluminium)</li>
  <li><strong>Isolator</strong> — hambatan sangat besar (karet, plastik, kaca)</li>
  <li><strong>Semikonduktor</strong> — hambatan sedang (silikon, germanium)</li>
</ul>

<blockquote>Analogi sederhana: Bayangkan air mengalir di pipa. Tegangan = tekanan air, Arus = debit air, Hambatan = ukuran pipa. Pipa kecil (hambatan besar) membuat air (arus) sulit mengalir.</blockquote>`
      },
      {
        id: 'bab-2',
        title: 'Hukum Ohm & Daya Listrik',
        content: `<h2>Hukum Ohm & Daya Listrik</h2>

<h3>Hukum Ohm</h3>
<p><strong>Hukum Ohm</strong> menyatakan hubungan antara tegangan (V), arus (I), dan hambatan (R):</p>
<pre><code>V = I × R

Dimana:
V = Tegangan (Volt)
I = Arus (Ampere)
R = Hambatan (Ohm)</code></pre>

<p>Dari rumus ini bisa diturunkan:</p>
<ul>
  <li><strong>I = V / R</strong> — mencari arus</li>
  <li><strong>R = V / I</strong> — mencari hambatan</li>
</ul>

<h3>Contoh Soal</h3>
<p>Sebuah lampu pijar memiliki hambatan 440 Ω dan dipasang pada tegangan 220V. Berapa arus yang mengalir?</p>
<pre><code>I = V / R
I = 220 / 440
I = 0,5 Ampere</code></pre>

<h3>Daya Listrik (P)</h3>
<p><strong>Daya listrik</strong> adalah energi listrik yang digunakan per satuan waktu. Satuannya <strong>Watt (W)</strong>.</p>
<pre><code>P = V × I
P = I² × R
P = V² / R

Dimana:
P = Daya (Watt)
V = Tegangan (Volt)
I = Arus (Ampere)</code></pre>

<h3>Contoh Perhitungan Daya</h3>
<p>Lampu dengan hambatan 440 Ω pada tegangan 220V:</p>
<pre><code>P = V² / R
P = 220² / 440
P = 48.400 / 440
P = 110 Watt</code></pre>

<h3>Energi Listrik</h3>
<p>Energi listrik yang terpakai dihitung dengan:</p>
<pre><code>W = P × t

Dimana:
W = Energi (Watt-hour / kWh)
P = Daya (Watt)
t = Waktu (jam)

Contoh: Lampu 100W menyala 10 jam
W = 100 × 10 = 1.000 Wh = 1 kWh</code></pre>

<blockquote>1 kWh sering disebut "1 unit listrik" di tagihan PLN. Jika tarif listrik Rp1.500/kWh, maka lampu 100W yang menyala 10 jam menghabiskan biaya Rp1.500.</blockquote>`
      },
      {
        id: 'bab-3',
        title: 'Rangkaian Seri & Paralel',
        content: `<h2>Rangkaian Seri & Paralel</h2>
<p>Dalam instalasi listrik, komponen bisa dihubungkan secara <strong>seri</strong> atau <strong>paralel</strong>. Memahami perbedaan keduanya sangat penting.</p>

<h3>Rangkaian Seri</h3>
<p>Pada rangkaian seri, komponen dihubungkan <em>berurutan</em> sehingga arus mengalir melalui satu jalur.</p>
<ul>
  <li><strong>Arus sama</strong> di setiap komponen: I₁ = I₂ = I₃ = I total</li>
  <li><strong>Tegangan terbagi</strong>: V total = V₁ + V₂ + V₃</li>
  <li><strong>Hambatan total</strong>: R total = R₁ + R₂ + R₃</li>
  <li>Jika satu komponen putus, <em>seluruh rangkaian mati</em></li>
</ul>

<h3>Rangkaian Paralel</h3>
<p>Pada rangkaian paralel, komponen dihubungkan pada <em>titik yang sama</em> sehingga ada banyak jalur arus.</p>
<ul>
  <li><strong>Tegangan sama</strong> di setiap komponen: V₁ = V₂ = V₃ = V total</li>
  <li><strong>Arus terbagi</strong>: I total = I₁ + I₂ + I₃</li>
  <li><strong>Hambatan total</strong>: 1/R total = 1/R₁ + 1/R₂ + 1/R₃</li>
  <li>Jika satu komponen putus, <em>komponen lain tetap bekerja</em></li>
</ul>

<h3>Aplikasi dalam Instalasi Rumah</h3>
<ul>
  <li><strong>Lampu di rumah</strong> → Rangkaian <strong>Paralel</strong> (agar jika satu lampu mati, lampu lain tetap menyala)</li>
  <li><strong>Saklar dengan lampu</strong> → Rangkaian <strong>Seri</strong> (saklar memutus/menyambung arus ke lampu)</li>
  <li><strong>MCB/Sekering</strong> → Rangkaian <strong>Seri</strong> (sebagai pengaman yang memutus arus jika berlebih)</li>
</ul>

<blockquote>Dalam instalasi penerangan rumah, lampu-lampu SELALU dipasang paralel agar bisa dinyalakan/dimatikan secara independen dan mendapat tegangan penuh 220V.</blockquote>`
      }
    ]
  },

  // ===== 2. Komponen Instalasi Listrik =====
  {
    slug: 'komponen-instalasi',
    title: 'Komponen Instalasi Penerangan',
    subject: 'instalasi-penerangan',
    description: 'Mengenal berbagai komponen yang digunakan dalam instalasi penerangan listrik: kabel, saklar, fitting, MCB, dan stop kontak.',
    thumbnail: '/images/materi-komponen.webp',
    estimatedTime: '22 menit',
    videoUrl: 'https://www.youtube.com/embed/mhZWEgGvArk',
    relatedQuiz: 'kuis-komponen',
    chapters: [
      {
        id: 'bab-1',
        title: 'Penghantar & Kabel Listrik',
        content: `<h2>Penghantar & Kabel Listrik</h2>
<p>Kabel listrik adalah komponen utama yang menghantarkan arus dari sumber ke beban (lampu, stop kontak).</p>

<h3>Jenis Kabel Instalasi</h3>
<ul>
  <li><strong>NYA</strong> — Kabel inti tunggal, isolasi PVC. Digunakan dalam pipa conduit. Warna: merah (fasa), biru (netral), kuning-hijau (ground).</li>
  <li><strong>NYM</strong> — Kabel berselubung ganda (2-4 inti). Bisa dipasang tanpa pipa. Lebih aman untuk instalasi terbuka.</li>
  <li><strong>NYY</strong> — Kabel tanam (underground). Isolasi tebal, tahan air dan tanah.</li>
  <li><strong>NYAF</strong> — Kabel serabut fleksibel. Cocok untuk instalasi dalam panel.</li>
</ul>

<h3>Ukuran Kabel (Luas Penampang)</h3>
<p>Ukuran kabel ditentukan oleh luas penampang penghantar (mm²):</p>
<ul>
  <li><strong>1,5 mm²</strong> — Untuk penerangan (lampu), maksimum 10A</li>
  <li><strong>2,5 mm²</strong> — Untuk stop kontak, maksimum 16A</li>
  <li><strong>4 mm²</strong> — Untuk beban besar (AC, water heater)</li>
  <li><strong>6 mm²</strong> — Untuk kabel utama ke panel</li>
</ul>

<h3>Kode Warna Kabel</h3>
<p>Standar warna kabel di Indonesia (PUIL):</p>
<ul>
  <li><strong>Merah / Hitam / Coklat</strong> — Fasa (L / Line)</li>
  <li><strong>Biru</strong> — Netral (N)</li>
  <li><strong>Kuning-Hijau (loreng)</strong> — Ground / Pentanahan (PE)</li>
</ul>

<blockquote>PENTING: Jangan pernah menggunakan kabel yang lebih kecil dari yang direkomendasikan! Kabel terlalu kecil bisa panas dan menyebabkan kebakaran. Selalu sesuaikan ukuran kabel dengan beban arus.</blockquote>`
      },
      {
        id: 'bab-2',
        title: 'Saklar, Stop Kontak & Fitting',
        content: `<h2>Saklar, Stop Kontak & Fitting Lampu</h2>

<h3>Saklar (Switch)</h3>
<p>Saklar berfungsi untuk memutus dan menyambung aliran arus listrik ke beban.</p>
<ul>
  <li><strong>Saklar Tunggal</strong> — 1 tuas, mengendalikan 1 titik lampu</li>
  <li><strong>Saklar Seri (Ganda)</strong> — 2 tuas dalam satu frame, mengendalikan 2 titik lampu secara terpisah</li>
  <li><strong>Saklar Tukar (Hotel)</strong> — 2 saklar di lokasi berbeda mengendalikan 1 lampu yang sama (di tangga/koridor)</li>
  <li><strong>Saklar Silang</strong> — Digunakan bersama 2 saklar tukar untuk mengendalikan 1 lampu dari 3 lokasi</li>
  <li><strong>Dimmer</strong> — Mengatur intensitas cahaya lampu</li>
</ul>

<h3>Stop Kontak (Outlet)</h3>
<p>Stop kontak menyediakan titik sambungan untuk peralatan listrik portabel.</p>
<ul>
  <li><strong>Stop kontak 2 pin</strong> — Tanpa ground, untuk beban ringan</li>
  <li><strong>Stop kontak 3 pin (dengan ground)</strong> — Dengan ground, untuk peralatan yang butuh grounding (komputer, mesin cuci)</li>
  <li><strong>Stop kontak outdoor</strong> — Dilengkapi penutup tahan air (IP44)</li>
</ul>

<h3>Fitting Lampu</h3>
<p>Fitting adalah tempat dudukan lampu:</p>
<ul>
  <li><strong>Fitting E27</strong> — Ulir besar, untuk lampu rumah pada umumnya</li>
  <li><strong>Fitting E14</strong> — Ulir kecil, untuk lampu hias/dekoratif</li>
  <li><strong>Fitting plafon</strong> — Dipasang menempel di plafon</li>
  <li><strong>Fitting gantung</strong> — Digantung dengan kabel/rantai</li>
  <li><strong>Fitting batten (TL)</strong> — Untuk lampu neon/TL (T8, T5)</li>
</ul>

<blockquote>Saklar SELALU dipasang pada kabel fasa (L), BUKAN pada kabel netral (N). Ini agar saat saklar OFF, fitting lampu tidak bertegangan sehingga aman saat mengganti lampu.</blockquote>`
      },
      {
        id: 'bab-3',
        title: 'MCB, ELCB & Panel Listrik',
        content: `<h2>MCB, ELCB & Panel Listrik</h2>

<h3>MCB (Miniature Circuit Breaker)</h3>
<p>MCB adalah pengaman yang memutus arus secara otomatis jika terjadi <strong>arus lebih (overload)</strong> atau <strong>hubung singkat (short circuit)</strong>.</p>
<ul>
  <li><strong>MCB 2A</strong> — Untuk penerangan 1 grup kecil</li>
  <li><strong>MCB 4A</strong> — Untuk penerangan 1 grup besar</li>
  <li><strong>MCB 6A</strong> — Untuk penerangan beban sedang</li>
  <li><strong>MCB 10A</strong> — Untuk stop kontak ringan</li>
  <li><strong>MCB 16A</strong> — Untuk stop kontak beban besar</li>
  <li><strong>MCB 20A-32A</strong> — Untuk beban khusus (AC, water heater)</li>
</ul>

<h3>ELCB / RCCB (Earth Leakage Circuit Breaker)</h3>
<p>ELCB mendeteksi <strong>kebocoran arus ke tanah</strong> dan memutus aliran listrik untuk mencegah sengatan listrik pada manusia.</p>
<ul>
  <li>Sensitifitas: <strong>30 mA</strong> (untuk perlindungan manusia)</li>
  <li>Dipasang setelah MCB utama</li>
  <li>WAJIB dipasang di kamar mandi dan area basah</li>
</ul>

<h3>Panel Listrik (Distribution Board)</h3>
<p>Panel listrik adalah kotak yang berisi semua pengaman dan pembagi daya untuk seluruh instalasi.</p>
<p>Komponen dalam panel:</p>
<ol>
  <li><strong>MCB Utama</strong> — Pengaman utama dari PLN</li>
  <li><strong>ELCB</strong> — Pengaman kebocoran arus</li>
  <li><strong>MCB Cabang</strong> — Pengaman per grup (penerangan, stop kontak)</li>
  <li><strong>Busbar</strong> — Rel tembaga penghubung</li>
  <li><strong>Terminal Netral & Ground</strong> — Titik sambung kabel N dan PE</li>
</ol>

<h3>Pembagian Grup</h3>
<p>Instalasi rumah biasanya dibagi menjadi beberapa grup:</p>
<ul>
  <li><strong>Grup 1</strong> — Penerangan lantai 1</li>
  <li><strong>Grup 2</strong> — Penerangan lantai 2</li>
  <li><strong>Grup 3</strong> — Stop kontak lantai 1</li>
  <li><strong>Grup 4</strong> — Stop kontak lantai 2</li>
  <li><strong>Grup 5</strong> — Beban khusus (AC, pompa air)</li>
</ul>

<blockquote>Pembagian grup penting agar jika MCB satu grup trip, grup lain tetap menyala. Jangan campurkan penerangan dan stop kontak dalam satu grup!</blockquote>`
      }
    ]
  },

  // ===== 3. Instalasi Saklar & Lampu =====
  {
    slug: 'instalasi-saklar-lampu',
    title: 'Instalasi Saklar & Lampu',
    subject: 'instalasi-penerangan',
    description: 'Mempelajari cara pemasangan instalasi saklar tunggal, saklar seri, dan saklar tukar (hotel) beserta diagram pengawatannya.',
    thumbnail: '/images/materi-saklar.webp',
    estimatedTime: '25 menit',
    videoUrl: 'https://www.youtube.com/embed/mKAfqt3DdWA',
    relatedQuiz: 'kuis-saklar-lampu',
    chapters: [
      {
        id: 'bab-1',
        title: 'Instalasi Saklar Tunggal',
        content: `<h2>Instalasi Saklar Tunggal</h2>
<p>Instalasi saklar tunggal adalah rangkaian paling dasar dalam instalasi penerangan. Satu saklar mengendalikan satu titik lampu.</p>

<h3>Prinsip Kerja</h3>
<p>Saklar tunggal memutus dan menyambung kabel <strong>fasa (L)</strong> yang menuju ke fitting lampu. Kabel netral (N) langsung dari sumber ke fitting.</p>

<h3>Komponen yang Dibutuhkan</h3>
<ul>
  <li>1 buah saklar tunggal (SPST - Single Pole Single Throw)</li>
  <li>1 buah fitting lampu (E27)</li>
  <li>1 buah lampu</li>
  <li>Kabel NYA 1,5 mm² (merah untuk fasa, biru untuk netral)</li>
  <li>Pipa conduit dan klem</li>
  <li>Kotak sambung (junction box / T-dos)</li>
</ul>

<h3>Diagram Pengawatan</h3>
<pre><code>Sumber PLN
    │
   MCB
    │
    ├──── Fasa (L) ──→ Saklar ──→ Fitting Lampu
    │                                    │
    └──── Netral (N) ───────────→ Fitting Lampu
                                         │
                            Ground (PE) ──┘</code></pre>

<h3>Langkah Pemasangan</h3>
<ol>
  <li>Pastikan MCB dalam posisi OFF</li>
  <li>Pasang pipa conduit dari panel ke saklar dan fitting</li>
  <li>Tarik kabel fasa (merah) dari MCB ke saklar</li>
  <li>Tarik kabel (merah) dari saklar ke fitting lampu</li>
  <li>Tarik kabel netral (biru) langsung dari panel ke fitting lampu</li>
  <li>Pasang kabel ground (kuning-hijau) ke fitting jika fitting logam</li>
  <li>Sambung semua kabel dengan benar, kencangkan baut terminal</li>
  <li>Pasang lampu pada fitting</li>
  <li>Nyalakan MCB dan uji saklar</li>
</ol>

<blockquote>PENTING: Selalu pastikan listrik sudah dimatikan (MCB OFF) sebelum melakukan pekerjaan instalasi! Gunakan tespen untuk memverifikasi tidak ada tegangan sebelum menyentuh kabel.</blockquote>`
      },
      {
        id: 'bab-2',
        title: 'Instalasi Saklar Seri (Ganda)',
        content: `<h2>Instalasi Saklar Seri (Ganda)</h2>
<p>Saklar seri memiliki <strong>2 tuas</strong> dalam satu frame. Setiap tuas mengendalikan satu titik lampu secara independen.</p>

<h3>Prinsip Kerja</h3>
<p>Kabel fasa (L) masuk ke terminal common saklar seri, lalu terbagi menjadi 2 output — masing-masing menuju satu fitting lampu.</p>

<h3>Diagram Pengawatan</h3>
<pre><code>Sumber PLN
    │
   MCB
    │
    ├── Fasa (L) ──→ Common Saklar Seri
    │                    ├──→ L1 ──→ Fitting Lampu 1
    │                    └──→ L2 ──→ Fitting Lampu 2
    │
    └── Netral (N) ──→ Fitting Lampu 1
                    └──→ Fitting Lampu 2</code></pre>

<h3>Keuntungan Saklar Seri</h3>
<ul>
  <li>Menghemat tempat — 2 saklar dalam 1 frame</li>
  <li>Menghemat T-dos dan pipa</li>
  <li>Cocok untuk ruangan yang butuh 2 titik lampu berdekatan</li>
</ul>

<h3>Contoh Penggunaan</h3>
<ul>
  <li>Kamar tidur: 1 tuas untuk lampu utama, 1 tuas untuk lampu tidur</li>
  <li>Kamar mandi: 1 tuas untuk lampu, 1 tuas untuk exhaust fan</li>
  <li>Teras: 1 tuas untuk lampu depan, 1 tuas untuk lampu taman</li>
</ul>

<blockquote>Perhatikan: Pada saklar seri, terminal L (common/input) hanya satu, sedangkan terminal output ada 2 (L1 dan L2). Jangan terbalik saat memasang!</blockquote>`
      },
      {
        id: 'bab-3',
        title: 'Instalasi Saklar Tukar (Hotel)',
        content: `<h2>Instalasi Saklar Tukar (Hotel Switch)</h2>
<p>Saklar tukar memungkinkan <strong>1 titik lampu dikendalikan dari 2 lokasi berbeda</strong>. Sering digunakan di tangga, koridor panjang, dan kamar tidur.</p>

<h3>Prinsip Kerja</h3>
<p>Saklar tukar memiliki <strong>3 terminal</strong>: 1 common (C) dan 2 traveler (L1, L2). Dua saklar tukar dihubungkan dengan kabel traveler.</p>

<h3>Diagram Pengawatan</h3>
<pre><code>Sumber PLN
    │
   MCB
    │
    ├── Fasa (L) ──→ C (Saklar Tukar 1)
    │                    L1 ──────── L1 (Saklar Tukar 2)
    │                    L2 ──────── L2      │
    │                                   C ──→ Fitting Lampu
    │
    └── Netral (N) ──────────────────→ Fitting Lampu</code></pre>

<h3>Cara Kerja</h3>
<p>Bayangkan ada 2 saklar di lokasi A (bawah tangga) dan B (atas tangga):</p>
<ul>
  <li>Saklar A posisi 1, Saklar B posisi 1 → Lampu <strong>ON</strong></li>
  <li>Pindahkan Saklar B ke posisi 2 → Lampu <strong>OFF</strong></li>
  <li>Pindahkan Saklar A ke posisi 2 → Lampu <strong>ON</strong> lagi</li>
  <li>Pindahkan Saklar B ke posisi 1 → Lampu <strong>OFF</strong> lagi</li>
</ul>
<p>Intinya: setiap perubahan posisi salah satu saklar akan <em>mengubah</em> kondisi lampu.</p>

<h3>Contoh Penggunaan</h3>
<ul>
  <li><strong>Tangga</strong> — saklar di bawah dan atas tangga</li>
  <li><strong>Koridor panjang</strong> — saklar di kedua ujung koridor</li>
  <li><strong>Kamar tidur</strong> — saklar di pintu dan di samping tempat tidur</li>
</ul>

<blockquote>Untuk mengendalikan 1 lampu dari 3 lokasi, gunakan 2 saklar tukar + 1 saklar silang (cross switch) di tengah. Kabel traveler dari saklar tukar 1 → saklar silang → saklar tukar 2.</blockquote>`
      }
    ]
  },

  // ===== 4. Diagram Instalasi Listrik =====
  {
    slug: 'diagram-instalasi',
    title: 'Diagram Instalasi Listrik',
    subject: 'instalasi-penerangan',
    description: 'Belajar membaca dan menggambar diagram instalasi listrik: diagram garis tunggal, diagram garis ganda, dan diagram pelaksanaan.',
    thumbnail: '/images/materi-diagram.webp',
    estimatedTime: '20 menit',
    videoUrl: 'https://www.youtube.com/embed/24pLiyIWe_I',
    relatedQuiz: 'kuis-diagram',
    chapters: [
      {
        id: 'bab-1',
        title: 'Simbol-Simbol Kelistrikan',
        content: `<h2>Simbol-Simbol dalam Diagram Listrik</h2>
<p>Untuk menggambar dan membaca diagram instalasi, kita harus mengenal simbol-simbol standar yang digunakan (sesuai PUIL dan IEC).</p>

<h3>Simbol Sumber & Pengaman</h3>
<ul>
  <li><strong>─ ○ ─</strong> → MCB (Miniature Circuit Breaker)</li>
  <li><strong>─ ⊗ ─</strong> → Sekering (Fuse)</li>
  <li><strong>KWH</strong> → Meteran listrik (kWh meter)</li>
</ul>

<h3>Simbol Saklar</h3>
<ul>
  <li><strong>○/</strong> → Saklar tunggal</li>
  <li><strong>○//</strong> → Saklar seri (ganda)</li>
  <li><strong>○↔</strong> → Saklar tukar (hotel switch)</li>
  <li><strong>○+</strong> → Saklar silang (cross switch)</li>
</ul>

<h3>Simbol Lampu & Beban</h3>
<ul>
  <li><strong>⊕</strong> → Lampu pijar / LED (titik lampu di plafon)</li>
  <li><strong>⊕ TL</strong> → Lampu TL (fluorescent)</li>
  <li><strong>═⊕</strong> → Lampu dinding (wall lamp)</li>
</ul>

<h3>Simbol Stop Kontak</h3>
<ul>
  <li><strong>⊡</strong> → Stop kontak tanam (flush mounted)</li>
  <li><strong>⊡ +</strong> → Stop kontak dengan ground</li>
  <li><strong>⊡ WP</strong> → Stop kontak waterproof</li>
</ul>

<h3>Simbol Kabel</h3>
<ul>
  <li><strong>─────</strong> → Kabel di dalam dinding/plafon</li>
  <li><strong>── ── ──</strong> → Kabel di dalam lantai</li>
  <li>Angka di atas garis menunjukkan jumlah kabel</li>
</ul>

<blockquote>Hafalkan simbol-simbol dasar ini karena akan selalu digunakan saat menggambar maupun membaca gambar instalasi listrik.</blockquote>`
      },
      {
        id: 'bab-2',
        title: 'Jenis Diagram Instalasi',
        content: `<h2>Jenis-Jenis Diagram Instalasi</h2>

<h3>1. Diagram Garis Tunggal (Single Line Diagram)</h3>
<p>Diagram yang menggambarkan rangkaian dengan <strong>satu garis</strong> mewakili semua kabel. Digunakan untuk gambaran umum instalasi.</p>
<p>Ciri-ciri:</p>
<ul>
  <li>Sederhana dan ringkas</li>
  <li>Menunjukkan jumlah kabel dengan angka di atas garis</li>
  <li>Cocok untuk perencanaan awal</li>
</ul>

<h3>2. Diagram Garis Ganda (Wiring Diagram)</h3>
<p>Diagram yang menggambarkan <strong>setiap kabel secara terpisah</strong> beserta koneksinya. Menunjukkan bagaimana kabel sebenarnya disambung.</p>
<p>Ciri-ciri:</p>
<ul>
  <li>Detail dan lengkap</li>
  <li>Menunjukkan kabel fasa, netral, dan ground secara terpisah</li>
  <li>Wajib digunakan saat pelaksanaan pemasangan</li>
  <li>Kabel fasa biasanya digambar dengan garis merah, netral biru</li>
</ul>

<h3>3. Diagram Pelaksanaan (Layout Drawing)</h3>
<p>Diagram yang digambar pada <strong>denah ruangan</strong>, menunjukkan posisi penempatan komponen secara nyata.</p>
<p>Menunjukkan:</p>
<ul>
  <li>Posisi saklar, stop kontak, dan lampu di ruangan</li>
  <li>Jalur pipa conduit dan kabel</li>
  <li>Posisi panel distribusi</li>
  <li>Ketinggian pemasangan dari lantai</li>
</ul>

<h3>Ketinggian Pemasangan Standar (PUIL)</h3>
<ul>
  <li><strong>Saklar</strong> — 150 cm dari lantai</li>
  <li><strong>Stop kontak</strong> — 40 cm dari lantai (umum), 120 cm (di atas meja dapur)</li>
  <li><strong>Panel listrik</strong> — 150-180 cm dari lantai</li>
  <li><strong>Lampu dinding</strong> — 200 cm dari lantai</li>
</ul>

<blockquote>Saat mengerjakan proyek instalasi, selalu mulai dari Diagram Garis Tunggal → Diagram Pelaksanaan → Diagram Garis Ganda. Ini urutan yang benar dalam perencanaan.</blockquote>`
      }
    ]
  },

  // ===== 5. Jenis-Jenis Lampu =====
  {
    slug: 'jenis-lampu',
    title: 'Jenis-Jenis Lampu Penerangan',
    subject: 'instalasi-penerangan',
    description: 'Mengenal berbagai jenis lampu yang digunakan dalam instalasi penerangan: lampu pijar, TL, CFL, LED, dan karakteristiknya.',
    thumbnail: '/images/materi-lampu.webp',
    estimatedTime: '18 menit',
    videoUrl: 'https://www.youtube.com/embed/mhZWEgGvArk',
    relatedQuiz: 'kuis-jenis-lampu',
    chapters: [
      {
        id: 'bab-1',
        title: 'Lampu Pijar, TL & CFL',
        content: `<h2>Lampu Pijar, TL & CFL</h2>

<h3>Lampu Pijar (Incandescent)</h3>
<p>Lampu pijar menghasilkan cahaya dari <strong>filamen tungsten</strong> yang dipanaskan oleh arus listrik hingga berpijar.</p>
<ul>
  <li><strong>Kelebihan:</strong> Murah, warna cahaya hangat, CRI tinggi (~100)</li>
  <li><strong>Kekurangan:</strong> Boros energi (90% menjadi panas), umur pendek (±1.000 jam)</li>
  <li><strong>Efikasi:</strong> 10-17 lumen/watt</li>
  <li>Sudah jarang digunakan karena tidak efisien</li>
</ul>

<h3>Lampu TL / Fluorescent (Neon)</h3>
<p>Lampu TL menggunakan gas merkuri dalam tabung yang memancarkan sinar UV, lalu lapisan fosfor mengubahnya menjadi cahaya tampak.</p>
<ul>
  <li><strong>Kelebihan:</strong> Lebih hemat dari pijar, umur lebih panjang (±10.000 jam)</li>
  <li><strong>Kekurangan:</strong> Butuh ballast, mengandung merkuri (berbahaya jika pecah)</li>
  <li><strong>Efikasi:</strong> 50-100 lumen/watt</li>
  <li><strong>Tipe:</strong> T8 (diameter 26mm), T5 (diameter 16mm)</li>
</ul>

<h3>Lampu CFL (Compact Fluorescent Lamp)</h3>
<p>CFL adalah versi kompak dari lampu TL, berbentuk spiral atau U, dengan ballast terintegrasi.</p>
<ul>
  <li><strong>Kelebihan:</strong> Hemat energi (75% lebih hemat dari pijar), bisa langsung ganti fitting E27</li>
  <li><strong>Kekurangan:</strong> Butuh waktu warm-up, mengandung merkuri</li>
  <li><strong>Efikasi:</strong> 45-75 lumen/watt</li>
  <li><strong>Umur:</strong> ±8.000-15.000 jam</li>
</ul>

<blockquote>Perbandingan: Lampu CFL 20W menghasilkan cahaya setara lampu pijar 100W. Penghematan energi = 80%!</blockquote>`
      },
      {
        id: 'bab-2',
        title: 'Lampu LED & Perbandingan',
        content: `<h2>Lampu LED & Perbandingan Jenis Lampu</h2>

<h3>Lampu LED (Light Emitting Diode)</h3>
<p>Lampu LED menggunakan semikonduktor yang memancarkan cahaya ketika dialiri arus listrik. Merupakan teknologi penerangan <strong>paling efisien</strong> saat ini.</p>
<ul>
  <li><strong>Kelebihan:</strong> Sangat hemat energi, umur sangat panjang, tidak mengandung merkuri, instant on</li>
  <li><strong>Kekurangan:</strong> Harga awal lebih mahal (tapi sudah semakin murah)</li>
  <li><strong>Efikasi:</strong> 80-150 lumen/watt</li>
  <li><strong>Umur:</strong> 25.000-50.000 jam</li>
</ul>

<h3>Warna Cahaya (Color Temperature)</h3>
<ul>
  <li><strong>Warm White (2700-3000K)</strong> — Kuning hangat, cocok untuk kamar tidur, ruang tamu</li>
  <li><strong>Natural/Neutral White (4000-4500K)</strong> — Putih natural, cocok untuk dapur, kantor</li>
  <li><strong>Cool White/Daylight (5000-6500K)</strong> — Putih terang kebiruan, cocok untuk garasi, area kerja</li>
</ul>

<h3>Tabel Perbandingan</h3>
<p>Perbandingan untuk menghasilkan cahaya setara 800 lumen (setara lampu pijar 60W):</p>
<ul>
  <li><strong>Lampu Pijar:</strong> 60W — umur 1.000 jam — Rp 5.000</li>
  <li><strong>Lampu CFL:</strong> 13W — umur 10.000 jam — Rp 20.000</li>
  <li><strong>Lampu LED:</strong> 8W — umur 25.000 jam — Rp 25.000</li>
</ul>

<h3>Menghitung Penghematan</h3>
<p>Jika lampu menyala 8 jam/hari, tarif Rp 1.500/kWh:</p>
<pre><code>Biaya listrik per bulan:
Pijar 60W:  60 × 8 × 30 / 1000 × 1500 = Rp 21.600/bulan
CFL 13W:   13 × 8 × 30 / 1000 × 1500 = Rp 4.680/bulan
LED 8W:     8 × 8 × 30 / 1000 × 1500 = Rp 2.880/bulan

Penghematan LED vs Pijar = Rp 18.720/bulan per titik lampu!</code></pre>

<blockquote>Untuk instalasi penerangan baru, selalu rekomendasikan lampu LED kepada klien. Meski harga awal lebih tinggi, total biaya kepemilikan (TCO) jauh lebih murah karena hemat listrik dan umur sangat panjang.</blockquote>`
      }
    ]
  },

  // ===== 6. K3 Listrik =====
  {
    slug: 'keselamatan-kerja-listrik',
    title: 'Keselamatan Kerja Listrik (K3)',
    subject: 'instalasi-penerangan',
    description: 'Memahami prosedur keselamatan kerja dalam instalasi listrik: APD, bahaya listrik, P3K, dan standar PUIL.',
    thumbnail: '/images/materi-k3.webp',
    estimatedTime: '15 menit',
    videoUrl: 'https://www.youtube.com/embed/mKAfqt3DdWA',
    relatedQuiz: 'kuis-k3-listrik',
    chapters: [
      {
        id: 'bab-1',
        title: 'Bahaya Listrik & Pencegahan',
        content: `<h2>Bahaya Listrik & Pencegahan</h2>

<h3>Bahaya Utama Listrik</h3>
<ol>
  <li><strong>Sengatan Listrik (Electric Shock)</strong>
    <ul>
      <li>Arus 1 mA — terasa kesemutan</li>
      <li>Arus 10-20 mA — otot kejang, tidak bisa melepas genggaman</li>
      <li>Arus 50-100 mA — <strong>FATAL</strong>, bisa menyebabkan henti jantung</li>
      <li>Arus >100 mA — luka bakar parah, kematian</li>
    </ul>
  </li>
  <li><strong>Kebakaran</strong> — Akibat hubung singkat, overload, atau sambungan longgar yang menimbulkan panas</li>
  <li><strong>Ledakan (Arc Flash)</strong> — Busur api yang terjadi pada tegangan tinggi</li>
  <li><strong>Jatuh</strong> — Sengatan saat bekerja di ketinggian menyebabkan terjatuh</li>
</ol>

<h3>Alat Pelindung Diri (APD)</h3>
<p>APD wajib digunakan saat bekerja dengan instalasi listrik:</p>
<ul>
  <li><strong>Sepatu safety isolasi</strong> — Bersol karet, mencegah arus mengalir ke tanah melalui tubuh</li>
  <li><strong>Sarung tangan isolasi</strong> — Karet isolasi untuk bekerja dengan kabel bertegangan</li>
  <li><strong>Helm safety</strong> — Melindungi kepala dari benturan dan percikan api</li>
  <li><strong>Kacamata safety</strong> — Melindungi mata dari percikan api atau serpihan</li>
  <li><strong>Baju kerja</strong> — Lengan panjang, bahan tidak mudah terbakar</li>
</ul>

<h3>Alat Keselamatan Kerja</h3>
<ul>
  <li><strong>Tespen / Voltage Tester</strong> — Mengecek ada tidaknya tegangan</li>
  <li><strong>Multimeter</strong> — Mengukur tegangan, arus, dan hambatan</li>
  <li><strong>Lock Out Tag Out (LOTO)</strong> — Mengunci MCB agar tidak bisa dinyalakan orang lain saat kita bekerja</li>
  <li><strong>Tangga fiberglass</strong> — Tangga non-konduktif untuk bekerja di ketinggian</li>
</ul>

<blockquote>ATURAN EMAS: Selalu anggap semua kabel BERTEGANGAN sampai terbukti sebaliknya! Selalu tes dengan tespen sebelum menyentuh kabel apapun.</blockquote>`
      },
      {
        id: 'bab-2',
        title: 'Prosedur Kerja Aman & P3K',
        content: `<h2>Prosedur Kerja Aman & P3K Listrik</h2>

<h3>Prosedur Sebelum Bekerja</h3>
<ol>
  <li>Identifikasi pekerjaan dan risikonya</li>
  <li>Siapkan APD yang sesuai</li>
  <li><strong>Matikan sumber listrik</strong> (MCB OFF)</li>
  <li>Pasang <strong>LOTO</strong> dan tanda peringatan "SEDANG DIKERJAKAN"</li>
  <li><strong>Verifikasi</strong> dengan tespen — pastikan tidak ada tegangan</li>
  <li>Siapkan alat kerja yang sesuai (tang, obeng, kabel, dll.)</li>
  <li>Pastikan area kerja kering dan bersih</li>
</ol>

<h3>Prosedur Saat Bekerja</h3>
<ul>
  <li>Gunakan alat tangan yang terisolasi (gagang karet)</li>
  <li>Jangan bekerja sendirian — selalu ada rekan yang siap membantu</li>
  <li>Jangan bekerja dalam kondisi basah atau berkeringat</li>
  <li>Pastikan sambungan kabel kencang dan rapi</li>
  <li>Jangan memaksakan kabel — beri kelonggaran yang cukup</li>
</ul>

<h3>P3K Korban Sengatan Listrik</h3>
<ol>
  <li><strong>JANGAN sentuh korban</strong> yang masih terhubung dengan sumber listrik!</li>
  <li><strong>Matikan sumber listrik</strong> (cabut steker, matikan MCB)</li>
  <li>Jika tidak bisa dimatikan, gunakan benda <strong>non-konduktor kering</strong> (kayu, karet, plastik) untuk memisahkan korban dari sumber listrik</li>
  <li>Periksa kesadaran dan pernapasan korban</li>
  <li>Jika korban <strong>tidak sadar dan tidak bernapas</strong> → lakukan CPR</li>
  <li>Jika korban <strong>sadar</strong> → baringkan, tenangkan, dan tutup luka bakar dengan kain bersih</li>
  <li><strong>Segera hubungi 118 / 119</strong> (Ambulans)</li>
  <li>Jangan berikan makan/minum kepada korban</li>
</ol>

<h3>Standar & Regulasi</h3>
<ul>
  <li><strong>PUIL (Persyaratan Umum Instalasi Listrik)</strong> — Standar nasional untuk instalasi listrik di Indonesia</li>
  <li><strong>SNI (Standar Nasional Indonesia)</strong> — Standar untuk komponen dan alat listrik</li>
  <li><strong>SLO (Sertifikat Laik Operasi)</strong> — Sertifikat yang menyatakan instalasi listrik layak dan aman digunakan</li>
</ul>

<blockquote>Keselamatan bukan pilihan, tapi KEWAJIBAN. Tidak ada pekerjaan yang begitu penting sehingga tidak bisa dilakukan dengan aman. Satu kelalaian bisa berakibat fatal!</blockquote>`
      }
    ]
  },

  // ===== 7. Perhitungan Instalasi =====
  {
    slug: 'perhitungan-instalasi',
    title: 'Perhitungan Daya & Biaya Listrik',
    subject: 'instalasi-penerangan',
    description: 'Belajar menghitung kebutuhan daya, menentukan kapasitas MCB, ukuran kabel, dan estimasi biaya listrik bulanan.',
    thumbnail: '/images/materi-perhitungan.webp',
    estimatedTime: '22 menit',
    videoUrl: 'https://www.youtube.com/embed/24pLiyIWe_I',
    relatedQuiz: 'kuis-perhitungan',
    chapters: [
      {
        id: 'bab-1',
        title: 'Menghitung Total Daya',
        content: `<h2>Menghitung Total Daya Instalasi</h2>
<p>Sebelum merancang instalasi, kita harus menghitung <strong>total daya</strong> yang dibutuhkan untuk menentukan daya listrik yang harus dilanggan dari PLN.</p>

<h3>Langkah Perhitungan</h3>
<ol>
  <li>Daftar semua peralatan listrik dan dayanya</li>
  <li>Hitung total daya terpasang</li>
  <li>Kalikan dengan faktor kebutuhan (demand factor)</li>
  <li>Tentukan daya langganan PLN yang sesuai</li>
</ol>

<h3>Contoh Perhitungan Rumah Tinggal</h3>
<pre><code>Daftar Beban:
─────────────────────────────────────────
Penerangan:
  8 × Lampu LED 12W           =    96 W
  4 × Lampu LED 7W            =    28 W
  2 × Lampu taman LED 5W      =    10 W

Stop Kontak:
  1 × TV LED 32"              =    50 W
  1 × Kulkas                  =   100 W
  1 × Rice Cooker             =   400 W
  1 × Mesin Cuci              =   350 W
  1 × Setrika                 =   350 W
  2 × Charger HP              =    20 W
  1 × Pompa Air               =   250 W

Beban Khusus:
  1 × AC 1 PK                 =   840 W
─────────────────────────────────────────
Total Daya Terpasang          = 2.494 W

Faktor kebutuhan (0,8):
Daya Tersambung = 2.494 × 0,8 = 1.995 W

Pilihan daya PLN: 2.200 VA</code></pre>

<h3>Daya Langganan PLN (VA)</h3>
<ul>
  <li><strong>450 VA</strong> — Subsidi, untuk rumah tangga sangat kecil</li>
  <li><strong>900 VA</strong> — Subsidi, untuk rumah tangga kecil</li>
  <li><strong>1.300 VA</strong> — Rumah tangga sedang</li>
  <li><strong>2.200 VA</strong> — Rumah tangga menengah</li>
  <li><strong>3.500 VA</strong> — Rumah tangga besar</li>
  <li><strong>5.500 VA ke atas</strong> — Rumah besar / usaha kecil</li>
</ul>

<blockquote>Jangan lupa! VA (Volt-Ampere) ≠ Watt. Hubungannya: W = VA × cos φ. Untuk beban rumah tangga, cos φ ≈ 0,85. Jadi daya PLN 2.200 VA ≈ 1.870 Watt daya aktif yang bisa dipakai.</blockquote>`
      },
      {
        id: 'bab-2',
        title: 'Kapasitas MCB & Biaya Listrik',
        content: `<h2>Menentukan MCB & Menghitung Biaya Listrik</h2>

<h3>Menentukan Kapasitas MCB</h3>
<p>Kapasitas MCB ditentukan berdasarkan arus beban:</p>
<pre><code>I = P / V

Dimana:
I = Arus (Ampere)
P = Daya beban (Watt)
V = Tegangan (220 Volt)</code></pre>

<p><strong>Contoh:</strong> Grup penerangan dengan total 200W</p>
<pre><code>I = 200 / 220 = 0,9 A
MCB yang dipilih: 2A atau 4A (selalu pilih satu tingkat di atas)</code></pre>

<p><strong>Contoh:</strong> Grup stop kontak dengan total 1.500W</p>
<pre><code>I = 1.500 / 220 = 6,8 A
MCB yang dipilih: 10A</code></pre>

<h3>Ukuran MCB Standar</h3>
<p>2A — 4A — 6A — 10A — 16A — 20A — 25A — 32A — 40A — 50A — 63A</p>

<h3>Menghitung Biaya Listrik Bulanan</h3>
<pre><code>Biaya = Total kWh × Tarif per kWh

Langkah:
1. Hitung kWh per alat = Daya (kW) × Jam pemakaian × 30 hari
2. Jumlahkan semua kWh
3. Kalikan dengan tarif

Contoh:
──────────────────────────────────────────────
Alat         Daya    Jam/hari  kWh/bulan
──────────────────────────────────────────────
Lampu LED    96W     10 jam    28,8 kWh
TV           50W     8 jam     12,0 kWh
Kulkas       100W    24 jam    72,0 kWh (*)
Rice Cooker  400W    2 jam     24,0 kWh
AC 1 PK      840W    8 jam     201,6 kWh
──────────────────────────────────────────────
Total                          338,4 kWh

(*) Kulkas tidak selalu menyala penuh, faktor = 0,3
    Kulkas aktual = 72 × 0,3 = 21,6 kWh

Total aktual ≈ 288 kWh

Tarif R1/2.200VA = Rp 1.444,70/kWh
Biaya = 288 × 1.444,70 = Rp 416.074/bulan</code></pre>

<blockquote>Cara termudah menghemat listrik: ganti semua lampu pijar/CFL ke LED, dan atur suhu AC di 25°C. Dua langkah ini saja bisa menghemat 20-40% tagihan listrik!</blockquote>`
      }
    ]
  }
];

// Helper function to get subject badge class
export function getSubjectBadgeClass(subject) {
  return 'badge-instalasi';
}

// Helper function to get subject label
export function getSubjectLabel(subject) {
  return 'Instalasi Penerangan';
}
