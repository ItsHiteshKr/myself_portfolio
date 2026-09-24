import { useEffect, useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import { FiExternalLink, FiGithub } from "react-icons/fi";

import projectData from "../assets/My_details/project_details.json";


const Project = () => {
    const [activeId, setActiveId] = useState(/** @type {number | null} */(null));
    const [isOpen, setIsOpen] = useState(false);
    const [expandedProjectId, setExpandedProjectId] = useState(/** @type {number | null} */(null));
    const [projectImageIndexes, setProjectImageIndexes] = useState(/** @type {{ [key: number]: number }} */({}));
    const activeProject = projectData.find((project) => project.id === activeId);

    /**
     * @param {string} text
     * @param {number} limit
     * @param {boolean} isDiscOpen
     * @returns {string}
     */
    const getShortDescription = (text, limit, isDiscOpen) => {
        if (!text) return "";
        if (text.length <= limit || isDiscOpen) return text;
        return `${text.slice(0, limit).trim()}...`;
    };

    /** @param {number} projectId */
    const toggleDescription = (projectId) => {
        setExpandedProjectId((current) => (current === projectId ? null : projectId));
    };

    /**
     * @param {number} projectId
     * @param {number} direction
     */
    const changeProjectImage = (projectId, direction) => {
        setProjectImageIndexes((current) => {
            const currentProject = projectData.find((project) => project.id === projectId);
            const images = currentProject?.pics || [];

            if (images.length <= 1) {
                return current;
            }

            const currentIndex = current[projectId] ?? 0;
            const nextIndex = (currentIndex + direction + images.length) % images.length;

            return {
                ...current,
                [projectId]: nextIndex,
            };
        });
    };

    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "";

        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    return (
        <div>
            {/* <h2 className="text-center text-red-500">this page need some improvements</h2> */}
            <main className="max-w-[1200px] mx-auto mt-6 text-white px-4 sm:px-6 lg:px-0">
                <section className="py-10">
                    <div data-reveal className="reveal-item" style={{ transitionDelay: "40ms" }}>
                        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">
                            Selected work.
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
                        className="reveal-item flex flex-wrap items-center gap-5 sm:gap-8 mt-8"
                        style={{ transitionDelay: "120ms" }}
                    >
                        <div className="min-w-[90px]">
                            <span className="text-3xl font-bold text-cyan-300">
                                {String(projectData.length).padStart(2, "0")}+
                            </span>
                            <p className="mt-1 text-xs uppercase tracking-wider text-gray-500">Projects</p>
                        </div>
                        <div className="w-px bg-slate-700"></div>
                        <div className="min-w-[120px] ">
                            <span className="text-3xl font-bold text-cyan-300">
                                {[...new Set(projectData.flatMap(p => p.technologies))].length}+
                            </span>
                            <p className="mt-1 text-xs uppercase tracking-wider text-gray-500">Technologies</p>
                        </div>
                    </div>
                </section>

                {/* Project Cards */}
                <section data-reveal className="pb-8 reveal-item" style={{ transitionDelay: "150ms" }}>
                    <div className="flex flex-col gap-4 sm:gap-7">
                        {projectData.map((project, index) => {
                            const isExpanded = expandedProjectId === project.id;
                            const projectImages = project.pics || [];
                            const currentImageIndex = projectImageIndexes[project.id] ?? 0;
                            const currentImage = projectImages[currentImageIndex]?.url;

                            return (
                                <div
                                    key={project.id}
                                    className='flex w-full flex-col gap-4 rounded-2xl border p-2 text-start transition-all duration-300 group sm:flex-row sm:items-start sm:gap-6'
                                >
                                    <div className="relative overflow-hidden rounded-xl border border-slate-700 bg-slate-900">
                                        {currentImage ? (
                                            <>
                                                <img
                                                    src={currentImage}
                                                    alt={`${project.name} preview`}
                                                    className="h-full w-full object-cover object-top sm:h-72"
                                                />

                                                {projectImages.length > 1 && (
                                                    <>
                                                        <button
                                                            type="button"
                                                            aria-label="Previous image"
                                                            onClick={() => changeProjectImage(project.id, -1)}
                                                            className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-slate-700 bg-slate-950/80 text-slate-200 transition hover:border-cyan-400 hover:text-cyan-300"
                                                        >
                                                            <FaArrowLeft size={14} />
                                                        </button>
                                                        <button
                                                            type="button"
                                                            aria-label="Next image"
                                                            onClick={() => changeProjectImage(project.id, 1)}
                                                            className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-slate-700 bg-slate-950/80 text-slate-200 transition hover:border-cyan-400 hover:text-cyan-300"
                                                        >
                                                            <FaArrowRight size={14} />
                                                        </button>
                                                    </>
                                                )}
                                            </>
                                        ) : (
                                            <div className="flex h-64 items-center justify-center bg-slate-900 text-sm text-slate-500 sm:h-72">
                                                No preview available
                                            </div>
                                        )}
                                    </div>


                                    <div>
                                        <div>
                                            <h3 className="flex items-start justify-between gap-3 text-2xl font-semibold text-white transition-colors group-hover:text-cyan-200">
                                                {project.name}
                                            </h3>
                                            {/* description */}
                                            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-gray-400">
                                                {getShortDescription(project.description, 180, isExpanded)}
                                                {project.description?.length > 180 && !isExpanded && (
                                                    <button
                                                        type="button"
                                                        className="ml-1 text-cyan-400 hover:text-cyan-300"
                                                        onClick={() => toggleDescription(project.id)}
                                                    >
                                                        more
                                                    </button>
                                                )}
                                                {isExpanded && (
                                                    <button
                                                        type="button"
                                                        className="ml-1 text-cyan-400 hover:text-cyan-300"
                                                        onClick={() => toggleDescription(project.id)}
                                                    >
                                                        less
                                                    </button>
                                                )}

                                            </p>
                                            {/* technology */}
                                            <h3 className="mt-3 font-semibold uppercase text-gray-400">TechStack:</h3>
                                            <div className="mt-1 flex flex-wrap gap-2">
                                                {project.technologies.slice(0, 5).map((tech) => (
                                                    <span
                                                        key={tech}
                                                        className="rounded-md border border-slate-700 bg-slate-900 px-2.5 py-1 text-xs text-slate-300"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                                {project.technologies.length > 4 && (
                                                    <button className="rounded-md border border-slate-700 px-2.5 py-1 text-xs text-slate-500"
                                                    >
                                                        +{project.technologies.length - 5}
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                        {/*  Project Links */}
                                        <div className="flex flex-wrap gap-3 border-t border-slate-500 pt-3 my-3 ">
                                            <a
                                                href={project.github_url}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-4 py-2 text-sm font-medium text-slate-200 transition-colors hover:border-cyan-400 hover:text-cyan-300"
                                            >
                                                <FiGithub /> Source code
                                            </a>
                                            {project.live_url && (
                                                <a
                                                    href={project.live_url}
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
                            );
                        })}
                    </div>
                </section>
                <div data-reveal className="reveal-item flex flex-col items-center justify-center py-8 border-gray-200 mb-3 w-full gap-2 rounded-2xl border p-2 text-center transition-all duration-300 group  sm:items-center sm:gap-6">
                    <h2 className="text-lg font-semibold text-gray-400">And Explore more projects on <span className="text-cyan-400 underline">GitHub    </span></h2>
                    <button>
                        <a
                            href='https://github.com/ItsHiteshKr'
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-4 py-2 text-sm font-medium text-slate-200 transition-colors hover:border-cyan-400 hover:text-cyan-300"
                        >
                            <FiGithub /> Source code
                        </a>
                    </button>
                </div>
            </main>

        </div>
    );
};

export default Project;
