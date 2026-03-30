import {notFound, permanentRedirect} from 'next/navigation';
import {routing} from '@/i18n/routing';

export default function LocaleRedirectPage({
  params: {targetLocale}
}: {
  params: {targetLocale: string};
}) {
  if (!routing.locales.includes(targetLocale as any)) {
    notFound();
  }

  // Use 301 permanent redirect for SEO
  permanentRedirect(`/${targetLocale}`);
}
