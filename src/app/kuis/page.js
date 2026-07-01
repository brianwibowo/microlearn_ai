'use client';

import Link from 'next/link';
import { HelpCircle, Clock, BookOpen, ChevronRight } from 'lucide-react';
import { kuisList } from '@/data/kuis';

export default function KuisPage() {
  const getDifficultyColor = (diff) => {
    switch (diff.toLowerCase()) {
      case 'mudah':
        return 'badge-secondary';
      case 'sedang':
        return 'badge-accent';
      case 'sulit':
        return 'badge-danger';
      default:
        return 'badge-primary';
    }
  };

  return (
    <div style={{ backgroundColor: 'var(--neutral-50)', minHeight: '100vh', paddingBottom: 'var(--space-4xl)' }}>
      {/* Page Header */}
      <header className="page-header">
        <div className="container">
          <span className="section-label">Evaluasi Belajar</span>
          <h1>Kuis Kelistrikan & Instalasi</h1>
          <p>Uji kemampuan teoritis dan praktismu mengenai instalasi penerangan listrik menggunakan kuis pilihan ganda interaktif.</p>
        </div>
      </header>

      <div className="container" style={{ marginTop: 'var(--space-2xl)' }}>
        <div className="grid grid-3" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))' }}>
          {kuisList.map((quiz) => (
            <div key={quiz.slug} className="card animate-fade-in" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <span className="badge badge-instalasi">Instalasi Penerangan</span>
                <span className={`badge ${getDifficultyColor(quiz.difficulty)}`}>{quiz.difficulty}</span>
              </div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '12px', lineHeight: '1.4' }}>{quiz.title}</h3>
              <p style={{ fontSize: 'var(--fs-small)', color: 'var(--neutral-500)', flex: 1, marginBottom: '20px', lineHeight: '1.6' }}>
                {quiz.description}
              </p>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingTop: '16px',
                  borderTop: '1px solid var(--neutral-100)',
                  fontSize: 'var(--fs-tiny)',
                  color: 'var(--neutral-400)'
                }}
              >
                <div style={{ display: 'flex', gap: '16px' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <HelpCircle size={14} /> {quiz.questions.length} Soal
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Clock size={14} /> {quiz.questions.length * 2} Menit
                  </span>
                </div>
                <Link
                  href={`/kuis/${quiz.slug}`}
                  className="btn btn-primary btn-sm"
                  style={{ padding: '8px 16px', borderRadius: 'var(--radius-sm)' }}
                >
                  Mulai
                  <ChevronRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
