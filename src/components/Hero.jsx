'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowRight, BookOpen, Award, Zap, Bot, CircuitBoard, Lightbulb, Shield } from 'lucide-react';

const TYPING_TEXTS = [
  'Hukum Ohm & Rangkaian Listrik',
  'Instalasi Saklar & Lampu',
  'Perhitungan Daya Listrik',
  'Keselamatan Kerja K3',
];

function useTypingEffect(texts, typingSpeed = 60, deleteSpeed = 40, pauseDelay = 2000) {
  const [displayText, setDisplayText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const mounted = useRef(false);

  useEffect(() => {
    if (mounted.current) return;
    mounted.current = true;

    let charIndex = 0;
    let currentTextIndex = 0;
    let deleting = false;
    let timeout;

    function tick() {
      const currentText = texts[currentTextIndex];

      if (!deleting) {
        charIndex++;
        setDisplayText(currentText.substring(0, charIndex));
        if (charIndex === currentText.length) {
          timeout = setTimeout(() => {
            deleting = true;
            tick();
          }, pauseDelay);
          return;
        }
        timeout = setTimeout(tick, typingSpeed);
      } else {
        charIndex--;
        setDisplayText(currentText.substring(0, charIndex));
        if (charIndex === 0) {
          deleting = false;
          currentTextIndex = (currentTextIndex + 1) % texts.length;
          timeout = setTimeout(tick, typingSpeed);
          return;
        }
        timeout = setTimeout(tick, deleteSpeed);
      }
    }

    timeout = setTimeout(tick, 600);
    return () => clearTimeout(timeout);
  }, []);

  return displayText;
}

import InteractiveCircuit from './InteractiveCircuit';

export default function Hero() {
  const typedText = useTypingEffect(TYPING_TEXTS);

  return (
    <section className="hero">
      {/* Animated circuit background lines */}
      <div className="hero-circuit-bg" aria-hidden="true">
        <svg width="100%" height="100%" viewBox="0 0 1200 700" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
          {/* Horizontal lines */}
          <line x1="0" y1="150" x2="400" y2="150" className="circuit-line" />
          <line x1="500" y1="150" x2="1200" y2="150" className="circuit-line" />
          <line x1="0" y1="350" x2="300" y2="350" className="circuit-line" />
          <line x1="400" y1="350" x2="800" y2="350" className="circuit-line" />
          <line x1="900" y1="350" x2="1200" y2="350" className="circuit-line" />
          <line x1="0" y1="550" x2="600" y2="550" className="circuit-line" />
          <line x1="700" y1="550" x2="1200" y2="550" className="circuit-line" />
          {/* Vertical lines */}
          <line x1="400" y1="150" x2="400" y2="350" className="circuit-line" />
          <line x1="800" y1="100" x2="800" y2="350" className="circuit-line" />
          <line x1="600" y1="350" x2="600" y2="550" className="circuit-line" />
          <line x1="300" y1="350" x2="300" y2="600" className="circuit-line" />
          <line x1="900" y1="350" x2="900" y2="600" className="circuit-line" />
          {/* Junction nodes */}
          <circle cx="400" cy="150" r="5" className="circuit-node" />
          <circle cx="400" cy="350" r="5" className="circuit-node" />
          <circle cx="800" cy="350" r="5" className="circuit-node" />
          <circle cx="600" cy="550" r="5" className="circuit-node" />
          <circle cx="300" cy="350" r="5" className="circuit-node" />
          <circle cx="900" cy="350" r="5" className="circuit-node" />
          {/* Animated current pulses */}
          <circle r="3" className="circuit-pulse">
            <animateMotion dur="3s" repeatCount="indefinite" path="M0,150 L400,150 L400,350 L800,350" />
          </circle>
          <circle r="3" className="circuit-pulse pulse-delay-1">
            <animateMotion dur="4s" repeatCount="indefinite" path="M800,100 L800,350 L900,350 L900,600" />
          </circle>
          <circle r="3" className="circuit-pulse pulse-delay-2">
            <animateMotion dur="3.5s" repeatCount="indefinite" path="M0,550 L600,550 L600,350 L300,350" />
          </circle>
        </svg>
      </div>

      <div className="container">
        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-label">
              <span className="hero-label-dot" />
              <span>Platform Pembelajaran AI-Powered</span>
            </div>
            <h1 className="hero-title">
              Belajar <span className="highlight">Listrik</span> Jadi
              <br />
              Lebih <span className="highlight-alt">Interaktif</span>
            </h1>
            <div className="hero-typing-wrapper" style={{ background: 'none', border: 'none', padding: '0 0 16px 0', margin: 0 }}>
              <Zap size={16} className="hero-typing-icon" style={{ color: '#FBBF24' }} />
              <span className="hero-typed-text" style={{ fontSize: '1.05rem', color: '#38BDF8', fontWeight: 600 }}>{typedText}</span>
              <span className="hero-cursor" style={{ color: '#38BDF8' }}>|</span>
            </div>
            <p className="hero-description">
              Platform microlearning untuk siswa SMK Negeri Semarang — pelajari instalasi penerangan listrik
              dengan modul interaktif, kuis adaptif, dan chatbot AI yang siap bantu 24/7.
            </p>
            <div className="hero-actions">
              <Link
                href="/materi"
                className="btn btn-primary btn-lg hero-btn-glow"
                style={{
                  background: 'linear-gradient(135deg, #0EA5E9, #1D4ED8)',
                  borderColor: '#0EA5E9',
                  color: '#FFFFFF'
                }}
              >
                Mulai Belajar
                <ArrowRight size={20} />
              </Link>
              <Link href="/kuis" className="btn btn-secondary btn-lg" style={{ background: 'rgba(255,255,255,0.06)', color: '#F8FAFC', borderColor: 'rgba(255,255,255,0.15)' }}>
                Coba Latihan Kuis
              </Link>
            </div>
            <div className="hero-stats animate-fade-in stagger-2">
              <div className="hero-stat">
                <div className="hero-stat-number">7+</div>
                <div className="hero-stat-label">Modul Materi</div>
              </div>
              <div className="hero-stat" style={{ borderLeft: '2px solid var(--neutral-200)', paddingLeft: '24px' }}>
                <div className="hero-stat-number">40+</div>
                <div className="hero-stat-label">Soal Latihan</div>
              </div>
              <div className="hero-stat" style={{ borderLeft: '2px solid var(--neutral-200)', paddingLeft: '24px' }}>
                <div className="hero-stat-number">24/7</div>
                <div className="hero-stat-label">Asisten AI</div>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-visual-grid" style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
              {/* Interactive Circuit Diagram widget */}
              <InteractiveCircuit />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
