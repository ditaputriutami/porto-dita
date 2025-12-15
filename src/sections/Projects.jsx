import { motion } from "framer-motion";
import { useState } from "react";
import { projects } from "../data/projectsData";
import { certificates } from "../data/certificatesData";
import ProjectDetailFullPage from "../components/ProjectDetailFullPage";
import { FiCode, FiAward, FiExternalLink } from "react-icons/fi";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeTab, setActiveTab] = useState("projects"); // projects, certificates, techstack
  const [showAllCerts, setShowAllCerts] = useState(false);

  const tabs = [
    { id: "projects", label: "Projects", icon: FiCode },
    { id: "certificates", label: "Certificates", icon: FiAward },
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center py-20">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-blue-400 bg-clip-text text-transparent mb-4">
            Portfolio Showcase
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-base md:text-lg">
            Explore my journey through projects, certifications, and technical
            expertise. Each section represents a milestone in my continuous
            learning path.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          className="flex justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all transform ${
                  activeTab === tab.id
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-500/50 scale-105"
                    : "bg-slate-700/50 text-gray-300 hover:bg-slate-600/70"
                }`}
              >
                <Icon size={18} />
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Projects Grid */}
        {activeTab === "projects" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {projects.map((project, idx) => (
                <motion.div
                  key={project.id}
                  className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl overflow-hidden border border-blue-400/20 hover:border-blue-400/50 transition-all backdrop-blur-sm hover:shadow-xl hover:shadow-blue-500/20"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  whileHover={{ translateY: -5 }}
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden bg-slate-900">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Technology Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-2 py-1 bg-blue-500/20 text-blue-300 rounded-full border border-blue-400/30"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="text-xs px-2 py-1 bg-purple-500/20 text-purple-300 rounded-full border border-purple-400/30">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-2">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="flex-1 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors"
                      >
                        Details
                      </button>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-3 py-2 bg-slate-700 hover:bg-slate-600 text-white text-sm font-medium rounded-lg transition-colors flex items-center justify-center gap-1"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                        <span className="hidden sm:inline">Live Demo</span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Certificates Section */}
        {activeTab === "certificates" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {certificates
                .slice(0, showAllCerts ? certificates.length : 6)
                .map((cert, idx) => (
                  <motion.div
                    key={cert.id}
                    className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl border border-purple-400/20 p-6 hover:border-purple-400/50 transition-all"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    whileHover={{ translateY: -5 }}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                          <FiAward className="text-purple-400" size={24} />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-white">
                            {cert.title}
                          </h3>
                          <p className="text-purple-300 text-xs font-semibold">
                            {cert.issuer}
                          </p>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-300 text-sm mb-3 line-clamp-2">
                      {cert.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="text-blue-400 text-xs font-semibold">
                        {cert.date}
                      </div>
                      <a
                        href={cert.certificateFile}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-400 hover:text-purple-300 transition flex items-center gap-1"
                      >
                        <span className="text-xs font-medium">View</span>
                        <FiExternalLink size={14} />
                      </a>
                    </div>
                  </motion.div>
                ))}
            </div>

            {/* View More Button */}
            {certificates.length > 6 && (
              <div className="text-center">
                <button
                  onClick={() => setShowAllCerts(!showAllCerts)}
                  className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all transform hover:scale-105"
                >
                  {showAllCerts ? "Show Less" : "View More Certificates"}
                </button>
              </div>
            )}
          </motion.div>
        )}
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectDetailFullPage
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default Projects;
