// MicroLearn AI — Global Constants

export const SITE_NAME = 'MicroLearn AI';
export const SITE_DESCRIPTION = 'Platform pembelajaran digital Instalasi Penerangan Listrik untuk siswa SMK Negeri Semarang, dilengkapi chatbot AI sebagai asisten belajar 24 jam.';
export const SITE_URL = 'https://microlearn-ai.vercel.app';

// Chat limits
export const DAILY_MESSAGE_LIMIT = 15;
export const WARNING_THRESHOLD = 5; // Show warning when remaining < this

// Subjects
export const SUBJECTS = {
  'instalasi-penerangan': { label: 'Instalasi Penerangan', color: 'instalasi' },
};

// Navigation links
export const NAV_LINKS = [
  { href: '/', label: 'Beranda' },
  { href: '/materi', label: 'Materi' },
  { href: '/kuis', label: 'Kuis' },
];
