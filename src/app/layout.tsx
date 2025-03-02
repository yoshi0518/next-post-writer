import type { Metadata } from 'next';
import type { FC } from 'react';
import { Noto_Sans_JP } from 'next/font/google';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';

import '@/styles/globals.css';

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  preload: false,
  display: 'swap',
  fallback: ['Hiragino Sans', 'Hiragino Kaku Gothic ProN', 'sans-serif'],
});

type RootLayoutProps = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: '%s | ' + siteConfig.name,
  },
  description: siteConfig.description,
  keywords: ['Next.js', 'React', 'TailwindCSS', 'shadcn/ui'],
  authors: [
    {
      name: 'xxxxx',
      url: siteConfig.url,
    },
  ],
  openGraph: {
    type: 'website',
    locale: 'ja',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [],
  },
};

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="ja">
      <body className={cn('bg-background min-h-screen antialiased', notoSansJP.className)}>{children}</body>
    </html>
  );
};

export default RootLayout;
