import Link from 'next/link';
import { ArrowRight, BookOpen, Award, Sparkles, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-label">
              <span className="hero-label-dot" />
              <span>Media Pembelajaran Asisten AI 24 Jam</span>
            </div>
            <h1 className="hero-title">
              Kuasai Instalasi <br />
              <span className="highlight">Penerangan Listrik</span> <br />
              Bersama AI
            </h1>
            <p className="hero-description">
              Platform pembelajaran khusus siswa SMK Negeri Semarang jurusan Teknik Instalasi Tenaga Listrik.
              Pelajari teori, lihat video simulasi, uji kemampuan lewat kuis, dan diskusikan materi sulit dengan Asisten AI.
            </p>
            <div className="hero-actions">
              <Link href="/materi" className="btn btn-primary btn-lg">
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
                <div className="hero-stat-label">Modul Pembelajaran</div>
              </div>
              <div className="hero-stat" style={{ borderLeft: '2px solid var(--neutral-200)', paddingLeft: '24px' }}>
                <div className="hero-stat-number">40+</div>
                <div className="hero-stat-label">Soal Latihan Kuis</div>
              </div>
              <div className="hero-stat" style={{ borderLeft: '2px solid var(--neutral-200)', paddingLeft: '24px' }}>
                <div className="hero-stat-number">24/7</div>
                <div className="hero-stat-label">Pendamping AI</div>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-image-wrapper">
              {/* Using a solid high-fidelity gradient wrapper that looks premium and educational */}
              <div
                style={{
                  width: '100%',
                  height: '420px',
                  borderRadius: 'var(--radius-xl)',
                  background: 'linear-gradient(135deg, var(--primary), #7C3AED, #3B82F6)',
                  boxShadow: 'var(--shadow-xl)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: 'var(--white)',
                  padding: '32px',
                  textAlign: 'center',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Decorative background grid pattern */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 0)',
                    backgroundSize: '24px 24px',
                    pointerEvents: 'none'
                  }}
                />
                
                <div
                  style={{
                    width: '90px',
                    height: '90px',
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.2)',
                    backdropFilter: 'blur(8px)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '24px',
                    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.2)'
                  }}
                >
                  <Sparkles size={48} className="animate-float" />
                </div>
                <h3 style={{ color: 'var(--white)', fontSize: '1.75rem', marginBottom: '12px', fontWeight: '700' }}>
                  MicroLearn AI
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.9)', maxWidth: '340px', fontSize: '0.95rem', lineHeight: '1.6' }}>
                  Belajar instalasi listrik jadi lebih interaktif, menyenangkan, dan terarah dengan bimbingan kecerdasan buatan.
                </p>

                {/* Floating tags */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '24px',
                    left: '24px',
                    background: 'rgba(255,255,255,0.2)',
                    backdropFilter: 'blur(8px)',
                    padding: '8px 16px',
                    borderRadius: 'var(--radius-full)',
                    fontSize: 'var(--fs-tiny)',
                    fontWeight: 600,
                    color: 'var(--white)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  <Zap size={12} />
                  PUIL 2011 Standar
                </div>
              </div>

              {/* Floating Cards */}
              <div className="hero-floating-card card-1">
                <div className="hero-floating-card-icon" style={{ background: 'var(--primary-light)', color: 'var(--primary)' }}>
                  <BookOpen size={20} />
                </div>
                <div>
                  <div style={{ color: 'var(--neutral-900)' }}>Modul PUIL</div>
                  <div style={{ fontSize: '11px', color: 'var(--neutral-500)', fontWeight: 'normal' }}>Instalasi Penerangan</div>
                </div>
              </div>

              <div className="hero-floating-card card-2">
                <div className="hero-floating-card-icon" style={{ background: 'var(--secondary-light)', color: 'var(--secondary)' }}>
                  <Award size={20} />
                </div>
                <div>
                  <div style={{ color: 'var(--neutral-900)' }}>Kuis Interaktif</div>
                  <div style={{ fontSize: '11px', color: 'var(--neutral-500)', fontWeight: 'normal' }}>Evaluasi Belajar</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
