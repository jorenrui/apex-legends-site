
import { Disclosure } from '@headlessui/react';
import { SearchIcon, XIcon, MenuIcon } from '@heroicons/react/outline';

const NAVIGATION = [
  {
    text: 'About',
    link: '/about',
  },
  {
    text: 'Legends',
    link: '/legends',
  },
  {
    text: 'Seasons',
    link: '/seasons',
  },
  {
    text: 'Shop',
    link: '/shop',
  },
];

export function Nav() {
  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="z-20 px-8 py-2 flex items-center justify-between text-base font-medium text-gray-900 md:p-8">
            <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white md:hidden">
              <span className="sr-only">Open main menu</span>
              {open ? (
                <XIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <MenuIcon className="block h-6 w-6" aria-hidden="true" />
              )}
            </Disclosure.Button>
            <a href="/">
              <img src="./assets/img/favicon.svg" className="h-14 w-14" />
            </a>
            <ul className="hidden list-none items-center gap-x-28 md:flex">
              {NAVIGATION.map((item, index) => index < 2 && (
                <li key={item.text}>
                  <a href={item.link} className="p-1 border-b-2 border-transparent no-underline hover:text-white hover:border-white focus:text-white focus:border-white">
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
            <ul className="hidden list-none items-center gap-x-28 md:flex">
              {NAVIGATION.map((item, index) => index > 1 && (
                <li key={item.text}>
                  <a href={item.link} className="p-1 border-b-2 border-transparent no-underline hover:text-white hover:border-white focus:text-white focus:border-white">
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex items-center">
              <SearchIcon className="h-6 w-6 hover:text-white focus:text-white" />
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <ul className="py-2 px-8 space-y-1">
              {NAVIGATION.map((item) => (
                <li>
                  <a
                    href={item.link}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-900 hover:text-white "
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
