import { Nav } from './components/Nav';
import { LeftNav } from './components/LeftNav';
import { NextCharacter } from './components/NextCharacter';
import { Character } from './components/Character';
import { Skills } from './components/Skills';

function App() {
  return (
    <div className="relative bg-yellow-300 h-screen w-screen overflow-hidden">
      <Nav />
      <LeftNav />
      <NextCharacter />
      <Character />
      <Skills />

      <div className="z-0" aria-hidden="true">
        <div className="h-screen w-screen bg-dirt opacity-50 scale-x-[-1]" />
        <img alt="Apex Legends Logo" src="./assets/img/logo.png" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-1/2" />
        <img alt="Bloodhound" src="./assets/img/characters/bloodhound.png" className="z-0 absolute -bottom-1/3 left-1/2 -translate-x-1/2 h-[125vh]" />
      </div>
    </div>
  )
}

export default App
