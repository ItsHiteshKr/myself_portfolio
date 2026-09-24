import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import { FiExternalLink, FiGithub } from "react-icons/fi";

import projectData from "../assets/My_details/Home_project.json";

/**
    * @param {string} text
    * @param {number} limit
    */
const getShortDescription = (text, limit) => {
    if (!text) return "";
    if (text.length <= limit) return text;
    return `${text.slice(0, limit).trim()}...`;
};

const HomeProject = () => {
    return (
        <div>
            <section className="projects-section  mt-10 md:mt-14 max-w-[1200px] mx-auto">
                <div data-reveal className="reveal-item text-center" style={{ transitionDelay: "40ms" }}>
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-100 mb-3">Projects that ship ideas</h2>
                    <div className="w-[440px] h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-4"></div>
                    <p className="text-gray-400 text-sm max-w-lg mx-auto tracking-wide mb-12 font-normal">
                        A closer look at the products I have built, the problems they solve, and the tools behind them.
                    </p>
                </div>

                <div className="mt-1 w-full grid grid-cols-1 gap-6">
                    {projectData.map((project, index) => {
                        const projectIndex = String(index + 1).padStart(2, "0");
                        return (
                            <article
                                key={project.id}
                                data-reveal
                                className="reveal-item group relative grid overflow-hidden rounded-2xl border border-slate-700/80 bg-slate-950/50 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/70 hover:shadow-[0_18px_50px_rgba(8,145,178,0.14)] lg:grid-cols-[42%_58%]"
                                style={{ transitionDelay: `${180 + index * 70}ms` }}
                            >
                                <div className="relative min-h-[240px] overflow-hidden border-b border-slate-700/80 bg-slate-900 lg:min-h-[320px] lg:border-b-0 lg:border-r">
                                    <img
                                        src={project.pics[0].url}
                                        alt={`${project.name} preview`}
                                        className="h-full w-full object-cover object-top opacity-80 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent lg:bg-gradient-to-r lg:from-slate-950/30 lg:to-transparent"></div>
                                    <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-cyan-300/30 bg-slate-950/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-red-500 backdrop-blur-sm">
                                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                                        Featured Project
                                    </div>
                                </div>

                                <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
                                    <div className="flex items-start justify-between gap-4">
                                        <div>
                                            <h3 className="text-2xl font-semibold text-white transition-colors group-hover:text-cyan-200">
                                                {project.name}
                                            </h3>
                                        </div>
                                    </div>

                                    <p className="mt-4 text-sm font-normal leading-7 text-slate-400">
                                        {getShortDescription(project.description, 180)}
                                    </p>

                                    <div className="mt-5 flex flex-wrap gap-2">
                                        {project.technologies?.map((tech) => (
                                            <span key={tech} className="rounded-md border border-slate-700 bg-slate-900/80 px-2.5 py-1 text-xs font-medium text-slate-300">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="mt-7 flex items-center gap-5 border-t border-slate-800 pt-5 text-sm">
                                        <a href={project.github_url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 font-medium text-slate-300 transition-colors hover:text-cyan-300">
                                            <FiGithub /> Source code
                                        </a>
                                        <a href={project.live_url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 font-medium text-cyan-300 transition-colors hover:text-white">
                                            <FiExternalLink /> Live demo
                                        </a>
                                    </div>

                                </div>
                            </article>
                        );
                    })}
                </div>

                <div className="flex justify-center items-end mt-8 md:mt-10">
                    <a
                        href="/projects"
                        data-reveal
                        className="reveal-item inline-flex items-end justify-center rounded-full border border-cyan-400/60 px-5 py-2 text-sm font-semibold text-gray-200 hover:border-cyan-300 hover:text-white transition"
                        style={{ transitionDelay: "140ms" }}
                    >
                        Explore All Projects  <span className="flex justify-center items-center pl-3 pb-1">{<FaArrowRight />}</span>
                    </a>
                </div>

            </section>
        </div>
    )
}

export default HomeProject