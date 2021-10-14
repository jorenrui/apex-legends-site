export function LeftNav() {
  return (
    <ul className="absolute top-1/2 left-0 -translate-y-1/2 list-none mx-4 w-auto flex flex-col gap-y-2">
      <li className="py-6 px-3 bg-gray-800 rounded-3xl">
        <img src="./assets/img/cup.png" className="h-10 w-auto m-auto" />
      </li>
      <li className="py-6 px-3 bg-gray-800 rounded-3xl">
        <img src="./assets/img/gun.png" className="h-10 w-auto m-auto" />
      </li>
      <li className="py-6 px-3 bg-gray-800 rounded-3xl">
        <img src="./assets/img/headshot.png" className="h-10 w-auto m-auto" />
      </li>
    </ul>
  );
}
