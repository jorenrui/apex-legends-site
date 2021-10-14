import { Nav } from './components/Nav'

function App() {
  return (
    <div className="bg-yellow-300 h-screen w-screen overflow-hidden">
      <Nav />

      <div className="h-screen w-screen bg-dirt opacity-50" aria-hidden="true" />
      <img alt="Apex Legends Logo" src="./assets/img/logo.png" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-1/2" />
      <img alt="Squad" src="./assets/img/apex-embed-about-legends.png" className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[90%]" />
    </div>
  )
}

export default App
