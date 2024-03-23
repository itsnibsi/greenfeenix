import Link from 'next/link';
import Logo from './Logo';
import NavigationLinks from './NavigationLinks';

const Sidebar = () => {
  return (
    <div className="flex flex-col p-4">
      <Link href="/" className="md:-mt-8 -mt-0"><Logo /></Link>
      <nav className="flex flex-col items-start gap-4 text-lg [&>a.active]:bg-green-500 [&>a.active]:text-white [&>a]:px-3 [&>a]:py-1 [&>a.active]:font-semibold [&>a:not(.active)]:border-b-2 [&>a]:border-white [&>a:not(.active):hover]:border-orange-200">
        <NavigationLinks />
      </nav>
    </div>
  );
};

export default Sidebar;
