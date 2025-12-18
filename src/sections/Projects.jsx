import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { projects } from "../data/projectsData";
import { FaArrowRight } from "react-icons/fa";

const Projects = () => {
  const navigate = useNavigate();

  return (
    <section id="projects" className="min-h-screen flex flex-col items-center justify-center py-20 px-4">
      {/* Header */}
      <motion.div
        className="text-center mb-16 max-w-4xl"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          My Projects
        </h2>
        <p className="text-gray-400 text-sm md:text-base">
          Here are some of my recent works. Each project showcases different skills and technologies.
        </p>
      </motion.div>

      {/* Projects Grid */}
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group bg-transparent backdrop-blur-sm rounded-2xl border-2 border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 overflow-hidden hover:shadow-2xl hover:shadow-blue-500/10"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden aspect-video bg-slate-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-60"></div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 text-sm md:text-base mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 3).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-transparent border border-blue-500/40 text-blue-300 text-xs rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-3 py-1 bg-transparent border border-slate-600 text-slate-400 text-xs rounded-full font-medium">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* View Details Button */}
                <button
                  onClick={() => navigate(`/project/${project.id}`)}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium group-hover:gap-3"
                >
                  View Details
                  <FaArrowRight className="text-sm" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
