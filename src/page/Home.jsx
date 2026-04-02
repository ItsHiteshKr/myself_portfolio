import React, { useEffect, useRef } from "react";
import { SlSocialInstagram, SlSocialLinkedin, SlSocialFacebook, SlSocialGithub } from "react-icons/sl";
import { RiComputerLine } from "react-icons/ri";
import { IoMdCode } from "react-icons/io";
import gsap from "gsap";
import RotatingTypewriter from '../components/RotatingTypewriter'
import myPic from "../assets/images/newmypic_new.png"


import projectData from "../assets/My_details/project_details.json";

const RESUME_DOWNLOAD_LINK = 'https://docs.google.com/document/d/1czNZcEToS2wC_8C37z88FEMdJpR4AZ5PCOUyUDjy7NI/export?format=pdf';

const ROLE_TEXTS = ["Full Stack Web Developer", "MERN Stack Developer", "React.js Developer"];

const getShortDescription = (text, limit = 130) => {
  if (!text) return "";
  if (text.length <= limit) return text;
  return `${text.slice(0, limit).trim()}...`;
};

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
    gsap.from('.home__information', { opacity: 0, duration: 1.6, delay: 2.3 });

    // NAV ITEM Animation
    gsap.from('.nav__logo', { opacity: 0, duration: 3, delay: 3.2, y: 25, ease: 'expo.out' });
    gsap.from('.nav__item', { opacity: 0, duration: 3, delay: 3.2, y: 25, ease: 'expo.out', stagger: 0.2 });

    // SOCIAL Animation
    gsap.from('.home__social-icon', { opacity: 0, duration: 3, delay: 4, y: 25, ease: 'expo.out', stagger: 0.2 });
  }, []);

  const handleResumeDownload = () => {
    const anchor = document.createElement('a');
    anchor.href = RESUME_DOWNLOAD_LINK;
    anchor.download = 'Hitesh_Kumar_Resume.pdf';
    anchor.target = '_blank';
    anchor.rel = 'noopener noreferrer';
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  };

  return (
    <div>
      {/* OVERLAY */}
      <div className="overlay first fixed top-0 left-0 w-full h-full z-[1000] pointer-events-none bg-cyan-500"></div>
      <div className="overlay second fixed top-0 left-[25%] w-full h-full z-[1000] pointer-events-none bg-cyan-500"></div>
      <div className="overlay third fixed top-0 left-[50%] w-full h-full z-[1000] pointer-events-none bg-cyan-500"></div>
      <div className="overlay fourth fixed top-0 left-[75%] w-full h-full z-[1000] pointer-events-none bg-cyan-500"></div>

      {/* MAIN */}
      <main className="main min-h-[82vh] bg-black mt-6 max-w-[1200px] mx-auto">
        <div className="home grid grid-cols-1 md:grid-cols-2 items-center gap-y-6 md:gap-y-2 h-full font-bold md:gap-x-8 lg:gap-x-10">

          {/* Information Section */}
          <div className="pl-3 sm:pl-4 border-l-[3px] border-l-cyan-500 z-10 h-auto home__information">
            <div className="text-start">
              <span className="text-cyan-400 font-mono tracking-widest text-lg block mb-2">Hello,</span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-cyan-500">I'am Hitesh Kumar</h1>
              <RotatingTypewriter
                texts={ROLE_TEXTS}
                typingSpeed={80}
                deletingSpeed={45}
                pauseTime={1100}
                cursorClassName="text-cyan-300 animate-pulse"
                className="anime-text mt-2 inline-flex w-full sm:w-auto items-center gap-1 text-sm sm:text-base md:text-2xl font-semibold text-cyan-300 px-3 py-1 min-h-[2.25rem] md:min-h-[2.75rem] min-w-0 sm:min-w-[17ch] md:min-w-[22ch] "
              />
            </div>


            <div className="flex flex-wrap items-center gap-3 mt-6">
              <a
                href="mailto:hiteshbih11@gmail.com"
                className="bg-cyan-500 hover:bg-cyan-600 text-white rounded py-2.5 px-4 transition-all inline-block"
              >
                Hire me ?
              </a>
              <button
                className="bg-transparent border border-white hover:border-cyan-500 text-white hover:bg-cyan-600 hover:text-black rounded py-2.5 px-4 transition-all"
                onClick={handleResumeDownload}
              >
                My resume
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative group justify-self-center home__img mt-10 md:mt-8 lg:mt-10">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative bg-black rounded-full overflow-hidden border border-slate-800">
              <img src={myPic} alt="Hitesh" className="w-64 h-64 sm:w-72 sm:h-72 md:w-[20rem] md:h-[20rem] object-cover grayscale hover:grayscale-0 transition duration-500" />
            </div>
          </div>

        </div>

        {/* Language name */}
        <div
          data-reveal
          className="reveal-item flex flex-wrap justify-center gap-3 md:gap-8 bg-slate-800/50 backdrop-blur-sm w-auto mx-auto px-4 sm:px-6 py-3 rounded-md mt-28 md:mt-20 text-white font-medium text-center text-xs sm:text-sm md:text-base"
          style={{ transitionDelay: "80ms" }}
        >
          <p>HTML</p>
          <p>CSS</p>
          <p>JavaScript</p>
          <p>React.js</p>
          <p>Node.js</p>
          <p>Git</p>
          <p>GitHub</p>
          <p>SQL</p>
          <p>MongoDB</p>
          <p>JWT</p>
          <p>redis</p>
        </div>

      </main>

      <div>
        {/* About Section - New Design */}
        <section
          data-reveal
          className="reveal-item about-section text-white py-4 md:py-8 px-0 mt-0 max-w-[1200px] mx-auto"
          style={{ transitionDelay: "120ms" }}
        >
          <div className="max-w-[1150px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

            {/* Left Side - Services */}
            <div className="relative pl-8">
              {/* Vertical Line */}
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-slate-700">
                <div className="absolute top-[8%] left-1/2 -translate-x-1/2 w-3 h-3 bg-orange-500 rounded-full"></div>
                <div className="absolute top-[48%] left-1/2 -translate-x-1/2 w-3 h-3 bg-orange-500 rounded-full"></div>
                <div className="absolute top-[88%] left-1/2 -translate-x-1/2 w-3 h-3 bg-orange-500 rounded-full"></div>
              </div>

              {/* Service Items */}
              <div className="space-y-12">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 flex items-center justify-center text-white">
                    <IoMdCode size={28} />
                  </div>
                  <span className="text-xl font-semibold">Website Development</span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 flex items-center justify-center text-white">
                    <RiComputerLine size={28} />
                  </div>
                  <span className="text-xl font-semibold">Website Hosting</span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 flex items-center justify-center text-white">
                    <RiComputerLine size={28} />
                  </div>
                  <span className="text-xl font-semibold">Website Hosting</span>
                </div>
              </div>
            </div>

            {/* Right Side - About Me */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold sm:pt-3 mb-6">About me</h2>
              <p className="text-gray-400 text-base font-normal leading-relaxed mb-8">
                I'm Hitesh Kumar, a passionate Full Stack Web Developer with a knack for creating dynamic and responsive web applications. With a strong foundation in both front-end and back-end technologies, I thrive on transforming ideas into functional digital experiences. My expertise includes HTML, CSS, JavaScript, React.js, Node.js, and database management using SQL and MongoDB. I enjoy collaborating on innovative projects and continuously expanding my skill set to stay abreast of the latest industry trends. Let's connect and build something amazing together!
              </p>

              {/* Stats */}
              <div className="flex gap-5 sm:gap-8 md:justify-between justify-between">
                <div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-semibold text-white">10</span>
                    <span className="text-2xl font-bold text-orange-500">+</span>
                  </div>
                  <p className="text-gray-400 text-sm mt-1">Completed<br />Projects</p>
                </div>

                <div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-semibold text-white">95</span>
                    <span className="text-2xl font-bold text-orange-500">%</span>
                  </div>
                  <p className="text-gray-400 text-sm mt-1">Client<br />satisfaction</p>
                </div>

                <div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-semibold text-white">6</span>
                    <span className="text-2xl font-bold text-orange-500">+</span>
                  </div>
                  <p className="text-gray-400 text-sm mt-1">Months of<br />experience</p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Projects Section */}
        <section className="projects-section relative mt-10 md:mt-14 max-w-[1200px] mx-auto">
          <div className="absolute -top-24 right-10 h-56 w-56 rounded-full bg-cyan-500/10 blur-3xl" />
          <div className="absolute -bottom-24 left-6 h-56 w-56 rounded-full bg-purple-500/10 blur-3xl" />

          <div className="relative rounded-3xl border border-slate-800 bg-slate-950/60 px-5 py-8 sm:px-8 sm:py-10 backdrop-blur">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div data-reveal className="reveal-item" style={{ transitionDelay: "60ms" }}>
                <p className="text-xs uppercase tracking-[0.35em] text-cyan-400">Featured Work</p>
                <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">Project Showcase</h2>
                <p className="text-gray-400 text-sm sm:text-base mt-3 max-w-2xl">
                  Clean case studies with tech stack highlights. Kisi bhi card par hover karo aur detail ka hint lo.
                </p>
              </div>
              <a
                href="/projects"
                data-reveal
                className="reveal-item inline-flex items-center justify-center rounded-full border border-cyan-400/60 px-5 py-2 text-sm font-semibold text-cyan-300 hover:border-cyan-300 hover:text-white transition"
                style={{ transitionDelay: "140ms" }}
              >
                Explore All Projects
              </a>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {projectData.map((project, index) => {
                const projectIndex = String(index + 1).padStart(2, "0");
                return (
                  <article
                    key={project.id}
                    data-reveal
                    className="reveal-item group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/70"
                    style={{ transitionDelay: `${180 + index * 70}ms` }}
                  >
                    <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-cyan-500/10 blur-2xl opacity-0 transition duration-300 group-hover:opacity-100" />
                    <div className="relative">
                      <div className="flex items-center justify-between">
                        <span className="text-xs uppercase tracking-[0.3em] text-gray-500">Project {projectIndex}</span>
                        <span className="text-xs text-cyan-400">Case Study</span>
                      </div>
                      <h3 className="text-xl font-semibold text-white mt-4">
                        {project.name}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed mt-3">
                        {getShortDescription(project.description)}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-5">
                        {project.technologies.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-full bg-black/50 border border-slate-700 text-xs text-gray-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="mt-6 flex items-center justify-between text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
                        <span>View Details</span>
                        <span className="text-gray-500 group-hover:text-cyan-300 transition">Open</span>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

      </div>


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
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon w-11 h-11 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-cyan-500 hover:text-black border border-white/40 hover:scale-110 transition-all duration-300">
              <SlSocialFacebook size={22} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon w-11 h-11 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-cyan-500 hover:text-black border border-white/40 hover:scale-110 transition-all duration-300">
              <SlSocialInstagram size={22} />
            </a>
            <a href="https://github.com/ItsHiteshKr" target="_blank" rel="noopener noreferrer" className="social-icon w-11 h-11 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-cyan-500 hover:text-black border border-white/40 hover:scale-110 transition-all duration-300">
              <SlSocialGithub size={22} />
            </a>
            <a href="https://www.linkedin.com/in/hitesh-kumar-088184240" target="_blank" rel="noopener noreferrer" className="social-icon w-11 h-11 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-cyan-500 hover:text-black border border-white/40 hover:scale-110 transition-all duration-300">
              <SlSocialLinkedin size={22} />
            </a>
          </div>
          <div className="hidden sm:block w-24 h-[2px] bg-cyan-500 mx-auto mb-2"></div>

        </div>

      </div>

    </div>
  );
};

export default Home;