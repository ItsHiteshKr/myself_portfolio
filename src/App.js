import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Myname from "./page/Myname";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/myname" element={<Myname />} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
