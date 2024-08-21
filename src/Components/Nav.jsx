import { BsClipboardData,BsBriefcase,BsChatFill } from "react-icons/bs";
import { GoHomeFill } from "react-icons/go";
import { Link } from "react-scroll";

const Nav = () =>{
  return (
    <nav>
      <div>
        <Link
            to="home"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[60] flex items-center justify-center">
          <GoHomeFill/>
        </Link>
      </div>
    </nav>
  )
}
export default Nav;
