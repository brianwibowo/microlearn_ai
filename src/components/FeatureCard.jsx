import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  colorClass,
  href,
  actionText = 'Pelajari Selengkapnya',
}) {
  const cardBody = (
    <>
      <div className={`feature-icon ${colorClass}`}>
        <Icon size={28} />
      </div>
      <h3>{title}</h3>
      <p style={{ flex: 1, margin: '8px 0 16px 0' }}>{description}</p>
      <div
        style={{
          marginTop: 'auto',
          paddingTop: '12px',
          borderTop: '1px solid var(--neutral-100)',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          fontSize: 'var(--fs-small)',
          fontWeight: 600,
          color: 'var(--primary)',
        }}
      >
        <span>{actionText}</span>
        <ArrowRight size={14} />
      </div>
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className="feature-card feature-card-interactive"
        style={{
          textDecoration: 'none',
          color: 'inherit',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          cursor: 'pointer',
        }}
      >
        {cardBody}
      </Link>
    );
  }

  return (
    <div className="feature-card" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      {cardBody}
    </div>
  );
}
