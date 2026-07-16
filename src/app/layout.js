import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';
import ScrollToTop from '@/components/ScrollToTop';
import ElectricCursorTrail from '@/components/ElectricCursorTrail';
import CircuitTransition from '@/components/CircuitTransition';
import { SITE_NAME, SITE_DESCRIPTION } from '@/lib/constants';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata = {
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: ['SMK', 'Instalasi Penerangan', 'Belajar Listrik', 'AI', 'Chatbot', 'SMK Negeri Semarang'],
  authors: [{ name: 'MicroLearn AI' }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" data-scroll-behavior="smooth">
      <body>
        <Navbar />
        <main style={{ minHeight: '80vh' }}>
          {children}
        </main>
        <Footer />
        <Chatbot />
        <ScrollToTop />
        <ElectricCursorTrail />
        <CircuitTransition />
      </body>
    </html>
  );
}

