// MicroLearn AI — Data Kuis: Instalasi Penerangan Listrik

export const kuisList = [
  {
    slug: 'kuis-dasar-kelistrikan',
    title: 'Kuis: Dasar-Dasar Kelistrikan',
    subject: 'instalasi-penerangan',
    description: 'Uji pemahamanmu tentang arus, tegangan, hambatan, Hukum Ohm, dan rangkaian seri-paralel.',
    relatedMateri: 'dasar-kelistrikan',
    difficulty: 'Mudah',
    questions: [
      {
        question: 'Apa satuan dari arus listrik?',
        options: ['Volt (V)', 'Ampere (A)', 'Ohm (Ω)', 'Watt (W)'],
        correctAnswer: 1,
        explanation: 'Arus listrik diukur dalam satuan Ampere (A), menggunakan alat ukur Amperemeter yang dipasang secara seri pada rangkaian.'
      },
      {
        question: 'Berapakah tegangan listrik standar rumah tangga di Indonesia?',
        options: ['110 Volt', '220 Volt', '380 Volt', '440 Volt'],
        correctAnswer: 1,
        explanation: 'Tegangan listrik PLN untuk rumah tangga di Indonesia adalah 220 Volt AC dengan frekuensi 50 Hz.'
      },
      {
        question: 'Hukum Ohm menyatakan bahwa V = I × R. Jika sebuah lampu memiliki hambatan 440 Ω dipasang pada tegangan 220V, berapa arus yang mengalir?',
        options: ['0,25 A', '0,5 A', '1 A', '2 A'],
        correctAnswer: 1,
        explanation: 'I = V / R = 220 / 440 = 0,5 Ampere. Ini sesuai dengan Hukum Ohm di mana arus berbanding lurus dengan tegangan dan berbanding terbalik dengan hambatan.'
      },
      {
        question: 'Pada rangkaian paralel, sifat mana yang benar?',
        options: [
          'Arus di setiap komponen sama',
          'Tegangan di setiap komponen sama',
          'Hambatan total lebih besar dari komponen terbesar',
          'Jika satu komponen putus, semua mati'
        ],
        correctAnswer: 1,
        explanation: 'Pada rangkaian paralel, tegangan di setiap komponen sama (V₁ = V₂ = V total). Sedangkan arus terbagi di setiap cabang, dan jika satu komponen putus, komponen lain tetap bekerja.'
      },
      {
        question: 'Mengapa lampu-lampu di rumah dipasang secara paralel, bukan seri?',
        options: [
          'Karena lebih murah pemasangannya',
          'Karena agar setiap lampu mendapat tegangan penuh dan bisa dinyalakan/dimatikan secara independen',
          'Karena rangkaian seri tidak bisa digunakan untuk lampu',
          'Karena rangkaian paralel menggunakan kabel lebih sedikit'
        ],
        correctAnswer: 1,
        explanation: 'Rangkaian paralel membuat setiap lampu mendapat tegangan penuh 220V dan bisa dikendalikan secara independen. Pada rangkaian seri, jika satu lampu mati, semua lampu akan ikut mati.'
      },
      {
        question: 'Rumus daya listrik yang benar adalah...',
        options: ['P = V / I', 'P = V × I', 'P = I / R', 'P = V + I'],
        correctAnswer: 1,
        explanation: 'Daya listrik (P) dihitung dengan rumus P = V × I (tegangan dikalikan arus). Satuan daya adalah Watt (W). Rumus lain: P = I²R dan P = V²/R.'
      },
      {
        question: 'Sebuah lampu 100W menyala selama 10 jam. Berapa energi listrik yang terpakai?',
        options: ['100 Wh', '1 kWh', '10 kWh', '0,1 kWh'],
        correctAnswer: 1,
        explanation: 'W = P × t = 100W × 10 jam = 1.000 Wh = 1 kWh. Inilah yang biasa disebut "1 unit listrik" pada tagihan PLN.'
      },
      {
        question: 'Alat ukur apa yang digunakan untuk mengukur tegangan dan harus dipasang secara paralel?',
        options: ['Amperemeter', 'Voltmeter', 'Ohmmeter', 'Wattmeter'],
        correctAnswer: 1,
        explanation: 'Voltmeter digunakan untuk mengukur beda potensial (tegangan) dan harus dipasang secara paralel terhadap komponen yang diukur.'
      }
    ]
  },
  {
    slug: 'kuis-komponen',
    title: 'Kuis: Komponen Instalasi Penerangan',
    subject: 'instalasi-penerangan',
    description: 'Tes pengetahuanmu tentang kabel, saklar, stop kontak, fitting, MCB, dan panel listrik.',
    relatedMateri: 'komponen-instalasi',
    difficulty: 'Sedang',
    questions: [
      {
        question: 'Kabel jenis apa yang memiliki inti tunggal dengan isolasi PVC dan harus dipasang dalam pipa conduit?',
        options: ['NYM', 'NYA', 'NYY', 'NYAF'],
        correctAnswer: 1,
        explanation: 'NYA adalah kabel inti tunggal dengan isolasi PVC tunggal. Karena hanya memiliki satu lapis isolasi, kabel ini harus dilindungi dengan pipa conduit saat instalasi.'
      },
      {
        question: 'Untuk instalasi penerangan (lampu), ukuran kabel yang direkomendasikan adalah...',
        options: ['1 mm²', '1,5 mm²', '2,5 mm²', '4 mm²'],
        correctAnswer: 1,
        explanation: 'Untuk instalasi penerangan, kabel berukuran 1,5 mm² sudah cukup dengan kemampuan hantar arus maksimum 10A. Kabel 2,5 mm² digunakan untuk stop kontak.'
      },
      {
        question: 'Warna kabel yang menunjukkan penghantar Netral (N) menurut standar PUIL adalah...',
        options: ['Merah', 'Kuning-hijau', 'Biru', 'Hitam'],
        correctAnswer: 2,
        explanation: 'Menurut standar PUIL, kabel biru digunakan untuk penghantar Netral (N). Merah/hitam/coklat untuk Fasa (L), dan kuning-hijau untuk Ground (PE).'
      },
      {
        question: 'Saklar HARUS dipasang pada kabel...',
        options: ['Netral (N)', 'Fasa (L)', 'Ground (PE)', 'Semua kabel'],
        correctAnswer: 1,
        explanation: 'Saklar SELALU dipasang pada kabel Fasa (L). Ini agar saat saklar OFF, fitting lampu tidak bertegangan sehingga aman saat mengganti lampu.'
      },
      {
        question: 'MCB berfungsi sebagai pengaman terhadap...',
        options: [
          'Kebocoran arus ke tanah',
          'Arus lebih (overload) dan hubung singkat (short circuit)',
          'Petir dan tegangan lebih',
          'Pencurian listrik'
        ],
        correctAnswer: 1,
        explanation: 'MCB (Miniature Circuit Breaker) memutus arus secara otomatis jika terjadi arus lebih (overload) atau hubung singkat (short circuit). Untuk kebocoran arus, digunakan ELCB/RCCB.'
      },
      {
        question: 'ELCB/RCCB dengan sensitifitas 30 mA wajib dipasang di...',
        options: [
          'Semua ruangan',
          'Kamar mandi dan area basah',
          'Garasi saja',
          'Halaman belakang saja'
        ],
        correctAnswer: 1,
        explanation: 'ELCB 30 mA wajib dipasang di kamar mandi dan area basah untuk melindungi penghuni dari sengatan listrik akibat kebocoran arus ke tanah.'
      },
      {
        question: 'Fitting lampu dengan ulir besar yang umum digunakan untuk lampu rumah tangga adalah tipe...',
        options: ['E14', 'E27', 'T8', 'GU10'],
        correctAnswer: 1,
        explanation: 'Fitting E27 (Edison 27mm) adalah fitting ulir besar yang paling umum digunakan untuk lampu rumah tangga di Indonesia. E14 adalah ulir kecil untuk lampu hias.'
      },
      {
        question: 'Mengapa instalasi rumah dibagi menjadi beberapa grup?',
        options: [
          'Agar kabel lebih rapi',
          'Agar jika satu grup bermasalah, grup lain tetap menyala',
          'Karena peraturan pemerintah',
          'Agar listrik lebih murah'
        ],
        correctAnswer: 1,
        explanation: 'Pembagian grup memastikan jika MCB satu grup trip (karena overload atau short circuit), grup lain tetap beroperasi. Ini juga memudahkan troubleshooting dan maintenance.'
      }
    ]
  },
  {
    slug: 'kuis-saklar-lampu',
    title: 'Kuis: Instalasi Saklar & Lampu',
    subject: 'instalasi-penerangan',
    description: 'Uji kemampuanmu tentang instalasi saklar tunggal, saklar seri, dan saklar tukar (hotel switch).',
    relatedMateri: 'instalasi-saklar-lampu',
    difficulty: 'Sedang',
    questions: [
      {
        question: 'Saklar tunggal (SPST) memiliki berapa terminal?',
        options: ['1 terminal', '2 terminal', '3 terminal', '4 terminal'],
        correctAnswer: 1,
        explanation: 'Saklar tunggal (Single Pole Single Throw) memiliki 2 terminal: satu input (dari fasa) dan satu output (menuju lampu).'
      },
      {
        question: 'Saklar tukar (hotel switch) memiliki berapa terminal?',
        options: ['2 terminal', '3 terminal', '4 terminal', '5 terminal'],
        correctAnswer: 1,
        explanation: 'Saklar tukar memiliki 3 terminal: 1 terminal Common (C) dan 2 terminal Traveler (L1 dan L2). Dua saklar tukar dihubungkan melalui kabel traveler.'
      },
      {
        question: 'Untuk mengendalikan 1 lampu dari 2 lokasi berbeda, instalasi yang digunakan adalah...',
        options: [
          '2 saklar tunggal',
          '1 saklar seri (ganda)',
          '2 saklar tukar (hotel switch)',
          '2 saklar silang'
        ],
        correctAnswer: 2,
        explanation: 'Untuk mengendalikan 1 lampu dari 2 lokasi (misalnya bawah dan atas tangga), dibutuhkan 2 saklar tukar (hotel switch) yang dihubungkan dengan kabel traveler.'
      },
      {
        question: 'Pada saklar seri (ganda), berapa terminal input (common) yang tersedia?',
        options: ['1 terminal', '2 terminal', '3 terminal', '4 terminal'],
        correctAnswer: 0,
        explanation: 'Saklar seri memiliki 1 terminal Common/input (untuk kabel fasa masuk) dan 2 terminal output (L1 dan L2), masing-masing menuju satu titik lampu.'
      },
      {
        question: 'Dalam diagram pengawatan saklar tunggal, kabel netral (N) dari sumber langsung terhubung ke...',
        options: [
          'Saklar terlebih dahulu',
          'MCB terlebih dahulu',
          'Fitting lampu langsung',
          'Ground terlebih dahulu'
        ],
        correctAnswer: 2,
        explanation: 'Kabel netral (N) langsung dari sumber ke fitting lampu tanpa melalui saklar. Hanya kabel fasa (L) yang melalui saklar untuk diputus/disambung.'
      },
      {
        question: 'Untuk mengendalikan 1 lampu dari 3 lokasi, dibutuhkan...',
        options: [
          '3 saklar tunggal',
          '3 saklar tukar',
          '2 saklar tukar + 1 saklar silang',
          '1 saklar tukar + 2 saklar silang'
        ],
        correctAnswer: 2,
        explanation: 'Untuk 3 lokasi, dibutuhkan 2 saklar tukar (di ujung-ujung) dan 1 saklar silang (cross switch) di tengah. Saklar silang memiliki 4 terminal.'
      },
      {
        question: 'Apa langkah PERTAMA yang harus dilakukan sebelum memasang instalasi saklar dan lampu?',
        options: [
          'Memasang pipa conduit',
          'Menarik kabel',
          'Memastikan MCB dalam posisi OFF',
          'Memasang fitting lampu'
        ],
        correctAnswer: 2,
        explanation: 'Keselamatan adalah prioritas utama! Selalu pastikan MCB dalam posisi OFF sebelum melakukan pekerjaan instalasi apapun, lalu verifikasi dengan tespen.'
      }
    ]
  },
  {
    slug: 'kuis-diagram',
    title: 'Kuis: Diagram Instalasi Listrik',
    subject: 'instalasi-penerangan',
    description: 'Tes pemahamanmu tentang simbol kelistrikan dan jenis-jenis diagram instalasi.',
    relatedMateri: 'diagram-instalasi',
    difficulty: 'Sedang',
    questions: [
      {
        question: 'Diagram yang menggambarkan setiap kabel secara terpisah beserta koneksinya disebut...',
        options: [
          'Diagram garis tunggal',
          'Diagram garis ganda',
          'Diagram pelaksanaan',
          'Diagram blok'
        ],
        correctAnswer: 1,
        explanation: 'Diagram garis ganda (wiring diagram) menggambarkan setiap kabel secara terpisah (fasa, netral, ground) beserta koneksi detail. Wajib digunakan saat pelaksanaan pemasangan.'
      },
      {
        question: 'Berapa ketinggian pemasangan saklar dari lantai menurut standar PUIL?',
        options: ['40 cm', '100 cm', '150 cm', '200 cm'],
        correctAnswer: 2,
        explanation: 'Menurut standar PUIL, saklar dipasang pada ketinggian 150 cm dari lantai. Stop kontak umum pada 40 cm, dan panel listrik pada 150-180 cm.'
      },
      {
        question: 'Ketinggian pemasangan stop kontak umum dari lantai adalah...',
        options: ['20 cm', '40 cm', '100 cm', '150 cm'],
        correctAnswer: 1,
        explanation: 'Stop kontak umum dipasang 40 cm dari lantai. Untuk stop kontak di atas meja dapur, ketinggian 120 cm dari lantai.'
      },
      {
        question: 'Urutan yang benar dalam perencanaan instalasi listrik adalah...',
        options: [
          'Diagram garis ganda → diagram pelaksanaan → diagram garis tunggal',
          'Diagram pelaksanaan → diagram garis tunggal → diagram garis ganda',
          'Diagram garis tunggal → diagram pelaksanaan → diagram garis ganda',
          'Diagram garis ganda → diagram garis tunggal → diagram pelaksanaan'
        ],
        correctAnswer: 2,
        explanation: 'Urutan yang benar: Diagram Garis Tunggal (gambaran umum) → Diagram Pelaksanaan (tata letak di denah) → Diagram Garis Ganda (detail pengawatan).'
      },
      {
        question: 'Diagram yang digambar pada denah ruangan dan menunjukkan posisi komponen secara nyata disebut...',
        options: [
          'Diagram garis tunggal',
          'Diagram garis ganda',
          'Diagram pelaksanaan',
          'Diagram skematik'
        ],
        correctAnswer: 2,
        explanation: 'Diagram pelaksanaan (layout drawing) digambar pada denah ruangan, menunjukkan posisi saklar, stop kontak, lampu, jalur pipa, dan panel secara aktual.'
      }
    ]
  },
  {
    slug: 'kuis-jenis-lampu',
    title: 'Kuis: Jenis-Jenis Lampu',
    subject: 'instalasi-penerangan',
    description: 'Tes pengetahuanmu tentang lampu pijar, TL, CFL, LED, dan perbandingannya.',
    relatedMateri: 'jenis-lampu',
    difficulty: 'Mudah',
    questions: [
      {
        question: 'Lampu jenis apa yang paling hemat energi saat ini?',
        options: ['Lampu pijar', 'Lampu TL (neon)', 'Lampu CFL', 'Lampu LED'],
        correctAnswer: 3,
        explanation: 'Lampu LED memiliki efikasi tertinggi (80-150 lumen/watt) dan umur terpanjang (25.000-50.000 jam), menjadikannya pilihan paling hemat energi saat ini.'
      },
      {
        question: 'Berapa efikasi (lumen/watt) lampu pijar?',
        options: ['10-17 lumen/watt', '50-100 lumen/watt', '80-150 lumen/watt', '200-300 lumen/watt'],
        correctAnswer: 0,
        explanation: 'Lampu pijar hanya memiliki efikasi 10-17 lumen/watt karena 90% energinya terbuang menjadi panas. Sangat tidak efisien dibandingkan lampu LED.'
      },
      {
        question: 'Warna cahaya "Warm White" memiliki suhu warna (color temperature) sekitar...',
        options: ['2700-3000K', '4000-4500K', '5000-6500K', '7000-8000K'],
        correctAnswer: 0,
        explanation: 'Warm White (2700-3000K) menghasilkan cahaya kuning hangat, cocok untuk kamar tidur dan ruang tamu. Semakin tinggi Kelvin, semakin putih/biru cahayanya.'
      },
      {
        question: 'Lampu TL (fluorescent) memiliki kekurangan utama yaitu...',
        options: [
          'Tidak bisa digunakan di dalam ruangan',
          'Mengandung merkuri yang berbahaya',
          'Harganya paling mahal',
          'Umurnya paling pendek'
        ],
        correctAnswer: 1,
        explanation: 'Lampu TL mengandung gas merkuri yang berbahaya bagi lingkungan dan kesehatan jika lampu pecah. Oleh karena itu, lampu TL bekas harus dibuang dengan benar.'
      },
      {
        question: 'Jika lampu LED 8W setara dengan lampu pijar 60W, berapa persen penghematan energi?',
        options: ['Sekitar 50%', 'Sekitar 65%', 'Sekitar 75%', 'Sekitar 87%'],
        correctAnswer: 3,
        explanation: 'Penghematan = (60-8)/60 × 100% = 86,7% ≈ 87%. Lampu LED menghemat hampir 87% energi dibandingkan lampu pijar untuk cahaya yang setara.'
      },
      {
        question: 'Suhu warna (color temperature) "Daylight" yang cocok untuk area kerja adalah...',
        options: ['2700K', '3000K', '4000K', '6500K'],
        correctAnswer: 3,
        explanation: 'Daylight/Cool White (5000-6500K) menghasilkan cahaya putih terang kebiruan yang cocok untuk area kerja, garasi, dan tempat yang membutuhkan pencahayaan terang.'
      }
    ]
  },
  {
    slug: 'kuis-k3-listrik',
    title: 'Kuis: Keselamatan Kerja Listrik (K3)',
    subject: 'instalasi-penerangan',
    description: 'Uji pengetahuan K3 Listrik: APD, prosedur kerja aman, P3K sengatan listrik, dan standar keselamatan.',
    relatedMateri: 'keselamatan-kerja-listrik',
    difficulty: 'Mudah',
    questions: [
      {
        question: 'Arus listrik sebesar berapa yang sudah bisa menyebabkan henti jantung (FATAL)?',
        options: ['1 mA', '10 mA', '50-100 mA', '1 A'],
        correctAnswer: 2,
        explanation: 'Arus 50-100 mA sudah bisa menyebabkan fibrilasi ventrikel (henti jantung) dan bersifat FATAL. Itulah mengapa kita harus sangat berhati-hati saat bekerja dengan listrik.'
      },
      {
        question: 'Apa yang PERTAMA harus dilakukan jika melihat korban tersengat listrik?',
        options: [
          'Langsung tarik korban menjauh',
          'Siram korban dengan air',
          'Matikan sumber listrik atau pisahkan korban dengan benda non-konduktor kering',
          'Langsung lakukan CPR'
        ],
        correctAnswer: 2,
        explanation: 'JANGAN sentuh korban yang masih terhubung sumber listrik! Pertama matikan sumber listrik (cabut steker/MCB OFF), atau gunakan benda non-konduktor kering (kayu, karet) untuk memisahkan korban.'
      },
      {
        question: 'APD (Alat Pelindung Diri) yang berfungsi mencegah arus listrik mengalir ke tanah melalui tubuh adalah...',
        options: [
          'Helm safety',
          'Kacamata safety',
          'Sepatu safety isolasi (bersol karet)',
          'Sarung tangan katun'
        ],
        correctAnswer: 2,
        explanation: 'Sepatu safety isolasi dengan sol karet mencegah arus listrik mengalir dari tubuh ke tanah, sehingga melindungi dari sengatan listrik.'
      },
      {
        question: 'Apa kepanjangan dari LOTO dalam prosedur keselamatan kerja listrik?',
        options: [
          'Lock Out Tag Out',
          'Light Out Turn Off',
          'Load Over Temperature Out',
          'Line Out Test On'
        ],
        correctAnswer: 0,
        explanation: 'LOTO (Lock Out Tag Out) adalah prosedur mengunci MCB/sumber listrik agar tidak bisa dinyalakan orang lain saat kita sedang bekerja pada instalasi tersebut.'
      },
      {
        question: '"Selalu anggap semua kabel BERTEGANGAN sampai terbukti sebaliknya" — pernyataan ini dikenal sebagai...',
        options: [
          'Hukum Murphy',
          'Prinsip kehati-hatian (Aturan Emas)',
          'Standar PUIL pasal 1',
          'Teori kelistrikan dasar'
        ],
        correctAnswer: 1,
        explanation: 'Ini adalah Aturan Emas (Golden Rule) dalam keselamatan kerja listrik. Selalu verifikasi dengan tespen sebelum menyentuh kabel apapun, meskipun MCB sudah dimatikan.'
      },
      {
        question: 'Standar nasional yang mengatur persyaratan instalasi listrik di Indonesia adalah...',
        options: ['SNI', 'PUIL', 'ISO', 'IEC'],
        correctAnswer: 1,
        explanation: 'PUIL (Persyaratan Umum Instalasi Listrik) adalah standar nasional Indonesia yang mengatur semua aspek perencanaan, pemasangan, dan pemeliharaan instalasi listrik.'
      }
    ]
  },
  {
    slug: 'kuis-perhitungan',
    title: 'Kuis: Perhitungan Daya & Biaya Listrik',
    subject: 'instalasi-penerangan',
    description: 'Tes kemampuan menghitung daya listrik, menentukan MCB, dan estimasi biaya listrik bulanan.',
    relatedMateri: 'perhitungan-instalasi',
    difficulty: 'Sulit',
    questions: [
      {
        question: 'Sebuah rumah memiliki total daya terpasang 2.500W dengan faktor kebutuhan 0,8. Berapa daya tersambung yang dibutuhkan?',
        options: ['1.500 W', '2.000 W', '2.500 W', '3.125 W'],
        correctAnswer: 1,
        explanation: 'Daya tersambung = Total daya terpasang × faktor kebutuhan = 2.500 × 0,8 = 2.000 W. Maka daya langganan PLN minimum adalah 2.200 VA.'
      },
      {
        question: 'Grup stop kontak dengan total beban 1.500W pada tegangan 220V. MCB berapa ampere yang tepat?',
        options: ['4A', '6A', '10A', '16A'],
        correctAnswer: 2,
        explanation: 'I = P/V = 1.500/220 = 6,8 A. MCB yang dipilih harus satu tingkat di atas arus beban, yaitu MCB 10A.'
      },
      {
        question: 'Apa perbedaan antara VA (Volt-Ampere) dan Watt?',
        options: [
          'VA dan Watt sama saja',
          'Watt = VA × cos φ, dimana cos φ ≈ 0,85 untuk rumah tangga',
          'VA = Watt × 2',
          'Watt selalu lebih besar dari VA'
        ],
        correctAnswer: 1,
        explanation: 'VA adalah daya semu (apparent power), sedangkan Watt adalah daya aktif (real power). Hubungannya: W = VA × cos φ. Untuk rumah tangga, cos φ ≈ 0,85.'
      },
      {
        question: 'Lampu LED total 100W menyala 10 jam/hari selama 30 hari. Jika tarif Rp 1.500/kWh, berapa biaya listriknya?',
        options: ['Rp 15.000', 'Rp 30.000', 'Rp 45.000', 'Rp 150.000'],
        correctAnswer: 2,
        explanation: 'kWh = 100W × 10 jam × 30 hari / 1000 = 30 kWh. Biaya = 30 × Rp 1.500 = Rp 45.000.'
      },
      {
        question: 'Daya langganan PLN 2.200 VA dengan cos φ = 0,85. Berapa daya aktif (Watt) yang bisa digunakan?',
        options: ['1.500 W', '1.870 W', '2.200 W', '2.588 W'],
        correctAnswer: 1,
        explanation: 'Daya aktif = VA × cos φ = 2.200 × 0,85 = 1.870 W. Ini adalah daya maksimal yang benar-benar bisa digunakan dari langganan 2.200 VA.'
      },
      {
        question: 'AC 1 PK (840W) menyala 8 jam/hari selama 30 hari. Berapa kWh per bulan?',
        options: ['100,8 kWh', '151,2 kWh', '201,6 kWh', '252 kWh'],
        correctAnswer: 2,
        explanation: 'kWh = Daya × Jam × Hari / 1000 = 840 × 8 × 30 / 1000 = 201,6 kWh. Ini belum memperhitungkan bahwa kompresor AC tidak selalu menyala penuh (tergantung suhu ruangan dan thermostat).'
      }
    ]
  }
];
