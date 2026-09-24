import React from "react";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiJsonwebtokens, SiRedis, SiMongodb, SiMysql, SiPostgresql, SiVercel, SiPostman, SiSocketdotio, SiCplusplus } from "react-icons/si";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { VscCode } from "react-icons/vsc";

import RotatingTypewriter from '../components/RotatingTypewriter'
import skillData from '../assets/My_details/skill.json';

import Contact from "./Contact";
import HomeProject from "../components/HomeProject";
import Experience from "../components/Experience";

const VITE_RESUME_URL = import.meta.env.VITE_RESUME_URL;



const ROLE_TEXTS = ["Full Stack Web Developer", "MERN Stack Developer", "React.js Developer"];

const SKILL_ICONS = {
  "C++": { icon: SiCplusplus, color: "#00599C" },
  "SQL": { icon: AiOutlineConsoleSql, color: "#F29111" },
  "HTML": { icon: FaHtml5, color: "#E34F26" },
  "CSS": { icon: FaCss3Alt, color: "#1572B6" },
  "JavaScript": { icon: FaJsSquare, color: "#F7DF1E" },
  "React.js": { icon: FaReact, color: "#61DAFB" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "#06B6D4" },
  "Node.js": { icon: FaNodeJs, color: "#339933" },
  "Express.js": { icon: SiExpress, color: "#FFFFFF" },
  "JWT": { icon: SiJsonwebtokens, color: "#D63AFF" },
  "Redis": { icon: SiRedis, color: "#DC382D" },
  "MySQL": { icon: SiMysql, color: "#4479A1" },
  "MongoDB": { icon: SiMongodb, color: "#47A248" },
  "PostgreSQL": { icon: SiPostgresql, color: "#4169E1" },
  "Git": { icon: FaGitAlt, color: "#F05032" },
  "GitHub": { icon: FaGithub, color: "#FFFFFF" },
  "VS Code": { icon: VscCode, color: "#007ACC" },
  "Vercel": { icon: SiVercel, color: "#FFFFFF" },
  "Postman": { icon: SiPostman, color: "#FF6C37" },
  "Socket.io": { icon: SiSocketdotio, color: "#010105" },
};




export const Home = () => {

  const handleResumeDownload = () => {
    const anchor = document.createElement('a');
    anchor.href = VITE_RESUME_URL;
    anchor.download = 'Hitesh_Kumar_Resume.pdf';
    anchor.target = '_blank';
    anchor.rel = 'noopener noreferrer';
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  };

  return (
    <div className="main mt-1 min-h-[90vh] w-full max-w-[1200px] min-w-0 mx-auto border-gray-700 pb-6 md:pb-1">

      {/* header Section */}
      <div className="flex flex-col items-center gap-1 sm:gap-1 mt-6 md:mt-10  mx-auto">
        <div className="flex items-center gap-1 sm:gap-2">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-wide bg-clip-text text-transparent bg-gray-200">Hi, I'm</h2>
          <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-8xl font-extrabold tracking-wide bg-clip-text text-transparent bg-cyan-500">Hitesh</h1>
        </div>
        <div>
          <RotatingTypewriter
            texts={ROLE_TEXTS}
            typingSpeed={80}
            deletingSpeed={45}
            pauseTime={1100}
            cursorClassName="text-cyan-300 animate-pulse"
            className="anime-text mt-0 inline-flex w-full sm:w-auto items-center gap-1 text-sm sm:text-base md:text-2xl font-semibold text-cyan-300 px-2 py-1 min-h-[2.25rem] md:min-h-[2.75rem] min-w-0 sm:min-w-[17ch] md:min-w-[22ch] "
          />
        </div>
      </div>


      {/* MAIN */}
      <main className="">
        <div className="home grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-y-6 md:gap-y-2 h-full font-bold md:gap-x-8 lg:gap-x-10">

          {/* Image Section */}
          <div className="flex flex-col items-center md:items-start gap-4 md:gap-6 lg:gap-8 mb-2">

            <div className="relative group justify-self-center  mt-10 md:mt-8 lg:mt-10">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative bg-transparent rounded-full overflow-hidden border border-gray-200">
                <img src="/images/newmypic_new.png" alt="Hitesh"
                  className="w-80 h-80 sm:w-72 sm:h-72 md:w-[25rem] md:h-[25rem] object-cover grayscale hover:grayscale-0 transition duration-500" />
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 mt-1">
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

          {/* Right Side - About Me */}
          <div>
            <p className="text-[#afb6bd] text-lg font-normal leading-relaxed tracking-wide mb-8 pt-1">
              I'm Hitesh , a Full Stack Web Developer with hands-on experience building responsive, scalable, and user-focused web applications.

              I specialize in React.js, JavaScript, Node.js, Express.js, and database technologies including MySQL, PostgreSQL, and MongoDB.
              <br />
              <br />
              Through my internship and personal projects, I've worked on real-world applications such as an Intranet Portal, Stock Management System, and AI Career Coach.
              <br />
              <br />
              I'm also currently building a real-time Chat Application as a personal project to strengthen my skills in the MERN stack, Socket.io, real-time communication, and full-stack application development.
              I enjoy turning ideas into practical products, solving technical problems, and continuously learning new technologies to become a better engineer.

            </p>

            {/* Stats */}
            <div className="flex gap-5 sm:gap-8 md:justify-between justify-center text-center mb-4">

              <div className="border border-gray-500 bg-gray-900 hover:border-cyan-500 hover:bg-gray-800 rounded-lg px-4 py-2  transition-all duration-300">
                <div className="flex justify-center gap-1 ">
                  <h2 className="text-2xl font-bold text-cyan-500">5+</h2>
                </div>
                <p className="text-gray-300 text-md mt-1">Completed<br />Projects</p>
              </div>

              <div className="border border-gray-700 bg-gray-900 hover:border-cyan-500 hover:bg-gray-800 rounded-lg px-4 py-2  transition-all duration-300">
                <div className="flex justify-center gap-1">
                  <h2 className="text-2xl font-bold text-cyan-500">250+</h2>
                </div>
                <p className="text-gray-300 text-md mt-1">DSA<br />Solved</p>
              </div>

              <div className="border border-gray-700 bg-gray-900 hover:border-cyan-500 hover:bg-gray-800 rounded-lg px-5 py-2  transition-all duration-300">
                <div className="flex items-center justify-center gap-1">
                  <h2 className="text-2xl font-bold text-cyan-500">1+</h2>
                </div>
                <p className="text-gray-300 text-md mt-1">Years of <br />Experience</p>
              </div>
            </div>

          </div>

        </div>
      </main>

      {/* Skill details */}
      <div className="mt-7 flex w-full min-w-0 items-center justify-center md:mt-8">
        <section className="relative w-full max-w-[1200px] min-w-0 overflow-visible px-1 py-1 sm:px-2">

          <div data-reveal className="reveal-item text-center" style={{ transitionDelay: "40ms" }}>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-200 mb-2 ">My Tech Skills</h2>
            <div className="mx-auto mb-3 h-1 w-full max-w-[400px] bg-gradient-to-r from-cyan-500 to-purple-500"></div>
            <p className="text-gray-300 text-sm max-w-md mx-auto tracking-wide mb-12">Technologies and tools I work with to bring ideas to life</p>
          </div>

          <div
            data-reveal
            className="reveal-item grid min-w-0 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3"
            style={{ transitionDelay: "100ms" }}
          >
            {skillData.skills.map((group, i) => (
              <div key={i} className="border border-gray-500 rounded-xl p-6 transition-all duration-500 hover:-translate-y-2 hover:border-cyan-500 hover:shadow-[0_0_26px_rgba(34,211,238,0.45)]">
                <h3 className="text-xl font-bold text-cyan-400 text-center mb-2 border-b border-gray-400 pb-2">
                  {group.category}
                </h3>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-7 pt-4 px-3 py-3 ">
                  {group.items.map((skill, j) => {
                    const skillInfo = SKILL_ICONS[skill];
                    const IconComponent = skillInfo?.icon;
                    const iconColor = skillInfo?.color || "#22d3ee";
                    return (
                      <div key={j} className="flex flex-col items-center gap-1">
                        <div
                          className="w-16 h-16 flex items-center justify-center rounded-2xl border border-gray-500 transition-all duration-300 hover:scale-110"
                          style={{ background: `${iconColor}08` }}
                        >
                          {IconComponent && (
                            <IconComponent size={32} style={{ color: iconColor }} />
                          )}
                        </div>
                        <span className="text-xs text-gray-400 font-medium text-center leading-tight">
                          {skill}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Experience Section */}
      <Experience />
      {/* Projects Section */}
      <HomeProject />

      {/* Contact Form */}
      <Contact />


    </div>
  );
};

export default Home;