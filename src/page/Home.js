import React, { useEffect, useRef } from "react";
// import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { Facebook, Instagram, Github, Linkedin, ExternalLink } from 'lucide-react';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import myPic from "../assets/images/newmypic.png"


import projectData from '../assets/Project_details/project_details.json'

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
    <div className="home__container relative min-h-screen w-full max-w-[1400px] mx-auto overflow-x-hidden">
      {/* OVERLAY */}
      <div className="overlay first fixed top-0 left-0 w-full h-full z-[1000] pointer-events-none bg-cyan-500"></div>
      <div className="overlay second fixed top-0 left-[25%] w-full h-full z-[1000] pointer-events-none bg-cyan-500"></div>
      <div className="overlay third fixed top-0 left-[50%] w-full h-full z-[1000] pointer-events-none bg-cyan-500"></div>
      <div className="overlay fourth fixed top-0 left-[75%] w-full h-full z-[1000] pointer-events-none bg-cyan-500"></div>

      {/* Navbar */}
      <Navbar />
      {/* MAIN */}
      <main className="main min-h-screen bg-black mt-[40px] max-w-[1200px] mx-4 lg:mx-auto">
        <div className="home grid grid-cols-1 md:grid-cols-2 items-center gap-y-5 h-full font-bold md:gap-x-10">

          {/* Information Section */}
          <div className="pl-4 border-l-[3px] border-l-cyan-500 z-10 h-auto home__information">
            <div className="text-start">
              <span className="text-cyan-400 font-mono tracking-widest text-lg block mb-2">Hello,</span>
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
              <img src={myPic} alt="Hitesh" className=" w-80 h-auto grayscale hover:grayscale-0 transition duration-500" />
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

      <div>
        {/* About Section - New Design */}
        <section className="about-section text-white py-1 px-6 md:px-10 mt-0 max-w-[1900px] mx-4 lg:mx-auto">
          <div className="max-w-[1150px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-1 items-center">
            
            {/* Left Side - Services */}
            <div className="relative pl-8">
              {/* Vertical Line */}
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-slate-700">
                <div className="absolute top-[15%] left-1/2 -translate-x-1/2 w-3 h-3 bg-orange-500 rounded-full"></div>
                {/* <div className="absolute top-[50%] left-1/2 -translate-x-1/2 w-3 h-3 bg-orange-500 rounded-full"></div> */}
                <div className="absolute top-[75%] left-1/2 -translate-x-1/2 w-3 h-3 bg-orange-500 rounded-full"></div>
              </div>
              
              {/* Service Items */}
              <div className="space-y-12">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 flex items-center justify-center text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="16 18 22 12 16 6"></polyline>
                      <polyline points="8 6 2 12 8 18"></polyline>
                    </svg>
                  </div>
                  <span className="text-xl font-semibold">Website Development</span>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 flex items-center justify-center text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                      <line x1="8" y1="21" x2="16" y2="21"></line>
                      <line x1="12" y1="17" x2="12" y2="21"></line>
                    </svg>
                  </div>
                  <span className="text-xl font-semibold">Website Hosting</span>
                </div>
              </div>
            </div>
            
            {/* Right Side - About Me */}
            <div>
              <h2 className="text-4xl font-bold mb-6">About me</h2>
              <p className="text-gray-400 text-base font-normal leading-relaxed mb-8">
               I'm Hitesh Kumar, a passionate Full Stack Web Developer with a knack for creating dynamic and responsive web applications. With a strong foundation in both front-end and back-end technologies, I thrive on transforming ideas into functional digital experiences. My expertise includes HTML, CSS, JavaScript, React.js, Node.js, and database management using SQL and MongoDB. I enjoy collaborating on innovative projects and continuously expanding my skill set to stay abreast of the latest industry trends. Let's connect and build something amazing together!
              </p>
              
              {/* Stats */}
              <div className="flex gap-8 md:justify-between justify-between">
                <div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-semibold text-white">10</span>
                    <span className="text-2xl font-bold text-orange-500">+</span>
                  </div>
                  <p className="text-gray-400 text-sm mt-1">Completed<br/>Projects</p>
                </div>
                
                <div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-semibold text-white">95</span>
                    <span className="text-2xl font-bold text-orange-500">%</span>
                  </div>
                  <p className="text-gray-400 text-sm mt-1">Client<br/>satisfaction</p>
                </div>
                
                <div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-semibold text-white">1</span>
                    <span className="text-2xl font-bold text-orange-500">+</span>
                  </div>
                  <p className="text-gray-400 text-sm mt-1">Years of<br/>experience</p>
                </div>
              </div>
            </div>
            
          </div>
        </section>

        {/* Projects Section */}
        <section className="projects-section bg-black text-white py-12 px-6 md:px-32 mt-12 w-full mx-4 lg:mx-auto border border-slate-700 rounded-xl">
          <h2 className="text-3xl font-bold mb-8 border-b-4 border-cyan-500 inline-block pb-2">My Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Dynamic Project Cards */}
            {projectData.map((project) => (
              <div key={project.id} className="project-card bg-slate-900/50 rounded-xl overflow-hidden border border-slate-700 hover:border-cyan-500 transition-all duration-300 group">
                <div className="h-48 overflow-hidden bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                  <span className="text-6xl">💻</span>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold text-white mb-2">{project.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded">{tech}</span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm text-white hover:text-cyan-400 transition-colors">
                      <ExternalLink size={16} /> Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </section>

      </div>


      {/* Social Icons  */}
      <div className="flex  flex-col items-center gap-4 py-8">
        <h3 className="text-white text-lg font-medium">Connect me on : </h3>

        <div className="flex flex-row justify-center items-center gap-6">
          <div className="w-24 h-[2px] bg-cyan-500 mx-auto mb-2"></div>
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
          <div className="w-24 h-[2px] bg-cyan-500 mx-auto mb-2"></div>

        </div>

      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;