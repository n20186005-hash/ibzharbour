import {notFound, permanentRedirect} from 'next/navigation';
import {setRequestLocale} from 'next-intl/server';
import {routing} from '@/i18n/routing';
import SeoGuidePage from '@/components/SeoGuidePage';
import {
  allSeoGuideSlugs,
  getSeoGuidePage,
  getSeoGuideTitleMap,
  isSeoGuideSlug,
  isSupportedLocale,
  seoGuideContent
} from '@/content/seo-guides';

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    allSeoGuideSlugs.map((targetLocale) => ({locale, targetLocale}))
  );
}

export async function generateMetadata({
  params
}: {
  params: Promise<{locale: string; targetLocale: string}>;
}) {
  const {locale, targetLocale} = await params;
  setRequestLocale(locale);

  if (!isSupportedLocale(locale) || !isSeoGuideSlug(targetLocale)) {
    return {};
  }

  const page = getSeoGuidePage(locale, targetLocale);
  if (!page) {
    return {};
  }
  const baseUrl = 'https://www.ibzharbour.com';

  return {
    title: page.title,
    description: page.description,
    alternates: {
      canonical: `${baseUrl}/${locale}/${targetLocale}`,
      languages: {
        es: `${baseUrl}/es/${targetLocale}`,
        en: `${baseUrl}/en/${targetLocale}`,
        fr: `${baseUrl}/fr/${targetLocale}`,
        'zh-Hant': `${baseUrl}/zh-Hant/${targetLocale}`,
        'x-default': `${baseUrl}/en/${targetLocale}`
      }
    }
  };
}

export default async function LocaleRedirectPage({
  params
}: {
  params: Promise<{locale: string; targetLocale: string}>;
}) {
  const {locale, targetLocale} = await params;
  setRequestLocale(locale);

  if (routing.locales.includes(targetLocale as any)) {
    permanentRedirect(`/${targetLocale}`);
  }

  if (!isSupportedLocale(locale) || !isSeoGuideSlug(targetLocale)) {
    notFound();
  }

  const bundle = seoGuideContent[locale];
  const page = getSeoGuidePage(locale, targetLocale);
  if (!page) {
    notFound();
  }
  const linkedSlugs = [...new Set([...(page.related ?? []), ...(page.thematicLinks ?? [])])];
  const pageTitles = getSeoGuideTitleMap(locale, linkedSlugs);
  const articleUrl = `https://www.ibzharbour.com/${locale}/${targetLocale}`;
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: page.title,
    description: page.description,
    inLanguage: locale,
    mainEntityOfPage: articleUrl,
    about: ['Ibiza Harbour', 'Port d\'Eivissa', targetLocale],
    dateModified: '2026-10-04',
    author: {
      '@type': 'Organization',
      name: 'ibzharbour.com'
    },
    publisher: {
      '@type': 'Organization',
      name: 'ibzharbour.com'
    }
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: page.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{__html: JSON.stringify(articleJsonLd)}}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{__html: JSON.stringify(faqJsonLd)}}
      />
      <SeoGuidePage locale={locale} slug={targetLocale} bundle={bundle} page={page} pageTitles={pageTitles} />
    </>
  );
}
