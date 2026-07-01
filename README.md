# MicroLearn AI ⚡

**MicroLearn AI** adalah platform microsite media pembelajaran digital interaktif mengenai **Instalasi Penerangan Listrik** yang dirancang khusus untuk siswa SMK Negeri Semarang jurusan Teknik Instalasi Tenaga Listrik (TITL). 

Platform ini memadukan materi terstruktur, kuis evaluasi interaktif, simulasi sirkuit visual, serta asisten virtual cerdas berbasis **Gemini AI** (melalui model `gemini-2.5-flash`) untuk mendampingi proses belajar mandiri siswa selama 24 jam.

---

## 🚀 Fitur Utama

1. **Simulasi Rangkaian Listrik Interaktif (Hero Section)**
   - Media interaktif visual berbasis SVG di halaman beranda yang menyimulasikan aliran elektron pada rangkaian instalasi saklar tunggal mengontrol satu lampu.
   - Panel kontrol *real-time* untuk mengubah parameter Tegangan (Voltase AC) dan nilai Hambatan (Resistor) dengan kalkulasi otomatis besaran Arus (I), Daya (P), dan efisiensi sesuai **Hukum Ohm**.

2. **Modul Materi Terstruktur & Visual SVG**
   - Menyediakan 7 modul materi kelistrikan lengkap, disesuaikan dengan standar **PUIL 2011** (Persyaratan Umum Instalasi Listrik).
   - Setiap modul dilengkapi dengan diagram pengawatan pengkabelan fasa-netral dan visualisasi instruksi keselamatan kerja (K3) berbasis file SVG murni.
   - Integrasi video simulasi edukatif dari YouTube.

3. **Mesin Kuis Interaktif (Quiz Engine)**
   - 7 Paket kuis latihan pilihan ganda adaptif untuk menguji pemahaman siswa di setiap akhir modul.
   - Dilengkapi dengan *instant feedback*, persentase skor akhir, penjelasaan pembahasan soal secara mendalam, dan lencana motivasi kelulusan.

4. **Chatbot Asisten AI Multimodal**
   - Chatbot mengalirkan tanggapan (*streaming response*) dari model **Gemini 2.5 Flash** yang telah diinstruksikan khusus untuk bertindak sebagai guru TITL.
   - **Fitur Multimodal**: Siswa dapat melampirkan gambar (misal: foto rangkaian fisik bermasalah) atau audio secara langsung ke AI.
   - **Textarea Wrapping**: Input teks dinamis yang otomatis turun ke bawah (*multi-line wrapping*) dengan pintasan tombol `Enter` untuk mengirim dan `Shift+Enter` untuk baris baru.
   - **Guard Rails**: AI akan menyaring topik dan dengan sopan mengarahkan kembali siswa jika mereka menanyakan hal di luar materi kelistrikan.

5. **Token Limiter Kuota Harian**
   - Untuk membatasi beban penggunaan API Free Tier, sistem membatasi percakapan hingga **15 pesan per device per hari** memanfaatkan penyimpanan *localStorage* yang di-reset otomatis setiap tengah malam.

---

## 🎨 Tema Warna (Electro Theme Palette)

Desain antarmuka aplikasi diselaraskan menggunakan skema warna terpadu yang merepresentasikan bidang kelistrikan/elektro:
- **Biru Tua (Deep Navy)**: `#1E3A8A` / `#172554` (Latar belakang utama/aksen kokoh)
- **Biru Muda (Electric Cyan)**: `#0EA5E9` / `#38BDF8` (Latar tombol aktif, tautan navigasi, & indikator sirkuit netral)
- **Kuning Listrik (Electric Gold)**: `#EAB308` / `#FBBF24` (Representasi muatan listrik, lampu menyala, & core logo)
- **Putih Bersih (Crisp White)**: `#FFFFFF` / `#F0F9FF` (Latar halaman modul dan kuis)

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 15+](https://nextjs.org/) (App Router & React 19)
- **Styling**: Vanilla CSS (desain adaptif, responsif, serta animasi *scroll reveal* menggunakan browser `IntersectionObserver` API)
- **AI Integrations**: [Vercel AI SDK 5.0+/7.x](https://sdk.vercel.ai/docs)
- **AI Model**: Google Gemini 2.5 Flash (`gemini-2.5-flash` via `@ai-sdk/google`)
- **Icons**: [Lucide React](https://lucide.dev/)

---

## ⚙️ Persiapan Lokal & Instalasi

### 1. Clone Project
```bash
git clone https://github.com/brianwibowo/microlearn_ai.git
cd microlearn_ai
```

### 2. Install Dependensi
```bash
npm install
```

### 3. Konfigurasi Environment Variable
Buat file bernama `.env.local` di direktori root proyek dan masukkan API Key Gemini dari [Google AI Studio](https://aistudio.google.com/):
```env
GOOGLE_GENERATIVE_AI_API_KEY=masukkan_api_key_kamu_di_sini
```

### 4. Jalankan Dev Server
```bash
npm run dev
```
Buka [http://localhost:3000](http://localhost:3000) di browser Anda untuk melihat aplikasi berjalan.

### 5. Build untuk Produksi
```bash
npm run build
```

---

## 🚀 Hosting di Vercel

1. Buat repository baru di akun GitHub Anda dan push proyek ini ke dalamnya.
2. Buka dashboard Vercel, lalu klik **Add New Project** dan impor repository GitHub Anda.
3. Di bagian **Environment Variables**, tambahkan:
   - **Key**: `GOOGLE_GENERATIVE_AI_API_KEY`
   - **Value**: *[Masukkan API Key Gemini Anda]*
4. Klik **Deploy**. Vercel akan otomatis melakukan proses *building* dan menyajikan situs web Anda dalam beberapa detik.
