import Nav from "./Components/Nav"
import About from "./Components/About";
import Hero from "./Components/Hero";
import Contact from "./Components/Contact";
import Skills from "./Components/Skills";
import Header from "./Components/Header";
function App() {

  return (
    <div>
      <Nav/>
      <Header/>
      <Hero/>
      <About/>
      <Skills/>
      <Contact/>
      <div className='h-[4000px]'></div>
    </div>

  )
}

export default App;
