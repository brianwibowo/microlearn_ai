'use client';

import { useRef, useState } from 'react';

/**
 * MagneticTilt — Wrapper yang memberikan efek 3D parallax tilt pada children
 * Kartu akan miring mengikuti posisi kursor saat di-hover, seolah bereaksi
 * terhadap medan magnet dari posisi kursor.
 * 
 * Props:
 *   - intensity (number): Intensitas derajat rotasi maks (default: 12)
 *   - glareEnabled (boolean): Menampilkan efek cahaya glare (default: true)
 *   - scale (number): Skala saat hover (default: 1.03)
 *   - className (string): Class tambahan
 *   - style (object): Style tambahan
 */
export default function MagneticTilt({
  children,
  intensity = 12,
  glareEnabled = true,
  scale = 1.03,
  className = '',
  style = {},
}) {
  const cardRef = useRef(null);
  const [transform, setTransform] = useState('perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)');
  const [glareStyle, setGlareStyle] = useState({ opacity: 0, background: '' });

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Hitung posisi kursor relatif terhadap pusat kartu (-1 s.d 1)
    const ratioX = (e.clientX - centerX) / (rect.width / 2);
    const ratioY = (e.clientY - centerY) / (rect.height / 2);

    // Rotasi: sumbu Y mengikuti pergerakan horizontal, sumbu X mengikuti vertikal (terbalik)
    const rotateY = ratioX * intensity;
    const rotateX = -ratioY * intensity;

    setTransform(
      `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scale},${scale},${scale})`
    );

    if (glareEnabled) {
      // Hitung posisi gradient glare mengikuti kursor
      const glareX = ((e.clientX - rect.left) / rect.width) * 100;
      const glareY = ((e.clientY - rect.top) / rect.height) * 100;
      setGlareStyle({
        opacity: 0.15,
        background: `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.35), transparent 60%)`,
      });
    }
  };

  const handleMouseLeave = () => {
    setTransform('perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)');
    setGlareStyle({ opacity: 0, background: '' });
  };

  return (
    <div
      ref={cardRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        ...style,
        transform,
        transition: 'transform 0.15s ease-out',
        transformStyle: 'preserve-3d',
        willChange: 'transform',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {children}
      {glareEnabled && (
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: 'inherit',
            pointerEvents: 'none',
            zIndex: 2,
            opacity: glareStyle.opacity,
            background: glareStyle.background,
            transition: 'opacity 0.3s ease',
          }}
        />
      )}
    </div>
  );
}
