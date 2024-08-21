import Nav from "./Components/Nav"
import About from "./Components/About";
import Hero from "./Components/Hero";
import Contact from "./Components/Contact";
function App() {

  return (
    <div>
      <Nav/>
      <Hero/>
      <About/>
      <Contact/>
      <div className='h-[4000px]'></div>
    </div>

  )
}

export default App;
