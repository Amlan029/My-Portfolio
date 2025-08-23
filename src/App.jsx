import About from "./components/about/About"
import Experience from "./components/experience/Experience"
import Home from "./components/home/Home"
import Navbar from "./components/navbar/Navbar"
import Projects from "./components/projects/Projects"
import Footer from "./components/footer/Footer"
import { motion } from "framer-motion";
function App() {
  

  return (
    <div className="bg-[#171d32] h-auto w-full overflow-hidden">
      <motion.div
      initial={{ opacity: 0, y: 20 }}   // start hidden + slightly below
      animate={{ opacity: 1, y: 0 }}    // fade + slide up
      transition={{ duration: 1 }}      // 1s smooth transition
    >
     <Navbar />
     <Home />
     <About />
     <Experience />
     <Projects/>
     <Footer />
     </motion.div>
    </div>
  )
}

export default App
