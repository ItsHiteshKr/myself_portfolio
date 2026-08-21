import "./App.css";
import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./page/Home";
import Project from "./page/Project";

function App() {
  const location = useLocation();

  useEffect(() => {
    const items = Array.from(document.querySelectorAll("[data-reveal]"));
    if (!items.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -80px 0px" }
    );

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, [location.pathname]);

  useEffect(() => {
    if (!location.hash) return;
    const targetId = location.hash.replace("#", "");
    const target = document.getElementById(targetId);
    if (!target) return;

    const frame = window.requestAnimationFrame(() => {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });

    return () => window.cancelAnimationFrame(frame);
  }, [location.pathname, location.hash]);

  return (
    <div className="min-h-screen w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-0 text-white">
      <Navbar />
      <div className="pt-16 md:pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Project />} />

          <Route path="*" element={<div
            className="flex flex-col items-center justify-center h-screen text-center gap-4">
            <h1 className="text-3xl font-bold text-white">Page Not Found</h1>
            <p className="text-gray-700">The page you are looking for does not created by <span className="text-red-400"> Hitesh Kumar</span>.</p>
            <button>
              <a href="/" className="text-red-500 hover:text-black rounded-lg hover:bg-red-500 p-2 m-3">Go back to Home</a>
            </button>
          </div>} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}
export default App;
