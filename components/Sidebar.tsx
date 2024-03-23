import Link from "next/link";
import Logo from "./Logo";
import NavigationLinks from "./NavigationLinks";

const Sidebar = () => {
  return (
    <div className="flex flex-col p-4">
      <Link href="/" className="-mt-0 md:-mt-8">
        <Logo />
      </Link>
      <nav className="items-justify flex flex-col gap-4 text-lg text-gray-800 [&>a.active]:border-green-500 [&>a.active]:text-green-500 [&>a.active]:underline [&>a:hover]:underline [&>a:not(.active):hover]:border-green-500 [&>a]:block [&>a]:border-l-2 [&>a]:border-white [&>a]:px-3 [&>a]:py-1 [&>a]:md:mr-8">
        <NavigationLinks />
      </nav>
    </div>
  );
};

export default Sidebar;
