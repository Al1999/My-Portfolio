import Navbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";
import Skills from "./components/skills";
import Work from "./components/work";
import Contact from "./components/contact";
import Footer from "./components/footer";
import { motion } from 'framer-motion';

function App() {
  return (
    <motion.div initial={{opacity:0}} animate={{ opacity:1 }} transition={{ delay: 0, duration:1 }} >
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Work/>
      <Contact/>
      <Footer/>
    </motion.div>
  );
}

export default App;

