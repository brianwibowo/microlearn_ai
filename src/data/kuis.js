// MicroLearn AI — Data Kuis: Instalasi Penerangan Listrik & Dasar Elektronika
// Disusun secara proporsional sesuai kaidah Taksonomi Bloom / SMK Kurikulum Merdeka
// Proporsi per Kuis: 4 Soal Mudah (33%) | 5 Soal Sedang (42%) | 3 Soal Sulit/HOTS (25%)

export const kuisList = [
  // ===== 1. Dasar Kelistrikan =====
  {
    slug: 'kuis-dasar-kelistrikan',
    title: 'Kuis: Dasar Teori Kelistrikan',
    subject: 'instalasi-penerangan',
    description: 'Uji pemahamanmu tentang arus, tegangan, hambatan, Hukum Ohm, rangkaian seri-paralel, dan analisis beban kelistrikan.',
    relatedMateri: 'dasar-kelistrikan',
    difficulty: 'Proporsional (Mudah-Sedang-Sulit)',
    questions: [
      {
        question: 'Apa satuan dari arus listrik dalam Satuan Internasional (SI)?',
        options: ['Volt (V)', 'Ampere (A)', 'Ohm (Ω)', 'Watt (W)'],
        correctAnswer: 1,
        level: 'Mudah',
        explanation: 'Arus listrik diukur dalam satuan Ampere (A), menggunakan alat ukur Amperemeter yang dipasang secara seri pada rangkaian.'
      },
      {
        question: 'Berapakah nilai tegangan listrik standar jala-jala rumah tangga PLN di Indonesia?',
        options: ['110 Volt AC', '220 Volt AC', '380 Volt AC', '440 Volt AC'],
        correctAnswer: 1,
        level: 'Mudah',
        explanation: 'Tegangan listrik satu fasa standar PLN untuk perumahan di Indonesia adalah 220 Volt AC dengan frekuensi jala-jala 50 Hz.'
      },
      {
        question: 'Rumus matematis untuk menghitung daya listrik aktif (P) pada beban satu fasa adalah...',
        options: ['P = V / I', 'P = V × I', 'P = I / R', 'P = V + I'],
        correctAnswer: 1,
        level: 'Mudah',
        explanation: 'Daya listrik aktif dihitung dengan perkalian tegangan dan arus: P = V × I (satuan: Watt). Rumus turunan lainnya: P = I²R dan P = V²/R.'
      },
      {
        question: 'Alat ukur besaran listrik yang digunakan untuk mengukur beda potensial dan dipasang secara PARALEL adalah...',
        options: ['Amperemeter', 'Voltmeter', 'Ohmmeter', 'Wattmeter'],
        correctAnswer: 1,
        level: 'Mudah',
        explanation: 'Voltmeter memiliki resistansi internal sangat tinggi dan wajib dipasang paralel terhadap dua titik beda potensial yang ingin diukur.'
      },
      {
        question: 'Hukum Ohm menyatakan V = I × R. Jika sebuah lampu berhambatan 440 Ω dipasang pada tegangan 220V, berapakah arus yang mengalir?',
        options: ['0,25 A', '0,5 A', '1 A', '2 A'],
        correctAnswer: 1,
        level: 'Sedang',
        explanation: 'Berdasarkan Hukum Ohm: I = V / R = 220 / 440 = 0,5 Ampere.'
      },
      {
        question: 'Pada rangkaian paralel, sifat tegangan dan arus yang benar adalah...',
        options: [
          'Arus di setiap cabang selalu sama persis',
          'Tegangan pada setiap cabang sama besar dengan tegangan sumber',
          'Hambatan pengganti total lebih besar dari hambatan cabang terbesar',
          'Jika satu cabang beban putus, semua beban lainnya padam'
        ],
        correctAnswer: 1,
        level: 'Sedang',
        explanation: 'Pada rangkaian paralel, tegangan pada semua cabang identik sama (V_total = V1 = V2 = ...), sedangkan arus total terbagi ke masing-masing cabang.'
      },
      {
        question: 'Sebuah lampu penerangan 100 Watt dinyalakan selama 10 jam setiap hari. Berapakah energi listrik yang dikonsumsi per hari?',
        options: ['100 Wh', '1 kWh', '10 kWh', '0,1 kWh'],
        correctAnswer: 1,
        level: 'Sedang',
        explanation: 'Energi listrik (W) = Daya (P) × Waktu (t) = 100 Watt × 10 jam = 1.000 Wh = 1 kWh (1 unit tagihan listrik PLN).'
      },
      {
        question: 'Manakah karakteristik yang membedakan Arus Searah (DC) dengan Arus Bolak-Balik (AC)?',
        options: [
          'Arus DC memiliki frekuensi 50 Hz sedangkan AC tidak memiliki frekuensi',
          'Arus DC mengalir konstan dalam satu arah kutub (+ ke -), sedangkan AC polaritasnya berbalik bolak-balik secara periodik',
          'Arus DC hanya dapat dihasilkan oleh generator PLTA bertegangan tinggi',
          'Arus DC tidak bisa disimpan di dalam baterai/akumulator'
        ],
        correctAnswer: 1,
        level: 'Sedang',
        explanation: 'Arus DC (Direct Current) mengalir stabil ke satu arah kutub, sedangkan AC (Alternating Current) gelombangnya bolak-balik sinusoidal dengan frekuensi tertentu.'
      },
      {
        question: 'Alat ukur Megger (Insulation Tester) digunakan khusus pada instalasi listrik untuk...',
        options: [
          'Mengukur arus bocor induktif saat peralatan menyala',
          'Menguji nilai tahanan isolasi kabel untuk mencegah hubung singkat dan sengatan listrik',
          'Mengukur daya semu dalam satuan kVA',
          'Menentukan polaritas fasa dan netral pada stop kontak'
        ],
        correctAnswer: 1,
        level: 'Sedang',
        explanation: 'Megger menyuntikkan tegangan DC tinggi (500V/1000V) untuk mengukur ketahanan isolator pembungkus kabel dalam satuan MegaOhm (MΩ) sesuai standar PUIL.'
      },
      {
        question: 'Tiga buah resistor masing-masing bernilai 20 Ω, 30 Ω, dan 60 Ω dihubungkan secara PARALEL ke sumber tegangan 120 Volt. Berapakah kuat arus total yang mengalir dari sumber?',
        options: ['2 Ampere', '6 Ampere', '10 Ampere', '12 Ampere'],
        correctAnswer: 3,
        level: 'Sulit',
        explanation: 'Hambatan paralel: 1/Rp = 1/20 + 1/30 + 1/60 = (3 + 2 + 1)/60 = 6/60 = 1/10 => Rp = 10 Ω. Kuat arus total: I_total = V / Rp = 120 / 10 = 12 Ampere.'
      },
      {
        question: 'Sebuah lampu filamen berdaya 100 Watt dirancang untuk tegangan kerja 220 Volt. Jika lampu tersebut dipasang pada tegangan jala-jala yang drop menjadi 110 Volt, berapakah daya aktual yang diserap lampu?',
        options: ['100 Watt', '50 Watt', '25 Watt', '10 Watt'],
        correctAnswer: 2,
        level: 'Sulit',
        explanation: 'Daya berbanding lurus dengan kuadrat tegangan (P = V² / R). Jika tegangan turun menjadi setengahnya (110V = 1/2 dari 220V), maka daya menjadi (1/2)² = 1/4 dari daya nominal: 1/4 × 100W = 25 Watt.'
      },
      {
        question: 'Pada saluran distribusi kabel penerangan yang sangat panjang, lampu di ujung instalasi menyala redup. Analisis penyebab teknis fenomena tersebut adalah...',
        options: [
          'Frekuensi listrik PLN menurun drastis di sepanjang kabel',
          'Terjadinya jatuh tegangan (voltage drop) akibat resistansi kawat tembaga kabel yang panjang',
          'Kabel netral mengalami kelebihan muatan elektron negatif',
          'Kapasitansi parasit kabel membalikkan arus AC menjadi DC'
        ],
        correctAnswer: 1,
        level: 'Sulit',
        explanation: 'Setiap kabel memiliki hambatan jenis (R = ρ·L/A). Semakin panjang kabel (L besar), hambatan kawat meningkat dan memicu jatuh tegangan (voltage drop: V_drop = I × R_kabel), sehingga tegangan di ujung beban berkurang drastis.'
      }
    ]
  },

  // ===== 2. Komponen Instalasi =====
  {
    slug: 'kuis-komponen',
    title: 'Kuis: Komponen Instalasi Penerangan',
    subject: 'instalasi-penerangan',
    description: 'Tes pengetahuanmu tentang kabel SNI, saklar, stop kontak, fitting, MCB, ELCB, dan panel hubung bagi.',
    relatedMateri: 'komponen-instalasi',
    difficulty: 'Proporsional (Mudah-Sedang-Sulit)',
    questions: [
      {
        question: 'Kabel jenis apa yang memiliki inti tembaga pejal tunggal dengan isolasi PVC dan WAJIB dipasang di dalam pipa conduit?',
        options: ['NYM', 'NYA', 'NYY', 'NYAF'],
        correctAnswer: 1,
        level: 'Mudah',
        explanation: 'Kabel NYA hanya memiliki satu lapis isolasi PVC tipis, sehingga PUIL mewajibkannya dilindungi pipa pelindung (conduit PVC/logam).'
      },
      {
        question: 'Warna kabel yang menunjukkan penghantar Netral (N) menurut standar PUIL 2011 di Indonesia adalah...',
        options: ['Merah', 'Kuning-Hijau loreng', 'Biru', 'Hitam'],
        correctAnswer: 2,
        level: 'Mudah',
        explanation: 'Menurut standar PUIL 2011: Kabel Biru adalah Netral (N), Merah/Hitam/Cokelat adalah Fasa (L), dan Kuning-Hijau loreng adalah Proteksi Pembumian / Grounding (PE).'
      },
      {
        question: 'Fitting lampu berulir standar yang paling umum dipakai pada perumahan dan perkantoran di Indonesia adalah tipe...',
        options: ['Fitting E14', 'Fitting E27', 'Fitting GU10', 'Fitting Bayonet B22'],
        correctAnswer: 1,
        level: 'Mudah',
        explanation: 'Fitting E27 (Edison Screw diameter 27 mm) adalah dudukan lampu standar yang paling banyak digunakan di Indonesia.'
      },
      {
        question: 'Komponen pengaman instalasi listrik yang memutus arus secara otomatis saat terjadi hubung singkat (korsleting) adalah...',
        options: ['Saklar Tunggal', 'MCB (Miniature Circuit Breaker)', 'Isolator Keramik', 'Stop Kontak'],
        correctAnswer: 1,
        level: 'Mudah',
        explanation: 'MCB berfungsi mengamankan rangkaian dari beban lebih (overload) dan arus hubung singkat (short circuit).'
      },
      {
        question: 'Berapakah ukuran luas penampang kabel tembaga standar minimal yang diizinkan untuk sirkuit instalasi penerangan menurut PUIL?',
        options: ['0,75 mm²', '1,5 mm²', '2,5 mm²', '4,0 mm²'],
        correctAnswer: 1,
        level: 'Sedang',
        explanation: 'Sirkuit penerangan standar menggunakan kabel 1,5 mm² dengan kapasitas arus hingga 10A, sedangkan sirkuit stop kontak menggunakan minimal 2,5 mm².'
      },
      {
        question: 'Dalam instalasi listrik rumah tangga, saklar penerangan SELALU dipasang pada jalur kabel...',
        options: ['Netral (N)', 'Fasa (L)', 'Ground (PE)', 'Boleh di kabel mana saja'],
        correctAnswer: 1,
        level: 'Sedang',
        explanation: 'Saklar wajib memutus kabel Fasa (L) agar saat saklar posisi OFF, fitting lampu tidak bertegangan sehingga aman saat mengganti bohlam lampu.'
      },
      {
        question: 'Sensitivitas arus bocor pengaman ELCB/RCCB yang diwajibkan untuk perlindungan nyawa manusia dari sengatan listrik adalah...',
        options: ['10 mA', '30 mA', '100 mA', '300 mA'],
        correctAnswer: 1,
        level: 'Sedang',
        explanation: 'ELCB dengan sensitivitas 30 mA bekerja seketika (<0,1 detik) jika ada arus bocor ke tanah di atas 30 mA sebelum memicu henti jantung manusia.'
      },
      {
        question: 'Jenis kabel yang memiliki selubung luar tebal tahan cuaca dan kelembapan sehingga aman ditanam langsung di dalam tanah adalah...',
        options: ['Kabel NYA', 'Kabel NYM', 'Kabel NYY', 'Kabel NYAF'],
        correctAnswer: 2,
        level: 'Sedang',
        explanation: 'Kabel NYY memiliki isolasi dan selubung luar PVC hitam pekat yang dirancang khusus tahan terhadap air dan tekanan tanah.'
      },
      {
        question: 'Mengapa instalasi listrik rumah bertingkat wajib dibagi menjadi beberapa grup pembebanan pada panel PHB?',
        options: [
          'Agar kabel tidak kusut di dalam panel',
          'Agar jika satu grup trip karena korsleting, grup lain tetap menyala serta memudahkan pelacakan gangguan',
          'Karena peraturan wajib dari produsen saklar',
          'Agar konsumsi kWh meter PLN berputar lebih lambat'
        ],
        correctAnswer: 1,
        level: 'Sedang',
        explanation: 'Pembagian grup melokalisir gangguan sirkuit, mempermudah perawatan, dan mencegah pemadaman total di seluruh bangunan.'
      },
      {
        question: 'Di dalam internal MCB terdapat dua mekanisme pemicu pemutusan arus (trip). Mekanisme pemicu saat terjadi beban lebih (overload) yang berlangsung bertahap adalah...',
        options: [
          'Kumparan solenoid elektromagnetik',
          'Keping bimetal yang melengkung akibat pemanasan suhu arus listrik',
          'Gas argon bertekanan tinggi',
          'Sensor fotosel inframerah'
        ],
        correctAnswer: 1,
        level: 'Sulit',
        explanation: 'Overload memicu pemanasan bertahap pada keping bimetal yang memiliki koefisien muai berbeda hingga melengkung dan menggerakkan tuas pelepas kontak mekanik.'
      },
      {
        question: 'Sebuah panel distribusi melayani total arus beban puncak nominal 32 Ampere. Berdasarkan tabel Kuat Hantar Arus (KHA) kabel berinsulasi PVC standar PUIL 2011, ukuran kabel penghantar utama fasa yang paling aman dipilih adalah...',
        options: ['1,5 mm²', '2,5 mm²', '6 mm²', '0,5 mm²'],
        correctAnswer: 2,
        level: 'Sulit',
        explanation: 'Kabel 2,5 mm² memiliki KHA sekitar 25A (tidak cukup untuk 32A). Maka harus menggunakan kabel minimal 6 mm² (KHA sekitar 41A pada pipa konduit) dengan faktor keamanan 125% sesuai PUIL.'
      },
      {
        question: 'Sebuah instalasi baru saat pertama kali MCB dinaikkan langsung trip seketika dengan bunyi letupan kecil tanpa ada lampu yang terpasang di fitting. Kemungkinan kesalahan pengawatan terbesar adalah...',
        options: [
          'Kabel ground lupa disambungkan ke batang pembumian',
          'Terjadi hubung singkat langsung antara kabel fasa dan netral pada sambungan kotak T-dos',
          'Ukuran kabel lampu terlalu besar melebihi 2,5 mm²',
          'Fitting lampu menggunakan tipe ulir E27'
        ],
        correctAnswer: 1,
        level: 'Sulit',
        explanation: 'Trip seketika disertai bunyi letupan mengindikasikan hubung singkat langsung (short circuit) fasa ke netral tanpa beban, memicu arus ribuan Ampere sehingga solenoid magnetik MCB trip instan.'
      }
    ]
  },

  // ===== 3. Instalasi Saklar & Lampu =====
  {
    slug: 'kuis-saklar-lampu',
    title: 'Kuis: Instalasi Saklar & Lampu',
    subject: 'instalasi-penerangan',
    description: 'Uji kemampuanmu tentang instalasi saklar tunggal, saklar seri, dan saklar tukar (hotel switch).',
    relatedMateri: 'instalasi-saklar-lampu',
    difficulty: 'Proporsional (Mudah-Sedang-Sulit)',
    questions: [
      {
        question: 'Saklar tunggal (SPST - Single Pole Single Throw) memiliki berapa terminal sambungan baut kabel?',
        options: ['1 terminal', '2 terminal', '3 terminal', '4 terminal'],
        correctAnswer: 1,
        level: 'Mudah',
        explanation: 'Saklar tunggal memiliki 2 terminal kontak: satu terminal input (kabel fasa masuk) dan satu terminal output (fasa keluar ke beban lampu).'
      },
      {
        question: 'Pada saklar seri (saklar ganda), berapa terminal masukan (common fasa) yang biasanya disediakan?',
        options: ['1 terminal common', '2 terminal common terpisah', '3 terminal', '4 terminal'],
        correctAnswer: 0,
        level: 'Mudah',
        explanation: 'Saklar seri memiliki 1 terminal common (atau 2 yang sudah terhubung bridge plat tembaga di belakangnya) dan 2 terminal output (L1 dan L2).'
      },
      {
        question: 'Kabel netral (N) dari sumber instalasi listrik dalam rangkaian saklar tunggal langsung disambungkan ke...',
        options: ['Tuas saklar', 'Terminal fasa MCB', 'Fitting lampu langsung', 'Pipa konduit PVC'],
        correctAnswer: 2,
        level: 'Mudah',
        explanation: 'Kabel netral tidak boleh melewati saklar; kabel netral langsung dari panel/sumber menuju ke fitting lampu.'
      },
      {
        question: 'Langkah pertama dan paling penting sebelum memulai perakitan kawat instalasi saklar adalah...',
        options: [
          'Memasang fitting lampu di plafon',
          'Memastikan MCB dalam posisi OFF dan mengecek ketiadaan tegangan dengan tespen',
          'Mengupas seluruh ujung kawat kabel',
          'Menyalakan saklar ke posisi ON'
        ],
        correctAnswer: 1,
        level: 'Mudah',
        explanation: 'SOP Keselamatan kerja mewajibkan pemutusan sumber arus (MCB OFF) dan memverifikasi dengan voltage detector/tespen sebelum menyentuh penghantar.'
      },
      {
        question: 'Saklar tukar (hotel switch) memiliki berapa terminal kontak kabel?',
        options: ['2 terminal', '3 terminal', '4 terminal', '5 terminal'],
        correctAnswer: 1,
        level: 'Sedang',
        explanation: 'Saklar tukar (SPDT) memiliki 3 terminal: 1 terminal Common (C) dan 2 terminal Traveler (L1 dan L2).'
      },
      {
        question: 'Instalasi yang digunakan untuk mengendalikan 1 titik lampu dari 2 tempat berbeda (misal ujung bawah dan atas tangga) adalah...',
        options: ['2 buah saklar tunggal', '1 buah saklar seri', '2 buah saklar tukar (hotel switch)', '2 buah saklar silang'],
        correctAnswer: 2,
        level: 'Sedang',
        explanation: 'Pengendalian dari dua tempat menggunakan sepasang saklar tukar yang dihubungkan melalui kabel traveler.'
      },
      {
        question: 'Kabel penghubung antara terminal L1 dan L2 pada kedua saklar tukar disebut dengan istilah kabel...',
        options: ['Kabel Netral', 'Kabel Pembumian', 'Kabel Traveler', 'Kabel Busbar'],
        correctAnswer: 2,
        level: 'Sedang',
        explanation: 'Dua kawat penghubung antara terminal saklar tukar 1 dan saklar tukar 2 disebut kabel traveler (penjelajah arus bolak-balik posisi).'
      },
      {
        question: 'Untuk mengendalikan satu titik lampu penerangan lorong panjang dari 3 lokasi saklar berbeda, kombinasi saklar yang tepat adalah...',
        options: [
          '3 buah saklar tukar',
          '3 buah saklar silang',
          '2 buah saklar tukar di ujung-ujung dan 1 buah saklar silang di tengah',
          '1 buah saklar tukar dan 2 buah saklar silang'
        ],
        correctAnswer: 2,
        level: 'Sedang',
        explanation: 'Untuk 3 lokasi: Saklar Tukar 1 -> Saklar Silang (Cross switch dengan 4 terminal) -> Saklar Tukar 2.'
      },
      {
        question: 'Apa dampak keselamatan jika saklar penerangan keliru dipasang memutus kabel netral (N) dan bukan kabel fasa (L)?',
        options: [
          'Lampu tidak akan bisa menyala sama sekali',
          'Lampu tetap bisa menyala/mati, tetapi saat saklar OFF, fitting lampu tetap bertegangan 220V sehingga berisiko fatal menyengat orang saat mengganti lampu',
          'MCB akan langsung meledak',
          'Kabel instalasi akan mencair seketika'
        ],
        correctAnswer: 1,
        level: 'Sedang',
        explanation: 'Rangkaian tetap bekerja secara fungsional, tetapi fitting lampu selalu dialiri tegangan 220V aktif meskipun saklar mati, menciptakan bahaya sengatan listrik fatal.'
      },
      {
        question: 'Pada pemasangan rangkaian 2 saklar tukar untuk 1 lampu di tangga, lampu hanya bisa menyala jika saklar A berada di posisi atas, namun jika saklar A berada di bawah, lampu tidak dapat dinyalakan sama sekali dari saklar B. Analisis kerusakannya adalah...',
        options: [
          'Bohlam lampu mengalami korsleting',
          'Kabel fasa sumber keliru dipasang pada terminal traveler bukan terminal common pada salah satu saklar',
          'Tegangan PLN drop menjadi 110V',
          'Kabel ground putus di dalam pipa'
        ],
        correctAnswer: 1,
        level: 'Sulit',
        explanation: 'Jika kabel fasa sumber masuk ke terminal traveler (bukan terminal C/Common), kontinuitas jalur peralihan saklar kedua akan terputus ketika saklar pertama berpindah posisi.'
      },
      {
        question: 'Berapa jumlah kawat penghantar minimal di dalam pipa konduit PVC yang turun dari kotak sambung (T-dos) plafon menuju ke saklar tukar pertama (yang menerima fasa sumber)?',
        options: ['2 kawat', '3 kawat', '4 kawat', '5 kawat'],
        correctAnswer: 1,
        level: 'Sulit',
        explanation: 'Dibutuhkan 3 kawat: 1 kawat fasa masuk ke terminal Common (C), dan 2 kawat traveler (L1 dan L2) yang naik kembali ke T-dos menuju saklar tukar kedua.'
      },
      {
        question: 'Dalam suatu instalasi saklar seri 2 lampu, kawat fasa input dijumper ke kedua common saklar. Saat tuas 1 ON lampu 1 menyala terang, namun saat tuas 2 ON kedua lampu menyala redup bersamaan. Analisis kesalahan sambungan adalah...',
        options: [
          'Kabel netral pada lampu 2 terhubung seri dengan lampu 1 akibat salah sambung di kotak cabang',
          'Fitting lampu menggunakan jenis ulir yang salah',
          'MCB mengalami kerusakan kontak mekanis',
          'Tegangan sumber PLN berubah menjadi arus DC'
        ],
        correctAnswer: 0,
        level: 'Sulit',
        explanation: 'Jika kedua lampu menyala redup bersamaan, artinya kedua beban lampu terhubung secara SERI ke tegangan 220V, sehingga tegangan terbagi dua (masing-masing hanya menerima 110V).'
      }
    ]
  },

  // ===== 4. Diagram Instalasi =====
  {
    slug: 'kuis-diagram',
    title: 'Kuis: Diagram Instalasi Listrik',
    subject: 'instalasi-penerangan',
    description: 'Tes pemahamanmu tentang simbol PUIL, single-line diagram, wiring diagram, dan gambar denah layout.',
    relatedMateri: 'diagram-instalasi',
    difficulty: 'Proporsional (Mudah-Sedang-Sulit)',
    questions: [
      {
        question: 'Diagram teknik listrik yang menggambarkan rangkaian instalasi dengan satu garis tunggal mewakili lintasan kelompok kabel disebut...',
        options: ['Diagram garis tunggal (Single Line Diagram)', 'Diagram garis ganda (Wiring Diagram)', 'Diagram blok skematik', 'Diagram alir (Flowchart)'],
        correctAnswer: 0,
        level: 'Mudah',
        explanation: 'Diagram garis tunggal (Single Line Diagram) menyederhanakan gambar instalasi dengan menggunakan satu garis untuk mewakili beberapa penghantar sekaligus.'
      },
      {
        question: 'Simbol standar kelistrikan berupa lingkaran dengan tanda silang di dalamnya (⊕) merepresentasikan...',
        options: ['Saklar Tunggal', 'Titik Lampu Penerangan', 'Stop Kontak dengan Ground', 'Kotak Sambung T-Dos'],
        correctAnswer: 1,
        level: 'Mudah',
        explanation: 'Lingkaran bertanda silang adalah simbol standar PUIL/IEC untuk titik lampu penerangan plafon.'
      },
      {
        question: 'Diagram instalasi yang digambar langsung di atas denah arsitektur ruangan bangunan gedung disebut...',
        options: ['Diagram Garis Ganda', 'Diagram Pelaksanaan (Layout Drawing)', 'Diagram Skematik Elektronik', 'Diagram Satu Fasa'],
        correctAnswer: 1,
        level: 'Mudah',
        explanation: 'Diagram pelaksanaan (Layout Plan) memetakan penempatan fisik saklar, lampu, stop kontak, dan jalur pipa di atas gambar arsitektur bangunan.'
      },
      {
        question: 'Diagram yang menggambarkan setiap urat kabel secara terpisah (fasa, netral, ground) beserta detail sambungan baut terminalnya adalah...',
        options: ['Diagram Pengawatan (Wiring Diagram / Garis Ganda)', 'Single Line Diagram', 'Diagram Garis Tunggal', 'Site Plan'],
        correctAnswer: 0,
        level: 'Mudah',
        explanation: 'Diagram pengawatan menggambarkan setiap urat kawat secara mendetail, menjadi panduan teknisi saat merakit kabel di lapangan.'
      },
      {
        question: 'Menurut standar PUIL, ketinggian pemasangan saklar dinding penerangan dari permukaan lantai yang dianjurkan adalah...',
        options: ['40 cm', '100 cm', '150 cm', '200 cm'],
        correctAnswer: 2,
        level: 'Sedang',
        explanation: 'Standar PUIL menetapkan tinggi saklar dinding pada 150 cm dari lantai agar mudah dijangkau tangan orang dewasa dan terhindar dari jangkauan balita.'
      },
      {
        question: 'Ketinggian pemasangan standar untuk stop kontak dinding umum dari permukaan lantai adalah...',
        options: ['20 cm', '40 cm', '120 cm', '180 cm'],
        correctAnswer: 1,
        level: 'Sedang',
        explanation: 'Stop kontak dinding umum dipasang pada ketinggian 40 cm dari lantai, sedangkan stop kontak di atas meja dapur umumnya 120 cm.'
      },
      {
        question: 'Urutan yang paling benar dalam tahapan perancangan gambar teknik instalasi listrik penerangan adalah...',
        options: [
          'Diagram Pengawatan -> Diagram Garis Tunggal -> Diagram Pelaksanaan',
          'Diagram Garis Tunggal -> Diagram Pelaksanaan (Layout) -> Diagram Pengawatan (Wiring)',
          'Diagram Pelaksanaan -> Diagram Pengawatan -> Diagram Garis Tunggal',
          'Diagram Pengawatan -> Denah Pondasi -> Diagram Garis Tunggal'
        ],
        correctAnswer: 1,
        level: 'Sedang',
        explanation: 'Perancangan dimulai dari skema garis tunggal (perencanaan sistem) -> diagram pelaksanaan tata letak ruangan -> diagram pengawatan detail.'
      },
      {
        question: 'Dalam single line diagram, arti goresan garis miring pendek berjumlah 3 garis pada sebuah jalur pipa adalah...',
        options: [
          'Jalur pipa berukuran 3 inci',
          'Pipa berisi 3 kawat penghantar (Fasa, Netral, dan Ground)',
          'Terdapat 3 buah lampu terhubung',
          'Tegangan kerja pipa adalah 300 Volt'
        ],
        correctAnswer: 1,
        level: 'Sedang',
        explanation: 'Jumlah coretan miring pada garis tunggal menunjukkan banyaknya urat kawat penghantar di dalam jalur pipa tersebut.'
      },
      {
        question: 'Garis strip putus-putus pada gambar diagram layout instalasi penerangan biasanya menandakan jalur kabel yang dipasang...',
        options: [
          'Menempel di permukaan dinding secara terbuka',
          'Ditanam di dalam lantai atau di bawah tanah',
          'Menggantung di udara bebas',
          'Hanya dialiri arus saat malam hari'
        ],
        correctAnswer: 1,
        level: 'Sedang',
        explanation: 'Garis putus-putus merepresentasikan jalur pipa/kabel tertanam di bawah lantai beton atau jalur bawah tanah.'
      },
      {
        question: 'Dalam gambar denah layout ruang tamu, sebuah saklar ganda melayani 2 grup lampu plafon. Jika saklar tersebut juga berada satu kotak dengan stop kontak, berapa jumlah kawat yang masuk ke pipa konduit menuju kotak saklar-stop kontak tersebut?',
        options: ['3 kawat', '4 kawat', '5 kawat', '6 kawat'],
        correctAnswer: 2,
        level: 'Sulit',
        explanation: 'Dibutuhkan 5 kawat: 1 Fasa sumber (dipakai bersama saklar & stop kontak), 2 kawat Fasa balik lampu (L1 & L2), 1 kawat Netral (untuk stop kontak), dan 1 kawat Ground (untuk stop kontak).'
      },
      {
        question: 'Dalam penentuan posisi peletakan Panel Hubung Bagi (PHB) utama pada bangunan gedung, prinsip "Titik Berat Beban" (Center of Gravity of Loads) bertujuan untuk...',
        options: [
          'Membuat panel terlihat lebih artistik dari pintu masuk utama',
          'Meminimalkan panjang total kabel tarikan dan memperkecil akumulasi jatuh tegangan (voltage drop) ke seluruh beban',
          'Menghindari panel terkena hembusan angin pendingin ruangan',
          'Memudahkan petugas PLN membaca meteran'
        ],
        correctAnswer: 1,
        level: 'Sulit',
        explanation: 'Menempatkan PHB di dekat pusat konsentrasi beban listrik meminimalkan panjang tarikan kabel, mengurangi kerugian daya rugi-rugi tembaga, dan menghemat biaya material kabel.'
      },
      {
        question: 'Sebuah gambar pengawatan memperlihatkan kawat pembumian (Ground PE bergaris kuning-hijau) dipotong dan disambungkan ke terminal kontak saklar tunggal. Analisis terhadap gambar tersebut adalah...',
        options: [
          'Gambar sudah benar dan sesuai standar PUIL pasal keselamatan',
          'Gambar salah fatal, karena kawat ground tidak boleh dialiri arus operasional atau diputus oleh saklar, melainkan harus terhubung langsung ke bodi/rangka logam beban',
          'Gambar benar hanya jika menggunakan saklar berbahan kayu',
          'Gambar tidak berpengaruh karena tegangan ground selalu 220V'
        ],
        correctAnswer: 1,
        level: 'Sulit',
        explanation: 'Kawat proteksi ground (PE) sama sekali tidak boleh diputus oleh saklar atau disambung ke terminal operasional saklar; ground berfungsi membawa arus bocor ke tanah.'
      }
    ]
  },

  // ===== 5. Jenis-Jenis Lampu =====
  {
    slug: 'kuis-jenis-lampu',
    title: 'Kuis: Jenis-Jenis Lampu Penerangan',
    subject: 'instalasi-penerangan',
    description: 'Tes pengetahuanmu tentang teknologi lampu pijar, TL fluorescent, CFL, dan efisiensi teknologi LED.',
    relatedMateri: 'jenis-lampu',
    difficulty: 'Proporsional (Mudah-Sedang-Sulit)',
    questions: [
      {
        question: 'Teknologi lampu penerangan buatan yang paling hemat energi dan memiliki usia pakai terpanjang saat ini adalah...',
        options: ['Lampu Pijar (Incandescent)', 'Lampu TL Neon Fluorescent', 'Lampu CFL Spiral', 'Lampu LED (Light Emitting Diode)'],
        correctAnswer: 3,
        level: 'Mudah',
        explanation: 'Lampu LED memiliki efikasi luminus tertinggi (80-150 lm/W) dan umur operasi 25.000 hingga 50.000 jam.'
      },
      {
        question: 'Bagian utama pada lampu pijar konvensional yang memancarkan cahaya ketika dialiri arus listrik adalah...',
        options: ['Gas Merkuri cair', 'Filamen kawat Wolfram (Tungsten)', 'Lapisan fosfor putih', 'Balas elektronik'],
        correctAnswer: 1,
        level: 'Mudah',
        explanation: 'Filamen tungsten dipanaskan oleh arus listrik hingga membara pada temperatur >2000°C di dalam bola kaca hampa udara.'
      },
      {
        question: 'Suhu warna cahaya (Color Temperature) lampu dengan label "Warm White" berada pada rentang...',
        options: ['2.700K - 3.000K (Kuning hangat)', '4.000K - 4.500K (Putih netral)', '6.500K - 7.000K (Putih kebiruan)', '10.000K (Ultra Violet)'],
        correctAnswer: 0,
        level: 'Mudah',
        explanation: 'Warm White (2700-3000 Kelvin) menghasilkan spektrum cahaya kuning hangat menyerupai cahaya matahari terbit/terbenam.'
      },
      {
        question: 'Satuan internasional untuk menyatakan total jumlah pancaran cahaya yang dihasilkan oleh sebuah sumber cahaya adalah...',
        options: ['Watt', 'Lumen', 'Lux', 'Candela'],
        correctAnswer: 1,
        level: 'Mudah',
        explanation: 'Lumen (lm) adalah satuan flux cahaya (total kuantitas cahaya yang dipancarkan). Sedangkan Lux adalah intensitas penerangan per meter persegi (lm/m²).'
      },
      {
        question: 'Mengapa lampu pijar konvensional memiliki efikasi yang sangat rendah (hanya 10 - 17 lumen/Watt)?',
        options: [
          'Karena filamen tungsten menyerap cahaya di dalam bola kaca',
          'Karena sekitar 90% energi listrik terbuang percuma menjadi radiasi panas (kalor)',
          'Karena gas nitrogen di dalamnya memadamkan cahaya',
          'Karena tegangan 220V terlalu kecil untuk lampu pijar'
        ],
        correctAnswer: 1,
        level: 'Sedang',
        explanation: 'Hanya sekitar 5-10% energi listrik lampu pijar yang dikonversi menjadi cahaya tampak, sisanya terbuang sebagai panas inframerah.'
      },
      {
        question: 'Kelemahan dan bahaya lingkungan terbesar dari lampu TL tabung (fluorescent) dan CFL jika pecah adalah...',
        options: [
          'Menghasilkan radiasi nuklir radioaktif',
          'Mengandung uap gas Merkuri (Air Raksa) yang sangat beracun bagi saraf manusia dan lingkungan',
          'Dapat memicu kebakaran spontan tanpa oksigen',
          'Mengeluarkan gas karbon monoksida pekat'
        ],
        correctAnswer: 1,
        level: 'Sedang',
        explanation: 'Lampu fluorescent memanfaatkan pelepasan uap gas merkuri bertekanan rendah untuk menghasilkan sinar UV yang diubah fosfor menjadi cahaya.'
      },
      {
        question: 'Sebuah lampu LED 8 Watt mampu menghasilkan kuat cahaya 800 Lumen, setara dengan cahaya lampu pijar 60 Watt. Berapakah persentase penghematan energi listriknya?',
        options: ['Sekitar 50%', 'Sekitar 65%', 'Sekitar 75%', 'Sekitar 87%'],
        correctAnswer: 3,
        level: 'Sedang',
        explanation: 'Penghematan daya = (60W - 8W) / 60W × 100% = 52/60 × 100% = 86,67% ≈ 87% penghematan energi.'
      },
      {
        question: 'Suhu warna "Cool Daylight" (6.500 Kelvin) sangat direkomendasikan untuk digunakan pada ruangan...',
        options: ['Kamar tidur utama', 'Ruang bioskop keluarga', 'Ruang bengkel praktik, laboratorium, dan kantor kerja', 'Ruang makan romantis'],
        correctAnswer: 2,
        level: 'Sedang',
        explanation: 'Cahaya Cool Daylight (6500K) berwarna putih terang bersih yang merangsang fokus, konsentrasi, dan ketelitian mata kerja.'
      },
      {
        question: 'Komponen pada rangkaian lampu TL konvensional yang berfungsi memberikan lonjakan tegangan awal (voltage spike) untuk memicu gas merkuri adalah...',
        options: ['Starter dan Ballast induktif', 'Kapasitor filter', 'Kawat filamen sekering', 'Dioda penyearah'],
        correctAnswer: 0,
        level: 'Sedang',
        explanation: 'Kombinasi Starter bimetal dan Ballast elektromagnetik menghasilkan lonjakan induksi tegangan tinggi (>800V) untuk mengionisasi gas di dalam tabung.'
      },
      {
        question: 'Di bengkel mesin bubut SMK, penggunaan lampu TL dengan ballast elektromagnetik konvensional dapat membahayakan keselamatan karena memicu "Efek Stroboskopik". Mengapa hal ini berbahaya?',
        options: [
          'Lampu dapat meledak jika terkena serpihan gram besi',
          'Kedipan lampu berfrekuensi 100 Hz dapat membuat spindel mesin yang berputar cepat tampak seolah-olah diam (stasioner)',
          'Tegangan lampu dapat bocor ke rangka mesin bubut',
          'Cahaya lampu membiaskan warna besi menjadi hitam'
        ],
        correctAnswer: 1,
        level: 'Sulit',
        explanation: 'Kedipan fluktuasi 100 Hz dari AC sinkron dengan kecepatan putar mesin, menciptakan ilusi optik seolah benda berputar tampak berhenti, memicu risiko fatal tangan terjepit.'
      },
      {
        question: 'Sebuah ruang kelas berukuran 8 m × 6 m (Luas = 48 m²) memerlukan standar tingkat pencahayaan (E) = 250 Lux. Jika menggunakan lampu LED 18 Watt berflux cahaya 1.800 Lumen dengan faktor utilitas ruangan (UF) = 0,6 dan faktor pemeliharaan (MF) = 0,8, berapakah jumlah titik lampu yang dibutuhkan?',
        options: ['6 titik lampu', '10 titik lampu', '14 titik lampu', '20 titik lampu'],
        correctAnswer: 2,
        level: 'Sulit',
        explanation: 'Rumus pencahayaan: N = (E × A) / (F × UF × MF) = (250 × 48) / (1800 × 0,6 × 0,8) = 12.000 / 864 = 13,88 => Dibulatkan menjadi 14 titik lampu LED.'
      },
      {
        question: 'Dalam analisis Total Cost of Ownership (TCO), lampu LED 10W (harga Rp30.000, umur 25.000 jam) dibandingkan dengan lampu pijar 60W (harga Rp5.000, umur 1.000 jam) pada pemakaian 25.000 jam (tarif Rp1.500/kWh). Kesimpulan finansial yang tepat adalah...',
        options: [
          'Lampu pijar lebih murah karena harga belinya hanya Rp5.000',
          'Lampu LED menghemat biaya total jutaan rupiah karena menghemat 1.250 kWh listrik dan tidak perlu membeli 25 bohlam pengganti',
          'Biaya keduanya sama persis karena tarif listriknya sama',
          'Lampu pijar lebih menguntungkan untuk jangka panjang'
        ],
        correctAnswer: 1,
        level: 'Sulit',
        explanation: 'Pijar butuh 25 bohlam (Rp125.000) + listrik (60W × 25.000j / 1000 × Rp1.500 = Rp2.250.000) = Rp2.375.000. LED butuh 1 bohlam (Rp30.000) + listrik (10W × 25.000j / 1000 × Rp1.500 = Rp375.000) = Rp405.000. Hemat Rp1.970.000!'
      }
    ]
  },

  // ===== 6. K3 Listrik =====
  {
    slug: 'kuis-k3-listrik',
    title: 'Kuis: Keselamatan Kerja Listrik (K3)',
    subject: 'instalasi-penerangan',
    description: 'Uji pengetahuan K3 Listrik: APD, prosedur kerja aman, P3K sengatan listrik, LOTO, dan standar PUIL.',
    relatedMateri: 'keselamatan-kerja-listrik',
    difficulty: 'Proporsional (Mudah-Sedang-Sulit)',
    questions: [
      {
        question: 'Berapakah batas kuat arus listrik sengatan yang sudah dapat memicu gangguan fibrilasi ventrikel jantung (FATAL)?',
        options: ['1 mA', '10 mA', '50 - 100 mA', '500 mA'],
        correctAnswer: 2,
        level: 'Mudah',
        explanation: 'Arus 50-100 mA yang melintasi dada manusia sudah cukup mengacaukan irama detak jantung (fibrilasi ventrikel) yang berujung kematian dalam hitungan detik.'
      },
      {
        question: 'Kepanjangan dari prosedur keselamatan kerja industri "LOTO" adalah...',
        options: ['Lock Out Tag Out', 'Light Out Turn Off', 'Line Output Terminal On', 'Live Open Trigger Off'],
        correctAnswer: 0,
        level: 'Mudah',
        explanation: 'LOTO (Lock Out Tag Out) adalah prosedur mengunci tuas MCB/saklar utama dengan gembok fisik khusus dan memasang label peringatan agar tidak dinyalakan orang lain saat perbaikan.'
      },
      {
        question: 'Prinsip "Aturan Emas" (Golden Rule) dalam keselamatan kerja kelistrikan menyatakan bahwa...',
        options: [
          'Semua kabel listrik harus dilapisi tembaga murni',
          'Selalu anggap semua kabel bertegangan listrik aktif sampai terbukti sebaliknya melalui pengujian alat ukur/tespen',
          'Bekerja dengan tangan basah dapat meningkatkan efisiensi kontak kabel',
          'Pekerjaan listrik harus diselesaikan secepat mungkin tanpa APD'
        ],
        correctAnswer: 1,
        level: 'Mudah',
        explanation: 'Jangan pernah berasumsi kabel sudah padam tanpa memverifikasi langsung dengan tespen atau voltmeter sebelum menyentuhnya.'
      },
      {
        question: 'Buku pedoman regulasi standar nasional yang mengatur keselamatan instalasi kelistrikan di Indonesia adalah...',
        options: ['SNI 19-9001', 'PUIL (Persyaratan Umum Instalasi Listrik)', 'ISO 14001', 'OSHA 18001'],
        correctAnswer: 1,
        level: 'Mudah',
        explanation: 'PUIL (diterbitkan BSN/Kementerian ESDM) adalah kitab rujukan hukum standar keselamatan dan teknis instalasi listrik di Indonesia.'
      },
      {
        question: 'Tindakan PERTAMA yang wajib dilakukan saat melihat rekan kerja tersengat aliran listrik dan masih menempel pada kabel adalah...',
        options: [
          'Langsung memegang dan menarik tubuh korban dengan tangan telanjang',
          'Menyiramkan air ke tubuh korban agar suhu badannya dingin',
          'Segera memutuskan sumber arus listrik (matikan MCB/cabut steker) atau gunakan benda isolator kering untuk melepaskan korban',
          'Langsung memberikan napas buatan di tempat tanpa mematikan saklar'
        ],
        correctAnswer: 2,
        level: 'Sedang',
        explanation: 'Menyentuh korban yang masih bertegangan akan membuat penolong ikut tersengat. Matikan saklar sumber atau dorong korban memakai kayu/pipa plastik kering.'
      },
      {
        question: 'Fungsi utama dari pemakaian Sepatu Safety Isolasi (Dielectric Shoes) bersol karet tebal saat bekerja dengan listrik adalah...',
        options: [
          'Melindungi kaki dari kejatuhan obeng',
          'Mencegah tubuh membentuk rangkaian tertutup ke tanah (ground), sehingga arus listrik tidak dapat mengalir melalui tubuh',
          'Membuat teknisi dapat melompat lebih tinggi',
          'Mencegah sepatu kotor oleh debu proyek'
        ],
        correctAnswer: 1,
        level: 'Sedang',
        explanation: 'Sol karet memberikan tahanan isolasi ratusan MegaOhm, memutus lintasan arus listrik dari tangan yang menyentuh fasa menuju ke tanah.'
      },
      {
        question: 'Batas tegangan sentuh aman (Touch Voltage) manusia pada kondisi lingkungan kerja ruang KERING menurut standar PUIL adalah...',
        options: ['12 Volt', '25 Volt', '50 Volt', '110 Volt'],
        correctAnswer: 2,
        level: 'Sedang',
        explanation: 'Tegangan sentuh aman AC di lingkungan kering adalah maksimal 50 Volt, sedangkan di lingkungan lembap/basah diturunkan menjadi maksimal 25 Volt.'
      },
      {
        question: 'Jika korban sengatan listrik telah berhasil dievakuasi namun dalam kondisi tidak sadar dan tidak bernapas, pertolongan pertama (P3K) yang harus segera dilakukan adalah...',
        options: [
          'Memberikan minum air hangat secara perlahan',
          'Melakukan prosedur CPR (Resusitasi Jantung Paru) dengan kompresi dada dan memanggil ambulans darurat',
          'Mendudukkan korban di kursi terbuka',
          'Mengoleskan pasta gigi pada luka bakar sengatan'
        ],
        correctAnswer: 1,
        level: 'Sedang',
        explanation: 'Henti napas dan denyut nadi membutuhkan kompresi dada CPR segera untuk menjaga pasokan oksigen ke otak sembari menunggu tim medis.'
      },
      {
        question: 'Fenomena ledakan busur listrik berenergi dahsyat yang timbul akibat ionisasi udara pada hubung singkat busur di panel tegangan tinggi disebut...',
        options: ['Arc Flash / Arc Blast', 'Electrostatic Discharge', 'Ground Fault', 'Corona Effect'],
        correctAnswer: 0,
        level: 'Sedang',
        explanation: 'Arc Flash menghasilkan suhu plasma hingga 19.000°C, gelombang ledakan tekanan udara, dan radiasi panas yang mampu melelehkan logam seketika.'
      },
      {
        question: 'Mengapa perangkat ELCB/RCCB 30 mA mampu menyelamatkan nyawa manusia dari bahaya sengatan listrik sedangkan MCB 10A TIDAK dapat melindungi manusia?',
        options: [
          'Karena MCB hanya merespons tegangan DC',
          'Karena tubuh manusia memiliki resistansi sekitar 1.000 Ω, sehingga arus sengatan pada 220V hanya sekitar 220 mA. Arus ini sangat fatal bagi jantung tapi jauh di bawah ambang batas trip MCB 10A',
          'Karena ELCB dibuat dari bahan emas',
          'Karena MCB tidak memiliki kabel grounding'
        ],
        correctAnswer: 1,
        level: 'Sulit',
        explanation: 'Arus sengatan 0,22A (220 mA) sudah berakibat kematian, namun bagi MCB 10A arus tersebut dianggap beban kecil sehingga MCB tidak akan pernah trip. ELCB trip pada 30 mA (0,03A).'
      },
      {
        question: 'Menurut standar PUIL 2011, berapakah nilai tahanan pembumian (grounding resistance) maksimal yang diizinkan untuk instalasi penangkal petir dan pengaman bodi peralatan listrik?',
        options: ['Maksimal 5 Ohm', 'Maksimal 50 Ohm', 'Maksimal 100 Ohm', 'Maksimal 1.000 Ohm'],
        correctAnswer: 0,
        level: 'Sulit',
        explanation: 'Tahanan elektroda pembumian tanah wajib bernilai serendah mungkin, dengan batas maksimal 5 Ohm menurut standar PUIL agar arus gangguan segera diserap bumi.'
      },
      {
        question: 'Saat bekerja di atas tangga untuk memperbaiki kabel fitting lampu penerangan jalan, jenis tangga manakah yang WAJIB digunakan seorang teknisi listrik sesuai kaidah K3?',
        options: [
          'Tangga lipat berbahan aluminium ringan',
          'Tangga pipa besi galvanis kokoh',
          'Tangga isolasi berbahan Fiberglass non-konduktif',
          'Tangga baja berkait rantai'
        ],
        correctAnswer: 2,
        level: 'Sulit',
        explanation: 'Tangga aluminium dan besi adalah konduktor penghantar listrik. Jika menyentuh kawat bertegangan, seluruh tangga akan mengalirkan listrik ke teknisi. Wajib menggunakan tangga fiberglass isolatif.'
      }
    ]
  },

  // ===== 7. Perhitungan Instalasi =====
  {
    slug: 'kuis-perhitungan',
    title: 'Kuis: Perhitungan Daya & Biaya Listrik',
    subject: 'instalasi-penerangan',
    description: 'Belajar menghitung kebutuhan daya listrik, kapasitas pengaman MCB, faktor daya cos phi, dan tagihan listrik PLN.',
    relatedMateri: 'perhitungan-instalasi',
    difficulty: 'Proporsional (Mudah-Sedang-Sulit)',
    questions: [
      {
        question: 'Rumus dasar untuk menentukan besaran arus beban nominal (I) pada tegangan satu fasa 220V adalah...',
        options: ['I = P / V', 'I = P × V', 'I = V / P', 'I = V² / P'],
        correctAnswer: 0,
        level: 'Mudah',
        explanation: 'Kuat arus dihitung dengan membagi daya beban aktif (P dalam Watt) dengan tegangan jala-jala (V dalam Volt): I = P / V.'
      },
      {
        question: 'Perbedaan mendasar antara satuan daya semu Volt-Ampere (VA) dengan daya aktif Watt (W) adalah...',
        options: [
          'VA digunakan untuk arus DC sedangkan Watt untuk AC',
          'VA adalah kapasitas daya total yang disediakan PLN, sedangkan Watt adalah daya nyata yang dikonversi menjadi energi kerja setelah dikalikan faktor daya (cos φ)',
          '1 VA selalu sama persis dengan 10 Watt',
          'Watt tidak memiliki hubungan dengan arus listrik'
        ],
        correctAnswer: 1,
        level: 'Mudah',
        explanation: 'Hubungan daya: P (Watt) = S (VA) × cos φ. Faktor daya rumah tangga umumnya sekitar 0,85, sehingga 1.000 VA hanya menghasilkan sekitar 850 Watt daya aktif.'
      },
      {
        question: 'Satuan energi listrik yang tercantum pada piringan atau layar meteran listrik PLN sebagai dasar tagihan pembayaran adalah...',
        options: ['Joule per detik', 'Kilowatt-hour (kWh)', 'Volt-Ampere Reaktif (VAR)', 'Ampere-hour (Ah)'],
        correctAnswer: 1,
        level: 'Mudah',
        explanation: 'Tagihan listrik PLN dihitung berdasarkan kilowatt-hour (kWh), yaitu konsumsi daya dalam ribuan Watt dikalikan lama jam pemakaian.'
      },
      {
        question: 'Tegangan nominal fasa-ke-netral pada sistem instalasi listrik satu fasa standar perumahan di Indonesia adalah...',
        options: ['110 Volt', '220 Volt', '380 Volt', '400 Volt'],
        correctAnswer: 1,
        level: 'Mudah',
        explanation: 'Standar tegangan rendah satu fasa PLN Indonesia adalah 220 Volt fasa-ke-netral.'
      },
      {
        question: 'Sebuah grup penerangan memiliki total daya lampu sebesar 440 Watt pada tegangan 220 Volt. Berapakah arus beban nominalnya dan kapasitas MCB standar yang dipilih?',
        options: [
          'Arus 1A, dipilih MCB 1A',
          'Arus 2A, dipilih MCB 4A atau 6A',
          'Arus 4A, dipilih MCB 2A',
          'Arus 10A, dipilih MCB 16A'
        ],
        correctAnswer: 1,
        level: 'Sedang',
        explanation: 'I = P / V = 440 / 220 = 2 Ampere. MCB dipilih satu tingkat di atas arus nominal (MCB 4A atau 6A) untuk menghindari trip palsu saat lonjakan arus awal lampu menyala.'
      },
      {
        question: 'Sebuah setrika listrik 350 Watt dan TV LED 50 Watt dinyalakan bersamaan selama 5 jam setiap hari selama 30 hari. Jika tarif listrik Rp1.500 per kWh, berapakah biaya listrik per bulan?',
        options: ['Rp 30.000', 'Rp 60.000', 'Rp 90.000', 'Rp 120.000'],
        correctAnswer: 2,
        level: 'Sedang',
        explanation: 'Total daya = 400W. Konsumsi kWh = 400W × 5 jam × 30 hari / 1.000 = 60 kWh/bulan. Biaya = 60 kWh × Rp1.500 = Rp90.000/bulan.'
      },
      {
        question: 'Suatu rumah berlangganan listrik PLN daya 2.200 VA. Jika faktor daya instalasi cos φ = 0,85, berapakah daya aktif maksimal (Watt) yang benar-benar dapat digunakan serentak?',
        options: ['1.500 Watt', '1.870 Watt', '2.200 Watt', '2.588 Watt'],
        correctAnswer: 1,
        level: 'Sedang',
        explanation: 'Daya aktif P = S × cos φ = 2.200 VA × 0,85 = 1.870 Watt. Jika beban aktif melebihi 1.870 Watt, MCB meteran PLN akan trip overload.'
      },
      {
        question: 'AC 1 PK (daya listrik 800 Watt) dinyalakan rata-rata 10 jam per hari. Berapa perkiraan energi listrik yang dikonsumsi AC tersebut dalam satu bulan (30 hari)?',
        options: ['80 kWh', '160 kWh', '240 kWh', '320 kWh'],
        correctAnswer: 2,
        level: 'Sedang',
        explanation: 'Konsumsi = Daya (kW) × Jam × Hari = (800 / 1000) × 10 × 30 = 0,8 × 300 = 240 kWh per bulan.'
      },
      {
        question: 'Dalam merancang instalasi rumah tinggal, total daya terpasang dikalikan dengan "Faktor Kebutuhan / Diversitas" (misal 0,7 - 0,8). Tujuan perhitungan ini adalah...',
        options: [
          'Agar instalasi menggunakan kabel berukuran paling kecil',
          'Karena secara realistis tidak semua peralatan listrik dinyalakan secara bersamaan dalam satu waktu puncak',
          'Untuk menghindari pembayaran pajak listrik PLN',
          'Agar MCB tidak perlu dipasang di panel'
        ],
        correctAnswer: 1,
        level: 'Sedang',
        explanation: 'Faktor diversitas memperhitungkan pola penggunaan realistis, di mana setrika, pompa air, dan oven microwave jarang beroperasi pada detik yang sama.'
      },
      {
        question: 'Sebuah rumah bertingkat memiliki total beban peralatan 4.000 Watt dengan faktor daya rata-rata cos φ = 0,8. Jika faktor diversitas beban adalah 0,85, tentukan pilihan daya kontrak PLN (VA) dan kapasitas rating MCB pembatas PLN yang tepat!',
        options: [
          'PLN 2.200 VA, MCB 10A',
          'PLN 3.500 VA, MCB 16A',
          'PLN 5.500 VA, MCB 25A',
          'PLN 7.700 VA, MCB 35A'
        ],
        correctAnswer: 2,
        level: 'Sulit',
        explanation: 'Beban serempak = 4.000W × 0,85 = 3.400 Watt. Daya semu S = P / cos φ = 3.400 / 0,8 = 4.250 VA. Pilihan daya kontrak standar PLN di atasnya adalah 5.500 VA. Rating MCB pembatas PLN = S / V = 5.500 / 220 = 25 Ampere.'
      },
      {
        question: 'Pada sistem instalasi 3-fasa 380V/220V, pembagian beban pada fasa R = 30A, fasa S = 28A, dan fasa T = 10A. Analisis dampak ketidakseimbangan beban yang parah ini terhadap kawat Netral adalah...',
        options: [
          'Kawat Netral tidak akan dialiri arus sama sekali',
          'Akan timbul arus balik netral yang sangat besar dan memicu pemanasan kawat netral serta pergeseran titik netral (floating neutral)',
          'Tegangan pada fasa T akan melonjak menjadi 10.000 Volt',
          'MCB fasa R akan berubah menjadi DC'
        ],
        correctAnswer: 1,
        level: 'Sulit',
        explanation: 'Pada sistem seimbang sefasa, arus netral saling meniadakan (In = 0). Namun ketidakseimbangan beban drastis mengalirkan arus residu vektor besar ke kawat netral yang dapat membakar kabel netral.'
      },
      {
        question: 'Sebuah bengkel listrik memiliki beban motor dengan faktor daya rendah cos φ₁ = 0,60. Untuk memperbaiki faktor daya menjadi cos φ₂ = 0,95 tanpa mengurangi daya mekanik mesin, langkah teknis yang wajib dilakukan adalah...',
        options: [
          'Menurunkan tegangan trafo menjadi 110V',
          'Memasang bank kapasitor kompensator daya reaktif secara paralel pada busbar beban',
          'Mengganti seluruh kabel tembaga dengan kabel aluminium',
          'Memasang resistor beban seri pada setiap motor'
        ],
        correctAnswer: 1,
        level: 'Sulit',
        explanation: 'Kapasitor paralel menginjeksi daya reaktif kapasitif (VAR) yang menetralkan daya reaktif induktif dari kumparan motor, sehingga faktor daya naik mendekati 1 dan arus saluran turun drastis.'
      }
    ]
  },

  // ===== 8. Dasar Elektronika =====
  {
    slug: 'kuis-dasar-elektronika',
    title: 'Kuis: Dasar-Dasar Elektronika & Komponen',
    subject: 'elektronika-dasar',
    description: 'Uji pemahamanmu tentang komponen pasif, komponen aktif, kode warna resistor, semikonduktor, catu daya, sensor, dan relay kontrol.',
    relatedMateri: 'dasar-elektronika',
    difficulty: 'Proporsional (Mudah-Sedang-Sulit)',
    questions: [
      {
        question: 'Manakah di bawah ini yang merupakan kelompok komponen elektronika PASIF?',
        options: [
          'Dioda, Transistor, dan IC',
          'Resistor, Kapasitor, dan Induktor',
          'LED, MOSFET, dan Op-Amp',
          'SCR, Triac, dan Diac'
        ],
        correctAnswer: 1,
        level: 'Mudah',
        explanation: 'Resistor, Kapasitor, dan Induktor adalah komponen pasif karena tidak memerlukan sumber daya eksternal untuk beroperasi dan tidak dapat memperkuat sinyal listrik.'
      },
      {
        question: 'Sebuah resistor memiliki 4 gelang warna: Cokelat, Hitam, Merah, dan Emas. Berapakah nilai hambatannya?',
        options: ['100 Ω ±5%', '1.000 Ω (1 kΩ) ±5%', '10.000 Ω (10 kΩ) ±5%', '100 kΩ ±5%'],
        correctAnswer: 1,
        level: 'Mudah',
        explanation: 'Cokelat (1), Hitam (0), Merah (pengali 10² = 100), Emas (toleransi ±5%). Nilai = 10 × 100 = 1.000 Ω = 1 kΩ ±5%.'
      },
      {
        question: 'Kapasitor jenis apa yang memiliki polaritas kutub positif (+) dan negatif (-) serta TIDAK BOLEH dipasang terbalik?',
        options: ['Kapasitor Keramik', 'Kapasitor Mylar', 'Kapasitor Elektrolit (Elco)', 'Kapasitor Mika'],
        correctAnswer: 2,
        level: 'Mudah',
        explanation: 'Kapasitor Elektrolit (Elco) dan Tantalum adalah komponen polar. Pemasangan terbalik pada tegangan DC dapat memicu panas berlebih dan meledak.'
      },
      {
        question: 'Sifat konduksi utama dari komponen Dioda Semikonduktor sambungan P-N adalah...',
        options: [
          'Menyimpan muatan listrik dalam medan magnet permanen',
          'Mengalirkan arus listrik hanya ke satu arah pada kondisi Bias Maju (Forward Bias)',
          'Menaikkan frekuensi arus listrik bolak-balik',
          'Mengubah hambatan sesuai getaran mekanik'
        ],
        correctAnswer: 1,
        level: 'Mudah',
        explanation: 'Dioda hanya mengalirkan arus listrik ketika Anoda lebih positif dari Katoda (Forward Bias) dan memblokir arus saat Reverse Bias.'
      },
      {
        question: 'Tiga terminal kaki elektroda pada Transistor Bipolar (BJT) berturut-turut adalah...',
        options: [
          'Anoda, Katoda, Gate',
          'Gate, Drain, Source',
          'Basis, Kolektor, Emitter',
          'Input, Output, Ground'
        ],
        correctAnswer: 2,
        level: 'Sedang',
        explanation: 'Transistor BJT memiliki terminal Basis (pemicu arus), Kolektor (pengumpul arus utama), dan Emitter (pemancar arus).'
      },
      {
        question: 'Komponen IC regulator tegangan linear seri LM7805 menghasilkan tegangan DC output stabil sebesar...',
        options: ['+3,3 Volt', '+5 Volt', '+9 Volt', '+12 Volt'],
        correctAnswer: 1,
        level: 'Sedang',
        explanation: 'Dua digit terakhir pada seri 78xx menunjukkan nilai tegangan keluarannya: 7805 = +5V DC stabil, 7812 = +12V DC.'
      },
      {
        question: 'Pada rangkaian catu daya (Power Supply) konvensional, komponen Dioda Bridge (Kiprok) berfungsi sebagai...',
        options: [
          'Penurun level tegangan AC',
          'Penyearah gelombang penuh (Full-Wave Rectifier) dari AC ke DC berdenyut',
          'Penyaring derau frekuensi tinggi',
          'Pengatur tegangan otomatis'
        ],
        correctAnswer: 1,
        level: 'Sedang',
        explanation: 'Dioda Bridge menyearahkan kedua siklus positif dan negatif gelombang AC menjadi gelombang DC satu arah.'
      },
      {
        question: 'Bagaimana prinsip kerja perubahan hambatan pada sensor cahaya LDR (Light Dependent Resistor)?',
        options: [
          'Semakin terang intensitas cahaya, nilai hambatannya semakin kecil (turun)',
          'Semakin terang intensitas cahaya, nilai hambatannya semakin besar (naik)',
          'Hambatan selalu konstan tidak terpengaruh cahaya',
          'Hanya merespons perubahan suhu'
        ],
        correctAnswer: 0,
        level: 'Sedang',
        explanation: 'LDR terbuat dari semikonduktor CdS. Saat terkena cahaya, foton membebaskan elektron sehingga resistansi turun ke puluhan Ohm; saat gelap resistansi naik hingga MegaOhm.'
      },
      {
        question: 'Thermistor jenis NTC (Negative Temperature Coefficient) memiliki sifat resistansi...',
        options: [
          'Nilai hambatan membesar jika suhu lingkungan naik',
          'Nilai hambatan mengecil jika suhu lingkungan naik',
          'Kapasitansi membesar jika suhu turun',
          'Menghasilkan arus listrik mandiri'
        ],
        correctAnswer: 1,
        level: 'Sedang',
        explanation: 'NTC (Negative Temperature Coefficient) berarti hambatan berbanding terbalik dengan suhu: makin panas suhu, hambatannya makin mengecil.'
      },
      {
        question: 'Terminal pada Relay elektromagnetik yang dalam kondisi koil TIDAK dialiri listrik berada dalam posisi TERBUKA (terputus) disebut...',
        options: ['COM (Common)', 'NC (Normally Closed)', 'NO (Normally Open)', 'Coil (+)'],
        correctAnswer: 2,
        level: 'Sulit',
        explanation: 'Kontak NO (Normally Open) berada dalam status terputus saat koil padam, dan baru menutup/menyambungkan beban saat koil dialiri arus pemicu.'
      },
      {
        question: 'Sebuah lampu LED merah memiliki tegangan kerja maju Vf = 2,0 Volt dan arus nominal If = 20 mA (0,02 A). Jika LED tersebut akan dinyalakan dari sumber tegangan aki 12 Volt DC, berapakah nilai resistor pembatas arus (R) yang harus dipasang seri?',
        options: ['100 Ω', '220 Ω', '500 Ω (dipilih standar 560 Ω)', '1.000 Ω'],
        correctAnswer: 2,
        level: 'Sulit',
        explanation: 'Tegangan yang harus ditahan resistor: Vr = V_sumber - V_led = 12V - 2V = 10 Volt. Nilai resistor: R = Vr / If = 10V / 0,02A = 500 Ω (nilai standar E24 terdekat: 560 Ω).'
      },
      {
        question: 'Dalam rangkaian kendali transistor NPN yang difungsikan sebagai saklar pengendali koil relay, sebuah dioda dipasang paralel terbalik (reverse) melintasi koil relay. Fungsi penting dioda freewheeling/flyback ini adalah...',
        options: [
          'Mempercepat putaran arus listrik ke motor',
          'Meredam lonjakan tegangan induksi balik (GGL balik) dari koil elektromagnetik saat relay OFF agar transistor tidak rusak terbakar',
          'Menyearahkan arus DC baterai menjadi AC',
          'Mengubah warna lampu indikator relay'
        ],
        correctAnswer: 1,
        level: 'Sulit',
        explanation: 'Saat arus ke koil induktor diputus seketika, medan magnet runtuh dan menghasilkan lonjakan tegangan balik ratusan Volt. Dioda flyback menyalurkan arus sisa ini dengan aman sehingga transistor terlindungi.'
      }
    ]
  }
];
