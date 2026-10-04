'use client';
import { useTranslations } from 'next-intl';

export default function References() {
  const t = useTranslations('references');
  const sources = ['google', 'ports', 'city'] as const;

  return (
    <section className="section">
      <h2 className="font-serif text-2xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
        {t('title')}
      </h2>
      <p className="text-sm mb-6 max-w-2xl" style={{ color: 'var(--text-muted)' }}>
        {t('disclaimer')}
      </p>
      <ul className="space-y-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
        {sources.map((source) => (
          <li key={source} className="flex items-center gap-2">
            <span style={{ color: 'var(--accent)' }}>•</span>
            {t(`sources.${source}`)}
          </li>
        ))}
      </ul>
    </section>
  );
}
