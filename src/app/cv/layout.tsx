import type { Metadata } from 'next';
import { ReactNode } from 'react';
import Head from 'next/head';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  weight: ['500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Arial', 'sans-serif'],
});

const title = 'Evgenii Shcherbakov CV';

export const metadata: Metadata = {
  title,
  description: 'Evgenii Shcherbakov CV',
  robots: 'all',
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  authors: [{ name: 'Evgenii Shcherbakov', url: 'https://github.com/evgenii-shcherbakov' }],
};

export default function CvLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <title>{title}</title>
      </Head>
      <body suppressHydrationWarning={true} id="root" className={montserrat.className}>
        {children}
      </body>
    </html>
  );
}
