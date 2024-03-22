'use client';

import Link from 'next/link';
import Logo from './Logo';
import { usePathname } from 'next/navigation';

const Sidebar = () => {
  const pathname = usePathname()

  return (
    <div className="flex flex-col items-center">
      <Link href="/" className="-mt-8"><Logo /></Link>
      <nav className="flex flex-col items-start gap-4 [&>a.active]:text-green-700 [&>a.active]:font-semibold [&>a]:underline [&>a:hover]:text-green-700">
        <Link href="/" className={`link ${pathname === '/' ? 'active' : ''}`}>Home</Link>
        <Link href="/travel" className={`link ${pathname === '/travel' ? 'active' : ''}`}>Travel Businesses</Link>
        <Link href="/construction-real-estate" className={`link ${pathname === '/construction-real-estate' ? 'active' : ''}`}>Construction Businesses</Link>
        <Link href="/cities-communities" className={`link ${pathname === '/cities-communities' ? 'active' : ''}`}>Cities & Communities</Link>
        <Link href="/research-innovation" className={`link ${pathname === '/research-innovation' ? 'active' : ''}`}>Research & Innovation</Link>
        <Link href="/contact" className={`link ${pathname === '/contact' ? 'active' : ''}`}>Contact Us</Link>
      </nav>
    </div>
  );
};

export default Sidebar;
