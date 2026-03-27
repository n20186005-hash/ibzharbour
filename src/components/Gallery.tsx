'use client';
import { useTranslations } from 'next-intl';
import { useState, useEffect } from 'react';

const PHOTOS = Array.from({ length: 18 }, (_, i) => ({
  src: `/gallery/images (${i + 1}).jpg`,
  thumb: `/gallery/images (${i + 1}).jpg`,
}));

const PHOTOS_PER_PAGE = 6;

export default function Gallery() {
  const t = useTranslations('gallery');
  const [currentPage, setCurrentPage] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const totalPages = Math.ceil(PHOTOS.length / PHOTOS_PER_PAGE);

  const getImageAlt = (index: number) => {
    const alts = [
      'Ibiza Harbour panoramic view',
      'Luxury yachts at Marina',
      'Dalt Vila old town skyline',
      'Sunset over the Mediterranean',
      'Waterfront promenade',
      'Historic harbour area',
      'Evening atmosphere',
      'Marina at dusk',
      'Harbour architecture',
      'Coastal scenery',
      'Nautical lifestyle',
      'Port d\'Eivissa',
      'Ibiza coastline',
      'Mediterranean marina',
      'Old town walls',
      'Seaside views',
      'Yacht harbour',
      'Harbourfront scene',
    ];
    return alts[index % alts.length];
  };

  const getImageCaption = (index: number) => {
    const captions = [
      'Harbour panoramic view',
      'Marina luxury yachts',
      'Dalt Vila from the sea',
      'Mediterranean sunset',
      'Passeig Marítim promenade',
      'Historic harbour',
      'Evening ambience',
      'Marina at twilight',
      'Harbour architecture',
      'Coastal scenery',
      'Yacht lifestyle',
      'Port d\'Eivissa',
      'Ibiza coastline',
      'Mediterranean marina',
      'Ancient walls',
      'Seaside views',
      'Yacht harbour',
      'Harbourfront',
    ];
    return captions[index % captions.length];
  };

  const currentPhotos = PHOTOS.slice(
    currentPage * PHOTOS_PER_PAGE,
    (currentPage + 1) * PHOTOS_PER_PAGE
  );

  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const openLightbox = (photoIndex: number) => {
    const globalIndex = currentPage * PHOTOS_PER_PAGE + photoIndex;
    setLightboxIndex(globalIndex);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const handleLightboxPrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + PHOTOS.length) % PHOTOS.length);
    }
  };

  const handleLightboxNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % PHOTOS.length);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') handleLightboxPrev();
      if (e.key === 'ArrowRight') handleLightboxNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex]);

  return (
    <>
      <section id="gallery" className="section">
        <h2 className="font-serif text-3xl md:text-4xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
          {t('title')}
        </h2>
        <p className="mb-8" style={{ color: 'var(--text-muted)' }}>{t('subtitle')}</p>

        <div className="gallery-grid">
          {currentPhotos.map((photo, i) => (
            <div
              key={i}
              className="gallery-item"
              onClick={() => openLightbox(i)}
              style={{ cursor: 'pointer' }}
            >
              <img src={photo.src} alt={getImageAlt(currentPage * PHOTOS_PER_PAGE + i)} loading="lazy" />
              <div className="gallery-overlay">
                <span className="gallery-view-text">View Original</span>
              </div>
              <div className="caption">{getImageCaption(currentPage * PHOTOS_PER_PAGE + i)}</div>
            </div>
          ))}
        </div>

        <div className="gallery-pagination">
          <button onClick={handlePrevPage} className="gallery-arrow" aria-label="Previous page">
            ‹
          </button>
          <div className="gallery-dots">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i)}
                className={`gallery-dot ${i === currentPage ? 'active' : ''}`}
                aria-label={`Go to page ${i + 1}`}
              />
            ))}
          </div>
          <button onClick={handleNextPage} className="gallery-arrow" aria-label="Next page">
            ›
          </button>
        </div>

        <p className="mt-6 text-sm" style={{ color: 'var(--text-muted)' }}>
          {t('source')}{' '}
          <a
            href="https://maps.app.goo.gl/7WjDJAmt9yVvMMjn7"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--accent)' }}
            className="hover:underline"
          >
            {t('viewAll')}
          </a>
        </p>
      </section>

      {lightboxIndex !== null && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox} aria-label="Close">
            ×
          </button>
          <button
            className="lightbox-nav lightbox-prev"
            onClick={(e) => { e.stopPropagation(); handleLightboxPrev(); }}
            aria-label="Previous image"
          >
            ‹
          </button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img
              src={PHOTOS[lightboxIndex].src}
              alt={getImageAlt(lightboxIndex)}
              className="lightbox-image"
            />
            <p className="lightbox-caption">{getImageCaption(lightboxIndex)}</p>
            <p className="lightbox-counter">
              {lightboxIndex + 1} / {PHOTOS.length}
            </p>
          </div>
          <button
            className="lightbox-nav lightbox-next"
            onClick={(e) => { e.stopPropagation(); handleLightboxNext(); }}
            aria-label="Next image"
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}
