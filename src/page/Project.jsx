import { useState } from "react";
import projectData from "../assets/My_details/project_details.json";

const getShortDescription = (text, limit = 140) => {
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
            <main className="max-w-[1200px] mx-auto mt-6">
                <section className="relative overflow-hidden py-10">
                    <div className="absolute -top-24 right-0 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />
                    <div className="absolute -bottom-24 left-0 h-64 w-64 rounded-full bg-purple-500/10 blur-3xl" />
                    <h1 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-cyan-500 mb-4">
                        My Projects
                    </h1>
                    <p className="text-gray-400 text-base font-normal max-w-2xl">
                        Mini cards me ek project select karo, aur uska full detail side panel me dekho.
                        Har project ke tech stack aur description yahin se mil jayega.
                    </p>
                </section>

                <section className="pb-12">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {projectData.map((project) => {
                            const isActive = project.id === activeId;
                            return (
                                <button
                                    key={project.id}
                                    type="button"
                                    onClick={() => handleOpen(project.id)}
                                    className={`text-left rounded-2xl border p-5 transition-all duration-300 ${isActive
                                        ? "border-cyan-500 bg-cyan-500/10 shadow-[0_0_30px_rgba(6,182,212,0.15)]"
                                        : "border-slate-800 bg-slate-900/40 hover:border-cyan-500/60"
                                        }`}
                                >
                                    <div className="flex items-center justify-between gap-3">
                                        <div>
                                            <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                                                Project {project.id}
                                            </p>
                                            <h3 className="text-lg font-semibold text-white mt-1">
                                                {project.name}
                                            </h3>
                                        </div>
                                        <span
                                            className={`h-2.5 w-2.5 rounded-full ${isActive ? "bg-cyan-400" : "bg-slate-700"
                                                }`}
                                        />
                                    </div>
                                    <p className="text-gray-400 text-sm mt-3 leading-relaxed">
                                        {getShortDescription(project.description)}
                                    </p>
                                    <div className="flex flex-wrap gap-2 mt-4">
                                        {project.technologies.slice(0, 3).map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-2.5 py-1 rounded-full bg-black/50 border border-slate-700 text-xs text-gray-300"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </button>
                            );
                        })}
                    </div>
                </section>
            </main>

            <div
                className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[120] transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
                onClick={handleClose}
            />

            <aside
                role="dialog"
                aria-modal="true"
                className={`fixed left-4 right-4 bottom-4 z-[130] sm:left-auto sm:right-6 sm:bottom-6 sm:w-[520px] max-h-[80vh] overflow-y-auto rounded-2xl border border-slate-700 bg-slate-950/95 p-6 shadow-2xl transition-all duration-300 ${isOpen
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-6 pointer-events-none"
                    }`}
            >
                {activeProject ? (
                    <>
                        <div className="flex items-start justify-between gap-4">
                            <div>
                                <p className="text-xs uppercase tracking-[0.2em] text-cyan-400">
                                    Project Details
                                </p>
                                <h2 className="text-2xl font-bold text-white mt-2">
                                    {activeProject.name}
                                </h2>
                            </div>
                            <button
                                type="button"
                                onClick={handleClose}
                                className="text-xs uppercase tracking-[0.2em] text-gray-400 hover:text-white"
                            >
                                Close
                            </button>
                        </div>

                        <p className="text-gray-300 text-sm leading-relaxed mt-4">
                            {activeProject.description}
                        </p>

                        <div className="mt-6">
                            <h3 className="text-sm font-semibold text-white">Technologies</h3>
                            <div className="flex flex-wrap gap-2 mt-3">
                                {activeProject.technologies.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs text-cyan-300"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </>
                ) : (
                    <p className="text-gray-400">
                        Abhi koi project select nahi hua. Kisi bhi card par click karein.
                    </p>
                )}
            </aside>
        </div>
    );
};

export default Project;
