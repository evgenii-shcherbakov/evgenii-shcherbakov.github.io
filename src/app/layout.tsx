import type { Metadata } from 'next';
import { RootLayout } from '@/features/core/components/root-layout';
import '../app/globals.css';

export const metadata: Metadata = {
  title: 'Evgenii Shcherbakov website',
  description: 'Evgenii Shcherbakov website',
  robots: 'all',
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  authors: [{ name: 'Evgenii Shcherbakov', url: 'https://github.com/evgenii-shcherbakov' }],
};

export default RootLayout;
