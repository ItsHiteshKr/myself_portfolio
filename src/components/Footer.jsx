import React from 'react'

export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-center text-gray-500 py-4">

      <div className="mb-4 md:mb-0 text-xs md:text-md font-normal justify-center items-center">
        © {new Date().getFullYear()} . All rights reserved.
        <h5 >Made with ❤️ by <span className="font-bold text-red-300">*Hitesh Kumar*</span></h5>
      </div>
    </footer>
  )
}
export default Footer;
