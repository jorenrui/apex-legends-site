import { ArrowRightIcon } from '@heroicons/react/outline';

export function NextCharacter() {
  return (
    <div className="mx-4 absolute top-1/2 right-0 -translate-y-3/4">
      <div className="relative w-52 h-44 bg-white rounded-blob">
        <img alt="Wattson" src="./assets/img/characters/wattson.png" className="absolute -top-32 left-6 w-40 h-auto" />
        <div className="absolute left-6 -bottom-32 text-gray-900 text-center">
          <h2 className="uppercase text-3xl font-bold tracking-wide">Wattson</h2>
          <p className="text-base">Static Defender</p>
          <ArrowRightIcon className="mt-2 h-12 w-12 mx-auto text-white" />
        </div>
      </div>
    </div>
  );
}
