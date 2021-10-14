function App() {
  return (
    <div className="bg-yellow-300 h-screen w-screen overflow-hidden">
      <div className="h-full w-full bg-dirt opacity-50" aria-hidden="true" />
      <img alt="Apex Lengeds Logo" src="./assets/logo.png" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-1/2" />
      <img alt="Bloodhound" src="./assets/bloodhound.png" className="absolute bottom-0 left-1/2 -translate-x-1/2 h-5/6" />
    </div>
  )
}

export default App
