import { ReactNode } from 'react';

export function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body id="root">{children}</body>
    </html>
  );
}
