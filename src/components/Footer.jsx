import React from 'react'
import { SlSocialInstagram, SlSocialLinkedin, SlSocialFacebook, SlSocialGithub } from "react-icons/sl";
import { SiGeeksforgeeks, SiLeetcode } from "react-icons/si";
export const Footer = () => {
  return (
    <footer className=" text-center text-gray-400 py-6 ">

      {/* Social Icons  */}
      <div
        data-reveal
        className="reveal-item flex flex-col items-center gap-4 py-8"
        style={{ transitionDelay: "120ms" }}
      >
        <h3 className="text-white text-lg font-medium">Connect me on : </h3>

        <div className="flex flex-row justify-center items-center gap-3 sm:gap-6">
          <div className="hidden sm:block w-24 h-[2px] bg-cyan-500 mx-auto mb-2"></div>
          <div className="flex flex-row gap-4">
            <a href="https://www.linkedin.com/in/hitesh-kumar-088184240" target="_blank" rel="noopener noreferrer" className="social-icon w-11 h-11 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-cyan-500 hover:text-black border border-white/40 hover:scale-110 transition-all duration-300">
              <SlSocialLinkedin size={22} />
            </a>
            <a href="https://github.com/ItsHiteshKr" target="_blank" rel="noopener noreferrer" className="social-icon w-11 h-11 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-cyan-500 hover:text-black border border-white/40 hover:scale-110 transition-all duration-300">
              <SlSocialGithub size={22} />
            </a>
            <a href="http://geeksforgeeks.org/user/itshiteshkumar/" target="_blank" rel="noopener noreferrer" className="social-icon w-11 h-11 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-cyan-500 hover:text-black border border-white/40 hover:scale-110 transition-all duration-300">
              <SiGeeksforgeeks size={22} />
            </a>
            <a href="http://leetcode.com/u/ItsHiteshKr/" target="_blank" rel="noopener noreferrer" className="social-icon w-11 h-11 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-cyan-500 hover:text-black border border-white/40 hover:scale-110 transition-all duration-300">
              <SiLeetcode size={22} />
            </a>
          </div>
          <div className="hidden sm:block w-24 h-[2px] bg-cyan-500 mx-auto mb-2"></div>

        </div>

      </div>

      <div className="mb-4 md:mb-0 text-xs md:text-md font-normal justify-center items-center">
        © {new Date().getFullYear()} . All rights reserved.
        <h5 >Made with ❤️ by Hitesh Kumar</h5>
      </div>
    </footer>
  )
}
export default Footer;
