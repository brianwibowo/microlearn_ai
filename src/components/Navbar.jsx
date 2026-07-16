'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Activity } from 'lucide-react';
import Logo from './Logo';
import { NAV_LINKS } from '@/lib/constants';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  // State untuk parameter listrik real-time
  const [voltage, setVoltage] = useState(220.4);
  const [frequency, setFrequency] = useState(50.02);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);

    // Simulasi fluktuasi parameter tegangan & frekuensi PLN (wajar)
    const interval = setInterval(() => {
      setVoltage((218.8 + Math.random() * 3.4).toFixed(1));
      setFrequency((49.96 + Math.random() * 0.08).toFixed(2));
    }, 2500);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200 }}>
        <div className="navbar-inner">
          <Link href="/" className="navbar-logo">
            <Logo size={36} />
          </Link>

          <div className="navbar-links" style={{ display: 'flex', alignItems: 'center' }}>
            {/* Desktop Navigation Links */}
            <div className="nav-items-wrapper" style={{ display: 'flex', gap: '4px' }}>
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`navbar-link ${pathname === link.href ? 'active' : ''}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Panel Telemetri Listrik Digital (Tema TITL) */}
            <div 
              className="navbar-telemetry"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                background: 'rgba(15, 23, 42, 0.07)',
                border: '1px solid rgba(15, 23, 42, 0.08)',
                borderRadius: '30px',
                padding: '6px 14px',
                fontSize: '11px',
                fontFamily: 'monospace',
                fontWeight: 'bold',
                color: 'var(--neutral-800)',
                marginLeft: '12px',
                marginRight: '8px',
                transition: 'all 0.3s ease',
              }}
              title="Parameter Tegangan & Frekuensi PLN Real-Time"
            >
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#10B981' }}>
                <span 
                  style={{ 
                    width: '6px', 
                    height: '6px', 
                    borderRadius: '50%', 
                    backgroundColor: '#10B981', 
                    boxShadow: '0 0 6px #10B981',
                    display: 'inline-block'
                  }} 
                  className="pulse-dot"
                />
                LIVE
              </span>
              <span style={{ color: 'rgba(0,0,0,0.15)' }}>|</span>
              <span style={{ color: 'var(--primary)' }}>{voltage} V</span>
              <span style={{ color: 'rgba(0,0,0,0.15)' }}>|</span>
              <span style={{ color: 'var(--accent-dark)' }}>{frequency} Hz</span>
            </div>

            <Link href="/materi" className="btn btn-primary btn-sm navbar-cta">
              Mulai Belajar
            </Link>
          </div>

          <button
            className={`navbar-hamburger ${mobileOpen ? 'open' : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        {/* Jalur Neon Kawat Fasa Tembaga Di Bawah Navbar */}
        <div 
          style={{ 
            position: 'absolute', 
            bottom: 0, 
            left: 0, 
            width: '100%', 
            height: scrolled ? '2px' : '1px', 
            background: scrolled 
              ? 'linear-gradient(to right, transparent, var(--secondary), var(--primary-light), var(--secondary), transparent)'
              : 'rgba(0,0,0,0.05)',
            boxShadow: scrolled ? '0 1px 6px var(--secondary)' : 'none',
            transition: 'all 0.3s ease',
          }} 
          aria-hidden="true"
        />
      </nav>

      <div className={`mobile-menu ${mobileOpen ? 'open' : ''}`}>
        {/* Mobile Telemetry */}
        <div 
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            background: 'rgba(15, 23, 42, 0.05)',
            borderRadius: '12px',
            padding: '10px',
            fontSize: '11px',
            fontFamily: 'monospace',
            fontWeight: 'bold',
            color: 'var(--neutral-800)',
            marginBottom: '16px',
            width: '100%'
          }}
        >
          <span style={{ color: '#10B981', display: 'flex', alignItems: 'center', gap: '4px' }}>
            ● LIVE GRID
          </span>
          <span>{voltage} V</span>
          <span>{frequency} Hz</span>
        </div>

        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`mobile-menu-link ${pathname === link.href ? 'active' : ''}`}
          >
            {link.label}
          </Link>
        ))}
        <Link href="/materi" className="btn btn-primary" style={{ marginTop: '16px', width: '100%' }}>
          Mulai Belajar
        </Link>
      </div>

      {/* CSS Khusus untuk menyembunyikan elemen di layar kecil */}
      <style jsx global>{`
        @media (max-width: 1024px) {
          .navbar-telemetry {
            display: none !important;
          }
        }
        @media (max-width: 768px) {
          .nav-items-wrapper {
            display: none !important;
          }
        }
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
        .pulse-dot {
          animation: pulseGlow 1.8s infinite ease-in-out;
        }
      `}</style>
    </>
  );
}
