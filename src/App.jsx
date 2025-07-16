import Navigation from "./components/Navigation";
import Content from "./components/Content";
import '../src/App.css'
import { useState } from "react";
import videoBg from "./assets/coffee.mp4";


function App() {
  const [activeSection, setActiveSection] = useState("home")

  return (
    <div className="relative w-screen min-h-screen overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        src={videoBg}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="relative z-10 bg-cover w-screen min-h-screen">
        <Navigation onSelect={setActiveSection} />
        <Content section={activeSection} />
      </div>
    </div>

  )
}

export default App
