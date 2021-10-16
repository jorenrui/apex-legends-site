export function Character() {
  return (
    <>
      <img alt="Bloodhound" src="./assets/img/characters/bloodhound.png" className="absolute h-[120vh] top-4 left-1/2 -translate-x-1/2 md:h-[125vh] md:-top-12" />
      <div className="z-20 absolute bottom-[20%] left-32 bg-white p-8 w-56 h-32 2xl:w-80 2xl:h-44 rounded-blob-2 flex items-center justify-center">
        <div className="text-gray-900 text-center">
          <h1 className="text-2xl 2xl:text-4xl font-bold tracking-wide uppercase">Bloodhound</h1>
          <p className="text-base">Technological Tracker</p>
        </div>
      </div>
    </>
  );
}
