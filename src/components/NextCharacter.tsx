import { ArrowRightIcon } from '@heroicons/react/outline';

export function NextCharacter() {
  return (
    <div className="mx-4 absolute bottom-[18%] right-0 md:-translate-y-3/4 md:top-1/2">
      <div className="relative w-32 h-20 bg-white rounded-blob md:w-52 md:h-44">
        <img alt="Wattson" src="./assets/img/characters/wattson.png" className="hidden md:block absolute -top-32 left-6 w-40 h-auto" />
        <div className="absolute left-6 -bottom-10 text-gray-900 text-center md:-bottom-32">
          <h2 className="uppercase text-base font-bold tracking-wide md:text-3xl">Wattson</h2>
          <p className="text-xs md:text-base">Static Defender</p>
          <ArrowRightIcon className="mt-6 h-8 w-8 mx-auto text-white md:mt-2 md:h-12 md:w-12" />
        </div>
      </div>
    </div>
  );
}
