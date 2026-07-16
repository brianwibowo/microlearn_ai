'use client';

import { useEffect, useState, useRef } from 'react';
import { usePathname } from 'next/navigation';

/**
 * CircuitTransition — Animasi overlay transisi antar halaman
 * berupa sirkuit listrik yang menyala sebelum konten baru ter-reveal.
 */
export default function CircuitTransition() {
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [phase, setPhase] = useState('idle'); // idle | wire | reveal | done
  const prevPathRef = useRef(pathname);

  useEffect(() => {
    if (pathname !== prevPathRef.current) {
      prevPathRef.current = pathname;
      setIsTransitioning(true);
      setPhase('wire');

      // Fase 1: Kabel sirkuit menyala (400ms)
      const t1 = setTimeout(() => setPhase('reveal'), 400);
      // Fase 2: Layar ter-reveal / fade out (400ms)
      const t2 = setTimeout(() => setPhase('done'), 800);
      // Fase 3: Bersihkan overlay
      const t3 = setTimeout(() => {
        setIsTransitioning(false);
        setPhase('idle');
      }, 1000);

      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
        clearTimeout(t3);
      };
    }
  }, [pathname]);

  if (!isTransitioning) return null;

  return (
    <div
      className={`circuit-transition circuit-transition--${phase}`}
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 10000,
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Latar belakang gelap */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: '#0F172A',
          opacity: phase === 'wire' ? 0.85 : phase === 'reveal' ? 0.4 : 0,
          transition: 'opacity 0.35s ease',
        }}
      />

      {/* SVG Animasi Sirkuit */}
      <svg
        viewBox="0 0 800 200"
        width="60%"
        height="auto"
        style={{
          position: 'relative',
          zIndex: 2,
          opacity: phase === 'done' ? 0 : 1,
          transition: 'opacity 0.25s ease',
          filter: 'drop-shadow(0 0 12px #38BDF8) drop-shadow(0 0 24px rgba(56,189,248,0.4))',
        }}
      >
        {/* Jalur utama sirkuit */}
        <path
          d="M 0 100 H 200 L 250 60 L 300 140 L 350 60 L 400 100 H 550 L 600 100 H 800"
          fill="none"
          stroke="#38BDF8"
          strokeWidth="3"
          strokeLinecap="round"
          className="circuit-path-main"
          style={{
            strokeDasharray: '1200',
            strokeDashoffset: phase === 'wire' || phase === 'reveal' ? '0' : '1200',
            transition: 'stroke-dashoffset 0.4s ease-in-out',
          }}
        />

        {/* Jalur cabang atas */}
        <path
          d="M 550 100 V 40 H 700 V 100"
          fill="none"
          stroke="#FBBF24"
          strokeWidth="2"
          strokeLinecap="round"
          style={{
            strokeDasharray: '400',
            strokeDashoffset: phase === 'reveal' || phase === 'done' ? '0' : '400',
            transition: 'stroke-dashoffset 0.35s ease-in-out 0.15s',
          }}
        />

        {/* Jalur cabang bawah */}
        <path
          d="M 400 100 V 160 H 250 V 100"
          fill="none"
          stroke="#34D399"
          strokeWidth="2"
          strokeLinecap="round"
          style={{
            strokeDasharray: '400',
            strokeDashoffset: phase === 'reveal' || phase === 'done' ? '0' : '400',
            transition: 'stroke-dashoffset 0.35s ease-in-out 0.2s',
          }}
        />

        {/* Node titik sambung */}
        {[
          [200, 100], [400, 100], [550, 100], [700, 100],
          [550, 40], [700, 40],
          [250, 160], [400, 160],
        ].map(([cx, cy], i) => (
          <circle
            key={i}
            cx={cx}
            cy={cy}
            r="5"
            fill={phase === 'wire' || phase === 'reveal' ? '#F8FAFC' : '#1E293B'}
            style={{
              transition: 'fill 0.3s ease',
              filter: phase === 'reveal' ? 'drop-shadow(0 0 6px #38BDF8)' : 'none',
            }}
          />
        ))}

        {/* Arus partikel bergerak di jalur utama */}
        {(phase === 'wire' || phase === 'reveal') && (
          <circle r="4" fill="#FBBF24" style={{ filter: 'drop-shadow(0 0 8px #FBBF24)' }}>
            <animateMotion
              dur="0.6s"
              repeatCount="2"
              path="M 0 100 H 200 L 250 60 L 300 140 L 350 60 L 400 100 H 550 L 600 100 H 800"
            />
          </circle>
        )}
      </svg>
    </div>
  );
}
