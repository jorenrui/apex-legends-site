import { SearchIcon } from '@heroicons/react/outline';

export function Nav() {
  return (
    <nav className="z-10 p-8 bg-transparent flex items-center justify-between text-base font-medium text-gray-900">
      <img src="./assets/img/favicon.svg" className="h-14 w-14" />
      <ul className="list-none flex items-center gap-x-32">
        <li>
          <a href="/about" className="border-b-2 border-transparent no-underline hover:border-gray-900">
            About
          </a>
        </li>
        <li>
          <a href="/legends" className="border-b-2 border-transparent no-underline hover:border-gray-900">
            Legends
          </a>
        </li>
      </ul>
      <ul className="list-none flex items-center gap-x-32">
        <li>
          <a href="/seasons" className="border-b-2 border-transparent no-underline hover:border-gray-900">
            Seasons
          </a>
        </li>
        <li>
          <a href="/shop" className="border-b-2 border-transparent no-underline hover:border-gray-900">
            Shop
          </a>
        </li>
      </ul>
      <div className="flex items-center">
        <SearchIcon className="h-6 w-6" />
      </div>
    </nav>
  );
}
