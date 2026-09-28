import {notFound, permanentRedirect} from 'next/navigation';
import {setRequestLocale} from 'next-intl/server';
import {routing} from '@/i18n/routing';

export default async function LocaleRedirectPage({
  params
}: {
  params: Promise<{targetLocale: string}>;
}) {
  const {targetLocale} = await params;
  setRequestLocale(targetLocale);
  if (!routing.locales.includes(targetLocale as any)) {
    notFound();
  }

  // Use 301 permanent redirect for SEO
  permanentRedirect(`/${targetLocale}`);
}
