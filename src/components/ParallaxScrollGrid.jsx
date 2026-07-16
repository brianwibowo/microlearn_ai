'use client';

import { useState, useEffect, useRef } from 'react';
import MagneticTilt from './MagneticTilt';

/**
 * ParallaxScrollGrid - Implementasi Aceternity-style Parallax Scroll Grid
 * Menggunakan teknik LERP (Linear Interpolation) di dalam requestAnimationFrame
 * untuk menghasilkan efek pergerakan kolom yang sangat mulus, ber-inersia,
 * dan bebas jank tanpa perlu library framer-motion.
 */
export default function ParallaxScrollGrid({ items }) {
  const containerRef = useRef(null);
  
  // Koordinat scroll target dan ter-lerp
  const targetProgress = useRef(0.5);
  const currentProgress = useRef(0.5);
  const animationFrameId = useRef(null);

  // State untuk translasi kolom agar memicu render
  const [translations, setTranslations] = useState({ col1: 0, col2: 0, col3: 0 });

  useEffect(() => {
    // Lewati di perangkat layar sentuh demi kenyamanan scroll alami
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const handleScroll = () => {
      const el = containerRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Hitung posisi relative scroll container terhadap viewport
      const totalScrollArea = rect.height + windowHeight;
      const scrolledAmount = windowHeight - rect.top;

      if (scrolledAmount >= 0 && scrolledAmount <= totalScrollArea) {
        // Simpan progress target (0 s.d 1)
        targetProgress.current = scrolledAmount / totalScrollArea;
      }
    };

    const updateMotion = () => {
      // Rumus LERP: current = current + (target - current) * lerpFactor
      // lerpFactor = 0.08 memberikan efek inersia melambat yang sangat halus
      currentProgress.current += (targetProgress.current - currentProgress.current) * 0.08;

      const progress = currentProgress.current;
      
      // Hitung translasi kolom berdasarkan progress ter-lerp (clamped)
      // Kolom 1 (Kiri): Bergerak ke atas dari +120px ke -180px
      const col1 = (progress - 0.5) * -260;
      // Kolom 2 (Tengah): Bergerak ke bawah dari -100px ke +140px
      const col2 = (progress - 0.5) * 200;
      // Kolom 3 (Kanan): Bergerak ke atas dari +180px ke -300px (kecepatan tinggi)
      const col3 = (progress - 0.5) * -360;

      setTranslations({ col1, col2, col3 });

      animationFrameId.current = requestAnimationFrame(updateMotion);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    animationFrameId.current = requestAnimationFrame(updateMotion);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  // Bagi items menjadi 3 kolom secara seimbang
  const col1 = [];
  const col2 = [];
  const col3 = [];

  items.forEach((item, idx) => {
    if (idx % 3 === 0) col1.push(item);
    else if (idx % 3 === 1) col2.push(item);
    else col3.push(item);
  });

  return (
    <div
      ref={containerRef}
      className="parallax-grid-container"
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '28px',
        width: '100%',
        position: 'relative',
        padding: '100px 0',
        minHeight: '700px',
        overflow: 'hidden', // Potong luapan agar tetap di dalam section
      }}
    >
      {/* Kolom 1 (Kiri) */}
      <div
        className="parallax-col"
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '28px',
          transform: `translate3d(0, ${translations.col1}px, 0)`,
          willChange: 'transform',
        }}
      >
        {col1.map((item, idx) => (
          <MagneticTilt key={idx} intensity={8} scale={1.03}>
            {item}
          </MagneticTilt>
        ))}
      </div>

      {/* Kolom 2 (Tengah) */}
      <div
        className="parallax-col"
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '28px',
          transform: `translate3d(0, ${translations.col2}px, 0)`,
          willChange: 'transform',
          marginTop: '50px', // Offset awal estetika kolom tengah
        }}
      >
        {col2.map((item, idx) => (
          <MagneticTilt key={idx} intensity={8} scale={1.03}>
            {item}
          </MagneticTilt>
        ))}
      </div>

      {/* Kolom 3 (Kanan) */}
      <div
        className="parallax-col"
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '28px',
          transform: `translate3d(0, ${translations.col3}px, 0)`,
          willChange: 'transform',
        }}
      >
        {col3.map((item, idx) => (
          <MagneticTilt key={idx} intensity={8} scale={1.03}>
            {item}
          </MagneticTilt>
        ))}
      </div>

      {/* CSS untuk responsivitas layar kecil */}
      <style jsx global>{`
        @media (max-width: 1024px) {
          .parallax-grid-container {
            grid-template-columns: 1fr 1fr !important;
            min-height: auto !important;
            overflow: visible !important;
            padding: 40px 0 !important;
          }
          .parallax-col {
            transform: none !important;
            margin-top: 0 !important;
            gap: 20px !important;
          }
        }
        @media (max-width: 768px) {
          .parallax-grid-container {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
        }
      `}</style>
    </div>
  );
}
