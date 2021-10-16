export function LeftNav() {
  return (
    <aside className="hidden absolute top-1/2 left-0 -translate-y-3/4 md:block ">
      <ul className="list-none mx-4 w-auto flex flex-col gap-y-2">
        <li className="py-6 px-3 bg-gray-800 rounded-3xl">
          <a href="/">
            <img alt="a trophy cup." src="./assets/img/cup.png" className="h-10 w-auto m-auto" />
            <span className="sr-only">Legendary Characters</span>
          </a>
        </li>
        <li className="py-6 px-3 bg-gray-800 rounded-3xl">
          <a href="/">
            <img alt="a gun." src="./assets/img/gun.png" className="h-10 w-auto m-auto" />
            <span className="sr-only">The Ultimate Squad</span>
          </a>
        </li>
        <li className="py-6 px-3 bg-gray-800 rounded-3xl">
          <a href="/">
            <img alt="a skull with a crosshair on their forehead." src="./assets/img/headshot.png" className="h-10 w-auto m-auto" />
            <span className="sr-only">Strategic Combat</span>
          </a>
        </li>
      </ul>
    </aside>
  );
}
