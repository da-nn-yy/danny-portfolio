import Nav from "./Components/Nav"
import About from "./Components/About";
import Hero from "./Components/Hero";
import Contact from "./Components/Contact";
import Skills from "./Components/Skills";
import danVidBg from './assets/danBgg.mp4'
function App() {

  return (
    <div className="relative w-full overflow-hidden">
      <video
        src={danVidBg}
        autoPlay
        loop
        muted
        className="fixed left-0 object-cover w-full h-full ftop-0 ixed "
      />
      <div className="relative z-10">
        <Nav />
        <Hero />
        <About />
        <Skills />
        <Contact />
        <div className="h-[4000px]"></div>
      </div>
    </div>

  )
}

export default App;
