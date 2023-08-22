import '@/styles/index.css';
import type { Metadata } from 'next';

import { Layout } from '@/layout';

export const metadata: Metadata = {
  title: 'sample',
  description: 'sample',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-white">
      <Layout>{children}</Layout>
    </html>
  );
}
