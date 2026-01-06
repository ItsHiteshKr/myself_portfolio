import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./page/Home";
import Myname from "./page/Myname";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/myname" element={<Myname />} />
      </Routes>
      {!isHomePage && <Footer />}
    </div>
  );
}
export default App;
