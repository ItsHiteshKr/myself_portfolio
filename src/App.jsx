import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./page/Home";
import About from "./page/About";
import Contact from "./page/Contact";

function App() {

  return (
    <div className="relative min-h-screen w-full max-w-[1400px] mx-auto overflow-x-hidden px-4 sm:px-6 lg:px-0">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
