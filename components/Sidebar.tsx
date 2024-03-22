'use client';

import Link from 'next/link';
import Logo from './Logo';
import { usePathname } from 'next/navigation';

const Sidebar = () => {
  const pathname = usePathname()

  return (
    <div className="flex flex-col p-4">
      <Link href="/" className="md:-mt-8 -mt-0"><Logo /></Link>
      <nav className="flex flex-col items-start gap-4 [&>a.active]:text-green-700 [&>a.active]:font-semibold [&>a]:underline [&>a:hover]:text-green-700">
        <Link href="/#content" className={`link ${pathname === '/' ? 'active' : ''}`}>Home</Link>
        <Link href="/travel#content" className={`link ${pathname === '/travel' ? 'active' : ''}`}>Travel Businesses</Link>
        <Link href="/construction-real-estate#content" className={`link ${pathname === '/construction-real-estate' ? 'active' : ''}`}>Construction Businesses</Link>
        <Link href="/cities-communities#content" className={`link ${pathname === '/cities-communities' ? 'active' : ''}`}>Cities & Communities</Link>
        <Link href="/research-innovation#content" className={`link ${pathname === '/research-innovation' ? 'active' : ''}`}>Research & Innovation</Link>
        <Link href="/contact#content" className={`link ${pathname === '/contact' ? 'active' : ''}`}>Contact Us</Link>
      </nav>
    </div>
  );
};

export default Sidebar;
