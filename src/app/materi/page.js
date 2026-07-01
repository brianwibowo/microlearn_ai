'use client';

import { useState } from 'react';
import { Search } from 'lucide-react';
import MateriCard from '@/components/MateriCard';
import { materiList } from '@/data/materi';

export default function MateriPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('semua');

  // Filter categories based on topics
  const categories = [
    { id: 'semua', label: 'Semua Topik' },
    { id: 'dasar', label: 'Teori Dasar Kelistrikan' },
    { id: 'instalasi', label: 'Instalasi & Pengawatan' },
    { id: 'keamanan', label: 'Keamanan & Perhitungan' },
  ];

  // Helper to categorize slugs
  const getCategoryForSlug = (slug) => {
    if (slug === 'dasar-kelistrikan' || slug === 'jenis-lampu') return 'dasar';
    if (slug === 'komponen-instalasi' || slug === 'instalasi-saklar-lampu' || slug === 'diagram-instalasi') return 'instalasi';
    if (slug === 'keselamatan-kerja-listrik' || slug === 'perhitungan-instalasi') return 'keamanan';
    return 'dasar';
  };

  const filteredMateri = materiList.filter((materi) => {
    const matchesSearch =
      materi.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      materi.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesTab =
      activeTab === 'semua' || getCategoryForSlug(materi.slug) === activeTab;

    return matchesSearch && matchesTab;
  });

  return (
    <div style={{ backgroundColor: 'var(--neutral-50)', minHeight: '100vh', paddingBottom: 'var(--space-4xl)' }}>
      {/* Page Header */}
      <header className="page-header">
        <div className="container">
          <span className="section-label">Modul Belajar</span>
          <h1>Materi Instalasi Penerangan Listrik</h1>
          <p>Pelajari konsep kelistrikan, diagram instalasi, komponen kelistrikan, hingga keselamatan kerja K3.</p>
        </div>
      </header>

      <div className="container" style={{ marginTop: 'var(--space-2xl)' }}>
        {/* Search Bar */}
        <div className="search-bar">
          <Search className="search-bar-icon" size={20} />
          <input
            type="text"
            placeholder="Cari materi belajar..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Filter Tabs */}
        <div className="filter-tabs">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`filter-tab ${activeTab === cat.id ? 'active' : ''}`}
              onClick={() => setActiveTab(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Materials Grid */}
        {filteredMateri.length > 0 ? (
          <div className="materi-grid">
            {filteredMateri.map((materi) => (
              <MateriCard key={materi.slug} materi={materi} />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <Search size={48} />
            <h3>Materi Tidak Ditemukan</h3>
            <p>Cobalah cari kata kunci lain atau pilih filter kategori yang berbeda.</p>
          </div>
        )}
      </div>
    </div>
  );
}
