import { TypeAnimation } from "react-type-animation";
import logo from '../assets/DanLogo.svg'
import { motion } from "framer-motion";
import { fadeIn } from "../fadeIn";
const Hero = () => {
  return (
    <section className="flex items-center text-white section justify-items-center" id="home">
      <div className="container mx-auto">
          <di className="flex">
              <div>
                  <div>
                    <motion.h1
                    variants={fadeIn('up',0.3)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{once:false,amount:0.7}}
                    className="text-[55px] font-bold leading=[0.8] lg:text-[110]">
                      Daniel <span></span>Merga
                    </motion.h1>
                  </div>
                  <div>
                    <span className="text-[45px] font-bold leading=[0.8] lg:text-[110]">
                      I am
                    </span>
                    <TypeAnimation
                    sequence={[
                    // Same substring at the start will only be typed out once, initially
                    ' Frontend developer',
                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                    ' Graphics Desinger',
                    1000,
                    ' UI/UX Desinger',
                    1000,
                  ]}
                  wrapper="span"
                  speed={30}
                  style={{ fontSize: '2em', display: 'inline-block' }}
                  repeat={Infinity}
                  className="text-[65px] font-bold leading=[0.8] lg:text-[110]"
                  />
                  </div>
                  <p> I am currently studying Computer Science and Engineering at Adama Science and Technology University(ASTU). </p>
                  <div>
                    <a href="">Contact Me</a>
                    <button className="btn btn-sm">Download CV </button>
                  </div>
              </div>
          <div>
            <img src={logo} alt="" />
          </div>
          </di>
      </div>
    </section>
  )
}

export default Hero;
