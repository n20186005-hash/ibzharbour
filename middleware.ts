import createMiddleware from 'next-intl/middleware';
import {NextRequest, NextResponse} from 'next/server';
import {routing} from './src/i18n/routing';

const handleI18nRouting = createMiddleware(routing);
const locales = new Set(routing.locales);
const defaultLocale = routing.defaultLocale;
const policyRoutes = new Set(['/privacy-policy', '/terms-of-service', '/cookie-settings']);

export default function middleware(request: NextRequest) {
  const {pathname, search} = request.nextUrl;
  const normalizedPathname = pathname !== '/' && pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
  const segments = pathname.split('/').filter(Boolean);

  if (policyRoutes.has(normalizedPathname)) {
    const url = new URL(`/${defaultLocale}${normalizedPathname}${search}`, request.url);
    return NextResponse.redirect(url, 308);
  }

  if (segments.length >= 2 && locales.has(segments[0] as any) && locales.has(segments[1] as any)) {
    const [, targetLocale, ...rest] = segments;
    const normalizedPath = `/${targetLocale}${rest.length ? `/${rest.join('/')}` : ''}`;
    const url = new URL(`${normalizedPath}${search}`, request.url);
    return NextResponse.redirect(url, 308);
  }

  return handleI18nRouting(request);
}

export const config = {
  matcher: ['/((?!api|trpc|_next|_vercel|.*\\..*).*)']
};
