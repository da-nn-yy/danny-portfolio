import { TypeAnimation } from "react-type-animation";
import logo from '../assets/DanLogo.svg'
import { motion } from "framer-motion";
import { fadeIn } from "../fadeIn";
import { BsGithub, BsInstagram, BsTelegram ,BsLinkedin} from "react-icons/bs";
import danCv from '../../DanCV/Daniel-Merga-CV.pdf'

const Hero = () => {
  return (
    <section className="flex items-center text-white section justify-items-center" id="home">
      <div className="container mx-auto">
          <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-10">
              <div className="flex-1 text-center font-secondary lg:text-left">
                    <motion.h1
                    variants={fadeIn('up',0.3)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{once:false,amount:0.7}}
                    className="text-[55px] font-bold leading=[0.8] lg:text-[110]">
                      Daniel <span >Merga</span>
                    </motion.h1>
                  <div>
                    <span className="mr-4 font-bold text-[36px] lg:text-[45px]">
                      I am
                    </span>
                    <TypeAnimation
                    sequence={[
                    'Frontend developer',
                    1000,
                    'Graphics Desinger',
                    1000,
                    'UI/UX Desinger',
                    1000,
                  ]}
                  wrapper="span"
                  speed={30}
                  repeat={Infinity}
                  className="inline-block font-bold text-transparent bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-[36px] lg:text-[45px]"
                  />
                  </div>
                  <p> I am currently studying Computer Science and Engineering at Adama Science and Technology University(ASTU). </p>
                  <div className="flex items-center justify-between max-w-[250px] pt-3 pb-3">
                    <a href="">Contact Me</a>
                    <button className="btn btn-sm"> <a href={danCv} download> Download CV</a></button>
                  </div>
                  <div className="text-[22px] flex justify-between lg:items-center max-w-[150px]">
                    <a href="https://github.com/da-nn-yy.com" className="link"><BsGithub/></a>
                    <a href="https://www.linkedin.com/in/dani-boy-35552624b/"  className="link"><BsLinkedin/></a>
                    <a href="https://t.me/g_dnl" className="link"><BsTelegram/></a>
                    <a href="https://www.instagram.com/da_nnn_yyy/" className="link"><BsInstagram/></a>
                  </div>
              </div>
          <div>
            <img src={logo} alt="" />
          </div>
          </div>
      </div>
    </section>
  )
}

export default Hero;
