import { useState } from "react";
import { FaCopy } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";
import { MdOutlineEmail } from "react-icons/md";
import { SiGeeksforgeeks, SiLeetcode } from "react-icons/si";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const Contact = () => {
  const [isCopied, setIsCopied] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText("hiteshbih11@gmail.com");
    setIsCopied(true);

    setShowToast(true);

    window.setTimeout(() => {
      setIsCopied(false);
      setShowToast(false);
    }, 2000);
  };

  return (
    <div>

      <main className="max-w-[1200px] mx-auto mt-6">
        <section id="contact" className="py-10 scroll-mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div data-reveal className="reveal-item space-y-6" style={{ transitionDelay: "40ms" }}>
              <div className="flex items-center gap-4">
                <span className="text-cyan-400 font-mono text-xs sm:text-sm uppercase tracking-[0.35em]">
                  let's connect
                </span>
                <span className="flex-1 h-px" />
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
                Let's build something <span className="text-cyan-400">amazing</span> together.
              </h1>
              <p className="text-gray-300 text-base font-normal max-w-xl">
                I'll never share your data with anyone else. Pinky promise!
              </p>

              <h2 className="text-xs uppercase tracking-[0.2em] text-gray-200 mt-4">Message me here:</h2>

              <div data-reveal className="reveal-item rounded-2xl border border-gray-200 bg-gray-800 p-6 flex flex-row items-center justify-between gap-4"
                style={{ transitionDelay: "120ms" }}>
                <a
                  href="mailto:hiteshbih11@gmail.com"
                  className="inline-flex text-lg font-semibold  text-cyan-200 hover:text-cyan-500 hover:underline"
                  title="Send an email"
                >
                  hiteshbih11@gmail.com
                </a>

                <button
                  className="mt-1 flex items-center justify-between gap-1 cursor-pointer hover:text-cyan-400 border border-gray-600 rounded-lg px-2 py-1 text-sm text-gray-100 hover:bg-gray-700 transition-colors"
                  title={isCopied ? "Email copied" : "Copy to clipboard"}
                  onClick={handleCopy}
                >
                  {isCopied ? <TiTick size={18} /> : <FaCopy />}
                  {isCopied ? "copied" : "Copy"}
                </button>
              </div>
            </div>


            <div data-reveal className="reveal-item px-8 py-6 flex flex-col gap-4 border border-gray-700 rounded-xl" style={{ transitionDelay: "160ms" }}>
              <h2 className="text-lg font-semibold text-gray-400">Get in touch</h2>
              <p className="text-gray-400">I’m always open to collaborations, opportunities, or just a chat!</p>
              <button
                onClick={() => window.open("mailto:hiteshbih11@gmail.com")}
                className="flex items-center justify-center gap-2 border border-gray-600 rounded-lg px-6 py-3 text-sm text-gray-100 bg-gradient-to-r from-red-700 via-rose-900 to-neutral-900 transition-all duration-500 hover:-translate-y-1 hover:scale-y-100 hover:scale-x-105"
              >
                <MdOutlineEmail size={24} />
                <span>Email</span>
              </button>
              <button
                onClick={() => window.open("https://www.linkedin.com/in/hitesh-kumar-088184240")}
                className="flex items-center justify-center gap-2 border border-gray-600 rounded-lg px-6 py-3 text-md text-gray-100 bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-950 transition-all duration-500 hover:-translate-y-1 hover:scale-y-100 hover:scale-x-105"
              >
                <FaLinkedinIn size={22} />
                <span>LinkedIn</span>
              </button>
              <button
                onClick={() => window.open("https://github.com/ItsHiteshKr")}
                className="flex items-center justify-center gap-2 border border-gray-600 rounded-lg px-6 py-3 text-md text-gray-100 bg-gradient-to-r from-pink-500 via-purple-600 to-slate-700 transform transition-all duration-500  hover:-translate-y-1 hover:scale-x-105 hover:scale-y-100"
              >
                <FaGithub size={24} />
                <span>GitHub</span>
              </button>
              <button
                onClick={() => window.open("https://leetcode.com/u/ItsHiteshKr/")}
                className="flex items-center justify-center gap-2 border border-gray-600 rounded-lg px-6 py-3 text-md text-gray-100 bg-gradient-to-r  from-amber-400 via-orange-600 to-red-700 transition-all duration-500  hover:-translate-y-1 hover:scale-y-110 hover:scale-x-105"
              >
                <SiLeetcode size={24} />
                <span>LeetCode</span>
              </button>
              <button
                onClick={() => window.open("https://www.geeksforgeeks.org/user/itshiteshkumar/")}
                className="flex items-center justify-center gap-2 border border-gray-600 rounded-lg px-6 py-3 text-md text-gray-100 bg-gradient-to-r from-emerald-400 via-teal-700 to-zinc-800 transition-all duration-500 hover:-translate-y-1 hover:scale-y-100 hover:scale-x-105"
              >
                <SiGeeksforgeeks size={24} />
                <span>GeeksforGeeks</span>
              </button>
            </div>
          </div>
        </section>
      </main>

      {showToast && (
        <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 bg-cyan-500 text-white px-4 py-2 rounded-xl shadow-lg z-50">
          Email copied to clipboard!
        </div>
      )}
    </div>
  );
};

export default Contact;
