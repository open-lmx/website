import './globals.css';
import type { ReactNode } from 'react';

export const metadata = {
  title: 'Open LMX',
  description: 'Learning Experience Management System',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
