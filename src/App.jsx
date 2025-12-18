import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./sections/Home";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import ProjectDetail from "./sections/ProjectDetail";
import "./App.css";

// Component to scroll to hash on route change
function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  return null;
}

// Home page with all sections
function HomePage() {
  return (
    <>
      <Navbar />
      <main className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

function App() {
  return (
    <Router>
      <ScrollToHash />
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
