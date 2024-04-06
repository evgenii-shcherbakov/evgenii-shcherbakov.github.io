import type { Metadata, ResolvingMetadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.scss';
import { MetadataBuilder } from 'utils/metadata.builder';
import { HOCProps } from 'types/hoc.types';

const montserrat = Montserrat({ weight: ['400', '700'], subsets: ['latin'] });

export async function generateMetadata(_: any, _parent: ResolvingMetadata): Promise<Metadata> {
  // const parentMetadata = await parent;

  return new MetadataBuilder()
    .setTitle(`Evgenii Shcherbakov's website`)
    .setDescription(`Evgenii Shcherbakov's personal website`)
    .setKeywords(['portfolio', 'website'])
    .build();
}

export default function RootLayout({ children }: HOCProps) {
  return (
    <html lang="en" className="dark">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
