export function Character() {
  return (
    <>
      <img alt="Bloodhound" src="./assets/img/characters/bloodhound.png" className="absolute h-[120vh] top-4 left-1/2 -translate-x-1/2 md:h-[125vh] md:-top-12" />
      <div className="absolute bg-white w-44 h-24 bottom-[15%] left-[5%] md:w-56 md:h-32 md:bottom-[20%] md:left-32 2xl:w-80 2xl:h-44 rounded-blob-2 flex items-center justify-center ">
        <div className="text-gray-900 text-center">
          <h1 className="text-lg font-bold tracking-wide uppercase md:text-2xl 2xl:text-4xl">Bloodhound</h1>
          <p className="text-sm md:text-base">Technological Tracker</p>
        </div>
      </div>
    </>
  );
}
