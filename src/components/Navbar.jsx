import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import skillData from '../assets/My_details/skill.json';

const Navbar = () => {

  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/projects", label: "My Projects" },
  ];

  const clickhandler = () => {
    navigate("/");
  }

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  }

  return (
    <>
      {/* Blur Overlay - shows when menu is open */}
      {showMenu && (
        <div
          className='fixed inset-0 bg-black/20 backdrop-blur-sm z-[90] md:hidden'
          onClick={toggleMenu}
        />
      )}

      <header className='fixed top-0 left-0 w-full pt-2 md:pt-4 border-gray-900 z-[100] border-b-2 bg-[#100c1b]/95 backdrop-blur-md'>
        <nav className='h-12 md:h-16 flex justify-between items-center font-bold max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-0'>
          <div>

            <h1 className='text-2xl md:text-2xl font-bold italic text-white cursor-pointer relative group w-fit' onClick={clickhandler}>
              {'{ '}<span className='text-cyan-400'>{skillData.logo[0].name}</span>{' }'}
              <span className='absolute left-0 -bottom-1 w-0 group-hover:w-full h-[3px] bg-cyan-500 transition-all duration-300'></span>
            </h1>


          </div>

          {/* Desktop Menu */}
          <ul className='hidden md:flex gap-12'>
            {navItems.map((item) => (
              <li key={item.to} className=''>
                <NavLink
                  to={item.to}
                  end={item.end}
                  className={({ isActive }) => `transition-colors ${isActive ? "text-cyan-400" : "text-white hover:text-cyan-400"}`}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label={showMenu ? "Close menu" : "Open menu"}
            className='text-2xl cursor-pointer md:hidden text-white z-[110]'
            onClick={toggleMenu}
          >
            {showMenu ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>

          {/* Mobile Menu */}
          <div
            className={`
              absolute top-full left-0 w-full
              bg-black/95 backdrop-blur-md border border-gray-800 shadow-sm shadow-transparent
              p-6 rounded-b-2xl
              transition-all duration-300
              md:hidden
              ${showMenu ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}
              z-[100]
            `}
          >
            <ul className='text-center space-y-6'>
              {navItems.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    end={item.end}
                    className={({ isActive }) => `text-xl transition-colors ${isActive ? "text-cyan-400" : "text-white hover:text-cyan-400"}`}
                    onClick={toggleMenu}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </header>
    </>
  )
}
export default Navbar;