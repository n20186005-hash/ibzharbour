import {NextIntlClientProvider} from 'next-intl';
import {getMessages, getTranslations, setRequestLocale} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import Script from 'next/script';
import '../globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  setRequestLocale(locale);
  const t = await getTranslations({locale, namespace: 'meta'});
  const baseUrl = 'https://www.ibzharbour.com';

  return {
    metadataBase: new URL(baseUrl),
    title: t('title'),
    description: t('description')
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  setRequestLocale(locale);
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }
  const messages = await getMessages();

  return (
    <>
      <NextIntlClientProvider messages={messages}>
        <Header />
        <main>{children}</main>
        <Footer />
      </NextIntlClientProvider>
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9279583389810634"
        crossOrigin="anonymous"
        strategy="lazyOnload"
      />
    </>
  );
}
