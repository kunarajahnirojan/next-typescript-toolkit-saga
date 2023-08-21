import '@/styles/index.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Layout } from '@/layout';

const inter = Inter({ subsets: ['latin'] });

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
    <html lang="en">
      <Layout>
        <body className={inter.className}>{children}</body>
      </Layout>
    </html>
  );
}
