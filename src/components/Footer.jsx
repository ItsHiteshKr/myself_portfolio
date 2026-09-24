import React from 'react'
import { SlSocialLinkedin, SlSocialGithub } from "react-icons/sl";
import { SiGeeksforgeeks, SiLeetcode } from "react-icons/si";


export const Footer = () => {
  return (
    <footer className="relative left-1/2 w-screen -ml-[50vw] border-t border-gray-800  text-center text-gray-300">
      <div className="mx-auto max-w-[1200px] px-4 py-5 md:px-0 md:py-12">
        {/* Social Icons  */}
        <div
          data-reveal
          className="reveal-item flex flex-col items-center gap-4 py-8"
          style={{ transitionDelay: "120ms" }}
        >
          <h3 className="text-lg font-medium text-white">Connect me on :</h3>

          <div className="flex flex-row items-center justify-center gap-3 sm:gap-6">
            <div className="sm:block w-24 h-[2px] bg-cyan-500 mx-auto mb-2"></div>
            <div className="flex flex-row gap-4">
              <a href="https://www.linkedin.com/in/hitesh-kumar-088184240" target="_blank" rel="noopener noreferrer" className="social-icon w-11 h-11 flex items-center justify-center rounded-full bg-cyan-50 text-black hover:bg-cyan-500 hover:text-black border border-black/20 hover:scale-110 transition-all duration-300">
                <SlSocialLinkedin size={22} />
              </a>
              <a href="https://github.com/ItsHiteshKr" target="_blank" rel="noopener noreferrer" className="social-icon w-11 h-11 flex items-center justify-center rounded-full bg-cyan-50 text-black hover:bg-cyan-500 hover:text-black border border-black/20 hover:scale-110 transition-all duration-300">
                <SlSocialGithub size={22} />
              </a>
              <a href="http://geeksforgeeks.org/user/itshiteshkumar/" target="_blank" rel="noopener noreferrer" className="social-icon w-11 h-11 flex items-center justify-center rounded-full bg-cyan-50 text-black hover:bg-cyan-500 hover:text-black border border-black/20 hover:scale-110 transition-all duration-300">
                <SiGeeksforgeeks size={22} />
              </a>
              <a href="http://leetcode.com/u/ItsHiteshKr/" target="_blank" rel="noopener noreferrer" className="social-icon w-11 h-11 flex items-center justify-center rounded-full bg-cyan-50 text-black hover:bg-cyan-500 hover:text-black border border-black/20 hover:scale-110 transition-all duration-300">
                <SiLeetcode size={22} />
              </a>
            </div>
            <div className="sm:block w-24 h-[2px] bg-cyan-500 mx-auto mb-2"></div>
          </div>
        </div>

        <div className="mb-4 text-xs font-normal md:mb-0 md:text-md">
          © {new Date().getFullYear()} . All rights reserved.
          <h5>Made with ❤️ by Hitesh Kumar</h5>
        </div>
      </div>
    </footer>
  )
}
export default Footer;
