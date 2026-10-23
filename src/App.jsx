import { Routes, Route } from "react-router-dom";
import Sidebar from "./componentes/Sidebar";
import Footer from "./componentes/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import "./css/App.css";

function App() {
  return (
    <div className="portfolio-layout" id="top">
      <Sidebar />
      <main className="page-content"><Routes>
        <Route path="/" element={<Home />} /><Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} /><Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes><Footer email="nachogonzadup@gmail.com" /></main>
    </div>
  );
}

export default App;
