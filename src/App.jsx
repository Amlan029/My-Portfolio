import About from "./components/about/About"
import Experience from "./components/experience/Experience"
import Home from "./components/home/Home"
import Navbar from "./components/navbar/Navbar"


function App() {
  

  return (
    <div className="bg-[#171d32] h-auto w-full overflow-hidden">
     <Navbar />
     <Home />
     <About />
     <Experience />
    </div>
  )
}

export default App
