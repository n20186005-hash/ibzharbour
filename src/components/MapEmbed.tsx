'use client';
import { useTranslations } from 'next-intl';

export default function MapEmbed() {
  const t = useTranslations('map');

  return (
    <div style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <section id="map" className="section">
        <h2 className="font-serif text-3xl md:text-4xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
          {t('title')}
        </h2>
        <p className="mb-6 text-sm" style={{ color: 'var(--text-muted)' }}>
          Avinguda de Santa Eulària des Riu, 17, 07800 Eivissa, Illes Balears, Spain
        </p>

        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6208.913422013591!2d1.4371118487875538!3d38.91353748688258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x129946b74259f081%3A0xf2516b8378bddc2f!2sIbiza%20Harbour!5e0!3m2!1sen!2sus!4v1774591165761!5m2!1sen!2sus"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="mt-6">
          <a
            href="https://maps.app.goo.gl/3g3UaPpcdnbCeZxX7"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            {t('openMaps')}
          </a>
        </div>
      </section>
    </div>
  );
}
