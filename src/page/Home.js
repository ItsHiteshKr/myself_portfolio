import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { Facebook, Instagram, Github, Linkedin } from 'lucide-react';


export const Home = () => {
  const navigate = useNavigate();
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;

    // OVERLAY Animation
    gsap.to(".first", { duration: 1.5, delay: 0.5, top: "-100%", ease: "expo.inOut" });
    gsap.to(".second", { duration: 1.5, delay: 0.7, top: "-100%", ease: "expo.inOut" });
    gsap.to(".third", { duration: 1.5, delay: 0.9, top: "-100%", ease: "expo.inOut" });

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

  const clickhandler = () => {
    navigate("/myname");
  };

  return (
    <div>
      {/* OVERLAY */}
      <div className="overlay first fixed top-0 left-0 w-full h-full z-[1000] pointer-events-none bg-[#4E1116]"></div>
      <div className="overlay second fixed top-0 left-[33.3%] w-full h-full z-[1000] pointer-events-none bg-[#4E1116]"></div>
      <div className="overlay third fixed top-0 left-[66.6%] w-full h-full z-[1000] pointer-events-none bg-[#4E1116]"></div>

      {/* MAIN */}
      <main className="l-main h-screen bg-black pt-16 max-w-[1200px] mx-4 lg:mx-auto">
        <div className="home grid grid-cols-2 content-around gap-y-9 h-full font-bold md:content-center absolute">

          {/* Information Section */}
          <div className=" pl-6 border-l-[2px] border-white z-10 h-auto home__information">
            <span className="text-cyan-400 font-mono tracking-widest text-lg">Hello, My name is</span>
            <h1 className=" text-6xl md:text-8xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-400 to-cyan-500">Hitesh Kumar</h1>
            <span className="anime-text text-base md:text-2xl block">Web Developer</span>

            <div>
              <a
                href="#"
                className="anime-text inline-block mt-6 text-xs text-white py-2.5 px-4 rounded bg-gradient-to-r from-black to-[#4E1116] hover:from-[#4E1116] hover:to-black transition-all"
              >
                DOWNLOAD CV
              </a>
            </div>
          </div>

          {/* Image Section */}   
          <div className="relative group justify-self-center home__img">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative bg-black rounded-2xl overflow-hidden border border-slate-800">
              <img src='/images/newmypic.png' alt="Hitesh" className=" w-80 h-auto grayscale hover:grayscale-0 transition duration-500"/>
            </div>
          </div>

          {/* Social Icons */}
          <div className="home__social flex flex-col pb-4 md:flex-row md:pt-32 md:pb-0">
            <a href="#" className="home__social-icon mb-8 md:mb-0 md:mr-8 text-xl cursor-pointer text-white hover:text-cyan-500 transition-colors">
              <Facebook />
            </a>
            <a href="#" className="home__social-icon mb-8 md:mb-0 md:mr-8 text-xl cursor-pointer text-white hover:text-cyan-500 transition-colors">
              <Instagram />
            </a>
            <a href="https://github.com/ItsHiteshKr" className="home__social-icon mb-8 md:mb-0 md:mr-8 text-xl cursor-pointer text-white hover:text-cyan-500 transition-colors">
              <Github />
            </a>
            <a href="https://www.linkedin.com/in/hitesh-kumar-088184240" className="home__social-icon mb-8 md:mb-0 md:mr-8 text-xl cursor-pointer text-white hover:text-cyan-500 transition-colors">
              <Linkedin  />
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;