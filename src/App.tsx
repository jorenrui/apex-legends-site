import { Nav } from './components/Nav';
import { LeftNav } from './components/LeftNav';
import { NextCharacter } from './components/NextCharacter';
import { Character } from './components/Character';
import { Skills } from './components/Skills';

function App() {
  return (
    <div className="relative bg-yellow-300 h-screen w-screen overflow-hidden">
      <Nav />

      <main className="relative block h-full w-full">
        <div className="h-full w-full bg-dirt opacity-50 scale-x-[-1]" />
        <img alt="Apex Legends Logo" src="./assets/img/logo.png" className="absolute h-1/3 top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/3 md:h-1/2" />

        <LeftNav />
        <NextCharacter />
        <Character />
        <Skills />
      </main>
    </div>
  )
}

export default App
