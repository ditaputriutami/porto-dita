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
      <main className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
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
