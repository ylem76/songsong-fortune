import type { Metadata } from 'next';
import './globals.css';
import { yclover, gmarket } from './fonts';
import { SWRegister } from '@/components/SWRegister';
import clsx from 'clsx';

export const metadata: Metadata = {
  metadataBase: new URL('https://fortune.songsong.work/'),
  title: '송송문구 2026년 운세 보러오세요',
  description: '2026년 나의 대박 운세가 무엇인지 알아봐요',
  icons: {
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    title: '송송문구 2026년 운세 보러오세요',
    description: '2026년 일주 계산을 통해 나의 대박운세가 무엇인지 알아봐요',
    url: 'https://fortune.songsong.work/',
    type: 'website',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: '2026년 운세 보러오세요',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko'>
      <body className={clsx(yclover.className, gmarket.className)}>
        <SWRegister />
        {children}
      </body>
    </html>
  );
}
