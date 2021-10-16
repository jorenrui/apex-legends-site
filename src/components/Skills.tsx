export function Skills() {
  return (
    <div className="z-10 absolute bottom-12 right-48">
      <ul className="list-none mx-4 w-auto flex flex-row gap-x-2">
        <li className="py-6 px-3 bg-gray-800 rounded-3xl 2xl:py-8 2xl:px-3">
          <img src="./assets/img/skills/eye-of-the-allfather.png" className="h-10 2xl:h-16 w-auto m-auto" />
        </li>
        <li className="py-6 px-3 bg-red-900 rounded-3xl 2xl:py-8 2xl:px-3">
          <img src="./assets/img/skills/tracker.png" className="h-10 2xl:h-16 w-auto m-auto" />
        </li>
        <li className="py-6 px-3 bg-gray-800 rounded-3xl 2xl:py-8 2xl:px-3">
          <img src="./assets/img/skills/best-of-the-hunt.png" className="h-10 2xl:h-16 w-auto m-auto" />
        </li>
      </ul>
    </div>
  );
}
