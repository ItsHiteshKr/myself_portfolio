import { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { FiSend } from "react-icons/fi";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Connect to backend or email service (e.g., EmailJS, Formspree)
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div>

      <main className="max-w-[1200px] mx-auto mt-6">

        {/* Header */}
        <section className="py-10">
          <h1 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-cyan-500 mb-4">
            Contact Me
          </h1>
          <p className="text-gray-400 text-base font-normal max-w-xl">
            Have a project in mind or want to work together? Feel free to reach out. I'd love to hear from you!
          </p>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 pb-12">

          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-slate-900/50 border border-slate-700 rounded-xl p-6 flex items-start gap-4 hover:border-cyan-500 transition-all duration-300">
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400 shrink-0">
                <FaEnvelope size={20} />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">Email</h3>
                <a href="mailto:hiteshbih11@gmail.com" className="text-gray-400 text-sm hover:text-cyan-400 transition-colors">
                  hiteshbih11@gmail.com
                </a>
              </div>
            </div>

          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-slate-900/50 border border-slate-700 rounded-xl p-6 md:p-8 space-y-5">

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="text-white text-sm font-medium block mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="w-full bg-black border border-slate-700 rounded-lg px-4 py-3 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-white text-sm font-medium block mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="w-full bg-black border border-slate-700 rounded-lg px-4 py-3 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="text-white text-sm font-medium block mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="What's this about?"
                  className="w-full bg-black border border-slate-700 rounded-lg px-4 py-3 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="text-white text-sm font-medium block mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full bg-black border border-slate-700 rounded-lg px-4 py-3 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg px-6 py-3 transition-all duration-300"
              >
                Send Message <FiSend size={16} />
              </button>

              {submitted && (
                <p className="text-cyan-400 text-sm font-medium">Message sent successfully! I'll get back to you soon.</p>
              )}
            </form>
          </div>

        </div>

      </main>

    </div>
  );
};

export default Contact;
