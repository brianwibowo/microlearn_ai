import Link from 'next/link';
import { Clock, BookOpen } from 'lucide-react';
import { getSubjectLabel, getSubjectBadgeClass } from '@/data/materi';

// Helper function to render a custom vector SVG illustration based on course slug
function getMateriIllustration(slug) {
  switch (slug) {
    case 'dasar-kelistrikan':
      return (
        <svg viewBox="0 0 200 120" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="200" height="120" fill="url(#grad-dasar)" />
          {/* Circuit Grid */}
          <path d="M 30 60 H 170 M 100 20 V 100" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
          {/* Ohm's Law Schematic */}
          <circle cx="60" cy="60" r="18" stroke="#38BDF8" strokeWidth="2.5" />
          <path d="M 52 60 H 68 M 60 52 V 68" stroke="#38BDF8" strokeWidth="2.5" /> {/* Voltage Source */}
          <path d="M 120 45 L 125 55 L 130 45 L 135 55 L 140 45 L 145 55 L 150 45" stroke="#FBBF24" strokeWidth="2.5" strokeLinejoin="round" /> {/* Resistor */}
          <line x1="78" y1="60" x2="115" y2="45" stroke="#38BDF8" strokeWidth="2" strokeDasharray="3 2" />
          <line x1="150" y1="45" x2="150" y2="78" stroke="#38BDF8" strokeWidth="2" />
          <line x1="150" y1="78" x2="60" y2="78" stroke="#38BDF8" strokeWidth="2" />
          <text x="60" y="35" fill="#38BDF8" fontSize="10" fontWeight="bold" textAnchor="middle">220V</text>
          <text x="135" y="32" fill="#FBBF24" fontSize="10" fontWeight="bold" textAnchor="middle">R = 800Ω</text>
          <defs>
            <linearGradient id="grad-dasar" x1="0" y1="0" x2="200" y2="120" gradientUnits="userSpaceOnUse">
              <stop stopColor="#1E3A8A" />
              <stop offset="1" stopColor="#0F172A" />
            </linearGradient>
          </defs>
        </svg>
      );

    case 'komponen-instalasi':
      return (
        <svg viewBox="0 0 200 120" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="200" height="120" fill="url(#grad-komponen)" />
          {/* Grid trace */}
          <path d="M20 30 H180 M20 90 H180" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
          {/* MCB Switch Component Illustration */}
          <rect x="70" y="30" width="60" height="60" rx="4" fill="#334155" stroke="#94A3B8" strokeWidth="2" />
          <rect x="80" y="40" width="40" height="40" rx="2" fill="#1E293B" />
          {/* Switch toggle toggle */}
          <line x1="100" y1="60" x2="100" y2="45" stroke="#38BDF8" strokeWidth="4" strokeLinecap="round" />
          <circle cx="100" cy="60" r="4" fill="#E2E8F0" />
          {/* Status node */}
          <circle cx="100" cy="74" r="3" fill="#34D399" />
          {/* Terminals */}
          <line x1="100" y1="20" x2="100" y2="30" stroke="#EF4444" strokeWidth="3" />
          <line x1="100" y1="90" x2="100" y2="100" stroke="#EF4444" strokeWidth="3" />
          <text x="140" y="65" fill="#38BDF8" fontSize="9" fontWeight="bold">MCB (16A)</text>
          <defs>
            <linearGradient id="grad-komponen" x1="0" y1="0" x2="200" y2="120" gradientUnits="userSpaceOnUse">
              <stop stopColor="#0F172A" />
              <stop offset="1" stopColor="#1E3A8A" />
            </linearGradient>
          </defs>
        </svg>
      );

    case 'instalasi-saklar-lampu':
      return (
        <svg viewBox="0 0 200 120" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="200" height="120" fill="url(#grad-saklar)" />
          {/* Circuit wire loops */}
          <path d="M 30 75 H 85 M 115 75 H 170" stroke="#60A5FA" strokeWidth="2.5" />
          {/* Open Switch lever */}
          <circle cx="85" cy="75" r="3.5" fill="#F8FAFC" />
          <line x1="85" y1="75" x2="110" y2="52" stroke="#EF4444" strokeWidth="3" strokeLinecap="round" />
          <circle cx="115" cy="75" r="3.5" fill="#F8FAFC" />
          {/* Lightbulb glowing outline */}
          <circle cx="150" cy="45" r="12" stroke="#FBBF24" strokeWidth="2" strokeDasharray="3 1.5" />
          <circle cx="150" cy="45" r="9" fill="rgba(251,191,36,0.15)" stroke="#FBBF24" strokeWidth="1.5" />
          <path d="M 146 50 L 150 42 L 154 50" stroke="#FBBF24" strokeWidth="1" fill="none" />
          <rect x="146" y="54" width="8" height="4" fill="#64748B" />
          <text x="55" y="100" fill="#94A3B8" fontSize="9" fontWeight="bold">OFF STATE</text>
          <defs>
            <linearGradient id="grad-saklar" x1="0" y1="0" x2="200" y2="120" gradientUnits="userSpaceOnUse">
              <stop stopColor="#172554" />
              <stop offset="1" stopColor="#0B132B" />
            </linearGradient>
          </defs>
        </svg>
      );

    case 'diagram-instalasi':
      return (
        <svg viewBox="0 0 200 120" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="200" height="120" fill="url(#grad-diagram)" />
          {/* Floorplan grid */}
          <rect x="30" y="20" width="140" height="80" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
          <line x1="100" y1="20" x2="100" y2="100" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="4 2" />
          <line x1="30" y1="60" x2="170" y2="60" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="4 2" />
          {/* Wiring layout symbols */}
          {/* Lamp symbols (crossed circles) */}
          <circle cx="65" cy="40" r="6" stroke="#38BDF8" strokeWidth="1.5" />
          <line x1="61" y1="36" x2="69" y2="44" stroke="#38BDF8" strokeWidth="1" />
          <line x1="61" y1="44" x2="69" y2="36" stroke="#38BDF8" strokeWidth="1" />

          <circle cx="135" cy="40" r="6" stroke="#38BDF8" strokeWidth="1.5" />
          <line x1="131" y1="36" x2="139" y2="44" stroke="#38BDF8" strokeWidth="1" />
          <line x1="131" y1="44" x2="139" y2="36" stroke="#38BDF8" strokeWidth="1" />
          {/* Single line switch */}
          <circle cx="65" cy="80" r="3" fill="#F8FAFC" />
          <line x1="65" y1="80" x2="73" y2="73" stroke="#FBBF24" strokeWidth="1.5" />
          <line x1="73" y1="73" x2="77" y2="77" stroke="#FBBF24" strokeWidth="1.5" />
          <text x="110" y="90" fill="#38BDF8" fontSize="8" fontWeight="bold">SINGLE LINE PLAN</text>
          <defs>
            <linearGradient id="grad-diagram" x1="0" y1="0" x2="200" y2="120" gradientUnits="userSpaceOnUse">
              <stop stopColor="#0F172A" />
              <stop offset="1" stopColor="#1E293B" />
            </linearGradient>
          </defs>
        </svg>
      );

    case 'jenis-lampu':
      return (
        <svg viewBox="0 0 200 120" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="200" height="120" fill="url(#grad-jenis)" />
          {/* LED chip icon */}
          <circle cx="60" cy="60" r="22" fill="rgba(56,189,248,0.1)" stroke="#38BDF8" strokeWidth="2" />
          <path d="M 60 46 L 50 62 H 60 L 57 74 L 70 56 H 60 L 60 46 Z" fill="#FBBF24" />
          {/* Incandescent Bulb */}
          <circle cx="140" cy="60" r="20" fill="rgba(245,158,11,0.05)" stroke="#F59E0B" strokeWidth="2" />
          <path d="M 136 65 L 140 56 L 144 65" stroke="#F59E0B" strokeWidth="1.5" fill="none" />
          <rect x="135" y="76" width="10" height="5" fill="#94A3B8" />
          <text x="100" y="102" fill="#F8FAFC" fontSize="9" fontWeight="bold" textAnchor="middle">LED vs PIJAR</text>
          <defs>
            <linearGradient id="grad-jenis" x1="0" y1="0" x2="200" y2="120" gradientUnits="userSpaceOnUse">
              <stop stopColor="#1E3A8A" />
              <stop offset="1" stopColor="#172554" />
            </linearGradient>
          </defs>
        </svg>
      );

    case 'keselamatan-kerja-listrik':
      return (
        <svg viewBox="0 0 200 120" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="200" height="120" fill="url(#grad-keselamatan)" />
          {/* Warning badge */}
          <polygon points="100,18 60,90 140,90" fill="#EF4444" stroke="#F8FAFC" strokeWidth="2" />
          <polygon points="100,26 67,85 133,85" fill="#FBBF24" />
          <path d="M 100 40 L 100 66 M 100 73 A 1 1 0 1 1 99.99 73" stroke="#000000" strokeWidth="4" strokeLinecap="round" fill="none" />
          <text x="100" y="106" fill="#F8FAFC" fontSize="9" fontWeight="bold" textAnchor="middle">UTAMAKAN K3</text>
          <defs>
            <linearGradient id="grad-keselamatan" x1="0" y1="0" x2="200" y2="120" gradientUnits="userSpaceOnUse">
              <stop stopColor="#7F1D1D" />
              <stop offset="1" stopColor="#0F172A" />
            </linearGradient>
          </defs>
        </svg>
      );

    case 'perhitungan-instalasi':
      return (
        <svg viewBox="0 0 200 120" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="200" height="120" fill="url(#grad-perhitungan)" />
          {/* KWh meter screen */}
          <rect x="50" y="25" width="100" height="50" rx="4" fill="#020617" stroke="#94A3B8" strokeWidth="1.5" />
          <rect x="58" y="32" width="84" height="24" rx="2" fill="#1E293B" />
          {/* Numbers */}
          <text x="100" y="49" fill="#22C55E" fontSize="16" fontFamily="monospace" fontWeight="bold" letterSpacing="2" textAnchor="middle">0249.5</text>
          <text x="126" y="70" fill="#94A3B8" fontSize="8" fontWeight="bold">kWh</text>
          <text x="62" y="70" fill="#38BDF8" fontSize="8" fontWeight="bold">CLASS 1.0</text>
          {/* Animated pulse red light */}
          <circle cx="100" cy="92" r="3" fill="#EF4444">
            <animate attributeName="opacity" values="1;0.2;1" dur="1.5s" repeatCount="indefinite" />
          </circle>
          <text x="110" y="95" fill="#94A3B8" fontSize="8">Pulse (Imp/kWh)</text>
          <defs>
            <linearGradient id="grad-perhitungan" x1="0" y1="0" x2="200" y2="120" gradientUnits="userSpaceOnUse">
              <stop stopColor="#0F172A" />
              <stop offset="1" stopColor="#0369A1" />
            </linearGradient>
          </defs>
        </svg>
      );

    default:
      return (
        <svg viewBox="0 0 200 120" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="200" height="120" fill="url(#grad-default)" />
          <path d="M 100 35 L 75 70 H 100 L 95 90 L 125 55 H 100 L 100 35 Z" fill="#FBBF24" />
          <defs>
            <linearGradient id="grad-default" x1="0" y1="0" x2="200" y2="120" gradientUnits="userSpaceOnUse">
              <stop stopColor="#1E3A8A" />
              <stop offset="1" stopColor="#0F172A" />
            </linearGradient>
          </defs>
        </svg>
      );
  }
}

export default function MateriCard({ materi }) {
  return (
    <Link href={`/materi/${materi.slug}`} className="materi-card">
      <div className="materi-card-image" style={{ overflow: 'hidden', padding: 0 }}>
        {getMateriIllustration(materi.slug)}
      </div>
      <div className="materi-card-body">
        <div className="materi-card-badge">
          <span className={`badge ${getSubjectBadgeClass(materi.subject)}`}>
            {getSubjectLabel(materi.subject)}
          </span>
        </div>
        <h3>{materi.title}</h3>
        <p>{materi.description}</p>
        <div className="materi-card-meta">
          <span><Clock size={14} /> {materi.estimatedTime}</span>
          <span><BookOpen size={14} /> {materi.chapters.length} Bab</span>
        </div>
      </div>
    </Link>
  );
}
