import React from 'react';

export default function Logo({ size = 32, showText = true, className = '', light = false }) {
  // Select text color gradient based on background (light logo for dark footer, dark logo for white navbar)
  const textGradient = light 
    ? 'linear-gradient(135deg, #F8FAFC, #94A3B8)' 
    : 'linear-gradient(135deg, #0F172A, #334155)';

  return (
    <div className={`logo-container ${className}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ filter: 'drop-shadow(0 2px 8px rgba(14, 165, 233, 0.3))', flexShrink: 0 }}
      >
        <defs>
          <linearGradient id="logo-electric-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38BDF8" />
            <stop offset="50%" stopColor="#0EA5E9" />
            <stop offset="100%" stopColor="#1E3A8A" />
          </linearGradient>
          <linearGradient id="logo-energy-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FBBF24" />
            <stop offset="100%" stopColor="#F59E0B" />
          </linearGradient>
          <filter id="logo-glow" x="-10%" y="-10%" width="120%" height="120%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Outer Circuit Network Shape */}
        <circle cx="50" cy="50" r="44" stroke="url(#logo-electric-grad)" strokeWidth="3" strokeDasharray="6 4" opacity="0.4" />
        
        {/* Circuit Connections */}
        <path d="M15 50 H30 M70 50 H85 M50 15 V25 M50 75 V85" stroke="url(#logo-electric-grad)" strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />
        <circle cx="30" cy="50" r="3" fill="#38BDF8" />
        <circle cx="70" cy="50" r="3" fill="#38BDF8" />
        <circle cx="50" cy="25" r="3" fill="#0EA5E9" />
        <circle cx="50" cy="75" r="3" fill="#1E3A8A" />

        {/* Inner Lightbulb Outer Outline */}
        <path
          d="M35 42C35 33.7157 41.7157 27 50 27C58.2843 27 65 33.7157 65 42C65 48.0673 61.3916 53.2845 56.2426 55.617C55.085 56.1415 54.5062 56.4037 54.2531 57.0673C54 57.7309 54 58.75 54 60.7882V62H46V60.7882C46 58.75 46 57.7309 45.7469 57.0673C45.4938 56.4037 44.915 56.1415 43.7574 55.617C38.6084 53.2845 35 48.0673 35 42Z"
          stroke="url(#logo-electric-grad)"
          strokeWidth="4.5"
          strokeLinejoin="round"
        />

        {/* Lightbulb Thread / Base */}
        <path d="M43 68H57 M45 74H55 M48 80H52" stroke="url(#logo-electric-grad)" strokeWidth="4" strokeLinecap="round" />

        {/* Floating Core Lightning Bolt / Filament */}
        <path
          d="M52 35L44 48H52L48 59L58 45H50L52 35Z"
          fill="url(#logo-energy-grad)"
          filter="url(#logo-glow)"
        />
      </svg>
      {showText && (
        <span
          className="logo-text"
          style={{
            fontWeight: 800,
            fontSize: '1.25rem',
            letterSpacing: '-0.5px',
            background: textGradient,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          MicroLearn<span style={{ color: '#0EA5E9' }}>.AI</span>
        </span>
      )}
    </div>
  );
}
