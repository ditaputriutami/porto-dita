import { motion } from "framer-motion";
import { projects } from "../data/projectsData";

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen flex items-center py-20">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My Projects
          </h2>
          <div className="w-20 h-1 bg-blue-400 mx-auto mb-4"></div>
          <p className="text-gray-200 max-w-2xl mx-auto">
            Here are some of my recent works. Each project showcases different
            skills and technologies.
          </p>
        </motion.div>

        {/* Projects with Laptop Mockup Layout */}
        <div className="space-y-20 md:space-y-32">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center ${
                index % 2 === 0 ? "" : "lg:flex-row-reverse"
              }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.7 }}
            >
              {/* Laptop Mockup */}
              <div
                className={`${
                  index % 2 === 0 ? "order-2 lg:order-1" : "order-2"
                } flex justify-center`}
              >
                <motion.div
                  className="relative w-full max-w-lg"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Laptop Frame */}
                  <div className="relative">
                    {/* Screen */}
                    <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-t-2xl border-4 border-slate-700 p-3 shadow-2xl">
                      <div className="bg-slate-950 rounded-lg overflow-hidden aspect-video">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    {/* Keyboard Base */}
                    <div className="bg-gradient-to-b from-slate-700 to-slate-800 h-4 rounded-b-2xl shadow-lg"></div>
                    <div className="bg-slate-800 h-2 w-[110%] -ml-[5%] rounded-b-3xl shadow-2xl"></div>
                  </div>
                </motion.div>
              </div>

              {/* Project Content */}
              <div
                className={`${
                  index % 2 === 0 ? "order-1 lg:order-2" : "order-1"
                }`}
              >
                <div className="bg-purple-600/20 border border-purple-500/50 backdrop-blur-sm px-4 py-2 rounded-full inline-block mb-4 sm:mb-6">
                  <span className="text-purple-300 font-semibold text-sm">
                    {project.category || "Web Development"}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm sm:text-base mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Research Goals / Features */}
                {project.features && (
                  <div className="mb-6">
                    <h4 className="text-lg sm:text-xl font-semibold text-white mb-3">
                      Key Features
                    </h4>
                    <ul className="space-y-2 sm:space-y-3 text-gray-300">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-blue-400 mr-2 mt-1">•</span>
                          <span className="text-sm sm:text-base">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-blue-500/30 text-blue-200 text-xs sm:text-sm rounded-full font-medium border border-blue-400/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition font-medium text-sm sm:text-base"
                  >
                    View Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium text-sm sm:text-base"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
