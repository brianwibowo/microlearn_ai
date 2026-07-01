# MicroLearn AI — Implementation Plan

Platform pembelajaran digital berbasis microsite untuk siswa SMK Negeri Semarang, dilengkapi chatbot AI sebagai asisten belajar 24 jam. Akan di-deploy ke **Vercel**.

---

## User Review Required

> [!IMPORTANT]
> **API Key Gemini** — Kamu perlu membuat API key gratis di [Google AI Studio](https://aistudio.google.com/). Key ini akan disimpan sebagai environment variable (`GEMINI_API_KEY`) di Vercel dan file `.env.local` untuk development.


> [!IMPORTANT]
> **Konten Materi** — Saya akan membuat **sample konten** untuk 1 mata pelajaran (Intalasi penerangan, untuk belajar listrik). Nanti kamu bisa menambah/mengganti kontennya sesuai kebutuhan kurikulum SMK.

> [!WARNING]
> **Free Tier Gemini API** memiliki limit ~1,000-1,500 request/hari dan ~10-30 RPM. Untuk skala SMK (ratusan siswa), kita perlu **token limiting per device** via localStorage + server-side rate limiting sebagai fallback.

## Open Questions

> [!IMPORTANT]
> 1. **Mata pelajaran apa saja** yang ingin ditampilkan? Saya akan default ke instalasi penerangan
> 2. **Video pembelajaran** — apakah sudah ada link YouTube yang ingin di-embed, atau saya pakai sample video edukasi? ini paling: https://youtu.be/24pLiyIWe_I?si=YKRpUuFBpix-UvSR, https://www.youtube.com/live/mhZWEgGvArk?si=Cu6n4lSqrD6J1r3x, https://www.youtube.com/live/mKAfqt3DdWA?si=HZbMH31Yk55LGrft
> 3. **Branding** — apakah sudah ada logo MicroLearn AI, atau saya buatkan logo sederhana? buatin.
> 4. **Limit token chatbot** — saya usulkan **30 pesan per hari per device**. Apakah angka ini oke?

---

## Tech Stack

| Layer | Teknologi | Alasan |
|---|---|---|
| Framework | **Next.js 15** (App Router) | SSR, API Routes, optimal untuk Vercel |
| Styling | **Vanilla CSS** + CSS Variables | Fleksibel, performa tinggi, tanpa dependency |
| Font | **Poppins** (Google Fonts) | Sesuai permintaan klien |
| AI SDK | **Vercel AI SDK** (`ai` + `@ai-sdk/google`) | Streaming built-in, hooks `useChat`, integrasi sempurna dengan Next.js |
| AI Model | **Gemini 2.0 Flash** (free tier) | Gratis, cepat, support text + multimodal |
| Icons | **Lucide React** | Icon set modern, lightweight |
| Deploy | **Vercel** | Zero-config untuk Next.js |

---

## Design System

### Filosofi Desain
Desain **warm, educational, dan premium** — bukan tampilan "AI/tech" yang dingin. Kesan yang ingin dicapai: **perpustakaan digital modern yang ramah dan mengundang**.

### Color Palette

| Token | Hex | Penggunaan |
|---|---|---|
| `--primary` | `#2563EB` | Tombol utama, link, aksen |
| `--primary-dark` | `#1D4ED8` | Hover state |
| `--primary-light` | `#DBEAFE` | Background highlight |
| `--secondary` | `#059669` | Badge, success, progress |
| `--secondary-light` | `#D1FAE5` | Background badge |
| `--accent` | `#F59E0B` | CTA, star rating, highlight |
| `--accent-light` | `#FEF3C7` | Warning background |
| `--neutral-50` | `#FAFAFA` | Page background |
| `--neutral-100` | `#F5F5F5` | Card background |
| `--neutral-200` | `#E5E5E5` | Border |
| `--neutral-700` | `#404040` | Body text |
| `--neutral-900` | `#171717` | Heading text |
| `--white` | `#FFFFFF` | Card, modal background |

### Typography (Poppins)

| Level | Size | Weight | Usage |
|---|---|---|---|
| Display | 48px / 3rem | 700 | Hero heading |
| H1 | 36px / 2.25rem | 700 | Page title |
| H2 | 28px / 1.75rem | 600 | Section title |
| H3 | 22px / 1.375rem | 600 | Card title |
| Body | 16px / 1rem | 400 | Paragraph |
| Small | 14px / 0.875rem | 400 | Caption, meta |
| Tiny | 12px / 0.75rem | 500 | Badge, label |

### Spacing & Border Radius

```
--space-xs: 4px    --space-sm: 8px    --space-md: 16px
--space-lg: 24px   --space-xl: 32px   --space-2xl: 48px   --space-3xl: 64px
--radius-sm: 8px   --radius-md: 12px  --radius-lg: 16px   --radius-xl: 24px
```

### Responsive Breakpoints

| Breakpoint | Width | Target |
|---|---|---|
| Mobile | < 640px | Smartphone |
| Tablet | 640px - 1024px | Tablet |
| Desktop | > 1024px | Laptop/Desktop |

---

## Arsitektur & Struktur Project

```
microlearn-ai/
├── public/
│   └── images/                    # Asset gambar (logo, ilustrasi)
├── src/
│   ├── app/
│   │   ├── layout.js              # Root layout (Poppins font, metadata)
│   │   ├── page.js                # Landing page / Home
│   │   ├── globals.css            # Design system + global styles
│   │   ├── materi/
│   │   │   ├── page.js            # Daftar semua materi
│   │   │   └── [slug]/
│   │   │       └── page.js        # Detail materi + video + modul
│   │   ├── kuis/
│   │   │   ├── page.js            # Daftar kuis
│   │   │   └── [slug]/
│   │   │       └── page.js        # Kuis interaktif (quiz engine)
│   │   └── api/
│   │       └── chat/
│   │           └── route.js       # API endpoint chatbot (Gemini)
│   ├── components/
│   │   ├── Navbar.jsx             # Navigation bar responsive
│   │   ├── Hero.jsx               # Hero section landing page
│   │   ├── FeatureCard.jsx        # Card fitur
│   │   ├── MateriCard.jsx         # Card materi
│   │   ├── MateriContent.jsx      # Konten detail materi
│   │   ├── VideoPlayer.jsx        # Embed video YouTube
│   │   ├── QuizEngine.jsx         # Engine kuis interaktif
│   │   ├── Chatbot.jsx            # Widget chatbot (floating)
│   │   ├── ChatMessage.jsx        # Bubble pesan chat
│   │   ├── Footer.jsx             # Footer
│   │   └── ScrollToTop.jsx        # Scroll to top button
│   ├── data/
│   │   ├── materi.js              # Data materi pelajaran
│   │   └── kuis.js                # Data soal & kuis
│   └── lib/
│       ├── chatLimit.js           # Token/usage limiter (localStorage)
│       └── constants.js           # Konstanta global
├── .env.local                     # GEMINI_API_KEY (local dev)
├── .gitignore
├── next.config.mjs
├── package.json
└── vercel.json                    # Config Vercel (jika diperlukan)
```

---

## Proposed Changes

### 1. Project Setup & Foundation

#### [NEW] Next.js Project Initialization
- Inisialisasi dengan `npx create-next-app@latest ./ --js --app --no-tailwind --eslint --src-dir --import-alias "@/*"`
- Install dependencies: `npm install ai @ai-sdk/google lucide-react`

#### [NEW] [globals.css](file:///Users/mymac/Documents/Codes/microlearn%20ai/src/app/globals.css)
Design system lengkap dengan CSS Variables:
- Reset & base styles
- Semua design tokens (colors, typography, spacing, shadows)
- Utility classes (`.container`, `.btn`, `.card`, `.badge`, dll.)
- Animasi (fade-in, slide-up, pulse)
- Responsive grid system
- Dark mode ready (optional phase 2)

#### [NEW] [layout.js](file:///Users/mymac/Documents/Codes/microlearn%20ai/src/app/layout.js)
- Import Google Fonts Poppins (400, 500, 600, 700)
- SEO metadata (title, description, Open Graph)
- Navbar + Footer persistent
- Chatbot widget persistent (floating di semua halaman)

---

### 2. Landing Page (Home)

#### [NEW] [page.js](file:///Users/mymac/Documents/Codes/microlearn%20ai/src/app/page.js)
Landing page dengan sections:

**Hero Section:**
- Headline: "Belajar Lebih Mudah dengan MicroLearn AI"
- Sub-headline yang menjelaskan platform
- CTA button "Mulai Belajar" dan "Jelajahi Materi"
- Ilustrasi/visual yang menarik (generated image)
- Gradient background yang halus

**Fitur Unggulan Section:**
- 4-6 feature cards dengan icon (Lucide)
- Materi Terstruktur, Video Pembelajaran, Kuis Interaktif, Asisten AI 24/7, Akses Fleksibel, Progress Tracking
- Hover animation (lift + shadow)

**Materi Populer Section:**
- Grid 3 kartu materi terpopuler
- Preview gambar, judul, deskripsi, badge mata pelajaran
- Link ke halaman detail

**Statistik Section:**
- Counter animasi: jumlah materi, video, soal latihan, siswa (sample data)

**CTA Section:**
- Call-to-action besar: "Siap Untuk Belajar?"
- Background gradient

---

### 3. Halaman Materi

#### [NEW] [materi/page.js](file:///Users/mymac/Documents/Codes/microlearn%20ai/src/app/materi/page.js)
- Header dengan judul & deskripsi
- Filter tabs berdasarkan mata pelajaran
- Search bar untuk mencari materi
- Grid kartu materi (responsive: 1/2/3 kolom)
- Setiap card: thumbnail, judul, mata pelajaran badge, jumlah bab, estimasi waktu baca
- Animasi stagger pada load

#### [NEW] [materi/[slug]/page.js](file:///Users/mymac/Documents/Codes/microlearn%20ai/src/app/materi/%5Bslug%5D/page.js)
- Breadcrumb navigation
- Judul materi + meta info (mata pelajaran, waktu baca)
- Konten materi (format rich text dari data)
- Sidebar navigasi bab (sticky di desktop)
- Embed video YouTube terkait
- Download modul (link PDF placeholder)
- Navigasi prev/next materi
- Tombol "Kerjakan Kuis" terkait materi

---

### 4. Halaman Kuis

#### [NEW] [kuis/page.js](file:///Users/mymac/Documents/Codes/microlearn%20ai/src/app/kuis/page.js)
- Daftar kuis tersedia, grouped by mata pelajaran
- Card: judul kuis, jumlah soal, durasi estimasi, tingkat kesulitan badge
- Filter berdasarkan mata pelajaran

#### [NEW] [kuis/[slug]/page.js](file:///Users/mymac/Documents/Codes/microlearn%20ai/src/app/kuis/%5Bslug%5D/page.js)
Quiz Engine interaktif:
- **Start screen:** Info kuis, jumlah soal, instruksi
- **Quiz mode:**
  - Progress bar (soal ke-X dari Y)
  - Soal pilihan ganda (4 opsi, A/B/C/D)
  - Highlight jawaban benar/salah setelah memilih
  - Penjelasan jawaban muncul setelah memilih
  - Tombol "Soal Berikutnya"
  - Timer per soal (opsional)
- **Result screen:**
  - Skor total + persentase
  - Rangkuman jawaban benar/salah
  - Feedback motivasi berdasarkan skor
  - Tombol "Ulangi Kuis" atau "Kembali ke Materi"
- State management via React useState/useReducer
- Animasi transisi antar soal

---

### 5. Chatbot AI (Fitur Utama)

#### [NEW] [api/chat/route.js](file:///Users/mymac/Documents/Codes/microlearn%20ai/src/app/api/chat/route.js)
API Route untuk chatbot:
- Menggunakan Vercel AI SDK (`streamText` dari `ai`)
- Model: `google("gemini-2.0-flash")` via `@ai-sdk/google`
- **System prompt** yang komprehensif:
  ```
  Kamu adalah MicroLearn AI Assistant, asisten pembelajaran virtual untuk siswa 
  SMK Negeri Semarang. Tugasmu:
  - Menjelaskan materi pelajaran dengan bahasa yang mudah dipahami
  - Memberikan contoh soal dan pembahasan
  - Menjawab pertanyaan seputar pelajaran
  - Memberikan motivasi belajar
  - Menjawab dalam Bahasa Indonesia
  - Jika pertanyaan di luar konteks pelajaran, arahkan kembali ke topik belajar
  - Berikan jawaban yang ringkas tapi lengkap
  ```
- Menerima message history untuk konteks percakapan
- Streaming response untuk UX yang responsif
- Error handling untuk rate limit (429)

#### [NEW] [components/Chatbot.jsx](file:///Users/mymac/Documents/Codes/microlearn%20ai/src/components/Chatbot.jsx)
Widget chatbot floating:

**UI Layout:**
- **Trigger button:** Bulat, pojok kanan bawah (`position: fixed`), icon chat, pulse animation, badge notification
- **Chat panel:** Panel mengambang 380px × 520px (desktop), full-screen pada mobile
- **Header:** Logo kecil + "MicroLearn AI Assistant" + tombol minimize + status online
- **Body:** Scrollable message area dengan auto-scroll ke bawah
- **Input area:** Text input + tombol kirim + indikator "sedang mengetik..."

**Fitur:**
- Animasi open/close (slide-up + fade)
- Pesan selamat datang otomatis
- Bubble chat dengan avatar (user vs AI)
- Markdown rendering pada respons AI (bold, list, code)
- Streaming text (karakter muncul bertahap)
- Loading indicator (typing dots animation)
- Tampilkan sisa kuota pesan hari ini
- Responsive: full-width pada mobile

**Implementasi:**
- Menggunakan `useChat` hook dari Vercel AI SDK
- State: `isOpen`, `messages`, `isLoading`
- Integrasi dengan `chatLimit.js` untuk cek kuota sebelum kirim

#### [NEW] [components/ChatMessage.jsx](file:///Users/mymac/Documents/Codes/microlearn%20ai/src/components/ChatMessage.jsx)
- Bubble layout: AI di kiri, user di kanan
- Avatar icon untuk AI (robot/graduation cap) dan user
- Timestamp
- Simple markdown parser (bold, italic, list, code block)

---

### 6. Token Limiting System

#### [NEW] [lib/chatLimit.js](file:///Users/mymac/Documents/Codes/microlearn%20ai/src/lib/chatLimit.js)
Sistem pembatasan penggunaan chatbot per device:

```javascript
// Struktur data di localStorage:
{
  "microlearn_chat_usage": {
    "deviceId": "uuid-v4-generated",       // ID unik per device
    "date": "2026-07-01",                  // Tanggal hari ini
    "messageCount": 15,                     // Jumlah pesan hari ini
    "totalTokensEstimate": 12000            // Estimasi total token
  }
}
```

**Fungsi-fungsi:**
| Fungsi | Deskripsi |
|---|---|
| `getDeviceId()` | Generate atau ambil device ID dari localStorage |
| `getUsageToday()` | Ambil data usage hari ini, reset jika tanggal berubah |
| `canSendMessage()` | Cek apakah masih dalam limit (return boolean) |
| `recordMessage(estimatedTokens)` | Catat penggunaan setelah kirim pesan |
| `getRemainingMessages()` | Hitung sisa pesan hari ini |
| `getUsagePercentage()` | Persentase penggunaan untuk progress bar |

**Limit default:**
- **30 pesan per hari** per device
- Auto-reset setiap pergantian hari (midnight)
- Warning UI ketika tersisa < 5 pesan
- Block + pesan informatif ketika limit tercapai

---

### 7. Data Layer (Sample Content)

#### [NEW] [data/materi.js](file:///Users/mymac/Documents/Codes/microlearn%20ai/src/data/materi.js)
Sample 6-9 materi untuk 3 mata pelajaran:

| Mata Pelajaran | Materi Sample |
|---|---|
| **Informatika** | Pengenalan Algoritma & Pemrograman, Dasar HTML & CSS, Jaringan Komputer Dasar |
| **Bahasa Inggris** | Tenses (Simple Present & Past), Reading Comprehension, Business English Basics |
| **Matematika** | Sistem Persamaan Linear, Trigonometri Dasar, Statistika & Peluang |

Setiap materi berisi:
- `slug`, `title`, `subject`, `description`
- `thumbnail` (placeholder/generated)
- `chapters[]` — array bab dengan `title` dan `content` (HTML/text)
- `videoUrl` — YouTube embed URL
- `estimatedTime` — "15 menit", "20 menit", dll
- `relatedQuiz` — slug kuis terkait

#### [NEW] [data/kuis.js](file:///Users/mymac/Documents/Codes/microlearn%20ai/src/data/kuis.js)
Sample 3-6 kuis, masing-masing 5-10 soal pilihan ganda:
- `slug`, `title`, `subject`, `difficulty`
- `questions[]` — array soal:
  - `question` — teks pertanyaan
  - `options[]` — 4 pilihan jawaban
  - `correctAnswer` — index jawaban benar
  - `explanation` — penjelasan jawaban

---

### 8. Shared Components

#### [NEW] [components/Navbar.jsx](file:///Users/mymac/Documents/Codes/microlearn%20ai/src/components/Navbar.jsx)
- Logo + nama "MicroLearn AI"
- Menu: Beranda, Materi, Kuis
- Responsive hamburger menu (mobile)
- Sticky on scroll dengan backdrop blur
- Active state indicator pada current page

#### [NEW] [components/Hero.jsx](file:///Users/mymac/Documents/Codes/microlearn%20ai/src/components/Hero.jsx)
- Layout 2 kolom (text + visual)
- Animated entrance (fade-in stagger)
- Gradient background yang halus
- Decorative shapes/blobs

#### [NEW] [components/FeatureCard.jsx](file:///Users/mymac/Documents/Codes/microlearn%20ai/src/components/FeatureCard.jsx)
- Icon (Lucide), judul, deskripsi
- Hover: lift + shadow + border color transition

#### [NEW] [components/MateriCard.jsx](file:///Users/mymac/Documents/Codes/microlearn%20ai/src/components/MateriCard.jsx)
- Thumbnail image
- Badge mata pelajaran (warna berbeda per mapel)
- Judul, deskripsi singkat
- Meta: waktu baca, jumlah bab
- Hover animation

#### [NEW] [components/VideoPlayer.jsx](file:///Users/mymac/Documents/Codes/microlearn%20ai/src/components/VideoPlayer.jsx)
- Responsive YouTube embed (16:9 ratio)
- Rounded corners, shadow
- Lazy loading

#### [NEW] [components/QuizEngine.jsx](file:///Users/mymac/Documents/Codes/microlearn%20ai/src/components/QuizEngine.jsx)
- State machine: `idle` → `playing` → `reviewing` → `finished`
- Progress bar animasi
- Jawaban highlight (hijau benar, merah salah)
- Score calculation & feedback

#### [NEW] [components/Footer.jsx](file:///Users/mymac/Documents/Codes/microlearn%20ai/src/components/Footer.jsx)
- 3 kolom: About, Quick Links, Kontak
- Logo + copyright
- Social links (placeholder)
- Responsive

---

## Alur Implementasi

Implementasi dibagi menjadi **6 fase** berurutan:

### Fase 1: Setup & Foundation
1. Inisialisasi Next.js project
2. Install semua dependencies
3. Buat `globals.css` (full design system)
4. Setup `layout.js` (font, metadata, structure)
5. Setup `.env.local` template

### Fase 2: Shared Components
6. Navbar (responsive + mobile menu)
7. Footer
8. FeatureCard, MateriCard komponen

### Fase 3: Landing Page
9. Hero section
10. Features section
11. Materi populer section
12. Statistik section
13. CTA section

### Fase 4: Halaman Konten
14. Data materi & kuis (`data/materi.js`, `data/kuis.js`)
15. Halaman daftar materi (`/materi`)
16. Halaman detail materi (`/materi/[slug]`)
17. VideoPlayer component
18. Halaman daftar kuis (`/kuis`)
19. QuizEngine + halaman kuis interaktif (`/kuis/[slug]`)

### Fase 5: Chatbot AI
20. API route chatbot (`/api/chat`)
21. Token limiting system (`chatLimit.js`)
22. Chatbot widget UI
23. ChatMessage component
24. Integrasi & testing chatbot

### Fase 6: Polish & Deploy
25. Generate ilustrasi/gambar untuk hero & thumbnails
26. Responsiveness testing di semua breakpoint
27. Animasi & micro-interactions polish
28. SEO metadata finalisasi
29. Setup Vercel environment variables
30. Deploy ke Vercel

---

## Verification Plan

### Automated Tests
```bash
npm run build          # Pastikan build berhasil tanpa error
npm run lint           # ESLint check
```

### Manual Verification
- **Responsive check:** Buka di browser dengan device emulator (Mobile, Tablet, Desktop)
- **Chatbot test:** Kirim beberapa pesan, verifikasi streaming response
- **Token limit test:** Kirim pesan hingga limit, verifikasi pesan warning dan block muncul
- **Quiz test:** Kerjakan kuis, verifikasi scoring dan feedback
- **Navigation test:** Semua link berfungsi, back/forward browser bekerja
- **Performance:** Lighthouse score check (target: 90+ Performance, 95+ Accessibility)
- **Vercel deploy:** Deploy preview, test di device asli (smartphone)
