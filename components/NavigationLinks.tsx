'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavigationLinks() {
  const pathname = usePathname();

  return <>
    <Link href="/" className={`link ${pathname === '/' ? 'active' : ''}`}>Home</Link>
    <Link href="/travel#content" className={`link ${pathname === '/travel' ? 'active' : ''}`}>Travel Businesses</Link>
    <Link href="/construction-real-estate#content" className={`link ${pathname === '/construction-real-estate' ? 'active' : ''}`}>Construction Businesses</Link>
    <Link href="/cities-communities#content" className={`link ${pathname === '/cities-communities' ? 'active' : ''}`}>Cities & Communities</Link>
    <Link href="/research-innovation#content" className={`link ${pathname === '/research-innovation' ? 'active' : ''}`}>Research & Innovation</Link>
    <Link href="/contact#content" className={`link ${pathname === '/contact' ? 'active' : ''}`}>Contact Us</Link>
  </>
}