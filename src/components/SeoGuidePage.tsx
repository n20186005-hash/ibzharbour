'use client';

import type {AnySeoGuideSlug, SeoGuideLocaleBundle, SeoGuidePageContent, SupportedLocale} from '@/content/seo-guides';

type Props = {
  locale: SupportedLocale;
  slug: AnySeoGuideSlug;
  bundle: SeoGuideLocaleBundle;
  page: SeoGuidePageContent;
  pageTitles: Record<string, string>;
};

export default function SeoGuidePage({locale, slug, bundle, page, pageTitles}: Props) {
  return (
    <div className="section pt-24">
      <a
        href={`/${locale}`}
        className="inline-flex items-center gap-2 mb-8 text-sm font-medium hover:opacity-70 transition-opacity"
        style={{color: 'var(--accent)'}}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
        {bundle.common.backHome}
      </a>

      <div className="max-w-4xl">
        <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4" style={{color: 'var(--text-primary)'}}>
          {page.title}
        </h1>
        <p className="text-lg leading-relaxed mb-6" style={{color: 'var(--text-secondary)'}}>
          {page.intro}
        </p>
        <div className="flex flex-wrap items-center gap-3 mb-10">
          <a
            href={page.primaryLink.href}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            {page.primaryLink.label}
          </a>
          <span className="tag">{slug}</span>
          <span className="tag">{bundle.common.updatedLabel}: {page.lastChecked}</span>
        </div>
      </div>

      <section className="mb-12">
        <h2 className="font-serif text-2xl md:text-3xl font-bold mb-6" style={{color: 'var(--text-primary)'}}>
          {bundle.common.quickFactsTitle}
        </h2>
        <div className="grid md:grid-cols-2 gap-4 max-w-4xl">
          {page.quickFacts.map((fact) => (
            <div key={fact.label} className="review-card">
              <div className="text-xs uppercase tracking-[0.2em] mb-2" style={{color: 'var(--text-muted)'}}>
                {fact.label}
              </div>
              <div className="text-base leading-relaxed" style={{color: 'var(--text-primary)'}}>
                {fact.value}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-4xl space-y-10 mb-12">
        {page.sections.map((section) => (
          <section key={section.title}>
            <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4" style={{color: 'var(--text-primary)'}}>
              {section.title}
            </h2>
            <div className="space-y-4">
              {section.paragraphs.map((paragraph, index) => (
                <p key={index} className="leading-relaxed" style={{color: 'var(--text-secondary)'}}>
                  {paragraph}
                </p>
              ))}
            </div>
            {section.bullets && (
              <ul className="mt-5 space-y-3">
                {section.bullets.map((bullet, index) => (
                  <li key={index} className="flex items-start gap-3" style={{color: 'var(--text-secondary)'}}>
                    <span className="mt-1.5 flex-shrink-0" style={{color: 'var(--accent)'}}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    </span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>

      {page.thematicLinks && page.thematicLinks.length > 0 && (
        <section className="mb-12 max-w-4xl">
          <h2 className="font-serif text-2xl md:text-3xl font-bold mb-6" style={{color: 'var(--text-primary)'}}>
            {bundle.common.thematicTitle}
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {page.thematicLinks.map((thematicSlug) => (
              <a
                key={thematicSlug}
                href={`/${locale}/${thematicSlug}`}
                className="review-card block hover:no-underline"
                style={{textDecoration: 'none'}}
              >
                <div className="text-xs uppercase tracking-[0.2em] mb-2" style={{color: 'var(--text-muted)'}}>
                  {thematicSlug}
                </div>
                <div className="font-serif text-xl font-semibold" style={{color: 'var(--text-primary)'}}>
                  {pageTitles[thematicSlug]}
                </div>
              </a>
            ))}
          </div>
        </section>
      )}

      <section className="mb-12">
        <h2 className="font-serif text-2xl md:text-3xl font-bold mb-6" style={{color: 'var(--text-primary)'}}>
          {bundle.common.faqsTitle}
        </h2>
        <div className="grid gap-4 max-w-4xl">
          {page.faqs.map((faq) => (
            <div key={faq.question} className="review-card">
              <h3 className="font-serif text-xl font-semibold mb-3" style={{color: 'var(--text-primary)'}}>
                {faq.question}
              </h3>
              <p style={{color: 'var(--text-secondary)'}}>
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12 max-w-4xl">
        <h2 className="font-serif text-2xl md:text-3xl font-bold mb-6" style={{color: 'var(--text-primary)'}}>
          {bundle.common.relatedTitle}
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          {page.related.map((relatedSlug) => (
            <a
              key={relatedSlug}
              href={`/${locale}/${relatedSlug}`}
              className="review-card block hover:no-underline"
              style={{textDecoration: 'none'}}
            >
              <div className="text-xs uppercase tracking-[0.2em] mb-2" style={{color: 'var(--text-muted)'}}>
                {relatedSlug}
              </div>
              <div className="font-serif text-xl font-semibold" style={{color: 'var(--text-primary)'}}>
                {pageTitles[relatedSlug]}
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="max-w-4xl rounded-2xl border p-5 md:p-6" style={{backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)'}}>
        <h2 className="font-serif text-2xl font-bold mb-3" style={{color: 'var(--text-primary)'}}>
          {bundle.common.sourceTitle}
        </h2>
        <p className="mb-3" style={{color: 'var(--text-secondary)'}}>
          {page.sourceNote}
        </p>
        <p className="text-sm" style={{color: 'var(--text-muted)'}}>
          {bundle.common.updatedLabel}: {page.lastChecked}
        </p>
      </section>
    </div>
  );
}
