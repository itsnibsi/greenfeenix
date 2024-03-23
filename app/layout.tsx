import type { Metadata } from "next";
import { GoogleAnalytics } from '@next/third-parties/google'
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from '@/components/Sidebar';
import Link from 'next/link';
import Footer from '@/components/Footer';

const fontSans = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600']
});

export const metadata: Metadata = {
  title: {
    default: "GreenFeenix",
    template: "%s | GreenFeenix",
  },
  description: "Rising Sustainability"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="120x120" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      </head>
      <body className={fontSans.className}>
        <div className="md:container md:py-8 md:px-14 md:mx-auto">
          <div className="flex flex-col md:flex-row pb-8">
            <aside className="md:order-first w-full md:w-2/6">
              <Sidebar />
            </aside>
            <div id="content" className='p-4 pt-8 md:p-0 md:w-4/6'>
              {children}
            </div>
          </div>
          <Footer />
        </div>
      </body>
      <GoogleAnalytics gaId="G-314EZDBXEF" />
    </html>
  );
}



