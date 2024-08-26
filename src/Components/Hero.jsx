import { TypeAnimation } from "react-type-animation";
import logo from '../assets/DanLogo.svg'
import { motion } from "framer-motion";
import { fadeIn } from "../fadeIn";
import { BsGithub, BsInstagram, BsTelegram ,BsLinkedin} from "react-icons/bs";
import danCv from '../../DanCV/Daniel-Merga-CV.pdf'

const Hero = () => {
  return (
    <section className="min-h-[110vh] lg:min-h-[100vh] flex items-center text-white" id='home'>
      <div className="container mx-auto">
          <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-10">
              <div className="flex-1 text-center font-secondary lg:text-left">

                    <motion.h2
                    variants={fadeIn('up',0.2)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{once:false,amount:0.7}}
                    className="text-[22px] bg-[#4CDB88] text-black max-w-16 text-center rounded-md font-semibold">
                      Hello
                    </motion.h2>

                    <motion.h1
                    variants={fadeIn('up',0.3)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{once:false,amount:0.7}}
                    className="text-[55px] font-bold leading=[0.8] lg:text-[110]">
                     I'm Daniel
                    </motion.h1>
                  <motion.div
                    variants={fadeIn('up',0.4)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{once:false,amount:0.7}}
                    className='mb-6 text-[25px] lg:text-[45px] font-secondary font-semibold  uppercase leading-[2]'>
                    <TypeAnimation
                    sequence={[
                    'Frontend developer',
                    1000,
                    'Graphics Desinger',
                    1000,
                    'UI/UX Desinger',
                    1000,
                    'Compitative Programmer',
                    1000,
                  ]}
                  wrapper="span"
                  speed={30}
                  repeat={Infinity}
                  className="inline-block font-bold text-transparent bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text"
                  />
                  </motion.div>
                  <motion.p
                    variants={fadeIn('up',0.5)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{once:false,amount:0.7}}
                    className="max-w-lg mx-auto mb-8 lg:mx-0">
                    I am currently studying Computer Science and Engineering at Adama Science and Technology University(ASTU).
                  </motion.p>
                  <motion.div
                      variants={fadeIn('up',0.6)}
                      initial='hidden'
                      whileInView={'show'}
                      viewport={{once:false,amount:0.7}}
                      className="flex items-center mx-auto mb-12 max-w-max gap-x-6 lg:mx-0">
                    <a href="" className="text-gradient btn-link link">Contact Me</a>
                    <button className="btn btn-sm" > <a href={danCv} download> Download CV</a></button>
                  </motion.div>
                  <motion.div className="flex text-[24px] gap-x-6 max-w-max mx-auto lg:mx-0"
                      variants={fadeIn('up',0.7)}
                      initial='hidden'
                      whileInView={'show'}
                      viewport={{once:false,amount:0.7}}>
                    <a href="https://github.com/da-nn-yy.com" className="link" target="_blank"><BsGithub/></a>
                    <a href="https://www.linkedin.com/in/dani-boy-35552624b/"  className="link"target="_blank"><BsLinkedin/></a>
                    <a href="https://t.me/g_dnl" className="link"target="_blank"><BsTelegram/></a>
                    <a href="https://www.instagram.com/da_nnn_yyy/" className="link" target="_blank"></a><BsInstagram/></a>
                  </motion.div>
              </div>
          <motion.div
                    variants={fadeIn('down',0.2)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{once:false,amount:0.7}}
                    className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[460px] mx-auto">
            <img src={logo} alt="" />
          </motion.div>
          </div>
      </div>
    </section>
  )
}

export default Hero;
