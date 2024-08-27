import { MdEmail, MdPerson } from 'react-icons/md'
import danLogo from '../assets/DanLogo.svg'
import { IoLocationSharp } from 'react-icons/io5'
import { PiCityFill } from 'react-icons/pi'
const About = () => {
  return (
    <section>
      <div className='container mx-auto'>
        <div className="flex items-center justify-between text-white">
          <img src={danLogo} alt="Dan Logo" />
          <div>
            <h1 className=''>About</h1>
            <p>I love working on Fromtend Designs, Backend Applications,and solving problems.</p>
            <h4>Personal Info</h4>
            <ul className='ml-6'>
              <li className='flex items-center'><MdPerson/>Name: Daniel Merga</li>
              <li className='flex items-center'><MdEmail/>Email: dbevangadi@gmail.com</li>
              <li className='flex items-center'><IoLocationSharp/>Residence: Ethiopia</li>
              <li className='flex items-center'><PiCityFill/>City: Adama</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
