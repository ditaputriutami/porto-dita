import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
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
    <motion.nav
      className="fixed top-6 left-0 right-0 z-50 flex justify-center transition-all duration-300"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* Centered Pill Navigation */}
      <motion.div
        className="bg-slate-800/30 backdrop-blur-md rounded-full px-6 py-3 shadow-lg shadow-slate-900/20 border border-slate-700/50"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
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
                <AnimatePresence mode="wait">
                  {activeSection === item.to ? (
                    <motion.div
                      key="active"
                      className="flex items-center gap-2 bg-white text-slate-900 px-4 py-2 rounded-full"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.8, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon className="text-lg" />
                      <span className="text-sm font-medium">{item.name}</span>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="inactive"
                      className="p-2 text-slate-300 rounded-full"
                      initial={{ scale: 1 }}
                      whileHover={{
                        scale: 1.15,
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                        color: "#ffffff",
                      }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ duration: 0.2, ease: "easeInOut" }}
                    >
                      <Icon className="text-xl" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </Link>
            );
          })}
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
