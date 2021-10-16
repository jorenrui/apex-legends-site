export function Character() {
  return (
    <>
      <img alt="Bloodhound" src="./assets/img/characters/bloodhound.png" className="z-10 absolute -bottom-1/3 left-1/2 -translate-x-1/2 h-[115%] md:h-[125vh]" />
      <div className="z-10 absolute bottom-12 left-32 bg-white p-8 w-56 h-32 2xl:w-80 2xl:h-44 rounded-blob-2 flex items-center justify-center">
        <div className="text-gray-900 text-center">
          <h1 className="text-2xl 2xl:text-4xl font-bold tracking-wide uppercase">Bloodhound</h1>
          <p className="text-base">Technological Tracker</p>
        </div>
      </div>
    </>
  );
}
