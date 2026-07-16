'use client';

import { useState } from 'react';
import { Shield, Zap, ToggleLeft, ToggleRight, Radio, ShieldAlert, BookOpen, Layers } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function ElectricComponentsShowcase() {
  const [selectedId, setSelectedId] = useState('mcb');
  const [activeCategory, setActiveCategory] = useState('all');

  const components = [
    {
      id: 'mcb',
      name: 'MCB (Miniature Circuit Breaker)',
      category: 'pengaman',
      puilCode: 'PUIL 2011 Bagian 5-510',
      description: 'Saklar otomatis yang berfungsi memutus arus listrik secara mekanis ketika terjadi hubung singkat (korsleting) atau beban lebih (overload).',
      specifications: [
        { label: 'Tegangan Kerja', value: '220V (1-Phase) / 380V (3-Phase)' },
        { label: 'Arus Nominal', value: '2A, 4A, 6A, 10A, 16A, 20A, s.d 63A' },
        { label: 'Kapasitas Putus', value: '4.5 kA s.d 10 kA' },
        { label: 'Metode Trip', value: 'Termal (beban lebih) & Magnetik (korsleting)' }
      ],
      k3Rule: 'Wajib dipasang seri pada kabel Fasa aktif sebelum masuk ke rangkaian beban.',
      svgIcon: (
        <svg viewBox="0 0 100 100" width="80" height="80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="25" y="10" width="50" height="80" rx="6" fill="#334155" stroke="#64748B" strokeWidth="3" />
          <rect x="35" y="20" width="30" height="20" rx="3" fill="#1E293B" />
          {/* Toggle Switch */}
          <rect x="42" y="45" width="16" height="30" rx="2" fill="#E2E8F0" />
          <circle cx="50" cy="52" r="4" fill="#EF4444" />
          {/* Neon terminal line */}
          <line x1="50" y1="5" x2="50" y2="10" stroke="#38BDF8" strokeWidth="4" strokeLinecap="round" />
          <line x1="50" y1="90" x2="50" y2="95" stroke="#38BDF8" strokeWidth="4" strokeLinecap="round" />
        </svg>
      ),
      symbolSvg: (
        <svg viewBox="0 0 100 50" width="80" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="10" y1="25" x2="35" y2="25" stroke="#FBBF24" strokeWidth="2.5" />
          <line x1="35" y1="25" x2="60" y2="10" stroke="#FBBF24" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="60" y1="25" x2="90" y2="25" stroke="#FBBF24" strokeWidth="2.5" />
          {/* Thermal & Magnetic symbol elements */}
          <path d="M 33 22 Q 35 15 39 22" stroke="#FBBF24" strokeWidth="2" fill="none" />
          <path d="M 52 13 L 57 13 L 57 18" stroke="#FBBF24" strokeWidth="2" fill="none" />
        </svg>
      )
    },
    {
      id: 'elcb',
      name: 'ELCB (Earth Leakage Circuit Breaker)',
      category: 'pengaman',
      puilCode: 'PUIL 2011 Bagian 3.15',
      description: 'Alat pengaman arus bocor tanah yang sangat sensitif untuk melindungi manusia dari bahaya sengatan listrik (kesetrum) dan mencegah kebakaran akibat kebocoran kabel.',
      specifications: [
        { label: 'Sensitivitas Proteksi', value: '30 mA (Aman untuk manusia)' },
        { label: 'Waktu Respon', value: '< 0.1 Detik (Sangat cepat)' },
        { label: 'Tegangan Kerja', value: '230V AC' },
        { label: 'Jumlah Pole', value: '2-Pole (Fasa + Netral)' }
      ],
      k3Rule: 'Uji fungsi ELCB sebulan sekali dengan menekan tombol uji "T" (Test) pada fisik alat.',
      svgIcon: (
        <svg viewBox="0 0 100 100" width="80" height="80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="20" y="10" width="60" height="80" rx="8" fill="#475569" stroke="#94A3B8" strokeWidth="3" />
          <rect x="35" y="20" width="30" height="25" rx="3" fill="#1E293B" />
          {/* Test button */}
          <circle cx="50" cy="32" r="6" fill="#F59E0B" />
          <text x="50" y="35" fill="#000" fontSize="8" fontWeight="bold" textAnchor="middle">T</text>
          {/* Toggle lever */}
          <rect x="44" y="55" width="12" height="20" rx="2" fill="#10B981" />
          {/* Terminals */}
          <circle cx="35" cy="5" r="3" fill="#64748B" />
          <circle cx="65" cy="5" r="3" fill="#64748B" />
        </svg>
      ),
      symbolSvg: (
        <svg viewBox="0 0 100 50" width="80" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Dual circuit interrupt line */}
          <line x1="10" y1="18" x2="35" y2="18" stroke="#FBBF24" strokeWidth="2.5" />
          <line x1="35" y1="18" x2="55" y2="8" stroke="#FBBF24" strokeWidth="2.5" />
          <line x1="55" y1="18" x2="90" y2="18" stroke="#FBBF24" strokeWidth="2.5" />
          {/* Zero current transformer circle */}
          <circle cx="45" cy="25" r="12" stroke="#FBBF24" strokeWidth="2" strokeDasharray="3 3" />
          <line x1="45" y1="37" x2="45" y2="45" stroke="#FBBF24" strokeWidth="2" />
        </svg>
      )
    },
    {
      id: 'saklar-tunggal',
      name: 'Saklar Tunggal (Single Switch)',
      category: 'kontrol',
      puilCode: 'PUIL 2011 Bagian 5-511',
      description: 'Komponen instalasi penerangan yang berfungsi untuk menyambung atau memutus aliran arus listrik ke sebuah lampu dari satu tempat.',
      specifications: [
        { label: 'Batas Arus Maks', value: '10 Ampere' },
        { label: 'Batas Tegangan', value: '250V AC' },
        { label: 'Mekanisme Kontak', value: 'Rocker snap-action' },
        { label: 'Bahan Casing', value: 'Plastik Polikarbonat tahan panas' }
      ],
      k3Rule: 'Hanya kabel Fasa (bertegangan) yang boleh dilewatkan saklar. Kabel Netral langsung terhubung ke lampu.',
      svgIcon: (
        <svg viewBox="0 0 100 100" width="80" height="80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="20" y="20" width="60" height="60" rx="10" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="3" />
          {/* Rocker Button */}
          <polygon points="35,35 65,35 65,65 35,65" fill="#F1F5F9" stroke="#CBD5E1" strokeWidth="2" />
          <line x1="35" y1="50" x2="65" y2="50" stroke="#94A3B8" strokeWidth="2" />
          <circle cx="50" cy="42" r="3" fill="#64748B" />
        </svg>
      ),
      symbolSvg: (
        <svg viewBox="0 0 100 50" width="80" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="35" cy="25" r="4" stroke="#FBBF24" strokeWidth="2.5" />
          <line x1="39" y1="25" x2="65" y2="25" stroke="#FBBF24" strokeWidth="2.5" />
          <line x1="65" y1="25" x2="65" y2="13" stroke="#FBBF24" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      )
    },
    {
      id: 'saklar-tukar',
      name: 'Saklar Tukar / Hotel (Two-Way Switch)',
      category: 'kontrol',
      puilCode: 'PUIL 2011 Bagian 5-511',
      description: 'Saklar dengan tiga terminal yang dipasang berpasangan untuk mengoperasikan satu atau lebih lampu secara mandiri dari dua lokasi terpisah (misalnya tangga atau koridor).',
      specifications: [
        { label: 'Jumlah Terminal', value: '3 Terminal (1 Common, 2 Way)' },
        { label: 'Batas Arus Maks', value: '10 A' },
        { label: 'Metode Hubung', value: 'SPDT (Single Pole Double Throw)' },
        { label: 'Aplikasi Kunci', value: 'Instalasi Tangga, Koridor Hotel, Kamar Tidur' }
      ],
      k3Rule: 'Kabel penghubung antara kedua saklar hotel harus dipastikan memiliki warna isolasi berbeda agar tidak tertukar.',
      svgIcon: (
        <svg viewBox="0 0 100 100" width="80" height="80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="20" y="20" width="60" height="60" rx="10" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="3" />
          {/* Rocker Button */}
          <polygon points="35,35 65,35 65,65 35,65" fill="#F1F5F9" stroke="#CBD5E1" strokeWidth="2" />
          <circle cx="50" cy="42" r="3" fill="#64748B" />
          <circle cx="50" cy="58" r="3" fill="#64748B" />
        </svg>
      ),
      symbolSvg: (
        <svg viewBox="0 0 100 50" width="80" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="35" cy="25" r="4" stroke="#FBBF24" strokeWidth="2.5" />
          <line x1="39" y1="25" x2="65" y2="25" stroke="#FBBF24" strokeWidth="2.5" />
          <line x1="65" y1="25" x2="65" y2="13" stroke="#FBBF24" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="65" y1="25" x2="65" y2="37" stroke="#FBBF24" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      )
    },
    {
      id: 'stop-kontak',
      name: 'Stop Kontak (Wall Socket)',
      category: 'output',
      puilCode: 'PUIL 2011 Bagian 5-511.2',
      description: 'Titik keluaran instalasi penerangan yang menyediakan sambungan daya listrik portabel untuk berbagai peralatan rumah tangga.',
      specifications: [
        { label: 'Rating Arus', value: '16 Ampere' },
        { label: 'Jumlah Koneksi', value: '3 Terminal (Fasa, Netral, Ground)' },
        { label: 'Tinggi Pasang Min', value: '1.25 meter dari lantai (atau dilengkapi shutter)' },
        { label: 'Bahan Kontak', value: 'Kuningan / Tembaga berkualitas tinggi' }
      ],
      k3Rule: 'Terminal Ground (Pentanahan) pada stop kontak wajib terhubung ke grounding elektroda bumi.',
      svgIcon: (
        <svg viewBox="0 0 100 100" width="80" height="80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="35" fill="#F1F5F9" stroke="#94A3B8" strokeWidth="3" />
          <rect x="30" y="47" width="40" height="6" rx="1" fill="#E2E8F0" />
          {/* Socket holes */}
          <circle cx="38" cy="50" r="5" fill="#334155" />
          <circle cx="62" cy="50" r="5" fill="#334155" />
          {/* Earth/Ground clips */}
          <rect x="47" y="17" width="6" height="6" fill="#D1D5DB" />
          <rect x="47" y="77" width="6" height="6" fill="#D1D5DB" />
        </svg>
      ),
      symbolSvg: (
        <svg viewBox="0 0 100 50" width="80" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M 30 25 A 15 15 0 0 1 60 25" stroke="#FBBF24" strokeWidth="2.5" fill="none" />
          <line x1="30" y1="25" x2="60" y2="25" stroke="#FBBF24" strokeWidth="2.5" />
          <line x1="45" y1="25" x2="45" y2="45" stroke="#FBBF24" strokeWidth="2.5" />
          <line x1="37" y1="45" x2="53" y2="45" stroke="#FBBF24" strokeWidth="2" />
        </svg>
      )
    },
    {
      id: 'kwh-meter',
      name: 'kWh Meter (Kilowatt-Hour Meter)',
      category: 'output',
      puilCode: 'PUIL 2011 Bagian 6',
      description: 'Alat ukur pemakaian energi listrik milik PLN yang dipasang di awal jalur masuk bangunan sebagai batas kepemilikan dan pengaman instalasi.',
      specifications: [
        { label: 'Besaran Pengukuran', value: 'Energi Aktif (kWh), Tegangan (V), Arus (A)' },
        { label: 'Tipe Layanan', value: 'Pascabayar (Analog) & Prabayar (Token Digital)' },
        { label: 'Kelas Akurasi', value: 'Kelas 1.0 / 2.0' },
        { label: 'Kabel Koneksi', value: 'Sisi Input (PLN) & Sisi Output (Instalasi Rumah)' }
      ],
      k3Rule: 'Hanya petugas PLN yang berwenang membuka segel keamanan dan memodifikasi kabel sambungan kWh meter.',
      svgIcon: (
        <svg viewBox="0 0 100 100" width="80" height="80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="20" y="10" width="60" height="80" rx="6" fill="#334155" stroke="#475569" strokeWidth="3" />
          {/* LCD/Display Panel */}
          <rect x="28" y="20" width="44" height="20" fill="#047857" rx="2" />
          <text x="34" y="33" fill="#34D399" fontSize="11" fontFamily="monospace" fontWeight="bold">0042.8</text>
          {/* Numeric keypad (Prabayar token) */}
          <rect x="32" y="48" width="36" height="32" fill="#1E293B" rx="3" />
          <circle cx="38" cy="54" r="2" fill="#94A3B8" />
          <circle cx="44" cy="54" r="2" fill="#94A3B8" />
          <circle cx="50" cy="54" r="2" fill="#94A3B8" />
          <circle cx="38" cy="60" r="2" fill="#94A3B8" />
          <circle cx="44" cy="60" r="2" fill="#94A3B8" />
          <circle cx="50" cy="60" r="2" fill="#94A3B8" />
          <circle cx="56" cy="68" r="3" fill="#EF4444" /> {/* Led Pulse */}
        </svg>
      ),
      symbolSvg: (
        <svg viewBox="0 0 100 50" width="80" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="35" y="10" width="30" height="30" stroke="#FBBF24" strokeWidth="2.5" fill="none" />
          <text x="50" y="28" fill="#FBBF24" fontSize="12" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">Wh</text>
          <line x1="15" y1="25" x2="35" y2="25" stroke="#FBBF24" strokeWidth="2" />
          <line x1="65" y1="25" x2="85" y2="25" stroke="#FBBF24" strokeWidth="2" />
        </svg>
      )
    }
  ];

  const filteredComponents = activeCategory === 'all' 
    ? components 
    : components.filter(c => c.category === activeCategory);

  const selectedComp = components.find(c => c.id === selectedId);

  return (
    <section className="section" style={{ backgroundColor: 'var(--neutral-900)', borderBottom: '1px solid rgba(255,255,255,0.05)', padding: 'var(--space-4xl) 0' }}>
      <div className="container">
        <ScrollReveal>
          <div className="section-header" style={{ marginBottom: 'var(--space-3xl)' }}>
            <span className="section-label" style={{ background: 'rgba(56,189,248,0.1)', color: 'var(--primary-light)' }}>Koleksi Komponen</span>
            <h2 style={{ color: '#fff' }}>Toolbox Komponen Listrik</h2>
            <p style={{ color: 'var(--neutral-400)' }}>Klik komponen untuk mempelajari skema fisik, simbol standar PUIL 2011, dan spesifikasi tekniknya.</p>
          </div>
        </ScrollReveal>

        {/* Category Filters */}
        <ScrollReveal delay={0.1}>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '12px',
            marginBottom: '32px',
            flexWrap: 'wrap'
          }}>
            {[
              { id: 'all', label: 'Semua Alat', icon: Layers },
              { id: 'pengaman', label: 'Pengaman Rangkaian', icon: Shield },
              { id: 'kontrol', label: 'Saklar & Kontrol', icon: Zap },
              { id: 'output', label: 'Output / Beban', icon: Radio }
            ].map(cat => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveCategory(cat.id);
                    // Select first available component in that category
                    const available = cat.id === 'all' ? components : components.filter(c => c.category === cat.id);
                    if (available.length > 0 && !available.some(a => a.id === selectedId)) {
                      setSelectedId(available[0].id);
                    }
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '8px 16px',
                    borderRadius: '30px',
                    border: '1px solid',
                    borderColor: isActive ? 'var(--primary-light)' : 'rgba(255,255,255,0.1)',
                    background: isActive ? 'var(--primary)' : 'rgba(30, 41, 59, 0.45)',
                    color: '#fff',
                    fontSize: 'var(--fs-small)',
                    cursor: 'pointer',
                    fontWeight: 500,
                    transition: 'all 0.2s ease'
                  }}
                >
                  <Icon size={14} />
                  {cat.label}
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Main Grid + Detail Layout */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
          
          {/* Components Grid (Left Column) */}
          <ScrollReveal direction="left" distance="40px">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              {filteredComponents.map(comp => {
                const isSelected = comp.id === selectedId;
                return (
                  <div
                    key={comp.id}
                    onClick={() => setSelectedId(comp.id)}
                    style={{
                      background: 'rgba(30, 41, 59, 0.45)',
                      borderRadius: 'var(--radius-lg)',
                      border: '2px solid',
                      borderColor: isSelected ? 'var(--primary-light)' : 'rgba(255, 255, 255, 0.05)',
                      padding: '16px',
                      cursor: 'pointer',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      boxShadow: isSelected ? '0 0 20px rgba(56, 189, 248, 0.15)' : 'none',
                      transform: isSelected ? 'translateY(-4px)' : 'none'
                    }}
                  >
                    <div style={{ marginBottom: '12px' }}>{comp.svgIcon}</div>
                    <div style={{
                      color: '#fff',
                      fontSize: 'var(--fs-small)',
                      fontWeight: 600,
                      lineHeight: '1.4'
                    }}>
                      {comp.name.split(' (')[0]}
                    </div>
                  </div>
                );
              })}
            </div>
          </ScrollReveal>

          {/* Component Details Screen (Right Column) */}
          <ScrollReveal direction="right" distance="40px">
            <div style={{
              background: 'linear-gradient(135deg, #1E293B 0%, #0F172A 100%)',
              borderRadius: 'var(--radius-xl)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              padding: '32px',
              boxShadow: 'var(--shadow-lg)',
              color: '#fff',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}>
              {selectedComp && (
                <div>
                  {/* Title & Category Badge */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px', marginBottom: '16px' }}>
                    <div>
                      <span style={{
                        fontSize: 'var(--fs-tiny)',
                        fontWeight: 'bold',
                        letterSpacing: '1px',
                        textTransform: 'uppercase',
                        color: 'var(--primary-light)',
                        background: 'rgba(56,189,248,0.1)',
                        padding: '4px 8px',
                        borderRadius: '4px',
                        display: 'inline-block',
                        marginBottom: '8px'
                      }}>
                        {selectedComp.category}
                      </span>
                      <h3 style={{ color: '#fff', fontSize: '1.5rem', fontWeight: 700, margin: 0 }}>{selectedComp.name}</h3>
                    </div>
                    <span style={{ fontSize: 'var(--fs-tiny)', color: 'var(--neutral-400)', border: '1px solid rgba(255,255,255,0.1)', padding: '4px 8px', borderRadius: '4px' }}>
                      {selectedComp.puilCode}
                    </span>
                  </div>

                  <p style={{ color: 'var(--neutral-300)', fontSize: 'var(--fs-small)', lineHeight: '1.6', marginBottom: '24px' }}>
                    {selectedComp.description}
                  </p>

                  {/* Specifications & Diagram grid */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '20px', marginBottom: '24px' }}>
                    
                    {/* Symbol Diagram */}
                    <div style={{ background: '#0F172A', padding: '16px', borderRadius: 'var(--radius-md)', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                      <span style={{ fontSize: 'var(--fs-tiny)', color: 'var(--neutral-500)', marginBottom: '8px', alignSelf: 'flex-start' }}>Simbol Rangkaian (PUIL):</span>
                      {selectedComp.symbolSvg}
                    </div>

                    {/* Specifications List */}
                    <div>
                      <span style={{ fontSize: 'var(--fs-tiny)', color: 'var(--neutral-400)', display: 'block', marginBottom: '8px', fontWeight: 600 }}>Spesifikasi Teknis:</span>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        {selectedComp.specifications.map((spec, i) => (
                          <div key={i} style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '4px', fontSize: 'var(--fs-small)' }}>
                            <span style={{ color: 'var(--neutral-400)' }}>{spec.label}</span>
                            <span style={{ fontWeight: 500, color: 'var(--secondary)' }}>{spec.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>

                  {/* Safety K3 tips Box */}
                  <div style={{
                    background: 'rgba(239, 68, 68, 0.08)',
                    borderLeft: '4px solid var(--danger)',
                    padding: '12px 16px',
                    borderRadius: '0 var(--radius-md) var(--radius-md) 0',
                    display: 'flex',
                    gap: '12px',
                    alignItems: 'flex-start'
                  }}>
                    <ShieldAlert size={16} style={{ color: 'var(--danger)', marginTop: '2px', flexShrink: 0 }} />
                    <div style={{ fontSize: 'var(--fs-small)' }}>
                      <strong style={{ color: 'var(--danger)', display: 'block', marginBottom: '2px' }}>Peraturan K3 Pemasangan:</strong>
                      <span style={{ color: 'var(--neutral-300)' }}>{selectedComp.k3Rule}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
