# Spesifikasi Proyek & Panduan Klien: MicroLearn AI ⚡

Dokumen ini berisi spesifikasi teknis, arsitektur file, dan penjelasan sistem untuk **MicroLearn AI**, aplikasi asisten pembelajaran virtual (*chatbot*) khusus materi **Instalasi Penerangan Listrik** untuk siswa Kelas XI (Fase F) Teknik Instalasi Tenaga Listrik (TITL) SMK Negeri Semarang.

---

## 1. Deskripsi Sistem

**MicroLearn AI** adalah aplikasi chatbot pembelajaran virtual (*standalone*/*integrated*) yang dirancang khusus untuk membantu siswa Kelas XI TITL SMKN Semarang dalam memahami materi **Instalasi Penerangan Listrik**. Aplikasi ini bertindak sebagai asisten pintar (AI Guru) yang interaktif untuk menjelaskan teori komponen kelistrikan (saklar, stop kontak, MCB, PHB), diagram instalasi, hingga langkah pengawatan dan prinsip kerja berbagai instalasi penerangan (saklar tunggal, saklar seri, saklar tukar, dan saklar silang sesuai standar PUIL 2011).

Aplikasi ini juga dilengkapi dengan manajemen riwayat obrolan berbasis perangkat lokal (*localStorage*), pembatas kuota 15 pesan/hari untuk efisiensi API, fitur salin teks penjelasan, serta dukungan antarmuka responsif dengan skema tema terang dan gelap (*Light & Dark Theme*).

---

## 2. Tabel Tech Stack

| Teknologi / Pustaka | Peran & Detail Implementasi |
| :--- | :--- |
| **Framework Utama** | Next.js (App Router) dengan arsitektur `src/` modular |
| **AI SDK & Streaming** | Vercel AI SDK (`ai` & `@ai-sdk/react`) untuk respons teks mengalir (*streaming*) |
| **Model AI** | Google Gemini 2.5 Flash via `@ai-sdk/google` (Mendukung input teks & gambar/multimodal) |
| **Bahasa Pemrograman**| JavaScript (ES6+) |
| **Styling & Desain** | Vanilla CSS (Sistem desain kustom responsif, transisi animasi halus, & dukungan Light/Dark Theme) |
| **Tipografi** | Google Font **Poppins** (diintegrasikan melalui Next.js Font Optimization) |
| **Ikon UI** | Lucide React |
| **Markdown Parser** | React Markdown (merender penjelasan AI berupa rumus, daftar langkah, & kutipan tip secara rapi) |
| **Penyimpanan Lokal** | Browser *localStorage* (untuk riwayat *threads* obrolan, status aktif, ID perangkat, & pembatas kuota harian) |
| **Deployment Target** | Vercel Cloud Platform (terhubung dengan GitHub CI/CD & kustom domain `microlearn-ai.vercel.app`) |

---

## 3. Sistem Kuota & Batasan (Laporan untuk Klien)

### A. Kuota Global dari Google (Layanan Gratis)
Karena menggunakan layanan gratis dari Google AI Studio, terdapat batasan kapasitas akses dari server Google:
- **Batasan per Menit (RPM)**: Maksimal **15 pertanyaan per menit** (berlaku kumulatif untuk seluruh pengguna website secara bersamaan).
- **Batasan per Hari (RPD)**: Maksimal **1.500 pertanyaan per hari** (berlaku kumulatif untuk seluruh pengguna website).

### B. Batasan per Siswa (Batas Keamanan & Keadilan)
Untuk mengantisipasi agar kuota harian dari Google tidak dihabiskan oleh segelintir siswa yang melakukan spam chat, sistem dilengkapi pengaman internal:
- **Batas Per Perangkat**: Maksimal **15 pesan per siswa (per perangkat) dalam sehari**.
- **Cara Kerja**: Sistem otomatis menghitung mundur sisa kuota chat di bagian bawah kolom chat siswa. Angka kuota akan otomatis kembali penuh (reset ke 15) setiap tengah malam (pukul 00.00).
- **Dampak Keadilan**: Dengan batas 15 pesan per device, kuota harian gratis dari Google (1.500 pesan) dapat dibagi adil hingga **100 siswa aktif berbeda setiap harinya** tanpa perlu khawatir server mati atau menolak permintaan.

### C. Penanganan Kendala (Error Handling)
Jika batas menit sempat terlampaui (misal: 20 siswa mengirim pesan bersamaan di detik yang sama), chatbot tidak akan *crash*. Chatbot akan memunculkan pesan pemberitahuan yang sopan:
> *"Kuota API AI sedang habis. Silakan coba lagi dalam beberapa menit."*
Siswa cukup menunggu 1 menit agar kuota otomatis ter-reset kembali oleh Google.

---

## 4. Struktur Folder & Arsitektur File (MicroLearn AI)

```text
microlearn-ai/
├── .env.local                    # Menyimpan API Key (Masukkan ke .gitignore!)
├── .gitignore
├── package.json
├── jsconfig.json
├── next.config.mjs
├── public/
│   ├── icon.svg                  # Logo vector jaring motor / kontak magnetik
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── layout.js             # Global layout (integrasi font Poppins)
│   │   ├── globals.css           # CSS variabel untuk Light/Dark theme & layout flex
│   │   ├── page.js               # Halaman utama (Beranda + Simulasi Sirkuit)
│   │   ├── materi/               # Folder materi belajar kelistrikan
│   │   ├── kuis/                 # Folder kuis interaktif
│   │   └── api/
│   │       └── chat/
│   │           └── route.js      # API Route untuk streamText Gemini 2.5 Flash
│   ├── components/
│   │   ├── Navbar.jsx            # Header & menu navigasi utama
│   │   ├── Footer.jsx            # Kaki halaman web
│   │   ├── Logo.jsx              # Komponen logo vector SVG MicroLearn AI
│   │   ├── Chatbot.jsx           # Panel chatbot melayang dengan tombol trigger
│   │   ├── ChatMessage.jsx       # Bubble chat (Markdown rendering, copy button, media preview)
│   │   ├── InteractiveCircuit.jsx# Simulator rangkaian listrik interaktif
│   │   └── ScrollReveal.jsx      # Pembungkus efek animasi saat scroll halaman
│   └── lib/
│       ├── chatLimit.js          # Utilitas pembatas kuota harian (localStorage)
│       └── constants.js          # Konfigurasi konstanta global (limit pesan, link nav)
```

---

## 5. Sistem Instruksi Prompt (System Instruction untuk API Route)

Untuk dipasang pada parameter `system` di file `src/app/api/chat/route.js`:

```javascript
const systemPrompt = `Kamu adalah "MicroLearn AI Assistant", asisten pembelajaran virtual sekaligus AI Guru kelistrikan interaktif untuk siswa kelas XI (Fase F) jurusan Teknik Instalasi Tenaga Listrik (TITL) di SMK Negeri Semarang.

Tugas utamamu adalah membantu siswa memahami konsep "Instalasi Penerangan Listrik".

Pedoman Tanggapan:
1. Ruang Lingkup Materi: Fokus pada materi Instalasi Penerangan Listrik Fase F. Secara spesifik, kuasai teori komponen kelistrikan (saklar tunggal, saklar seri/ganda, saklar tukar/hotel, saklar silang, stop kontak, fitting, MCB 1-Phase & 3-Phase, ELCB, panel hubung bagi (PHB), PUIL 2011, kabel NYA/NYM/NYY, K3 kelistrikan, dan perhitungan daya serta biaya listrik bulanan).

2. Gaya Penjelasan:
   - Gunakan Bahasa Indonesia yang sopan, edukatif, komunikatif, mudah dimengerti anak SMK, dan ramah.
   - Jika ditanya langkah pengawatan (wiring) atau prinsip kerja rangkaian, jelaskan secara bertahap dan terperinci (langkah demi langkah) menggunakan penomoran/list markdown.
   - Gunakan tabel markdown jika membandingkan komponen (misalnya membandingkan fungsi kabel NYA vs NYM).

3. Guardrails:
   - Jika siswa bertanya di luar materi kelistrikan atau instalasi penerangan (misalnya pelajaran umum, game, olahraga, dll.), arahkan kembali mereka dengan sopan untuk fokus belajar instalasi penerangan listrik.

4. Dukungan Multimodal:
   - Siswa dapat mengunggah gambar/foto rangkaian kabel fisik atau komponen panel. Jika mereka melampirkan gambar, analisis jalurnya atau komponennya (misal: "Berdasarkan gambar MCB yang kamu kirim...") dan berikan rekomendasi troubleshooting yang aman.`;
```
