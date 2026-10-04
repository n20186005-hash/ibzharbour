import Hero from '@/components/Hero';
import About from '@/components/About';
import Explore from '@/components/Explore';
import SeoGuidesSection from '@/components/SeoGuidesSection';
import Gallery from '@/components/Gallery';
import Reviews from '@/components/Reviews';
import Practical from '@/components/Practical';
import MapEmbed from '@/components/MapEmbed';
import References from '@/components/References';
import { getTranslations, setRequestLocale } from 'next-intl/server';

export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  setRequestLocale(locale);
  const baseUrl = 'https://www.ibzharbour.com';
  const path = '';
  
  return {
    alternates: {
      canonical: `${baseUrl}/${locale}${path}`,
      languages: {
        'es': `${baseUrl}/es${path}`,
        'en': `${baseUrl}/en${path}`,
        'fr': `${baseUrl}/fr${path}`,
        'zh-Hant': `${baseUrl}/zh-Hant${path}`,
        'x-default': `${baseUrl}/es${path}`
      }
    }
  };
}

export default async function Home({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  setRequestLocale(locale);
  const heroT = await getTranslations({locale, namespace: 'hero'});
  const aboutT = await getTranslations({locale, namespace: 'about'});
  const practicalT = await getTranslations({locale, namespace: 'practical'});

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TouristAttraction',
    name: heroT('title'),
    alternateName: ['Ibiza Harbour', 'Port d\'Eivissa', 'Puerto de Ibiza', 'Port of Ibiza'],
    description: aboutT('description'),
    url: `https://www.ibzharbour.com/${locale}`,
    telephone: '+34 971 31 06 11',
    isAccessibleForFree: true,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Avinguda de Santa Eulària des Riu, 17',
      postalCode: '07800',
      addressLocality: 'Eivissa',
      addressRegion: 'Illes Balears',
      addressCountry: 'ES'
    },
    sameAs: [
      'https://www.ibzharbour.com/',
      'https://maps.app.goo.gl/3g3UaPpcdnbCeZxX7'
    ],
    touristType: ['Cruise passengers', 'Ferry passengers', 'Sightseers'],
    hasMap: 'https://maps.app.goo.gl/3g3UaPpcdnbCeZxX7',
    additionalProperty: [
      {
        '@type': 'PropertyValue',
        name: practicalT('hours.label'),
        value: practicalT('hours.value')
      },
      {
        '@type': 'PropertyValue',
        name: practicalT('mapCode.label'),
        value: practicalT('mapCode.value')
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}}
      />
      <Hero />
      <About />
      <Explore />
      <SeoGuidesSection />
      <Gallery />
      <Reviews />
      <Practical />
      <MapEmbed />
      <References />
    </>
  );
}
