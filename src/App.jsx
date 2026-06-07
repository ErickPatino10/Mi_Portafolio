import Header from "./components/header/Header";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Education from "./components/education/Education";
import Certificates from "./components/certificates/Certificates";
import { Proyect } from "./components/project/Proyect";
import {Contact} from "./components/contact/Contact";
import { Footer } from "./components/footer/Footer";

function App() {

  return (
    <>
      <Header/>
      <About/>
      <Skills/>
      <Education/>
      <Certificates/>
      <Proyect/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
