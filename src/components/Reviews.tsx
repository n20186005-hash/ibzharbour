'use client';
import { useTranslations } from 'next-intl';

export default function Reviews() {
  const t = useTranslations('reviews');
  const stats = ['rating', 'reviewCount', 'lastChecked'] as const;
  const notes: string[] = t.raw('notes');

  return (
    <div style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <section id="reviews" className="section">
        <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
          {t('title')}
        </h2>
        <p className="mb-10 text-sm leading-relaxed max-w-2xl" style={{ color: 'var(--text-muted)' }}>
          {t('declaration')}
        </p>

        <div className="grid md:grid-cols-3 gap-4 mb-10">
          {stats.map((stat) => (
            <div key={stat} className="review-card">
              <div className="text-xs uppercase tracking-[0.2em] mb-2" style={{ color: 'var(--text-muted)' }}>
                {t(`stats.${stat}.label`)}
              </div>
              <div className="font-serif text-3xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                {t(`stats.${stat}.value`)}
              </div>
            </div>
          ))}
        </div>

        <h3 className="font-serif text-xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
          {t('notesTitle')}
        </h3>
        <ul className="space-y-3 max-w-3xl">
          {notes.map((note, index) => (
            <li key={index} className="flex items-start gap-3" style={{ color: 'var(--text-secondary)' }}>
              <span className="mt-1.5 flex-shrink-0" style={{ color: 'var(--accent)' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              </span>
              <span>{note}</span>
            </li>
          ))}
        </ul>
        </div>
        {/* See all link */}
        <div className="mt-8 text-center">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium hover:opacity-70 transition-opacity"
            style={{ color: 'var(--accent)' }}
            title={t('seeAll')}
          >
            {t('seeAll')}
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </a>
        </div>
      </section>
    </div>
  );
}
