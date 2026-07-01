'use client';

import { use } from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { kuisList } from '@/data/kuis';
import QuizEngine from '@/components/QuizEngine';

export default function KuisDetailPage({ params }) {
  const { slug } = use(params);
  const quiz = kuisList.find((q) => q.slug === slug);

  if (!quiz) {
    return (
      <div className="container" style={{ padding: 'var(--space-4xl) 0', textAlign: 'center' }}>
        <h2>Kuis Tidak Ditemukan</h2>
        <p style={{ margin: 'var(--space-md) 0' }}>Kuis yang kamu cari tidak terdaftar.</p>
        <Link href="/kuis" className="btn btn-primary">
          Kembali ke Daftar Kuis
        </Link>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: 'var(--neutral-50)', minHeight: '100vh', paddingBottom: 'var(--space-4xl)' }}>
      <div className="container">
        {/* Breadcrumb */}
        <div className="breadcrumb" style={{ paddingTop: 'calc(var(--navbar-height) + var(--space-xl))' }}>
          <Link href="/">Beranda</Link>
          <ChevronRight className="breadcrumb-separator" size={12} />
          <Link href="/kuis">Kuis</Link>
          <ChevronRight className="breadcrumb-separator" size={12} />
          <span style={{ color: 'var(--neutral-800)', fontWeight: 500 }}>{quiz.title}</span>
        </div>

        {/* Quiz Wrapper */}
        <div style={{ marginTop: 'var(--space-lg)' }}>
          <QuizEngine quiz={quiz} />
        </div>
      </div>
    </div>
  );
}
