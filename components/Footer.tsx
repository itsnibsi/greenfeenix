import NavigationLinks from './NavigationLinks';

export default function Footer() {
  return (
    <div className='flex text-gray-600 flex-col lg:flex-row flex-wrap justify-between border-orange-200 border-t-2 my-8 py-8'>
      <p className='text-center lg:text-left'>&copy; 2024- GreenFeenix</p>
      <nav className='flex flex-col lg:flex-row items-center gap-4 pt-4 lg:pt-0 [&>a]:underline [&>a:hover]:text-orange-500 text-center lg:text-left transition-colors duration-200'>
        <NavigationLinks />
      </nav>
    </div>
  )
}