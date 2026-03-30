import { getTranslations } from 'next-intl/server';
import CookieSettingsClient from './CookieSettingsClient';

export async function generateMetadata({params: {locale}}: {params: {locale: string}}) {
  const t = await getTranslations({locale, namespace: 'cookieSettings'});
  const baseUrl = 'https://ibzharbour.com';
  const path = '/cookie-settings';
  
  return {
    title: t('title'),
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

export default function CookieSettings() {
  return <CookieSettingsClient />;
}