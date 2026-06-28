import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'Nexoura Admin',
  description: 'Authentication foundation for Nexoura Core.'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" dir="auto">
      <body>{children}</body>
    </html>
  );
}
