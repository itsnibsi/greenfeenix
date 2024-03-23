'use client';

import Link from 'next/link';
import Logo from './Logo';
import { usePathname } from 'next/navigation';

const Sidebar = () => {
  const pathname = usePathname()

  return (
    <div className="flex flex-col p-4">
      <Link href="/" className="md:-mt-8 -mt-0"><Logo /></Link>
      <nav className="flex flex-col items-start gap-4 text-lg [&>a.active]:bg-green-500 [&>a.active]:text-white [&>a]:px-3 [&>a]:py-1 [&>a.active]:font-semibold [&>a:not(.active)]:border-b-2 [&>a]:border-white [&>a:not(.active):hover]:border-orange-200">
        <Link href="/" className={`link ${pathname === '/' ? 'active' : ''}`}>Home</Link>
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
