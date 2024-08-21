import React from 'react'
import danLogo from '../assets/DanLogo.svg'
import { Link } from 'react-scroll'

const Header = () => {
  return (
    <header className="flex w-full py-10">
        <div className="container mx-auto">
          <div className='flex items-center justify-between '>
            <Link to="home" smooth={true}><img src={danLogo} alt="Dan Logo" /></Link>
            <button className='btn'>Hire me</button>
          </div>
        </div>
    </header>
  )
}

export default Header
