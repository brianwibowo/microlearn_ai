'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * ParallaxSection — Wrapper section yang menciptakan efek kedalaman (depth)
 * dengan menggerakkan background layer pada kecepatan berbeda dari konten.
 * 
 * Props:
 *   - speed (number): Kecepatan parallax (-1 sampai 1). 0 = diam, negatif = kebalikan (default: -0.15)
 *   - className (string): Class CSS tambahan
 *   - style (object): Style tambahan pada wrapper luar
 *   - bgStyle (object): Style untuk layer background parallax
 *   - children: Konten normal
 */
export default function ParallaxSection({
  children,
  speed = -0.15,
  className = '',
  style = {},
  bgStyle = {},
}) {
  const sectionRef = useRef(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    // Skip parallax di perangkat sentuh (mobile) demi performa
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const handleScroll = () => {
      const el = sectionRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Hanya kalkulasi jika section sedang terlihat di viewport
      if (rect.bottom > 0 && rect.top < windowHeight) {
        // Jarak dari pusat viewport ke pusat section, dinormalisasi
        const sectionCenter = rect.top + rect.height / 2;
        const viewportCenter = windowHeight / 2;
        const distance = sectionCenter - viewportCenter;

        setOffset(distance * speed);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Inisialisasi

    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <div
      ref={sectionRef}
      className={`parallax-section ${className}`}
      style={{
        position: 'relative',
        overflow: 'hidden',
        ...style,
      }}
    >
      {/* Layer background yang bergerak dengan parallax */}
      {bgStyle && Object.keys(bgStyle).length > 0 && (
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: '-60px', // Ruang ekstra agar tidak ada celah putih saat bergeser
            ...bgStyle,
            transform: `translateY(${offset}px)`,
            transition: 'transform 0.1s linear',
            zIndex: 0,
            pointerEvents: 'none',
          }}
        />
      )}
      {/* Konten utama */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        {children}
      </div>
    </div>
  );
}
