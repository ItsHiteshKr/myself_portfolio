import ExperienceData from '../assets/My_details/skill.json';

const Experience = () => {

    const layerStyle = [
        "bg-slate-50 text-indigo-950",
        "bg-indigo-100 text-indigo-950",
        "bg-indigo-600 text-white",
        "bg-indigo-950 text-white",
    ];
    const display = { fontFamily: "'Bricolage Grotesque', system-ui, sans-serif" };


    return (
        <div>
            <section className="mt-12 md:mt-13" aria-labelledby="xp-services">
                <h2
                    id="xp-services"
                    className="text-4xl text-center font-extrabold underline decoration-cyan-400 decoration-2 underline-offset-4 leading-none tracking-tight md:text-5xl"
                    style={display}
                >
                    What I build
                </h2>
                <p className="mb-8 mt-3 max-w-lg text-center text-gray-400 mx-auto tracking-wide font-normal md:mb-12 md:text-lg">
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
            <section className="mt-16" aria-labelledby="experience-timeline">
                <h2
                    id="experience-timeline"
                    className="text-4xl text-center mb-1 font-extrabold leading-none tracking-tight md:text-5xl"
                    style={display}
                >
                    My Experience
                </h2>
                <div className="mx-auto mb-4 h-1 w-full max-w-[350px] bg-gradient-to-r from-cyan-400 to-purple-500"></div>
                <div className="relative mx-auto mt-10 max-w-3xl pl-8 md:pl-12">
                    {[...(ExperienceData.timeline || [])].map((experience, index, timeline) => {
                        const isFuture = experience.year === "Future";

                        return (
                            <article
                                key={`${experience.place}-${experience.title}-${experience.year}`}
                                className="grid grid-cols-[92px_24px_minmax(0,1fr)] gap-3 pb-10 last:pb-0 sm:grid-cols-[120px_24px_minmax(0,1fr)] sm:gap-4"
                            >
                                <p className="pt-1 text-right text-sm font-semibold leading-6 text-gray-300 sm:text-base">
                                    {experience.year}
                                </p>

                                <div className="relative flex justify-center">
                                    {index < timeline.length - 1 && (
                                        <span
                                            className={`absolute bottom-[-2.5rem] top-4 w-1 ${isFuture ? "border-l-4 border-dashed border-slate-400" : "bg-indigo-600"}`}
                                        />
                                    )}
                                    <span
                                        className={`relative z-10 mt-1 h-5 w-5 rounded-full ${isFuture ? "border-4 border-slate-400 bg-transparent" : "bg-cyan-500"}`}
                                    />
                                </div>

                                <div>
                                    <h3 className="text-2xl font-bold leading-tight text-white sm:text-3xl">
                                        {experience.title}
                                    </h3>
                                    <p className="mt-1 text-base text-cyan-300 sm:text-lg">
                                        {experience.place}
                                    </p>
                                    <p className="mt-4 max-w-2xl leading-relaxed sm:text-xs text-gray-300">
                                        {experience.description}
                                    </p>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </section >
        </div >
    )
}

export default Experience;