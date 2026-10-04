import type {MetadataRoute} from 'next';
import {routing} from '@/i18n/routing';

const baseUrl = 'https://www.ibzharbour.com';
const routes = ['', '/privacy-policy', '/terms-of-service', '/cookie-settings'];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1
    }
  ];

  for (const locale of routing.locales) {
    for (const route of routes) {
      entries.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: now,
        changeFrequency: route === '' ? 'weekly' : 'monthly',
        priority: route === '' ? 0.9 : 0.3
      });
    }
  }

  return entries;
}
