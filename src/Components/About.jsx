import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MdPerson, MdEmail } from 'react-icons/md';
import { IoLocationSharp } from 'react-icons/io5';
import { PiCityFill } from 'react-icons/pi';
import danLogo from '../assets/DanLogo.svg';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const boxRef = useRef(null);

  useEffect(() => {
    if (boxRef.current) {
      gsap.to(boxRef.current, {
        scrollTrigger: {
          trigger: boxRef.current,
          start: "top center",
          scrub: true,
          end: "+=300",
        },
        x: -50,
      });
    }
  }, []);

  return (
    <section>
      <div className='container mx-auto'>
        <div className="flex items-center justify-between text-white">
          <img src={danLogo} alt="Dan Logo" />
          <div ref={boxRef}>
            <h1 className='font-secondary'>About</h1>
            <p>I love working on Frontend Designs, Backend Applications, and solving problems.</p>
            <h4 className='text-[18px] font-medium'>Personal Info:</h4>
            <ul className='ml-6'>
              <li className='flex items-center'><MdPerson /> Name: Daniel Merga</li>
              <li className='flex items-center'><MdEmail /> Email: dbevangadi@gmail.com</li>
              <li className='flex items-center'><IoLocationSharp /> Residence: Ethiopia</li>
              <li className='flex items-center'><PiCityFill /> City: Adama</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
