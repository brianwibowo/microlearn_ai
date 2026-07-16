'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Mail, MapPin, Phone } from 'lucide-react';
import { NAV_LINKS, SITE_NAME } from '@/lib/constants';
import Logo from './Logo';

// Karakter-karakter kelistrikan, sirkuit, dan biner bertema TITL
const GLYPHS = '⚡VWAΩHzµF+-~█░▒▓01[](){}*#@';

export default function Footer() {
  const footerRef = useRef(null);
  const [randomString, setRandomString] = useState('');

  // Buat deretan karakter acak awal untuk seluruh area footer
  useEffect(() => {
    const generateString = () => {
      let str = '';
      // Dinaikkan ke 5000 karakter agar mengisi penuh tinggi seluruh footer hingga paling bawah (footer-bottom)
      for (let i = 0; i < 5000; i++) {
        str += GLYPHS.charAt(Math.floor(Math.random() * GLYPHS.length));
      }
      return str;
    };

    setRandomString(generateString());

    // Efek flicker kelistrikan: ubah sebagian kecil karakter secara acak setiap 150ms
    const interval = setInterval(() => {
      setRandomString((prev) => {
        const arr = prev.split('');
        for (let i = 0; i < 80; i++) { // Jumlah diubah menjadi 80 karena panjang string bertambah
          const idx = Math.floor(Math.random() * arr.length);
          arr[idx] = GLYPHS.charAt(Math.floor(Math.random() * GLYPHS.length));
        }
        return arr.join('');
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e) => {
    const footer = footerRef.current;
    if (!footer) return;

    const rect = footer.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Simpan posisi kursor ke variabel CSS
    footer.style.setProperty('--x', `${x}px`);
    footer.style.setProperty('--y', `${y}px`);
  };

  return (
    <footer 
      ref={footerRef}
      onMouseMove={handleMouseMove}
      className="footer" 
      style={{ 
        position: 'relative', 
        overflow: 'hidden',
        background: '#0B1329',
        color: 'var(--neutral-400)',
        paddingTop: 'var(--space-3xl)',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
      }}
    >
      {/* 1. Electric Running Spark Top Divider */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '4px', overflow: 'hidden', zIndex: 3 }} aria-hidden="true">
        {/* Neon glow backdrop */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '1.5px', background: 'linear-gradient(to right, transparent, var(--secondary), var(--primary-light), var(--secondary), transparent)', boxShadow: '0 0 8px var(--secondary)' }} />
        {/* SVG Spark Motion */}
        <svg width="100%" height="4" style={{ position: 'absolute', top: 0, left: 0 }}>
          <line x1="0" y1="1" x2="100%" y2="1" stroke="rgba(56, 189, 248, 0.2)" strokeWidth="1" />
          <circle r="3" fill="var(--accent)" style={{ filter: 'drop-shadow(0 0 6px var(--accent))' }}>
            <animateMotion dur="8s" repeatCount="indefinite" path="M-20,1 L2200,1" />
          </circle>
        </svg>
      </div>

      {/* 2. BACKGROUND GLYPHS GRID DIM (Latar belakang tulisan kelistrikan redup di seluruh footer) */}
      <div
        className="evervault-grid-dim"
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.015, // Dibuat sangat redup agar teks depan tetap terbaca dengan jelas
          fontFamily: 'monospace',
          fontSize: '11px',
          fontWeight: 'bold',
          lineHeight: '1.3',
          letterSpacing: '3px',
          color: '#FFF',
          wordBreak: 'break-all',
          pointerEvents: 'none',
          userSelect: 'none',
          padding: '24px',
          zIndex: 0,
        }}
      >
        {randomString}
      </div>

      {/* 3. BACKGROUND GLYPHS GLOW (Terang menyala hanya di bawah posisi kursor di seluruh area footer) */}
      <div
        className="evervault-grid-glow"
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.35, // Dikurangi dari 0.85 agar tidak bertabrakan dengan kontras teks putih
          fontFamily: 'monospace',
          fontSize: '11px',
          fontWeight: 'bold',
          lineHeight: '1.3',
          letterSpacing: '3px',
          color: 'var(--secondary)', // Warna cyan neon
          wordBreak: 'break-all',
          pointerEvents: 'none',
          userSelect: 'none',
          padding: '24px',
          // Masking berbentuk lingkaran mengikuti posisi kursor (--x, --y)
          maskImage: 'radial-gradient(150px circle at var(--x, 0px) var(--y, 0px), white 15%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(150px circle at var(--x, 0px) var(--y, 0px), white 15%, transparent 100%)',
          filter: 'drop-shadow(0 0 5px var(--secondary))',
          zIndex: 1,
        }}
      >
        {randomString}
      </div>

      {/* 4. LIGHTNING SHOCK SPOT (Semburan cahaya gradasi oranye/kuning listrik) */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          background: 'radial-gradient(120px circle at var(--x, 0px) var(--y, 0px), rgba(234, 179, 8, 0.12), transparent 100%)',
          zIndex: 2,
        }}
      />

      {/* 5. KONTEN UTAMA FOOTER (Z-Index di atas efek) */}
      <div className="container" style={{ position: 'relative', zIndex: 4 }}>
        <div className="footer-grid">
          <div className="footer-brand" style={{ maxWidth: '340px' }}>
            <Link href="/" className="footer-brand-logo" style={{ display: 'flex', marginBottom: '16px' }}>
              <Logo size={40} light />
            </Link>
            <p style={{ margin: 0, lineHeight: '1.8' }}>
              Platform pembelajaran digital Instalasi Penerangan Listrik untuk siswa SMK Negeri Semarang.
              Belajar kapan saja, di mana saja, dengan bantuan AI.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '9px', color: 'var(--accent)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', marginTop: '20px' }}>
              <span 
                style={{ 
                  width: '6px', 
                  height: '6px', 
                  borderRadius: '50%', 
                  backgroundColor: '#22C55E', 
                  boxShadow: '0 0 8px #22C55E',
                  display: 'inline-block'
                }} 
              />
              Grid System: 220V Active
            </div>
          </div>

          <div className="footer-column">
            <h4>Navigasi</h4>
            <ul>
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h4>Materi</h4>
            <ul>
              <li><Link href="/materi/dasar-kelistrikan">Dasar Kelistrikan</Link></li>
              <li><Link href="/materi/komponen-instalasi">Komponen Instalasi</Link></li>
              <li><Link href="/materi/instalasi-saklar-lampu">Saklar & Lampu</Link></li>
              <li><Link href="/materi/keselamatan-kerja-listrik">K3 Listrik</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Kontak</h4>
            <div className="footer-contact-item">
              <MapPin size={16} />
              <span>SMK Negeri Semarang, Jawa Tengah</span>
            </div>
            <div className="footer-contact-item">
              <Mail size={16} />
              <span>microlearn.ai@smkn-semarang.sch.id</span>
            </div>
            <div className="footer-contact-item">
              <Phone size={16} />
              <span>(024) 123-4567</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom" style={{ borderColor: 'rgba(255, 255, 255, 0.08)' }}>
          <p>&copy; {new Date().getFullYear()} {SITE_NAME}. SMK Negeri Semarang.</p>
          <div className="footer-social">
            <a href="#" aria-label="Instagram">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <a href="#" aria-label="YouTube">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
