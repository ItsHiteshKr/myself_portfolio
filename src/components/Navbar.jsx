import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import logo1 from '../assets/images/logo1.png'


const Navbar = () => {

  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  const clickhandler = () => {
    navigate("/");
  }

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  }

  const handleContactClick = (event) => {
    event.preventDefault();
    navigate({ pathname: "/", hash: "#contact" });
    setShowMenu(false);
  };

  return (
    <>
      {/* Blur Overlay - shows when menu is open */}
      {showMenu && (
        <div
          className='fixed inset-0 bg-black/50 backdrop-blur-sm z-[90] md:hidden'
          onClick={toggleMenu}
        />
      )}

      <header className='w-full bg-black pt-2 md:pt-4 shadow-lg relative z-[100]'>
        <nav className='h-12 md:h-16 flex justify-between items-center font-bold max-w-[1200px] mx-4 lg:mx-auto'>
          <div>
            <img
              src={logo1}
              alt="logo"
              className='nav__logo h-6 w-[45px] md:h-10 md:w-[80px] cursor-pointer'
              onClick={clickhandler}
            />
          </div>

          {/* Desktop Menu */}
          <ul className='hidden md:flex gap-12'>
            <li className='nav__item'>
              <Link to="/" className='text-white hover:text-cyan-400 transition-colors'>Home</Link>
            </li>
            <li className='nav__item'>
              <Link to="/about" className='text-white hover:text-cyan-400 transition-colors'>About</Link>
            </li>
            <li className='nav__item'>
              <Link to="/projects" className='text-white hover:text-cyan-400 transition-colors'>My Projects</Link>
            </li>
            <li className='nav__item'>
              <a href="/#contact" onClick={handleContactClick} className='text-white hover:text-cyan-400 transition-colors'>Contact</a>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <div className='text-2xl cursor-pointer md:hidden text-white z-[110]' onClick={toggleMenu}>
            <ion-icon name={showMenu ? "close" : "menu"}></ion-icon>
          </div>

          {/* Mobile Menu */}
          <div
            className={`
              absolute top-full left-0 w-full
              bg-black/95 backdrop-blur-md
              p-6 rounded-b-2xl
              transition-all duration-300
              md:hidden
              ${showMenu ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}
              z-[100]
            `}
          >
            <ul className='text-center space-y-6'>
              <li>
                <Link to="/" className='text-white text-xl hover:text-cyan-400 transition-colors' onClick={toggleMenu}>Home</Link>
              </li>
              <li>
                <Link to="/about" className='text-white text-xl hover:text-cyan-400 transition-colors' onClick={toggleMenu}>About</Link>
              </li>
              <li>
                <Link to="/projects" className='text-white text-xl hover:text-cyan-400 transition-colors' onClick={toggleMenu}>My Projects</Link>
              </li>
              <li>
                <a href="/#contact" className='text-white text-xl hover:text-cyan-400 transition-colors' onClick={handleContactClick}>Contact</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  )
}
export default Navbar;