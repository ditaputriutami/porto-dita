import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import {
  FaHome,
  FaUser,
  FaCode,
  FaProjectDiagram,
  FaEnvelope,
} from "react-icons/fa";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Home", to: "home", icon: FaHome },
    { name: "About", to: "about", icon: FaUser },
    { name: "Skills", to: "skills", icon: FaCode },
    { name: "Projects", to: "projects", icon: FaProjectDiagram },
    { name: "Contact", to: "contact", icon: FaEnvelope },
  ];

  return (
    <nav
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300`}
    >
      {/* Centered Pill Navigation */}
      <div className="bg-slate-800/30 backdrop-blur-md rounded-full px-6 py-3 shadow-lg shadow-slate-900/20 border border-slate-700/50">
        <div className="flex items-center gap-3">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.to}
                to={item.to}
                smooth={true}
                duration={500}
                offset={-100}
                className="cursor-pointer"
                activeClass="active"
                spy={true}
                onSetActive={() => setActiveSection(item.to)}
              >
                {activeSection === item.to ? (
                  <div className="flex items-center gap-2 bg-white text-slate-900 px-4 py-2 rounded-full transition-all duration-300">
                    <Icon className="text-lg" />
                    <span className="text-sm font-medium">{item.name}</span>
                  </div>
                ) : (
                  <div className="p-2 text-slate-300 hover:bg-white/10 hover:text-white rounded-full transition-all duration-300 hover:scale-110">
                    <Icon className="text-xl" />
                  </div>
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
