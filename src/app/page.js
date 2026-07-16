import Hero from '@/components/Hero';
import FeatureCard from '@/components/FeatureCard';
import MateriCard from '@/components/MateriCard';
import Link from 'next/link';
import { BookOpen, HelpCircle, Shield, Bot, ArrowRight, Cpu, Award, ShieldAlert, Wrench, Zap } from 'lucide-react';
import { materiList } from '@/data/materi';
import ScrollReveal from '@/components/ScrollReveal';
import ElectricComponentsShowcase from '@/components/ElectricComponentsShowcase';
import MagneticTilt from '@/components/MagneticTilt';
import GlitchText from '@/components/GlitchText';
import ParallaxSection from '@/components/ParallaxSection';
import ParallaxScrollGrid from '@/components/ParallaxScrollGrid';
import StickyScrollReveal from '@/components/StickyScrollReveal';

export default function Home() {
  // Get 3 popular materials for home page preview
  const popularMateri = materiList.slice(0, 3);

  const features = [
    {
      icon: BookOpen,
      title: 'Materi Terstruktur',
      description: 'Modul pembelajaran kelistrikan yang disesuaikan dengan kurikulum SMK dan PUIL 2011.',
      colorClass: 'blue',
    },
    {
      icon: HelpCircle,
      title: 'Kuis Interaktif',
      description: 'Latihan soal pilihan ganda lengkap dengan penilaian skor instan dan penjelasan pembahasan.',
      colorClass: 'green',
    },
    {
      icon: Bot,
      title: 'Asisten AI 24 Jam',
      description: 'Tanya jawab kesulitan materi kelistrikan, rumus, dan troubleshooting kapan saja dengan AI.',
      colorClass: 'purple',
    },
    {
      icon: Shield,
      title: 'Fokus K3 Kelistrikan',
      description: 'Modul khusus mengenai keselamatan kerja agar siswa terlatih bekerja dengan aman.',
      colorClass: 'amber',
    },
  ];

  // Buat array card items (6 buah) untuk disalurkan ke ParallaxScrollGrid
  const gridItems = [
    // 1. Materi Terstruktur
    <FeatureCard
      key="feat-materi"
      icon={features[0].icon}
      title={features[0].title}
      description={features[0].description}
      colorClass={features[0].colorClass}
    />,
    // 2. Lab Virtual Card (Custom Light Theme)
    <div key="feat-lab" className="feature-card" style={{ height: '100%' }}>
      <div className="feature-icon blue"><Cpu size={28} /></div>
      <h3>Laboratorium Virtual</h3>
      <p>Simulasikan sirkuit instalasi listrik fasa-netral secara dinamis langsung pada diagram sirkuit interaktif.</p>
      <div style={{ marginTop: '16px', background: 'var(--primary-50)', padding: '10px', borderRadius: '8px', border: '1px dashed var(--primary-light)' }}>
        <span style={{ fontSize: '10px', fontFamily: 'monospace', color: 'var(--primary)', fontWeight: 'bold' }}>⚡ VOLT: 220V | GRID: CONNECTED</span>
      </div>
    </div>,
    // 3. Kuis Interaktif
    <FeatureCard
      key="feat-kuis"
      icon={features[1].icon}
      title={features[1].title}
      description={features[1].description}
      colorClass={features[1].colorClass}
    />,
    // 4. Asisten AI
    <FeatureCard
      key="feat-ai"
      icon={features[2].icon}
      title={features[2].title}
      description={features[2].description}
      colorClass={features[2].colorClass}
    />,
    // 5. Standar PUIL 2011 Card (Custom Light Theme)
    <div key="feat-puil" className="feature-card" style={{ height: '100%' }}>
      <div className="feature-icon amber"><Award size={28} /></div>
      <h3>Standar PUIL 2011</h3>
      <p>Seluruh kurikulum dan modul pengawatan dirancang presisi sesuai regulasi Persyaratan Umum Instalasi Listrik.</p>
      <div style={{ marginTop: '16px', display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center' }}>
        <span className="badge badge-primary" style={{ fontSize: '8px' }}>SNI REGULATED</span>
        <span className="badge badge-accent" style={{ fontSize: '8px' }}>TITL FASE F</span>
      </div>
    </div>,
    // 6. Fokus K3
    <FeatureCard
      key="feat-k3"
      icon={features[3].icon}
      title={features[3].title}
      description={features[3].description}
      colorClass={features[3].colorClass}
    />,
  ];

  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* Fitur Unggulan Section */}
      <section className="section features-section" style={{ overflow: 'visible' }}>
        <div className="container">
          <ScrollReveal>
            <div className="section-header" style={{ marginBottom: '10px' }}>
              <span className="section-label">Fitur Unggulan</span>
              <h2><GlitchText tag="span">Belajar Listrik Jadi Lebih Pintar</GlitchText></h2>
              <p>Fitur penunjang belajar mandiri yang lengkap dirancang khusus untuk meningkatkan pemahaman siswa SMK.</p>
            </div>
          </ScrollReveal>
          
          {/* Aceternity-style Parallax Scroll Grid */}
          <ParallaxScrollGrid items={gridItems} />
        </div>
      </section>

      {/* Alur Belajar Section */}
      <ParallaxSection speed={-0.12} bgStyle={{ background: 'radial-gradient(ellipse at 30% 50%, rgba(30,58,138,0.4) 0%, transparent 70%), radial-gradient(ellipse at 70% 80%, rgba(14,165,233,0.15) 0%, transparent 60%)' }} style={{ backgroundColor: 'var(--neutral-900)', color: '#fff', padding: 'var(--space-4xl) 0', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="container">
          <ScrollReveal>
            <div className="section-header" style={{ marginBottom: 'var(--space-3xl)' }}>
              <span className="section-label" style={{ background: 'rgba(56,189,248,0.1)', color: 'var(--primary-light)' }}>Metode Belajar</span>
              <h2 style={{ color: '#fff' }}><GlitchText tag="span" style={{ color: '#fff' }}>Alur Belajar Mandiri TITL</GlitchText></h2>
              <p style={{ color: 'var(--neutral-400)', marginBottom: '40px' }}>Maksimalkan pemahaman teori dan praktik lapangan melalui 4 langkah mudah berikut ini.</p>
            </div>
          </ScrollReveal>

          {/* Aceternity Sticky Scroll Reveal layout */}
          <StickyScrollReveal />
        </div>
      </ParallaxSection>

      {/* Toolbox Komponen Listrik Section */}
      <ElectricComponentsShowcase />

      {/* Materi Terpopuler Section */}
      <section className="section" style={{ backgroundColor: 'var(--neutral-50)' }}>
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <span className="section-label">Materi Populer</span>
              <h2><GlitchText tag="span">Modul Pembelajaran Utama</GlitchText></h2>
              <p>Mulai pelajari topik kelistrikan dasar dan menengah yang wajib dikuasai siswa Teknik Instalasi Listrik.</p>
            </div>
          </ScrollReveal>

          <div className="materi-grid">
            {popularMateri.map((materi, idx) => (
              <ScrollReveal key={materi.slug} delay={idx * 0.2} direction="up" distance="45px">
                <MagneticTilt intensity={8} scale={1.02}>
                  <MateriCard materi={materi} />
                </MagneticTilt>
              </ScrollReveal>
            ))}
          </div>
          
          <ScrollReveal delay={0.3}>
            <div style={{ textAlign: 'center', marginTop: 'var(--space-2xl)' }}>
              <Link href="/materi" className="btn btn-secondary">
                Lihat Semua Materi
                <ArrowRight size={18} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Panduan K3 Section */}
      <section className="section" style={{ backgroundColor: 'var(--white)', padding: 'var(--space-4xl) 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px', alignItems: 'center' }}>
            <ScrollReveal direction="left" distance="50px">
              <div>
                <span className="section-label" style={{ background: 'rgba(234,179,8,0.1)', color: 'var(--accent-dark)' }}>K3 Kelistrikan</span>
                <h2 style={{ fontSize: '2.2rem', marginBottom: '20px' }}><GlitchText tag="span">Utamakan Keselamatan Kerja Listrik</GlitchText></h2>
                <p style={{ color: 'var(--neutral-600)', lineHeight: '1.7', marginBottom: '24px' }}>
                  Pekerjaan instalasi listrik membawa risiko sengatan listrik, arus pendek, hingga busur api. Sebelum memulai praktik, siswa wajib mengingat pedoman keselamatan K3 dasar kelistrikan.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <div style={{ background: 'rgba(239, 68, 68, 0.1)', color: 'var(--danger)', padding: '8px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <ShieldAlert size={20} />
                    </div>
                    <div>
                      <h5 style={{ margin: '0 0 4px 0', fontSize: 'var(--fs-base)', fontWeight: 600 }}>Zero Voltage Check (LOTO)</h5>
                      <p style={{ margin: 0, fontSize: 'var(--fs-small)', color: 'var(--neutral-500)', lineHeight: '1.5' }}>Pastikan saklar utama (MCB/NFB) dalam posisi OFF dan digembok sebelum menyentuh kabel telanjang.</p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <div style={{ background: 'rgba(14, 165, 233, 0.1)', color: 'var(--primary)', padding: '8px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Wrench size={20} />
                    </div>
                    <div>
                      <h5 style={{ margin: '0 0 4px 0', fontSize: 'var(--fs-base)', fontWeight: 600 }}>Alat Berisolasi Standar SNI</h5>
                      <p style={{ margin: 0, fontSize: 'var(--fs-small)', color: 'var(--neutral-500)', lineHeight: '1.5' }}>Gunakan obeng, tang, dan tespen yang memiliki pembungkus karet isolasi berkualitas standar SNI.</p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <div style={{ background: 'rgba(234, 179, 8, 0.1)', color: 'var(--accent-dark)', padding: '8px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Zap size={20} />
                    </div>
                    <div>
                      <h5 style={{ margin: '0 0 4px 0', fontSize: 'var(--fs-base)', fontWeight: 600 }}>Gunakan APD yang Tepat</h5>
                      <p style={{ margin: 0, fontSize: 'var(--fs-small)', color: 'var(--neutral-500)', lineHeight: '1.5' }}>Selalu kenakan sepatu bersol karet tebal (isolator), helm pelindung, dan sarung tangan tahan panas saat bekerja.</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" distance="50px">
              <div style={{ background: 'linear-gradient(135deg, #0F172A 0%, #1E3A8A 100%)', padding: '36px', borderRadius: 'var(--radius-xl)', border: '1px solid rgba(255,255,255,0.08)', boxShadow: 'var(--shadow-lg)', color: '#fff' }}>
                <h4 style={{ color: 'var(--accent)', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Zap size={20} /> Aturan Emas Keselamatan Listrik
                </h4>
                <p style={{ fontSize: 'var(--fs-small)', color: 'var(--neutral-300)', lineHeight: '1.6', marginBottom: '20px' }}>
                  "Listrik tidak memiliki warna, bau, atau suara, namun kesalahan penanganan dapat berakibat fatal. Selalu anggap setiap kawat penghantar memiliki tegangan aktif sampai terbukti tidak bertegangan oleh Tespen."
                </p>
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '20px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', fontSize: 'var(--fs-small)' }}>
                    <span style={{ color: 'var(--neutral-400)' }}>Batas Arus Berbahaya:</span>
                    <span style={{ fontWeight: 600, color: 'var(--danger)' }}>&gt; 30 mA (Arus Fibrilasi)</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', fontSize: 'var(--fs-small)' }}>
                    <span style={{ color: 'var(--neutral-400)' }}>Hambatan Tubuh Manusia:</span>
                    <span style={{ fontWeight: 600 }}>~1.000 Ω s.d 100.000 Ω</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 'var(--fs-small)' }}>
                    <span style={{ color: 'var(--neutral-400)' }}>Tegangan Sentuh Aman:</span>
                    <span style={{ fontWeight: 600, color: 'var(--secondary)' }}>&lt; 50V AC / 120V DC</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Statistik Section */}
      <ParallaxSection className="stats-section" speed={-0.1} bgStyle={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(14,165,233,0.12) 0%, transparent 70%)' }}>
        <div className="container">
          <div className="stats-grid">
            <ScrollReveal className="stat-item" delay={0.0} direction="scale">
              <div className="stat-number">7+</div>
              <div className="stat-label">Modul Pembelajaran</div>
            </ScrollReveal>
            <ScrollReveal className="stat-item" delay={0.1} direction="scale">
              <div className="stat-number">7+</div>
              <div className="stat-label">Latihan Kuis</div>
            </ScrollReveal>
            <ScrollReveal className="stat-item" delay={0.2} direction="scale">
              <div className="stat-number">45+</div>
              <div className="stat-label">Bank Soal Listrik</div>
            </ScrollReveal>
            <ScrollReveal className="stat-item" delay={0.3} direction="scale">
              <div className="stat-number">100%</div>
              <div className="stat-label">Pendamping Belajar Mandiri</div>
            </ScrollReveal>
          </div>
        </div>
      </ParallaxSection>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <ScrollReveal direction="up" distance="50px">
            <div className="cta-box">
              <h2>Siap Menguasai Instalasi Listrik?</h2>
              <p>
                Segera mulai belajar mandiri secara terstruktur. Gunakan Asisten AI jika kamu menemukan teori atau gambar rangkaian yang membingungkan.
              </p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
                <Link href="/materi" className="btn btn-accent btn-lg" style={{ background: 'var(--accent)', color: 'var(--neutral-900)' }}>
                  Mulai Belajar Sekarang
                </Link>
                <Link href="/kuis" className="btn btn-secondary btn-lg" style={{ background: 'transparent', color: '#fff', borderColor: '#fff' }}>
                  Kerjakan Kuis
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
