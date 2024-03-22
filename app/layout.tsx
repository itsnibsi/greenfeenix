import type { Metadata } from "next";
import { GoogleAnalytics } from '@next/third-parties/google'
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from '@/components/Sidebar';
import Link from 'next/link';

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
  description: "Rising Sustainability",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
          <div className='flex text-gray-600 flex-col lg:flex-row flex-wrap justify-between border-orange-200 border-t-2 my-8 py-8'>
            <p className='text-center lg:text-left'>&copy; 2024- GreenFeenix</p>
            <nav className='flex flex-col lg:flex-row items-center gap-4 pt-4 lg:pt-0 [&>a]:underline [&>a:hover]:text-green-700 text-center lg:text-left'>
              <Link href="/">Home</Link>
              <Link href="/travel">Travel</Link>
              <Link href="/construction-real-estate">Construction Businesses</Link>
              <Link href="/cities-communities">Cities & Communities</Link>
              <Link href="/research-innovation">Research & Innovation</Link>
              <Link href="/contact">Contact Us</Link>
            </nav>
          </div>
        </div>
      </body>
      <GoogleAnalytics gaId="G-314EZDBXEF" />
    </html>
  );
}



