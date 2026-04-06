import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { projects, certificates } from "../data/projectsData";
import {
  FaArrowRight,
  FaExternalLinkAlt,
  FaCode,
  FaAward,
} from "react-icons/fa";
import { useState } from "react";

const Projects = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState("projects");
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [showAllCertificates, setShowAllCertificates] = useState(false);

  const displayedProjects = showAllProjects ? projects : projects.slice(0, 6);
  const displayedCertificates = showAllCertificates
    ? certificates
    : certificates.slice(0, 6);

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col items-center justify-center py-20 px-4"
    >
      {/* Header */}
      <motion.div
        className="text-center mb-12 max-w-4xl"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-blue-400 mb-4">
          Portfolio Showcase
        </h2>
        <p className="text-gray-400 text-sm md:text-base max-w-3xl mx-auto">
          Explore my journey through projects, certifications, and technical
          expertise. Each section represents a milestone in my continuous
          learning path.
        </p>
      </motion.div>

      {/* Filter Buttons */}
      <motion.div
        className="w-full max-w-4xl mx-auto mb-12 bg-transparent backdrop-blur-sm rounded-2xl border-2 border-blue-400/40 p-2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={() => setActiveFilter("projects")}
            className={`flex items-center justify-center gap-2 px-8 py-4 rounded-xl border-2 transition-all duration-300 font-semibold text-base ${
              activeFilter === "projects"
                ? "bg-blue-400/10 border-blue-400/60 text-blue-200"
                : "bg-transparent border-transparent text-gray-400 hover:text-blue-300"
            }`}
          >
            <FaCode className="text-lg" />
            Projects
          </button>
          <button
            onClick={() => setActiveFilter("certificates")}
            className={`flex items-center justify-center gap-2 px-8 py-4 rounded-xl border-2 transition-all duration-300 font-semibold text-base ${
              activeFilter === "certificates"
                ? "bg-blue-400/10 border-blue-400/60 text-blue-200"
                : "bg-transparent border-transparent text-gray-400 hover:text-blue-300"
            }`}
          >
            <FaAward className="text-lg" />
            Certificates
          </button>
        </div>
      </motion.div>

      {/* Content */}
      {activeFilter === "projects" && (
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {displayedProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="group h-full flex flex-col bg-transparent backdrop-blur-sm rounded-2xl border-2 border-blue-400/40 hover:border-blue-400/60 transition-all duration-300 overflow-hidden hover:shadow-2xl hover:shadow-blue-500/10"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                {/* Project Image */}
                <button
                  type="button"
                  onClick={() => navigate(`/project/${project.id}`)}
                  aria-label={`View details for ${project.title}`}
                  className="relative overflow-hidden aspect-video bg-slate-900 w-full text-left"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-60"></div>

                  {/* Hover Icon */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full border-2 border-blue-400/60 bg-blue-400/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <FaExternalLinkAlt className="text-blue-400 text-xl" />
                  </div>
                </button>

                {/* Project Content */}
                <div className="p-6 flex flex-1 flex-col">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3 line-clamp-2 min-h-[3.5rem] group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 text-sm md:text-base mb-4 line-clamp-3 min-h-[4.5rem]">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6 min-h-[2.25rem]">
                    {project.technologies.slice(0, 3).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-transparent border border-blue-400/40 text-blue-300 text-xs rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-3 py-1 bg-transparent border border-blue-400/40 text-blue-300 text-xs rounded-full font-medium">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* View Details Button */}
                  <button
                    onClick={() => navigate(`/project/${project.id}`)}
                    className="w-full mt-auto flex items-center justify-center gap-2 px-6 py-3 bg-blue-400/5 border-2 border-blue-400/40 text-blue-300 rounded-lg hover:bg-blue-400/10 hover:border-blue-400/60 hover:text-blue-200 transition-all duration-300 font-medium group-hover:gap-3"
                  >
                    View Details
                    <FaArrowRight className="text-sm" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View More Button for Projects */}
          {projects.length > 6 && (
            <motion.div
              className="flex justify-center mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              <button
                onClick={() => setShowAllProjects(!showAllProjects)}
                className="px-8 py-3 bg-blue-400/5 border-2 border-blue-400/40 text-blue-300 rounded-lg hover:bg-blue-400/10 hover:border-blue-400/60 transition-all duration-300 font-medium flex items-center gap-2"
              >
                {showAllProjects ? (
                  <>
                    Show Less
                    <FaArrowRight className="rotate-90 text-sm" />
                  </>
                ) : (
                  <>
                    View More Projects ({projects.length - 6} more)
                    <FaArrowRight className="-rotate-90 text-sm" />
                  </>
                )}
              </button>
            </motion.div>
          )}
        </div>
      )}

      {/* Certificates Section */}
      {activeFilter === "certificates" && (
        <motion.div
          className="w-full max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {displayedCertificates.map((certificate, index) => (
              <motion.div
                key={certificate.id}
                className="bg-transparent backdrop-blur-sm rounded-2xl border-2 border-blue-400/40 hover:border-blue-400/60 transition-all duration-300 overflow-hidden hover:shadow-2xl hover:shadow-blue-500/10 p-6"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div className="flex items-start gap-3 mb-4">
                  <span className="p-3 border-2 border-blue-400/40 rounded-lg flex-shrink-0">
                    <FaAward className="text-blue-400 text-2xl" />
                  </span>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white line-clamp-2">
                      {certificate.title}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {certificate.issuer}
                    </p>
                  </div>
                </div>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {certificate.description}
                </p>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {certificate.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-transparent border border-blue-400/40 text-blue-300 text-xs rounded-full font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-blue-300 text-sm font-medium">
                    Year: {certificate.year}
                  </span>
                  <a
                    href={certificate.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-400/5 border-2 border-blue-400/40 text-blue-300 rounded-lg hover:bg-blue-400/10 hover:border-blue-400/60 transition-all duration-300 text-sm font-medium"
                  >
                    View PDF
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View More Button for Certificates */}
          {certificates.length > 6 && (
            <motion.div
              className="flex justify-center mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <button
                onClick={() => setShowAllCertificates(!showAllCertificates)}
                className="px-8 py-3 bg-blue-400/5 border-2 border-blue-400/40 text-blue-300 rounded-lg hover:bg-blue-400/10 hover:border-blue-400/60 transition-all duration-300 font-medium flex items-center gap-2"
              >
                {showAllCertificates ? (
                  <>
                    Show Less
                    <FaArrowRight className="rotate-90 text-sm" />
                  </>
                ) : (
                  <>
                    View More Certificates ({certificates.length - 6} more)
                    <FaArrowRight className="-rotate-90 text-sm" />
                  </>
                )}
              </button>
            </motion.div>
          )}
        </motion.div>
      )}
    </section>
  );
};

export default Projects;
