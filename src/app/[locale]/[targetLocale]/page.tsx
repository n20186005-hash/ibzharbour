import {notFound, redirect} from 'next/navigation';
import {routing} from '@/i18n/routing';

export default function LocaleRedirectPage({
  params: {targetLocale}
}: {
  params: {targetLocale: string};
}) {
  if (!routing.locales.includes(targetLocale as any)) {
    notFound();
  }

  redirect(`/${targetLocale}`);
}
