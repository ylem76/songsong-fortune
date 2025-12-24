// app/fonts.ts
import localFont from 'next/font/local';

export const yclover = localFont({
  src: [
    {
      path: './fonts/YClover-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/YClover-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  display: 'swap',
});

export const gmarket = localFont({
  src: [
    {
      path: './fonts/GmarketSansLight.woff',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/GmarketSansMedium.woff',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/GmarketSansBold.woff',
      weight: '700',
      style: 'normal',
    },
  ],
  display: 'swap',
});
