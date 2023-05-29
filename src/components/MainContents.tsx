import { Routes, Route } from "react-router-dom";
import "./MainContents.css";
import Home from "../pages/Home";
import Features from "../pages/Features";
import Contact from "../pages/Contact";
import Search from "../pages/Search";
import Region from "../pages/Region";
import Violations from "../pages/Violations";
import Time from "../pages/Time";
import Statistics from "../pages/Statistics";

function MainContents() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/statistics" element={<Statistics />} />
        <Route path="/features" element={<Features />} />
        <Route path="/search" element={<Search />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/violations/choice/region" element={<Region />} />
        <Route path="/violations/choice/violation" element={<Violations />} />
        <Route path="/violations/choice/time" element={<Time />} />
      </Routes>
    </div>
  );
}

export default MainContents;
