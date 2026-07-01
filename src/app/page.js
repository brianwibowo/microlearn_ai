import Hero from '@/components/Hero';
import FeatureCard from '@/components/FeatureCard';
import MateriCard from '@/components/MateriCard';
import Link from 'next/link';
import { BookOpen, HelpCircle, Shield, Bot, ArrowRight, BookOpenCheck, Zap } from 'lucide-react';
import { materiList } from '@/data/materi';

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
          <div className="section-header">
            <span className="section-label">Fitur Unggulan</span>
            <h2>Belajar Listrik Jadi Lebih Pintar</h2>
            <p>Fitur penunjang belajar mandiri yang lengkap dirancang khusus untuk meningkatkan pemahaman siswa SMK.</p>
          </div>
          <div className="features-grid">
            {features.map((feature, idx) => (
              <FeatureCard
                key={idx}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                colorClass={feature.colorClass}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Materi Terpopuler Section */}
      <section className="section" style={{ backgroundColor: 'var(--neutral-50)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-label">Materi Populer</span>
            <h2>Modul Pembelajaran Utama</h2>
            <p>Mulai pelajari topik kelistrikan dasar dan menengah yang wajib dikuasai siswa Teknik Instalasi Listrik.</p>
          </div>
          <div className="materi-grid">
            {popularMateri.map((materi) => (
              <MateriCard key={materi.slug} materi={materi} />
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 'var(--space-2xl)' }}>
            <Link href="/materi" className="btn btn-secondary">
              Lihat Semua Materi
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Statistik Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">7+</div>
              <div className="stat-label">Modul Pembelajaran</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">6+</div>
              <div className="stat-label">Latihan Kuis</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">40+</div>
              <div className="stat-label">Bank Soal Listrik</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">Pendamping Belajar Mandiri</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-box">
            <h2>Siap Menguasai Instalasi Listrik?</h2>
            <p>
              Segera mulai belajar mandiri secara terstruktur. Gunakan Asisten AI jika kamu menemukan teori atau gambar rangkaian yang membingungkan.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <Link href="/materi" className="btn btn-accent btn-lg">
                Mulai Belajar Sekarang
              </Link>
              <Link href="/kuis" className="btn btn-secondary btn-lg" style={{ background: 'transparent', color: '#fff', borderColor: '#fff' }}>
                Kerjakan Kuis
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
