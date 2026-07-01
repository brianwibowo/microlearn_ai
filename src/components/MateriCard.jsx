import Link from 'next/link';
import { Clock, BookOpen } from 'lucide-react';
import { getSubjectLabel, getSubjectBadgeClass } from '@/data/materi';

export default function MateriCard({ materi }) {
  return (
    <Link href={`/materi/${materi.slug}`} className="materi-card">
      <div
        className="materi-card-image"
        style={{
          background: `linear-gradient(135deg, #FEF3C7, #FDE68A)`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '3rem',
        }}
      >
        ⚡
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
