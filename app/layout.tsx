import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import './globals.css';
import { AppConfig } from '@/lib/app.config';

export const metadata: Metadata = AppConfig

const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--primary-font', style: 'normal' });

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>SwiftSend</title>
      </head>
      <body className={inter.variable}>
        <Toaster
          position="top-center"
          reverseOrder={false}
          gutter={8}
          containerClassName="toaster-wrapper"
          containerStyle={{}}
          toastOptions={{
            className: 'single-toaster',
            duration: 5000,
            removeDelay: 1000,
            style: { background: '#363636', color: '#fff', padding: '5px 5px', fontSize: '14px' },
            success: { style: { background: '#000', color: '#fff' } },
            error: { style: { background: '#b33234', color: '#fff' } }
          }}
        />
        {children}
      </body>
    </html>
  );
}
