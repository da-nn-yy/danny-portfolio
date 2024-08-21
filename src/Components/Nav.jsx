import { BsClipboardData,BsBriefcase,BsChatFill } from "react-icons/bs";
import { GoHomeFill } from "react-icons/go";
import { Link } from "react-scroll";

const Nav = () =>{
  return (
    <nav className="fixed z-50 w-full overflow-hidden top-2 lg:top-8">
      <div className="container mx-auto">
          <div className="h-[96px] flex items-center justify-around rounded-full bg-black/20 backdrop-blur-2xl max-w=[460px] mx-auto text-2xl text-white">
            <Link
                to="home"
                activeClass="active"
                smooth={true}
                spy={true}
                className="cursor-pointer w-[60] flex items-center justify-center">
                  Home
            </Link>
            <Link
                to="about"
                activeClass="active"
                smooth={true}
                spy={true}
                className="cursor-pointer w-[60] flex items-center justify-center">
                  About
            </Link>
            <Link
                to="skill"
                activeClass="active"
                smooth={true}
                spy={true}
                className="cursor-pointer w-[60] flex items-center justify-center">
                  Skills
            </Link>
            <Link
                to="contact"
                activeClass="active"
                smooth={true}
                spy={true}
                className="cursor-pointer w-[60] flex items-center justify-center">
                  Contact
            </Link>
          </div>
      </div>
    </nav>
  )
}
export default Nav;
