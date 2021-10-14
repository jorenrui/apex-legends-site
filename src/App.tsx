import { Nav } from './components/Nav';
import { LeftNav } from './components/LeftNav';
import { NextCharacter } from './components/NextCharacter';

function App() {
  return (
    <div className="relative bg-yellow-300 h-screen w-screen overflow-hidden">
      <Nav />
      <LeftNav />
      <NextCharacter />

      <div className="-z-1 h-screen w-screen bg-dirt opacity-50 scale-x-[-1]" aria-hidden="true" />
      <img alt="Apex Legends Logo" src="./assets/img/logo.png" className="-z-1 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-1/2" />
      <img alt="Bloodhound" src="./assets/img/bloodhound.png" className="-z-1 absolute -bottom-1/3 left-1/2 -translate-x-1/2 w-[480px]" />
    </div>
  )
}

export default App
