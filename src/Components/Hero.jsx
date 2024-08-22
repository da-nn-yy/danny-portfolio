import { TypeAnimation } from "react-type-animation";
import { MdOutlineCloudDownload } from "react-icons/md";
const Hero = () => {
  return (
    <section className="text-white section" id="home">
      <div>
        <h1>
          Daniel Merga
        </h1>
      </div>
      <div>
        <span>
          I am
        </span>
        <TypeAnimation
        sequence={[
        // Same substring at the start will only be typed out once, initially
        'Frontend developer',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Graphics Desinger',
        1000,
        'UI/UX Desinger',
        1000,
      ]}
      wrapper="span"
      speed={30}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity} />
      </div>
      <p> I am currently studying Computer Science and Engineering at Adama Science and Technology University(ASTU). </p>
      <div>
        <a href="">Contact Me</a>
        <button className="flex items-center justify-around btn btn-sm hover:bg-line">Download CV <MdOutlineCloudDownload/> </button>
      </div>
    </section>
  )
}

export default Hero;
