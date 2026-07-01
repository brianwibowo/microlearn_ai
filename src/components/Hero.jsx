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
            <div className="hero-typing-wrapper">
              <Zap size={16} className="hero-typing-icon" />
              <span className="hero-typed-text">{typedText}</span>
              <span className="hero-cursor">|</span>
            </div>
            <p className="hero-description">
              Platform microlearning untuk siswa SMK Negeri Semarang — pelajari instalasi penerangan listrik
              dengan modul interaktif, kuis adaptif, dan chatbot AI yang siap bantu 24/7.
            </p>
            <div className="hero-actions">
              <Link href="/materi" className="btn btn-primary btn-lg hero-btn-glow">
                Mulai Belajar
                <ArrowRight size={20} />
              </Link>
              <Link href="/kuis" className="btn btn-secondary btn-lg">
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
            <div className="hero-visual-grid">
              {/* Main center piece — glassmorphic dashboard mockup */}
              <div className="hero-dashboard">
                <div className="hero-dashboard-header">
                  <div className="hero-dashboard-dots">
                    <span /><span /><span />
                  </div>
                  <span className="hero-dashboard-title">MicroLearn AI Dashboard</span>
                </div>
                <div className="hero-dashboard-body">
                  {/* Mini chat preview */}
                  <div className="hero-mini-chat">
                    <div className="hero-mini-msg bot">
                      <Bot size={14} />
                      <span>Halo! Mau belajar apa hari ini? ⚡</span>
                    </div>
                    <div className="hero-mini-msg user">
                      <span>Jelaskan Hukum Ohm</span>
                    </div>
                    <div className="hero-mini-msg bot">
                      <Bot size={14} />
                      <span><strong>V = I × R</strong> — Tegangan sama dengan arus dikali hambatan...</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating feature cards */}
              <div className="hero-floating-card card-1">
                <div className="hero-floating-card-icon" style={{ background: 'rgba(37,99,235,0.12)', color: 'var(--primary)' }}>
                  <BookOpen size={20} />
                </div>
                <div>
                  <div style={{ color: 'var(--neutral-900)' }}>7 Modul</div>
                  <div style={{ fontSize: '11px', color: 'var(--neutral-500)', fontWeight: 'normal' }}>Materi Lengkap</div>
                </div>
              </div>

              <div className="hero-floating-card card-2">
                <div className="hero-floating-card-icon" style={{ background: 'rgba(16,185,129,0.12)', color: 'var(--secondary)' }}>
                  <Award size={20} />
                </div>
                <div>
                  <div style={{ color: 'var(--neutral-900)' }}>Kuis Interaktif</div>
                  <div style={{ fontSize: '11px', color: 'var(--neutral-500)', fontWeight: 'normal' }}>Instant Feedback</div>
                </div>
              </div>

              <div className="hero-floating-card card-3">
                <div className="hero-floating-card-icon" style={{ background: 'rgba(124,58,237,0.12)', color: '#7C3AED' }}>
                  <Shield size={20} />
                </div>
                <div>
                  <div style={{ color: 'var(--neutral-900)' }}>K3 Listrik</div>
                  <div style={{ fontSize: '11px', color: 'var(--neutral-500)', fontWeight: 'normal' }}>PUIL 2011</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
