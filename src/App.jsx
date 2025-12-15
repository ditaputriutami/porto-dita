import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./sections/Home";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* Main Content Wrapper - Single gradient background */}
      <main className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950">
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
