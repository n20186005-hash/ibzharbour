import Hero from '@/components/Hero';
import About from '@/components/About';
import Explore from '@/components/Explore';
import Gallery from '@/components/Gallery';
import Reviews from '@/components/Reviews';
import Practical from '@/components/Practical';
import MapEmbed from '@/components/MapEmbed';
import References from '@/components/References';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({params: {locale}}: {params: {locale: string}}) {
  const baseUrl = 'https://ibzharbour.com';
  const path = '';
  
  return {
    alternates: {
      canonical: `${baseUrl}/${locale}${path}`,
      languages: {
        'es': `${baseUrl}/es${path}`,
        'en': `${baseUrl}/en${path}`,
        'fr': `${baseUrl}/fr${path}`,
        'zh-Hant': `${baseUrl}/zh-Hant${path}`,
        'x-default': `${baseUrl}${path}`
      }
    }
  };
}

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Explore />
      <Gallery />
      <Reviews />
      <Practical />
      <MapEmbed />
      <References />
    </>
  );
}
