'use client';

import { use, useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronRight, ArrowLeft, BookOpen, Clock, FileText, CheckCircle } from 'lucide-react';
import { materiList } from '@/data/materi';
import VideoPlayer from '@/components/VideoPlayer';
import MateriContent from '@/components/MateriContent';

export default function MateriDetailPage({ params }) {
  const { slug } = use(params);
  const materi = materiList.find((m) => m.slug === slug);
  const [activeChapterIndex, setActiveChapterIndex] = useState(0);

  // Reset active chapter when slug changes
  useEffect(() => {
    setActiveChapterIndex(0);
  }, [slug]);

  if (!materi) {
    return (
      <div className="container" style={{ padding: 'var(--space-4xl) 0', textAlign: 'center' }}>
        <h2>Materi Tidak Ditemukan</h2>
        <p style={{ margin: 'var(--space-md) 0' }}>Modul pembelajaran yang kamu cari tidak terdaftar.</p>
        <Link href="/materi" className="btn btn-primary">
          Kembali ke Daftar Materi
        </Link>
      </div>
    );
  }

  const activeChapter = materi.chapters[activeChapterIndex];
  const isLastChapter = activeChapterIndex === materi.chapters.length - 1;

  return (
    <div className="materi-detail" style={{ backgroundColor: 'var(--neutral-50)', minHeight: '100vh' }}>
      <div className="container">
        {/* Breadcrumb */}
        <div className="breadcrumb">
          <Link href="/">Beranda</Link>
          <ChevronRight className="breadcrumb-separator" size={12} />
          <Link href="/materi">Materi</Link>
          <ChevronRight className="breadcrumb-separator" size={12} />
          <span style={{ color: 'var(--neutral-800)', fontWeight: 500 }}>{materi.title}</span>
        </div>

        {/* Layout */}
        <div className="materi-detail-layout">
          {/* Main Content Area */}
          <div className="materi-detail-main card animate-fade-in">
            <span className="badge badge-instalasi" style={{ marginBottom: '12px' }}>
              Instalasi Penerangan
            </span>
            <h1>{materi.title}</h1>

            <div className="materi-detail-meta">
              <span><Clock size={16} /> Estimasi: {materi.estimatedTime}</span>
              <span><BookOpen size={16} /> Total: {materi.chapters.length} Bab</span>
            </div>

            {/* Render active chapter content */}
            <div style={{ marginTop: 'var(--space-xl)' }}>
              <MateriContent chapter={activeChapter} />
            </div>

            {/* Video player for the first chapter or standard material level video */}
            {activeChapterIndex === 0 && materi.videoUrl && (
              <div style={{ marginTop: 'var(--space-2xl)' }}>
                <VideoPlayer videoUrl={materi.videoUrl} title={materi.title} />
              </div>
            )}

            {/* Chapter Navigation Buttons */}
            <div className="materi-nav-buttons">
              <button
                className="materi-nav-btn"
                disabled={activeChapterIndex === 0}
                onClick={() => setActiveChapterIndex((prev) => prev - 1)}
                style={{ opacity: activeChapterIndex === 0 ? 0.5 : 1, cursor: activeChapterIndex === 0 ? 'not-allowed' : 'pointer' }}
              >
                <ArrowLeft size={16} />
                Sebelumnya
              </button>

              {!isLastChapter ? (
                <button
                  className="materi-nav-btn next"
                  onClick={() => setActiveChapterIndex((prev) => prev + 1)}
                >
                  Selanjutnya
                  <ChevronRight size={16} />
                </button>
              ) : (
                materi.relatedQuiz && (
                  <Link href={`/kuis/${materi.relatedQuiz}`} className="btn btn-primary" style={{ padding: '14px 24px', flex: 1, justifyContent: 'center' }}>
                    <CheckCircle size={18} />
                    Mulai Kuis Materi Ini
                  </Link>
                )
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="materi-sidebar">
            {/* Chapters Navigation */}
            <div className="sidebar-card">
              <h4>Daftar Bab</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                {materi.chapters.map((chap, idx) => (
                  <button
                    key={chap.id}
                    className={`sidebar-nav-item ${activeChapterIndex === idx ? 'active' : ''}`}
                    onClick={() => setActiveChapterIndex(idx)}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <FileText size={14} style={{ flexShrink: 0 }} />
                      <span>{chap.title}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Quiz Card */}
            {materi.relatedQuiz && (
              <div className="sidebar-card" style={{ background: 'linear-gradient(135deg, var(--primary-light), #EDE9FE)', borderColor: 'var(--primary-light)' }}>
                <h4 style={{ color: 'var(--primary-dark)', borderBottomColor: 'rgba(37,99,235,0.1)' }}>Evaluasi Kuis</h4>
                <p style={{ fontSize: 'var(--fs-small)', color: 'var(--neutral-700)', marginBottom: '16px', lineHeight: '1.5' }}>
                  Sudah selesai membaca semua bab? Uji pemahaman kelistrikanmu lewat kuis interaktif.
                </p>
                <Link href={`/kuis/${materi.relatedQuiz}`} className="btn btn-primary btn-sm" style={{ width: '100%' }}>
                  Buka Kuis
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
