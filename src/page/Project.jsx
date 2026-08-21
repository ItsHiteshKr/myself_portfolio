import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";
import projectData from "../assets/My_details/project_details.json";

const getShortDescription = (text, limit = 120) => {
    if (!text) return "";
    if (text.length <= limit) return text;
    return `${text.slice(0, limit).trim()}...`;
};

const Project = () => {
    const [activeId, setActiveId] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const activeProject = projectData.find((project) => project.id === activeId);

    const handleOpen = (projectId) => {
        setActiveId(projectId);
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <div>

            <main className="max-w-[1200px] mx-auto mt-6 text-white px-4 sm:px-6 lg:px-0">
                {/* Header */}
                <div className="flex justify-center py-4 text-red-400 ">
                    <h2 className="border-b-2 border-cyan-600">This project page is under improvements* </h2>
                </div>
                <section className="py-10">
                    <div data-reveal className="reveal-item" style={{ transitionDelay: "40ms" }}>
                        <h1 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-gray-300 via-slate-200 to-cyan-500 mb-4">
                            My Projects
                        </h1>
                        <p className="text-gray-300 text-base font-normal max-w-2xl leading-relaxed">
                            A collection of projects I've built — from full-stack web apps to API integrations.
                            Click on any project to explore its details and tech stack.
                        </p>
                    </div>

                    {/* Stats bar */}
                    <div
                        data-reveal
                        className="reveal-item flex gap-8 mt-8"
                        style={{ transitionDelay: "80ms" }}
                    >
                        <div>
                            <span className="text-2xl font-bold text-cyan-300">{projectData.length}</span>
                            <p className="text-gray-300 text-xs mt-0.5">Projects</p>
                        </div>
                        <div className="w-px bg-slate-700"></div>
                        <div>
                            <span className="text-2xl font-bold text-cyan-300">
                                {[...new Set(projectData.flatMap(p => p.technologies))].length}
                            </span>
                            <p className="text-gray-300 text-xs mt-0.5">Technologies</p>
                        </div>
                    </div>
                </section>

                {/* Project Cards */}
                <section className="pb-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {projectData.map((project, index) => {
                            const isActive = project.id === activeId && isOpen;
                            const projectNum = String(index + 1).padStart(2, "0");
                            return (
                                <button
                                    key={project.id}
                                    type="button"
                                    onClick={() => handleOpen(project.id)}
                                    className={`text-left rounded-2xl border p-6 transition-all duration-300 group ${isActive
                                        ? "border-cyan-500 bg-gray-800"
                                        : "border-gray-700 bg-gray-800 hover:border-cyan-300 hover:scale-105"
                                        }`}
                                >
                                    {/* Top row */}
                                    <div className="">

                                    </div>

                                    {/* Name */}
                                    <h3 className="text-xl font-bold text-white mt-3 flex items-start justify-between gap-3">
                                        {project.name}
                                        <span className={`mt-1.5 flex items-center gap-1.5 text-xs ${isActive ? "text-cyan-400" : "text-gray-300 group-hover:text-gray-200"} transition-colors`}>
                                            View <FaArrowRight size={10} />
                                        </span>
                                    </h3>

                                    {/* Description */}
                                    <p className="text-gray-300 text-sm mt-2 leading-relaxed">
                                        {getShortDescription(project.description)}
                                    </p>

                                    {/* Tech chips */}
                                    <div className="flex flex-wrap gap-2 mt-5">
                                        {project.technologies.slice(0, 4).map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-2.5 py-1 rounded-full bg-gray-700 border border-gray-300 text-xs text-gray-300"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                        {project.technologies.length > 4 && (
                                            <span className="px-2.5 py-1 rounded-full bg-white border border-gray-300 text-xs text-gray-600">
                                                +{project.technologies.length - 4}
                                            </span>
                                        )}
                                    </div>
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
                className={`fixed left-4 right-4 bottom-4 z-[130] sm:left-auto sm:right-6 sm:bottom-6 sm:w-[520px] max-h-[80vh] overflow-y-auto rounded-2xl border border-gray-800 bg-gray-500 backdrop-blur-md shadow-2xl transition-all duration-300 ${isOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8 pointer-events-none"
                    }`}
            >
                {activeProject ? (
                    <div>
                        {/* Panel Header */}
                        <div className="sticky top-0 bg-gray-800 backdrop-blur-md px-6 pt-6 pb-4 border-b border-gray-800">
                            <div className="flex items-start justify-between gap-4">
                                <div>
                                    <p className="text-xs font-medium tracking-widest uppercase text-white mb-1">
                                        Project {String(projectData.indexOf(activeProject) + 1).padStart(2, "0")}
                                    </p>
                                    <h2 className="text-2xl font-bold text-white">
                                        {activeProject.name}
                                    </h2>
                                </div>
                                <button
                                    type="button"
                                    onClick={handleClose}
                                    className="w-10 h-10 flex items-center justify-center rounded-lg  text-gray-100 hover:text-white hover:scale-125 transition-colors"
                                >
                                    <IoClose size={18} />
                                </button>
                            </div>
                        </div>

                        {/* Panel Body */}
                        <div className="px-6 py-5 space-y-6">
                            {/* Description */}
                            <div>
                                <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-300 mb-3">About</h3>
                                <p className="text-gray-200 text-sm leading-relaxed">
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
                                            className="px-3 py-1.5 rounded-lg bg-gray-700 border border-gray-600 text-xs text-cyan-300 font-medium"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ) : null}
            </aside>
        </div>
    );
};

export default Project;
