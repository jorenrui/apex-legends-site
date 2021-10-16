export function Skills() {
  return (
    <div className="absolute right-[35%] bottom-[11%] md:right-48 md:bottom-[20%]">
      <ul className="list-none mx-4 w-auto flex flex-row gap-x-2">
        <li className="p-1  bg-gray-800 rounded-3xl md:py-6 md:px-3 2xl:py-8 2xl:px-3">
          <a href="/">
            <img alt="eye with a crosshair." src="./assets/img/skills/eye-of-the-allfather.png" className="h-8  w-auto m-auto md:h-10 2xl:h-16"/>
            <span className="sr-only">Eye of the Allfather</span>
          </a>
        </li>
        <li className="p-1 bg-red-900 rounded-3xl md:py-6 md:px-3 2xl:py-8 2xl:px-3">
          <a href="/">
            <img alt="three paw prints with claws." src="./assets/img/skills/tracker.png" className="h-8 m-auto md:h-10 2xl:h-16 w-auto" />
            <span className="sr-only">Tracker</span>
          </a>
        </li>
        <li className="p-1 bg-gray-800 rounded-3xl md:py-6 md:px-3 2xl:py-8 2xl:px-3">
          <a href="/">
            <img alt="a claw." src="./assets/img/skills/best-of-the-hunt.png" className="h-8 w-auto m-auto md:h-10 2xl:h-16" />
            <span className="sr-only">Beast of the Hunt</span>
          </a>
        </li>
      </ul>
    </div>
  );
}
