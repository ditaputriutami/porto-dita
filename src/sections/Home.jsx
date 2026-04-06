import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Threads from "../components/Threads";
import Typed from "typed.js";
import { socialLinks } from "../data/socialLinks";

const Home = () => {
  const typedElement = useRef(null);
  const typed = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "Accounting Information Systems Student",
        "Data Analyst",
        "Accountant",
      ],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    };

    typed.current = new Typed(typedElement.current, options);

    return () => {
      typed.current.destroy();
    };
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      {/* Threads Background */}
      <div className="absolute inset-0 w-full h-full">
        <Threads
          color={[0.3, 0.5, 1]}
          amplitude={1.2}
          distance={0.3}
          enableMouseInteraction={true}
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          className="animate-fade-in-up"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-white mb-8 drop-shadow-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Hi, I'm <span className="text-blue-400">Dita Putri Utami</span>
          </motion.h1>
          <motion.div
            className="text-3xl md:text-4xl font-bold text-white mb-6 drop-shadow-lg flex items-center justify-center gap-3 w-full max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <span className="inline-block align-middle"></span>
            <span
              ref={typedElement}
              className="inline-block text-blue-400 font-bold text-2xl md:text-3xl align-middle"
            ></span>
          </motion.div>
          <motion.p
            className="text-lg text-gray-200 max-w-2xl mx-auto mb-8 drop-shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Combining accounting expertise with system development to create
            smarter and more reliable digital solutions
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <a
              href="#projects"
              className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg font-regular hover:shadow-2xl transform hover:-translate-y-1"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg font-regular hover:shadow-2xl transform hover:-translate-y-1"
            >
              Contact Me
            </a>
          </motion.div>

          <motion.div
            className="mt-12 flex justify-center gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            {socialLinks.map(({ label, href, Icon, external }) => (
              <a
                key={label}
                href={href}
                {...(external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="text-gray-200 hover:text-white transition transform hover:scale-110 drop-shadow-lg"
                aria-label={label}
              >
                <Icon className="w-8 h-8" />
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
