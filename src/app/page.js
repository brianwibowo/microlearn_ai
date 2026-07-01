import Hero from '@/components/Hero';
import FeatureCard from '@/components/FeatureCard';
import MateriCard from '@/components/MateriCard';
import Link from 'next/link';
import { BookOpen, HelpCircle, Shield, Bot, ArrowRight } from 'lucide-react';
import { materiList } from '@/data/materi';
import ScrollReveal from '@/components/ScrollReveal';

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

  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* Fitur Unggulan Section */}
      <section className="section features-section">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <span className="section-label">Fitur Unggulan</span>
              <h2>Belajar Listrik Jadi Lebih Pintar</h2>
              <p>Fitur penunjang belajar mandiri yang lengkap dirancang khusus untuk meningkatkan pemahaman siswa SMK.</p>
            </div>
          </ScrollReveal>
          
          <div className="features-grid">
            {features.map((feature, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.15} direction="up" distance="40px">
                <FeatureCard
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  colorClass={feature.colorClass}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Materi Terpopuler Section */}
      <section className="section" style={{ backgroundColor: 'var(--neutral-50)' }}>
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <span className="section-label">Materi Populer</span>
              <h2>Modul Pembelajaran Utama</h2>
              <p>Mulai pelajari topik kelistrikan dasar dan menengah yang wajib dikuasai siswa Teknik Instalasi Listrik.</p>
            </div>
          </ScrollReveal>

          <div className="materi-grid">
            {popularMateri.map((materi, idx) => (
              <ScrollReveal key={materi.slug} delay={idx * 0.2} direction="up" distance="45px">
                <MateriCard materi={materi} />
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

      {/* Statistik Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <ScrollReveal className="stat-item" delay={0.0} direction="scale">
              <div className="stat-number">7+</div>
              <div className="stat-label">Modul Pembelajaran</div>
            </ScrollReveal>
            <ScrollReveal className="stat-item" delay={0.1} direction="scale">
              <div className="stat-number">6+</div>
              <div className="stat-label">Latihan Kuis</div>
            </ScrollReveal>
            <ScrollReveal className="stat-item" delay={0.2} direction="scale">
              <div className="stat-number">40+</div>
              <div className="stat-label">Bank Soal Listrik</div>
            </ScrollReveal>
            <ScrollReveal className="stat-item" delay={0.3} direction="scale">
              <div className="stat-number">100%</div>
              <div className="stat-label">Pendamping Belajar Mandiri</div>
            </ScrollReveal>
          </div>
        </div>
      </section>

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
