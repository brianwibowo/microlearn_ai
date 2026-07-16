'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * GlitchText — Membungkus teks dengan efek glitch/kedip listrik
 * saat pertama kali muncul di viewport (IntersectionObserver).
 * Efek hanya dipicu sekali per-mount agar tidak mengganggu bacaan.
 * 
 * Props:
 *   - children (string): Teks yang akan di-glitch
 *   - tag (string): HTML tag yang digunakan (default: 'span')
 *   - className (string): Class tambahan
 *   - style (object): Style tambahan
 *   - duration (number): Durasi efek glitch dalam ms (default: 600)
 */
export default function GlitchText({
  children,
  tag: Tag = 'span',
  className = '',
  style = {},
  duration = 600,
}) {
  const ref = useRef(null);
  const [isGlitching, setIsGlitching] = useState(false);
  const hasTriggered = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTriggered.current) {
          hasTriggered.current = true;
          setIsGlitching(true);

          // Matikan efek glitch setelah durasi selesai
          setTimeout(() => setIsGlitching(false), duration);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [duration]);

  return (
    <Tag
      ref={ref}
      className={`glitch-text ${isGlitching ? 'glitching' : ''} ${className}`}
      style={style}
      data-text={typeof children === 'string' ? children : ''}
    >
      {children}
    </Tag>
  );
}
