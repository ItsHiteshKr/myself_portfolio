import React, { useEffect, useRef } from "react";
// import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { Facebook, Instagram, Github, Linkedin } from 'lucide-react';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const Home = () => {

  const hasAnimated = useRef(false);

  useEffect(() => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;

    // OVERLAY Animation
    gsap.to(".first", { duration: 1.5, delay: 0.5, top: "-100%", ease: "expo.inOut" });
    gsap.to(".second", { duration: 1.5, delay: 0.7, top: "-100%", ease: "expo.inOut" });
    gsap.to(".third", { duration: 1.5, delay: 0.9, top: "-100%", ease: "expo.inOut" });
    gsap.to(".fourth", { duration: 1.5, delay: 1.1, top: "-100%", ease: "expo.inOut" });
    gsap.to(".fifth", { duration: 1.5, delay: 1.3, top: "-100%", ease: "expo.inOut" });
    gsap.to(".sixth", { duration: 1.5, delay: 1.5, top: "-100%", ease: "expo.inOut" });

    // IMG Animation
    gsap.from('.home__img', { opacity: 0, duration: 2, delay: 2, x: 60 });

    // INFORMATION Animation
    gsap.from('.home__information', { opacity: 0, duration: 3, delay: 2.3, y: 25 });
    gsap.from('.anime-text', { opacity: 0, duration: 3, delay: 2.3, y: 25, ease: 'expo.out', stagger: 0.3 });

    // NAV ITEM Animation
    gsap.from('.nav__logo', { opacity: 0, duration: 3, delay: 3.2, y: 25, ease: 'expo.out' });
    gsap.from('.nav__item', { opacity: 0, duration: 3, delay: 3.2, y: 25, ease: 'expo.out', stagger: 0.2 });

    // SOCIAL Animation
    gsap.from('.home__social-icon', { opacity: 0, duration: 3, delay: 4, y: 25, ease: 'expo.out', stagger: 0.2 });
  }, []);


  return (
    <div className="home__container relative min-h-screen max-w-[1920px] mx-auto overflow-x-hidden">
      {/* OVERLAY */}
      <div className="overlay first fixed top-0 left-0 w-full h-full z-[1000] pointer-events-none bg-cyan-500"></div>
      <div className="overlay second fixed top-0 left-[16.3%] w-full h-full z-[1000] pointer-events-none bg-cyan-500"></div>
      <div className="overlay third fixed top-0 left-[32.6%] w-full h-full z-[1000] pointer-events-none bg-cyan-500"></div>
      <div className="overlay fourth fixed top-0 left-[48.9%] w-full h-full z-[1000] pointer-events-none bg-cyan-500"></div>
      <div className="overlay fifth fixed top-0 left-[65.2%] w-full h-full z-[1000] pointer-events-none bg-cyan-500"></div>
      <div className="overlay sixth fixed top-0 left-[81.5%] w-full h-full z-[1000] pointer-events-none bg-cyan-500"></div>

      {/* Navbar */}
      <Navbar />
      {/* MAIN */}
      <main className="l-main min-h-screen bg-black mt-[40px] max-w-[1200px] mx-4 lg:mx-auto">
        <div className="home grid grid-cols-1 md:grid-cols-2 items-center gap-y-5 h-full font-bold md:gap-x-10">

          {/* Information Section */}
          <div className="pl-3 border-l-[3px] border-l-cyan-500 z-10 h-auto home__information justify-self-center -mt-16">
            <div className="text-start">
              <span className="text-cyan-400 font-mono tracking-widest text-lg block mb-2">Hello </span>
              <h1 className=" text-2xl md:text-5xl font-extrabold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-cyan-500">I'am Hitesh Kumar</h1>
              <span className="anime-text text-base md:text-2xl block text-white">Full Stack Web Developer</span>
            </div>


            <div className="flex items-center gap-3 mt-6">
              <button
                className="bg-cyan-500 hover:bg-cyan-600 text-white rounded py-2.5 px-4 transition-all"
              >
                Got a project?
              </button>
              <button
                className="bg-transparent border border-white hover:border-cyan-500 text-white hover:bg-cyan-600 hover:text-black rounded py-2.5 px-4 transition-all">
                My resume
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative group justify-self-center home__img">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative bg-black rounded-2xl overflow-hidden border border-slate-800">
              <img src='/images/newmypic.png' alt="Hitesh" className=" w-80 h-auto grayscale hover:grayscale-0 transition duration-500" />
            </div>
          </div>

        </div>

        {/* Language name */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 bg-slate-800/50 backdrop-blur-sm w-auto mx-auto px-6 py-3 rounded-md mt-12 text-white font-medium text-center text-sm md:text-base">
          <p>HTML</p>
          <p>CSS</p>
          <p>JavaScript</p>
          <p>React.js</p>
          <p>Node.js</p>
          <p>git</p>
          <p>github</p>
          <p>SQL</p>
          <p>mongoDB</p>
          <p>jwt</p>
          <p>redis</p>
        </div>

      </main>

      {/* Social Icons - Fixed Left Side (Desktop) */}
      <div className="fixed left-8 top-1/2 -translate-y-1/2 hidden md:flex flex-col items-center gap-4 z-50">
        <div className="w-[2px] h-12 bg-cyan-500"></div>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon w-11 h-11 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-cyan-500 hover:text-black border border-white/40 hover:scale-110 transition-all duration-300">
          <Facebook size={20} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon w-11 h-11 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-cyan-500 hover:text-black border border-white/40 hover:scale-110 transition-all duration-300">
          <Instagram size={20} />
        </a>
        <a href="https://github.com/ItsHiteshKr" target="_blank" rel="noopener noreferrer" className="social-icon w-11 h-11 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-cyan-500 hover:text-black border border-white/40 hover:scale-110 transition-all duration-300">
          <Github size={20} />
        </a>
        <a href="https://www.linkedin.com/in/hitesh-kumar-088184240" target="_blank" rel="noopener noreferrer" className="social-icon w-11 h-11 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-cyan-500 hover:text-black border border-white/40 hover:scale-110 transition-all duration-300">
          <Linkedin size={20} />
        </a>
        <div className="w-[2px] h-12 bg-cyan-500"></div>
      </div>

      {/* Social Icons - Mobile (Bottom) */}
      <div className="flex md:hidden flex-col items-center gap-4 py-8">
        <h3 className="text-white text-lg font-medium">Connect me on : </h3>
        <div className="flex flex-row gap-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon w-11 h-11 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-cyan-500 hover:text-black border border-white/40 hover:scale-110 transition-all duration-300">
            <Facebook size={22} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon w-11 h-11 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-cyan-500 hover:text-black border border-white/40 hover:scale-110 transition-all duration-300">
            <Instagram size={22} />
          </a>
          <a href="https://github.com/ItsHiteshKr" target="_blank" rel="noopener noreferrer" className="social-icon w-11 h-11 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-cyan-500 hover:text-black border border-white/40 hover:scale-110 transition-all duration-300">
            <Github size={22} />
          </a>
          <a href="https://www.linkedin.com/in/hitesh-kumar-088184240" target="_blank" rel="noopener noreferrer" className="social-icon w-11 h-11 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-cyan-500 hover:text-black border border-white/40 hover:scale-110 transition-all duration-300">
            <Linkedin size={22} />
          </a>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;