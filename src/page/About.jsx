import { IoMdCode } from "react-icons/io";
import { RiComputerLine, RiDatabase2Line } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import myPic from "../assets/images/newmypic_new.png";
import skillData from '../assets/My_details/skill.json';

const SERVICE_ICONS = [
    <IoMdCode size={28} />,
    <FaServer size={24} />,
    <RiDatabase2Line size={28} />,
    <RiComputerLine size={28} />,
];

export const About = () => {
    return (
        <div>

            <main className="max-w-[1200px] mx-auto mt-6">

                {/* Hero Section */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center py-10">
                    <div data-reveal className="reveal-item" style={{ transitionDelay: "60ms" }}>
                        <h1 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-cyan-500 mb-4">
                            About Me
                        </h1>
                        <p className="text-gray-400 text-base font-normal leading-relaxed mb-6">
                            I'm Hitesh Kumar, a passionate Full Stack Web Developer with a knack for creating dynamic and responsive web applications. With a strong foundation in both front-end and back-end technologies, I thrive on transforming ideas into functional digital experiences.
                        </p>
                        <p className="text-gray-400 text-base font-normal leading-relaxed">
                            My expertise includes HTML, CSS, JavaScript, React.js, Node.js, and database management using SQL and MongoDB. I enjoy collaborating on innovative projects and continuously expanding my skill set to stay abreast of the latest industry trends.
                        </p>
                    </div>

                    <div
                        data-reveal
                        className="reveal-item relative group justify-self-center"
                        style={{ transitionDelay: "120ms" }}
                    >
                        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                        <div className="relative bg-black rounded-2xl overflow-hidden border border-slate-800">
                            <img src={myPic} alt="Hitesh Kumar" className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 object-cover grayscale hover:grayscale-0 transition duration-500" />
                        </div>
                    </div>
                </section>

                {/* Stats */}
                <section className="grid grid-cols-2 md:grid-cols-4 gap-4 py-8">
                    {[
                        { num: "10+", label: "Projects Completed" },
                        { num: "6+", label: "Months Experience" },
                        { num: "95%", label: "Client Satisfaction" },
                        { num: "5+", label: "Technologies" },
                    ].map((stat, i) => (
                        <div
                            key={i}
                            data-reveal
                            className="reveal-item bg-slate-900/50 border border-slate-700 rounded-xl p-6 text-center hover:border-cyan-500 transition-all duration-300"
                            style={{ transitionDelay: `${60 + i * 70}ms` }}
                        >
                            <span className="text-3xl font-bold text-cyan-400">{stat.num}</span>
                            <p className="text-gray-400 text-sm mt-2">{stat.label}</p>
                        </div>
                    ))}
                </section>

                {/* Services */}
                <section className="py-10">
                    <div data-reveal className="reveal-item" style={{ transitionDelay: "40ms" }}>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">What I Do</h2>
                        <div className="w-16 h-1 bg-cyan-500 mb-8"></div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {skillData.services.map((service, i) => (
                            <div
                                key={i}
                                data-reveal
                                className="reveal-item bg-slate-900/50 border border-slate-700 rounded-xl p-6 hover:border-cyan-500 hover:-translate-y-1 transition-all duration-300 group"
                                style={{ transitionDelay: `${100 + i * 70}ms` }}
                            >
                                <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400 mb-4 group-hover:bg-cyan-500/20 transition-colors">
                                    {SERVICE_ICONS[i]}
                                </div>
                                <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Skills */}
                <section className="py-10">
                    <div data-reveal className="reveal-item" style={{ transitionDelay: "40ms" }}>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">My Skills</h2>
                        <div className="w-16 h-1 bg-cyan-500 mb-8"></div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {skillData.skills.map((group, i) => (
                            <div
                                key={i}
                                data-reveal
                                className="reveal-item bg-slate-900/50 border border-slate-700 rounded-xl p-6"
                                style={{ transitionDelay: `${80 + i * 70}ms` }}
                            >
                                <h3 className="text-lg font-semibold text-cyan-400 mb-4">{group.category}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {group.items.map((skill, j) => (
                                        <span key={j} className="px-3 py-1 bg-cyan-500/10 text-white text-sm rounded-full border border-cyan-500/30 hover:bg-cyan-500/20 transition-colors">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Timeline */}
                <section className="py-10">
                    <div data-reveal className="reveal-item" style={{ transitionDelay: "40ms" }}>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">My Journey</h2>
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
                                <div className="absolute -left-[2.55rem] top-1 w-4 h-4 bg-cyan-500 rounded-full border-4 border-black"></div>
                                <span className="text-cyan-400 text-sm font-medium">{item.year}</span>
                                <h3 className="text-xl font-bold text-white mt-1">{item.title}</h3>
                                <p className="text-gray-500 text-sm">{item.place}</p>
                                <p className="text-gray-400 text-sm mt-2 leading-relaxed">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </section>
                <h5>Version 1.2</h5>
            </main>

        </div>
    );
};

export default About;
