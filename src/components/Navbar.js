import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const [showMenu, setShowMenu] = useState(false);

    const clickhandler = () => {
        navigate("/");
    }

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }

  return (
    <header className='w-full fixed top-0 left-0 z-[100] bg-black pt-5'>
      <nav className='h-12 md:h-16 flex justify-between items-center font-bold max-w-[1200px] mx-4 lg:mx-auto'>
        <div>
          <img 
            src="/images/logo1.png" 
            alt="logo" 
            className='nav__logo h-10 w-[90px] cursor-pointer mt-5'
            onClick={clickhandler}
          />
        </div>

        <div 
          className={`
            fixed md:static
            ${showMenu ? 'top-12' : 'top-[-100%]'}
            left-0 
            bg-gradient-to-b from-black to-[#4E1116] md:bg-none md:bg-transparent
            w-full md:w-auto
            h-[45%] md:h-auto
            p-6 md:p-0
            rounded-b-3xl md:rounded-none
            transition-all duration-500 md:transition-none
          `}
        >
          <ul className='text-center md:flex md:gap-12'>
            <li className='nav__item mb-8 md:mb-0'>
              <a href="/" className='text-white hover:underline transition-colors'>Home</a>
            </li>
            <li className='nav__item mb-8 md:mb-0'>
              <a href="/about" className='text-white hover:text-[#4E1116] transition-colors'>About</a>
            </li>
            <li className='nav__item mb-8 md:mb-0'>
              <a href="/services" className='text-white hover:text-[#4E1116] transition-colors'>Services</a>
            </li>
            <li className='nav__item mb-8 md:mb-0'>
              <a href="/blog" className='text-white hover:text-[#4E1116] transition-colors'>Blog</a>
            </li>
            <li className='nav__item mb-8 md:mb-0'>
              <a href="/contact" className='text-white hover:text-[#4E1116] transition-colors'>Contact</a>
            </li>
          </ul>
        </div>

        <div className='text-2xl cursor-pointer md:hidden' onClick={toggleMenu}>
          <ion-icon name={showMenu ? "close" : "menu"}></ion-icon>
        </div>
      </nav>
    </header>
  )
}
export default Navbar;