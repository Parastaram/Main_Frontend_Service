import type { Metadata } from 'next';

import './globals.css';

export const metadata: Metadata = {
  title: 'Parastaram',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html dir="rtl" lang="fa">
      <body>{children}</body>
    </html>
  );
}
