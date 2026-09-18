import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import projectData from "../assets/My_details/project_details.json";

/**
 * @param {string} text
 * @param {number} limit
 * @returns {string}
 */
const getShortDescription = (text, limit = 120) => {
    if (!text) return "";
    if (text.length <= limit) return text;
    return `${text.slice(0, limit).trim()}...`;
};

const Project = () => {
    const [activeId, setActiveId] = useState(/** @type {number | null} */(null));
    const [isOpen, setIsOpen] = useState(false);
    const [activeImageIndex, setActiveImageIndex] = useState(0);
    const activeProject = projectData.find((project) => project.id === activeId);
    const activePictures = activeProject?.pics || [];

    /** @param {number} projectId */
    const handleOpen = (projectId) => {
        setActiveId(projectId);
        setActiveImageIndex(0);
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <div>
            <h2 className="text-center text-red-500">this page need some improvements</h2>
            <main className="max-w-[1180px] mx-auto mt-6 text-white px-4 sm:px-6 lg:px-0">
                <section className="py-10">
                    <div data-reveal className="reveal-item" style={{ transitionDelay: "40ms" }}>
                        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">
                            Selected work / 2026
                        </p>
                        <h1 className=" text-5xl font-extrabold leading-[1.05] tracking-tight text-white md:text-7xl">
                            Built to solve real problems.
                        </h1>
                        <p className="mt-6 max-w-2xl text-base font-normal leading-relaxed text-gray-400">
                            A focused archive of products, experiments, and systems built with thoughtful interfaces and dependable technology.
                        </p>
                    </div>

                    {/* Stats bar */}
                    <div
                        data-reveal
                        className="reveal-item flex flex-wrap items-center gap-6 sm:gap-8 mt-8"
                        style={{ transitionDelay: "80ms" }}
                    >
                        <div className="min-w-[90px]">
                            <span className="text-3xl font-bold text-cyan-300">{String(projectData.length).padStart(2, "0")}</span>
                            <p className="mt-1 text-xs uppercase tracking-wider text-gray-500">Projects</p>
                        </div>
                        <div className="w-px bg-slate-700"></div>
                        <div className="min-w-[120px]">
                            <span className="text-3xl font-bold text-cyan-300">
                                {[...new Set(projectData.flatMap(p => p.technologies))].length}
                            </span>
                            <p className="mt-1 text-xs uppercase tracking-wider text-gray-500">Technologies</p>
                        </div>
                    </div>
                </section>

                {/* Project Cards */}
                <section className="pb-16">
                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                        {projectData.map((project, index) => {
                            const isActive = project.id === activeId && isOpen;
                            const projectNum = String(index + 1).padStart(2, "0");
                            return (
                                <button
                                    key={project.id}
                                    type="button"
                                    onClick={() => handleOpen(project.id)}
                                    className={`grid w-full gap-5 rounded-2xl border p-5 text-left transition-all duration-300 group sm:grid-cols-[76px_1fr_auto] sm:items-center sm:gap-6 sm:p-6 ${isActive
                                        ? "border-cyan-500/70 bg-slate-900/80"
                                        : "border-slate-800 bg-slate-950/30 hover:border-slate-600 hover:bg-slate-900/50"
                                        }`}
                                >
                                    <div className="flex items-center justify-between sm:block">
                                        <span className="text-4xl font-light tracking-tight text-slate-600 transition-colors group-hover:text-cyan-300">
                                            {projectNum}
                                        </span>
                                        <span className="flex items-center gap-2 text-xs text-gray-500 sm:mt-5">
                                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                                            Built
                                        </span>
                                    </div>

                                    <div>
                                        <h3 className="flex items-start justify-between gap-3 text-2xl font-semibold text-white transition-colors group-hover:text-cyan-200">
                                            {project.name}
                                        </h3>
                                        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-gray-400">
                                            {getShortDescription(project.description)}
                                        </p>

                                        <div className="mt-4 flex flex-wrap gap-2">
                                            {project.technologies.slice(0, 4).map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="rounded-md border border-slate-700 bg-slate-900 px-2.5 py-1 text-xs text-slate-300"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                            {project.technologies.length > 4 && (
                                                <span className="rounded-md border border-slate-700 px-2.5 py-1 text-xs text-slate-500">
                                                    +{project.technologies.length - 4}
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    <span className="mt-2 flex items-center gap-2 text-sm font-medium text-slate-500 transition-colors group-hover:text-cyan-300 sm:mt-0">
                                        View <FaArrowRight className="transition-transform group-hover:translate-x-1" />
                                    </span>
                                </button>
                            );
                        })}
                    </div>
                </section>
            </main>

            {/* Overlay */}
            <div
                className={`fixed inset-0 bg-black/20 backdrop-blur-sm z-[120] transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
                onClick={handleClose}
            />

            {/* Detail Panel */}
            <aside
                role="dialog"
                aria-modal="true"
                className={`fixed left-4 right-4 bottom-4 z-[130] sm:left-auto sm:right-6 sm:bottom-6 sm:w-[560px] max-h-[82vh] overflow-y-auto rounded-2xl border border-slate-700 bg-slate-950/95 backdrop-blur-md shadow-2xl transition-all duration-300 ${isOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8 pointer-events-none"
                    }`}
            >
                {activeProject ? (
                    <div>
                        {/* Panel Header */}
                        <div className="sticky top-0 z-10 bg-slate-900/95 backdrop-blur-md px-6 pt-6 pb-4 border-b border-slate-700">
                            <div className="flex items-start justify-between gap-4">
                                <div>
                                    <p className="text-xs font-medium tracking-widest uppercase text-cyan-300 mb-1">
                                        Project {String(projectData.indexOf(activeProject) + 1).padStart(2, "0")}
                                    </p>
                                    <h2 className="text-2xl font-bold text-white">
                                        {activeProject.name}
                                    </h2>
                                </div>
                                <button
                                    type="button"
                                    onClick={handleClose}
                                    aria-label="Close project details"
                                    className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-700 text-gray-300 hover:border-cyan-400 hover:text-white transition-colors"
                                >
                                    <IoClose size={18} />
                                </button>
                            </div>
                        </div>

                        {/* Panel Body */}
                        <div className="px-6 py-5 space-y-6">
                            {activePictures.length > 0 && (
                                <div>
                                    <img
                                        src={activePictures[activeImageIndex]?.url || activePictures[0].url}
                                        alt={`${activeProject.name} preview ${activeImageIndex + 1}`}
                                        className="h-56 w-full rounded-xl border border-slate-700 object-cover object-top"
                                    />
                                    {activePictures.length > 1 && (
                                        <div className="mt-3 grid grid-cols-4 gap-2">
                                            {activePictures.map((pic, imageIndex) => (
                                                <button
                                                    key={pic.id || pic.url}
                                                    type="button"
                                                    onClick={() => setActiveImageIndex(imageIndex)}
                                                    aria-label={`Show preview ${imageIndex + 1}`}
                                                    className={`overflow-hidden rounded-lg border transition ${activeImageIndex === imageIndex
                                                        ? "border-cyan-400 ring-1 ring-cyan-400/50"
                                                        : "border-slate-700 opacity-60 hover:border-slate-400 hover:opacity-100"
                                                        }`}
                                                >
                                                    <img
                                                        src={pic.url}
                                                        alt={`${activeProject.name} thumbnail ${imageIndex + 1}`}
                                                        className="h-14 w-full object-cover object-top"
                                                    />
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            )}
                            {/* Description */}
                            <div>
                                <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-300 mb-3">About</h3>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    {activeProject.description}
                                </p>
                            </div>

                            {/* Technologies */}
                            <div>
                                <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-300 mb-3">Tech Stack</h3>
                                <div className="flex flex-wrap gap-2">
                                    {activeProject.technologies.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-xs text-cyan-300 font-medium"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-3 border-t border-slate-800 pt-5">
                                <a
                                    href={activeProject.github_url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-4 py-2 text-sm font-medium text-slate-200 transition-colors hover:border-cyan-400 hover:text-cyan-300"
                                >
                                    <FiGithub /> Source code
                                </a>
                                {activeProject.live_url && (
                                    <a
                                        href={activeProject.live_url}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center gap-2 rounded-lg bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 transition-colors hover:bg-cyan-300"
                                    >
                                        <FiExternalLink /> Live demo
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ) : null}
            </aside>
        </div>
    );
};

export default Project;
