import { getTranslations, setRequestLocale } from 'next-intl/server';
import CookieSettingsClient from './CookieSettingsClient';

export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  setRequestLocale(locale);
  const t = await getTranslations({locale, namespace: 'cookieSettings'});
  const baseUrl = 'https://www.ibzharbour.com';
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
        'x-default': `${baseUrl}/es${path}`
      }
    }
  };
}

export default function CookieSettings() {
  return <CookieSettingsClient />;
}
