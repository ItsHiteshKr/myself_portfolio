import skillData from '../assets/My_details/skill.json';

export const About = () => {
    return (
        <div className="relative min-h-screen w-full max-w-[1400px] mx-auto overflow-x-hidden px-4 sm:px-6 lg:px-0 bg-white text-black">

            <main className="max-w-[1200px] mx-auto mt-6">
                {/* Timeline */}
                <section className="py-10">
                    <div data-reveal className="reveal-item" style={{ transitionDelay: "40ms" }}>
                        <h2 className="text-3xl md:text-4xl font-bold text-black mb-2">My Journey</h2>
                        <div className="w-16 h-1 bg-cyan-500 mb-8"></div>
                    </div>

                    <div className="relative pl-8 border-l-2 border-slate-700 space-y-10">
                        {skillData.timeline.map((item, i) => (
                            <div
                                key={i}
                                data-reveal
                                className="reveal-item relative"
                                style={{ transitionDelay: `${80 + i * 70}ms` }}
                            >
                                <div className="absolute -left-[2.55rem] top-1 w-4 h-4 bg-cyan-500 rounded-full border-4 border-white"></div>
                                <span className="text-cyan-400 text-sm font-medium">{item.year}</span>
                                <h3 className="text-xl font-bold text-black mt-1">{item.title}</h3>
                                <p className="text-gray-600 text-sm">{item.place}</p>
                                <p className="text-gray-700 text-sm mt-2 leading-relaxed">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </section>
                <h5 className="text-gray-500 text-xs">Version 1.5</h5>
            </main>

        </div>
    );
};

export default About;
