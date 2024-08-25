import { BsChatFill } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import { FaAlignLeft } from "react-icons/fa6";
import { HiHome } from "react-icons/hi2";
import { Link } from "react-scroll";
import danLogo from '../assets/DanLogo.svg'

const Nav = () =>{
  return (
    <nav className="fixed w-full top-2 lg:top-8">

      <div className="container mx-auto">
        <div className="h-[96px] flex items-center justify-around rounded-full bg-black/10 backdrop-blur-2xl mx-auto text-2xl max-w-[2000px] text-white bord-grad ">
          <div><img src={danLogo} alt="Dan Logo" /></div>
            <div>
                <div className="flex items-center justify-around mx-auto text-2xl text-white gap-14">
                    <Link
                        to="home"
                        activeClass="active"
                        smooth={true}
                        spy={true}
                        offset={-200}
                        className="cursor-pointer w-[60] flex items-center justify-center">
                          <HiHome/>
                    </Link>
                    <Link
                        to="about"
                        activeClass="active"
                        smooth={true}
                        spy={true}
                        className="cursor-pointer w-[60] flex items-center justify-center">
                          <BiUser/>
                    </Link>
                    <Link
                        to="skills"
                        activeClass="active"
                        smooth={true}
                        spy={true}
                        className="cursor-pointer w-[60] flex items-center justify-center">
                          <FaAlignLeft/>
                    </Link>
                    <Link
                        to="contact"
                        activeClass="active"
                        smooth={true}
                        spy={true}
                        className="cursor-pointer w-[60] flex items-center justify-center">
                          <BsChatFill/>
                    </Link>
                </div>
            </div>
          <button className='btn btn-sm'>Hire me</button>
          </div>
      </div>
    </nav>
  )
}
export default Nav;
