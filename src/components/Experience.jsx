import React from 'react'

import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";

import ExperienceData from '../assets/My_details/skill.json';
const layerStyle = [
    "bg-slate-50 text-indigo-950",
    "bg-indigo-100 text-indigo-950",
    "bg-indigo-600 text-white",
    "bg-indigo-950 text-white",
];
const display = { fontFamily: "'Bricolage Grotesque', system-ui, sans-serif" };

const Experience = () => {
    return (
        <div>
            <section className="mt-28 md:mt-32" aria-labelledby="xp-services">
                <h2
                    id="xp-services"
                    className="text-4xl font-extrabold leading-none tracking-tight md:text-5xl"
                    style={display}
                >
                    What I build
                </h2>
                <p className="mb-8 mt-3 max-w-md">
                    The four layers of a web app I work on, from the screen down to the server.
                </p>

                {/* layers: interface on top, hosting as the foundation */}
                <ul className="overflow-hidden rounded-3xl">
                    {ExperienceData.services?.map((s, i) => (
                        <li
                            key={s.title}
                            className={`grid gap-2 px-5 py-7 md:grid-cols-2 md:items-baseline md:gap-10 md:px-10 ${layerStyle[Math.min(i, layerStyle.length - 1)]
                                }`}
                        >
                            <h3
                                className="text-2xl font-extrabold leading-tight tracking-tight"
                                style={display}
                            >
                                {s.title}
                            </h3>
                            <p>{s.description}</p>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    )
}

export default Experience;