'use client';

import { useState, useEffect } from 'react';

export default function ElectricCursorTrail() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Jalankan partikel efek hanya di perangkat non-sentuh (desktop) demi performa
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    let activeParticles = [];
    let mouseScreenX = 0;
    let mouseScreenY = 0;
    let lastX = 0;
    let lastY = 0;
    let animationFrameId;

    const createParticle = (x, y) => {
      // Menghasilkan kombinasi warna listrik (Cyan atau Yellow Gold)
      const color = Math.random() > 0.45 ? '#38BDF8' : '#FBBF24';
      return {
        id: Math.random().toString(36).substring(2, 9),
        x, // Koordinat relatif terhadap layar (clientX)
        y, // Koordinat relatif terhadap layar (clientY)
        vx: (Math.random() - 0.5) * 3, // Kecepatan gerak horizontal
        vy: (Math.random() - 0.5) * 3 - 0.5, // Kecepatan gerak vertikal (melayang ke atas)
        color,
        size: Math.random() * 8 + 4, // Ukuran 4px - 12px
        life: 1.0, // Mulai dari 100% masa hidup
      };
    };

    const updateParticles = () => {
      activeParticles = activeParticles
        .map((p) => ({
          ...p,
          x: p.x + p.vx,
          y: p.y + p.vy,
          life: p.life - 0.05, // Berkurang ~5% setiap frame (bertahan ~20 frame)
        }))
        .filter((p) => p.life > 0);

      setParticles([...activeParticles]);
      animationFrameId = requestAnimationFrame(updateParticles);
    };

    const handleMouseMove = (e) => {
      mouseScreenX = e.clientX;
      mouseScreenY = e.clientY;

      // Hitung jarak pergerakan kursor di layar
      const distance = Math.hypot(mouseScreenX - lastX, mouseScreenY - lastY);
      
      // Jika kursor digerakkan cukup jauh (> 12px), cipratkan percikan listrik
      if (distance > 12) {
        activeParticles.push(createParticle(mouseScreenX, mouseScreenY));
        if (Math.random() > 0.5) {
          activeParticles.push(createParticle(mouseScreenX + (Math.random() - 0.5) * 10, mouseScreenY + (Math.random() - 0.5) * 10));
        }

        // Batasi jumlah partikel aktif maks 35 demi performa rendering
        if (activeParticles.length > 35) {
          activeParticles.shift();
        }

        lastX = mouseScreenX;
        lastY = mouseScreenY;
      }
    };

    const handleScroll = () => {
      // Ketika scroll bergulir, kita memercikkan partikel langsung di posisi layar mouse berada.
      activeParticles.push(createParticle(mouseScreenX, mouseScreenY));
      if (Math.random() > 0.45) {
        activeParticles.push(createParticle(mouseScreenX + (Math.random() - 0.5) * 12, mouseScreenY + (Math.random() - 0.5) * 12));
      }

      if (activeParticles.length > 35) {
        activeParticles.shift();
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll, { passive: true });
    animationFrameId = requestAnimationFrame(updateParticles);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  if (particles.length === 0) return null;

  return (
    <div 
      style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        width: '100vw', 
        height: '100vh', 
        pointerEvents: 'none', 
        zIndex: 9999, 
        overflow: 'hidden' 
      }}
    >
      {particles.map((p) => (
        <div
          key={p.id}
          style={{
            position: 'absolute',
            left: `${p.x}px`,
            top: `${p.y}px`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            borderRadius: '50%',
            backgroundColor: p.color,
            opacity: p.life,
            transform: `translate(-50%, -50%) scale(${p.life})`,
            pointerEvents: 'none',
            boxShadow: `0 0 ${p.size * 1.5}px ${p.color}, 0 0 ${p.size * 3}px ${p.color}`,
            transition: 'opacity 0.05s linear',
          }}
        />
      ))}
    </div>
  );
}
