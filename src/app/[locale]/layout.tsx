import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import '../globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'meta' });
  const baseUrl = 'https://ibzharbour.com';
  const localePrefix = locale === 'es' ? '' : `/${locale}`;

  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: `${baseUrl}${localePrefix}`,
      languages: {
        'es': `${baseUrl}/`,
        'en': `${baseUrl}/en`,
        'fr': `${baseUrl}/fr`,
        'zh-Hant': `${baseUrl}/zh-Hant`,
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }
  const messages = await getMessages();
  const baseUrl = 'https://ibzharbour.com';

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <link rel="canonical" href={`${baseUrl}${locale === 'es' ? '' : `/${locale}`}`} />
        <link rel="alternate" hreflang="es" href={`${baseUrl}/`} />
        <link rel="alternate" hreflang="en" href={`${baseUrl}/en`} />
        <link rel="alternate" hreflang="fr" href={`${baseUrl}/fr`} />
        <link rel="alternate" hreflang="zh-Hant" href={`${baseUrl}/zh-Hant`} />
        <link rel="alternate" hreflang="x-default" href={`${baseUrl}/`} />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9279583389810634" crossOrigin="anonymous"></script>
        <meta name="google-adsense-account" content="ca-pub-9279583389810634" />
        <script dangerouslySetInnerHTML={{
          __html: `
            (function() {
              const theme = localStorage.getItem('theme');
              if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                document.documentElement.classList.add('dark');
              }
            })();
          `,
        }} />
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
