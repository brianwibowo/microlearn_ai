'use client';

import { useState, useRef, useEffect } from 'react';
import { BookOpen, Cpu, Bot, Award } from 'lucide-react';

/**
 * StickyScrollReveal - Replika presisi Aceternity UI Sticky Scroll Reveal
 * Wadah memiliki tinggi tetap (450px) dengan scroll internal (overflow-y: auto) yang disembunyikan scrollbar-nya.
 * Seluruh background wadah bertransisi warna secara halus mengikuti indeks langkah aktif.
 */
export default function StickyScrollReveal() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);

  const stepsData = [
    {
      title: '1. Pahami Teori & Modul',
      description: 'Baca 7 modul terstruktur yang telah disesuaikan dengan standar regulasi PUIL 2011. Dilengkapi skema pengawatan fisik, instalasi saklar tunggal/seri, dan pedoman K3 keselamatan kerja.',
      icon: BookOpen,
      bgColor: '#0B1329', // Deep navy
      gradient: 'linear-gradient(135deg, #1E3A8A 0%, #0B1329 100%)',
    },
    {
      title: '2. Simulasi Sirkuit Listrik',
      description: 'Eksperimen langsung dengan simulator sirkuit interaktif. Ubah tegangan sumber (Volt) dan nilai resistansi beban (Ohm) untuk melihat perubahan arus (Ampere) secara real-time.',
      icon: Cpu,
      bgColor: '#0F172A', // Slate dark
      gradient: 'linear-gradient(135deg, #0EA5E9 0%, #0F172A 100%)',
    },
    {
      title: '3. Diskusi Interaktif dengan AI',
      description: 'Gunakan asisten cerdas Gemini 2.5 Flash yang siap mendampingi belajarmu 24/7. Kamu bisa bertanya rumus daya, cara memasang saklar tukar, atau melampirkan foto instalasi kabel.',
      icon: Bot,
      bgColor: '#1A102F', // Deep purple dark
      gradient: 'linear-gradient(135deg, #A855F7 0%, #1A102F 100%)',
    },
    {
      title: '4. Uji Evaluasi Kuis Ketat',
      description: 'Uji kesiapan praktikmu melalui kuis mandiri dengan sistem countdown timer per soal dan pengunci halaman sebelum selesai. Ulangi kuis untuk mendapatkan skor kelulusan 100%!',
      icon: Award,
      bgColor: '#1E293B', // Steel grey
      gradient: 'linear-gradient(135deg, #EAB308 0%, #1E293B 100%)',
    },
  ];

  const handleScroll = (e) => {
    const container = e.currentTarget;
    const scrollTop = container.scrollTop;
    
    // Tinggi per-blok langkah di dalam container scroll
    const blockHeight = 320; 
    
    // Hitung index aktif berdasarkan posisi scroll kontainer internal
    const index = Math.min(
      Math.max(Math.round(scrollTop / blockHeight), 0),
      stepsData.length - 1
    );
    
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  };

  // Render visual representatif untuk diletakkan di dalam sticky card kanan
  const renderVisual = () => {
    switch (activeIndex) {
      case 0:
        return (
          <div className="reveal-visual-content">
            <svg viewBox="0 0 200 200" width="80%" height="80%" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="25" y="35" width="150" height="130" rx="8" fill="#1E293B" stroke="var(--primary-light)" strokeWidth="2.5" />
              <line x1="45" y1="65" x2="155" y2="65" stroke="var(--primary-light)" strokeWidth="3" strokeLinecap="round" />
              <line x1="45" y1="95" x2="135" y2="95" stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeLinecap="round" />
              <line x1="45" y1="120" x2="155" y2="120" stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeLinecap="round" />
              <circle cx="155" cy="95" r="6" fill="var(--accent)" />
            </svg>
            <div className="visual-caption">PUIL BLUEPRINT</div>
          </div>
        );
      case 1:
        return (
          <div className="reveal-visual-content">
            <svg viewBox="0 0 200 200" width="85%" height="85%" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="60" cy="100" r="16" stroke="var(--secondary)" strokeWidth="2" />
              <path d="M 55 100 H 65 M 60 95 V 105" stroke="var(--secondary)" strokeWidth="2" />
              <path d="M 130 85 L 135 95 L 140 85 L 145 95 L 150 85" stroke="var(--accent)" strokeWidth="2.5" strokeLinejoin="round" />
              <path d="M 60 84 H 138 M 138 116 H 60" stroke="var(--secondary)" strokeWidth="2" strokeDasharray="15 30" className="circuit-loop-anim" />
              <rect x="70" y="135" width="60" height="20" rx="4" fill="#020617" />
              <text x="100" y="149" fill="#10B981" fontSize="10" fontFamily="monospace" fontWeight="bold" textAnchor="middle">I = 2.75 A</text>
            </svg>
            <div className="visual-caption">CIRCUIT SIMULATOR</div>
          </div>
        );
      case 2:
        return (
          <div className="reveal-visual-content" style={{ width: '85%', height: '70%', background: '#1E293B', borderRadius: '12px', border: '1.5px solid #A855F7', padding: '16px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div style={{ alignSelf: 'flex-start', background: '#334155', color: '#F8FAFC', padding: '6px 10px', borderRadius: '10px 10px 10px 0', fontSize: '9px' }}>
              Berapa batas arus bahaya tubuh?
            </div>
            <div style={{ alignSelf: 'flex-end', background: 'rgba(168,85,247,0.15)', color: '#D8B4FE', padding: '6px 10px', borderRadius: '10px 10px 0 10px', fontSize: '9px', border: '1px solid rgba(168,85,247,0.25)' }}>
              Batas aman adalah &lt; 30 mA. ⚡
            </div>
            <div className="visual-caption" style={{ bottom: '-35px' }}>GEMINI AI SERVICE</div>
          </div>
        );
      case 3:
        return (
          <div className="reveal-visual-content">
            <svg viewBox="0 0 200 200" width="80%" height="80%" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="100" cy="100" r="40" stroke="rgba(255,255,255,0.1)" strokeWidth="3" />
              <circle cx="100" cy="100" r="40" stroke="var(--accent)" strokeWidth="3" strokeDasharray="250" strokeDashoffset="70" style={{ transform: 'rotate(-90deg)', transformOrigin: 'center' }} />
              <line x1="100" y1="100" x2="100" y2="75" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" />
              <text x="100" y="165" fill="var(--accent)" fontSize="11" fontFamily="monospace" fontWeight="bold" textAnchor="middle">00:45</text>
            </svg>
            <div className="visual-caption">QUIZ TIMER ACTIVE</div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div 
      ref={containerRef}
      onScroll={handleScroll}
      className="sticky-scroll-container"
      style={{
        height: '450px',
        overflowY: 'auto',
        display: 'flex',
        justifyContent: 'space-between',
        position: 'relative',
        borderRadius: '16px',
        padding: '40px',
        backgroundColor: stepsData[activeIndex].bgColor,
        transition: 'background-color 0.5s ease',
        scrollbarWidth: 'none', // Sembunyikan scrollbar Firefox
        msOverflowStyle: 'none', // Sembunyikan scrollbar IE/Edge
        border: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      {/* Kolom Kiri: Teks Langkah Belajar */}
      <div 
        className="sticky-scroll-text-col"
        style={{
          width: '50%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {stepsData.map((step, idx) => {
          const isActive = idx === activeIndex;
          return (
            <div
              key={idx}
              style={{
                height: '320px', // Pas dengan tinggi pergeseran blockHeight
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                opacity: isActive ? 1 : 0.3,
                transition: 'opacity 0.3s ease',
              }}
            >
              <h3 style={{ color: '#fff', fontSize: '1.4rem', fontWeight: '600', marginBottom: '16px' }}>
                {step.title}
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem', lineHeight: '1.7', margin: 0, maxWidth: '90%' }}>
                {step.description}
              </p>
            </div>
          );
        })}
        {/* Spacer bawah agar langkah terakhir bisa di-scroll pas ke tengah */}
        <div style={{ height: '120px', shrink: 0 }} />
      </div>

      {/* Kolom Kanan: Card Sticky Visual yang Mengikuti Indeks */}
      <div 
        className="sticky-scroll-visual-col"
        style={{
          width: '45%',
          position: 'sticky',
          top: '0px',
          height: '280px',
          display: 'flex',
          alignSelf: 'flex-start',
        }}
      >
        <div 
          className="sticky-scroll-card"
          style={{
            width: '100%',
            height: '100%',
            background: stepsData[activeIndex].gradient,
            borderRadius: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
            border: '1px solid rgba(255,255,255,0.1)',
            transition: 'background 0.5s ease',
          }}
        >
          {renderVisual()}
        </div>
      </div>

      {/* Global CSS khusus untuk menyembunyikan scrollbar Webkit dan animasi sirkuit */}
      <style jsx global>{`
        /* Sembunyikan scrollbar untuk Chrome, Safari, dan Opera */
        .sticky-scroll-container::-webkit-scrollbar {
          display: none;
        }
        
        .reveal-visual-content {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          animation: scaleReveal 0.4s cubic-bezier(0.25, 1, 0.5, 1) forwards;
        }

        .visual-caption {
          position: absolute;
          bottom: 20px;
          font-size: 10px;
          font-family: monospace;
          color: rgba(255, 255, 255, 0.7);
          background: rgba(0, 0, 0, 0.4);
          padding: 4px 10px;
          border-radius: 20px;
          font-weight: bold;
          letter-spacing: 1px;
        }

        @keyframes scaleReveal {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes circuitLoop {
          to { stroke-dashoffset: -90; }
        }
        .circuit-loop-anim {
          animation: circuitLoop 3s linear infinite;
        }

        /* Fallback Mobile: Jadikan grid biasa pada layar kecil */
        @media (max-width: 900px) {
          .sticky-scroll-container {
            height: auto !important;
            overflow-y: visible !important;
            display: block !important;
            padding: 24px !important;
            background-color: #1E293B !important;
          }
          .sticky-scroll-text-col {
            width: 100% !important;
          }
          .sticky-scroll-text-col > div {
            height: auto !important;
            opacity: 1 !important;
            margin-bottom: 32px !important;
            background: rgba(255, 255, 255, 0.03) !important;
            padding: 20px !important;
            border-radius: 12px !important;
            border: 1px solid rgba(255, 255, 255, 0.05) !important;
          }
          .sticky-scroll-visual-col {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}
