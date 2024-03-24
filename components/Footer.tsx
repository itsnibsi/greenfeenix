import NavigationLinks from "./NavigationLinks";

export default function Footer() {
  return (
    <div className="my-8 flex flex-col flex-wrap justify-between border-t-2 border-orange-200 py-8 text-gray-600 lg:flex-row">
      <p className="text-center lg:text-left">&copy;2024- GreenFeenix</p>
      <nav className="flex flex-col items-center gap-4 pt-4 text-center text-gray-500 underline-offset-4 transition-colors duration-200 lg:flex-row lg:pt-0 lg:text-left [&>a:hover]:text-gray-600 [&>a:hover]:underline">
        <NavigationLinks />
      </nav>
    </div>
  );
}
