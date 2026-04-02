import { useState } from "react";
import { FiSend } from "react-icons/fi";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Connect to backend or email service (e.g., EmailJS, Formspree)
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div>

      <main className="max-w-[1200px] mx-auto mt-6">
        <section id="contact" className="py-10 scroll-mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div data-reveal className="reveal-item space-y-6" style={{ transitionDelay: "40ms" }}>
              <div className="flex items-center gap-4">
                <span className="text-cyan-400 font-mono text-xs sm:text-sm uppercase tracking-[0.35em]">
                  contacts
                </span>
                <span className="flex-1 h-px bg-cyan-500/40" />
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
                Let's build something <span className="text-cyan-400">amazing</span> together.
              </h1>
              <p className="text-slate-400 text-base font-normal max-w-xl">
                I'll never share your data with anyone else. Pinky promise!
              </p>

              <div data-reveal className="reveal-item" style={{ transitionDelay: "120ms" }}>
                <div className="rounded-2xl border border-cyan-500/20 bg-slate-900/40 p-6">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-200">Message me here:</p>
                  <a
                    href="mailto:hiteshbih11@gmail.com"
                    className="mt-3 inline-flex text-lg font-semibold text-cyan-400 hover:text-cyan-300"
                  >
                    hiteshbih11@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div data-reveal className="reveal-item" style={{ transitionDelay: "160ms" }}>
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl p-6 md:p-8 space-y-5"
              >

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="text-slate-300 text-xs uppercase tracking-[0.2em] block mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="w-full bg-black/70 border border-slate-800 rounded-lg px-4 py-3 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-slate-300 text-xs uppercase tracking-[0.2em] block mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="abc@example.com"
                      className="w-full bg-black/70 border border-slate-800 rounded-lg px-4 py-3 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="text-slate-300 text-xs uppercase tracking-[0.2em] block mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="Tell me about your project..."
                    className="w-full bg-black/70 border border-slate-800 rounded-lg px-4 py-3 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 border border-cyan-500/60 text-cyan-300 font-semibold rounded-lg px-6 py-3 transition-all duration-300 hover:border-cyan-400 hover:text-white hover:bg-cyan-500/10"
                >
                  Send Message <FiSend size={16} />
                </button>

                {submitted && (
                  <p className="text-cyan-400 text-sm font-medium">Message sent successfully! I'll get back to you soon.</p>
                )}
              </form>
            </div>
          </div>
        </section>
      </main>

    </div>
  );
};

export default Contact;
