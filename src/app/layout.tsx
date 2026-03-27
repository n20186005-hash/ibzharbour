import type {Metadata} from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Ibiza Harbour | Port d\'Eivissa',
  description: 'Complete guide to Ibiza Harbour (Port d\'Eivissa). Hours, directions, photos and reviews.',
  metadataBase: new URL('https://www.ibzharbour.com'),
  other: {
    'google-adsense-account': 'ca-pub-9279583389810634'
  }
};

const themeScript = `
  (function() {
    try {
      const theme = localStorage.getItem('theme');
      if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
      }
    } catch (error) {}
  })();
`;

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body>
        <Script id="theme-script" strategy="beforeInteractive">
          {themeScript}
        </Script>
        {children}
      </body>
    </html>
  );
}
