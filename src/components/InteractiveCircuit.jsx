'use client';

import { useState } from 'react';
import { Zap, Play, Square } from 'lucide-react';

export default function InteractiveCircuit() {
  const [isClosed, setIsClosed] = useState(false);
  const [voltage, setVoltage] = useState(220); // Volts
  const [resistance, setResistance] = useState(800); // Ohms

  // Calculate current (I = V / R) and power (P = V * I)
  const current = isClosed ? (voltage / resistance).toFixed(3) : '0.000';
  const power = isClosed ? ((voltage * voltage) / resistance).toFixed(1) : '0.0';

  return (
    <div
      style={{
        background: 'rgba(30, 41, 59, 0.85)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(255, 255, 255, 0.12)',
        borderRadius: 'var(--radius-xl)',
        padding: '24px',
        color: '#F8FAFC',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)',
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
        maxWidth: '500px',
        margin: '0 auto',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Zap size={18} style={{ color: isClosed ? '#FBBF24' : '#94A3B8' }} />
          <h4 style={{ margin: 0, fontSize: '1rem', fontWeight: 600, color: '#F8FAFC' }}>
            Simulasi Rangkaian Listrik
          </h4>
        </div>
        <span
          style={{
            background: isClosed ? 'rgba(16, 185, 129, 0.2)' : 'rgba(239, 68, 68, 0.2)',
            color: isClosed ? '#34D399' : '#F87171',
            padding: '4px 10px',
            borderRadius: 'var(--radius-sm)',
            fontSize: '11px',
            fontWeight: 700,
            marginLeft: 'auto',
          }}
        >
          {isClosed ? 'ON (CLOSED)' : 'OFF (OPEN)'}
        </span>
      </div>

      {/* Circuit Schematic Diagram */}
      <div
        style={{
          background: '#0F172A',
          borderRadius: 'var(--radius-md)',
          height: '220px',
          position: 'relative',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '20px',
        }}
      >
        <svg width="100%" height="100%" viewBox="0 0 400 220" style={{ pointerEvents: 'none' }}>
          {/* Gradients */}
          <defs>
            <radialGradient id="bulb-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FBBF24" stopOpacity="0.9" />
              <stop offset="60%" stopColor="#FBBF24" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#FBBF24" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Grid lines in bg */}
          <path d="M 0 55 L 400 55 M 0 110 L 400 110 M 0 165 L 400 165 M 100 0 L 100 220 M 200 0 L 200 220 M 300 0 L 300 220" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />

          {/* Wires (Paths) */}
          {/* Phase Line (L) - Red */}
          <path d="M 50 165 H 150 V 110 M 190 110 H 300 V 135" stroke={isClosed ? '#EF4444' : '#475569'} strokeWidth="3.5" fill="none" />
          {/* Neutral Line (N) - Blue */}
          <path d="M 300 155 V 165 H 50" stroke={isClosed ? '#3B82F6' : '#475569'} strokeWidth="3.5" fill="none" />

          {/* Animated electron flow */}
          {isClosed && (
            <>
              {/* L Phase flow */}
              <circle r="3" fill="#F87171">
                <animateMotion dur="2s" repeatCount="indefinite" path="M 50 165 H 150 V 110 H 190 H 300 V 135" />
              </circle>
              {/* N Neutral flow */}
              <circle r="3" fill="#60A5FA">
                <animateMotion dur="2s" repeatCount="indefinite" path="M 300 155 V 165 H 50" />
              </circle>
            </>
          )}

          {/* Power Source Terminal */}
          <circle cx="50" cy="165" r="7" fill="#FBBF24" />
          <text x="38" y="150" fill="#F1F5F9" fontSize="11" fontWeight="bold" fontFamily="sans-serif">220V AC</text>

          {/* Single-Pole Switch Symbol (Saklar Tunggal) */}
          {/* Left terminal */}
          <circle cx="150" cy="110" r="5" fill="#E2E8F0" />
          {/* Right terminal */}
          <circle cx="190" cy="110" r="5" fill="#E2E8F0" />
          {/* Switch Lever */}
          {isClosed ? (
            // Closed: connects terminals
            <line x1="150" y1="110" x2="190" y2="110" stroke="#34D399" strokeWidth="4.5" strokeLinecap="round" />
          ) : (
            // Open: angled lever
            <line x1="150" y1="110" x2="185" y2="85" stroke="#F87171" strokeWidth="4.5" strokeLinecap="round" />
          )}
          <text x="150" y="70" fill="#F1F5F9" fontSize="11" fontWeight="bold" fontFamily="sans-serif">SAKLAR (S1)</text>

          {/* Lightbulb (Beban / Lampu) */}
          <circle cx="300" cy="145" r="16" fill={isClosed ? 'url(#bulb-glow)' : 'rgba(255,255,255,0.03)'} />
          {/* Bulb Filament */}
          <circle cx="300" cy="145" r="10" stroke={isClosed ? '#FBBF24' : '#475569'} strokeWidth="2.5" fill="none" />
          <path d="M 295 150 L 300 140 L 305 150" stroke={isClosed ? '#FBBF24' : '#475569'} strokeWidth="2" fill="none" />
          {/* Bulb Screw Base */}
          <rect x="293" y="157" width="14" height="6" fill="#64748B" rx="1" />
          <text x="318" y="132" fill="#F1F5F9" fontSize="11" fontWeight="bold" fontFamily="sans-serif">LAMPU (H1)</text>
        </svg>

        {/* Floating Label for switch trigger */}
        <div style={{ position: 'absolute', bottom: '10px', left: '10px', fontSize: '10px', color: '#94A3B8', fontWeight: 500 }}>
          Skema Wiring Diagram Hubung Tunggal
        </div>
      </div>

      {/* Control panel & Slider settings */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '20px' }}>
        <div>
          <label style={{ display: 'block', fontSize: '12px', color: '#E2E8F0', marginBottom: '6px', fontWeight: 500 }}>
            Tegangan (V): <strong style={{ color: '#FBBF24' }}>{voltage} V</strong>
          </label>
          <input
            type="range"
            min="100"
            max="240"
            value={voltage}
            onChange={(e) => setVoltage(Number(e.target.value))}
            style={{ width: '100%', accentColor: 'var(--secondary)' }}
          />
        </div>
        <div>
          <label style={{ display: 'block', fontSize: '12px', color: '#E2E8F0', marginBottom: '6px', fontWeight: 500 }}>
            Hambatan (R): <strong style={{ color: '#60A5FA' }}>{resistance} Ω</strong>
          </label>
          <input
            type="range"
            min="200"
            max="1200"
            value={resistance}
            onChange={(e) => setResistance(Number(e.target.value))}
            style={{ width: '100%', accentColor: 'var(--secondary)' }}
          />
        </div>
      </div>

      {/* Real-time stats display */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '8px',
          background: '#0F172A',
          padding: '12px',
          borderRadius: 'var(--radius-md)',
          textAlign: 'center',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          marginBottom: '20px',
        }}
      >
        <div>
          <div style={{ fontSize: '10px', color: '#94A3B8', fontWeight: 700, letterSpacing: '0.5px' }}>ARUS (I)</div>
          <div style={{ fontSize: '14px', fontWeight: 800, color: isClosed ? '#60A5FA' : '#94A3B8', marginTop: '4px' }}>
            {current} A
          </div>
        </div>
        <div style={{ borderLeft: '1px solid rgba(255, 255, 255, 0.1)' }}>
          <div style={{ fontSize: '10px', color: '#94A3B8', fontWeight: 700, letterSpacing: '0.5px' }}>DAYA (P)</div>
          <div style={{ fontSize: '14px', fontWeight: 800, color: isClosed ? '#FBBF24' : '#94A3B8', marginTop: '4px' }}>
            {power} W
          </div>
        </div>
        <div style={{ borderLeft: '1px solid rgba(255, 255, 255, 0.1)' }}>
          <div style={{ fontSize: '10px', color: '#94A3B8', fontWeight: 700, letterSpacing: '0.5px' }}>EFISIENSI</div>
          <div style={{ fontSize: '14px', fontWeight: 800, color: isClosed ? '#34D399' : '#94A3B8', marginTop: '4px' }}>
            {isClosed ? '98.4%' : '0%'}
          </div>
        </div>
      </div>

      {/* Switch Button trigger */}
      <button
        onClick={() => setIsClosed(!isClosed)}
        style={{
          width: '100%',
          padding: '14px',
          borderRadius: 'var(--radius-md)',
          border: 'none',
          background: isClosed ? 'linear-gradient(135deg, #EF4444, #CA8A04)' : 'linear-gradient(135deg, #0EA5E9, #1E3A8A)',
          color: '#FFFFFF',
          fontWeight: 700,
          fontSize: '14px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          transition: 'all 0.2s ease',
          boxShadow: isClosed ? '0 4px 14px rgba(239, 68, 68, 0.35)' : '0 4px 14px rgba(14, 165, 233, 0.35)',
        }}
      >
        {isClosed ? (
          <>
            <Square size={16} fill="white" />
            Buka Saklar (Matikan Lampu)
          </>
        ) : (
          <>
            <Play size={16} fill="white" />
            Hubungkan Saklar (Nyalakan Lampu)
          </>
        )}
      </button>
    </div>
  );
}
