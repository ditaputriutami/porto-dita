import { motion } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import { projects } from "../data/projectsData";
import { FaArrowLeft, FaExternalLinkAlt, FaCode } from "react-icons/fa";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Project Not Found
          </h2>
          <button
            onClick={() => navigate("/")}
            className="px-6 py-3 bg-transparent border-2 border-blue-400/40 text-blue-300 rounded-lg hover:bg-blue-400/10 hover:border-blue-400/60 hover:text-blue-200 transition-all duration-300"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <motion.button
          onClick={() => navigate("/#projects")}
          className="flex items-center gap-2 px-4 py-2 border-2 border-blue-400/40 bg-transparent text-blue-300 rounded-lg hover:bg-blue-400/10 hover:border-blue-400/60 hover:text-blue-200 transition-all duration-300 mb-12 group"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-regular">Back to Projects</span>
        </motion.button>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Project Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {project.title}
            </h1>

            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              {project.fullDescription || project.description}
            </p>

            {/* Technologies Used */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <span className="p-2 border-2 border-blue-400/40 rounded-lg">
                  <FaCode className="text-blue-400" />
                </span>
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-transparent border-2 border-blue-400/40 text-blue-300 rounded-lg font-medium text-sm hover:bg-blue-400/10 hover:border-blue-400/60 transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-blue-400/5 border-2 border-blue-400/40 text-blue-300 rounded-lg hover:bg-blue-400/10 hover:border-blue-400/60 hover:text-blue-200 transition-all duration-300 font-medium transform hover:-translate-y-0.5"
                >
                  <span className="p-1.5 border-2 border-blue-400/40 rounded-lg">
                    <FaCode className="text-lg" />
                  </span>
                  {project.linkLabel || "Repo Github"}
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-blue-400/5 border-2 border-blue-400/40 text-blue-300 rounded-lg hover:bg-blue-400/10 hover:border-blue-400/60 hover:text-blue-200 transition-all duration-300 font-medium transform hover:-translate-y-0.5"
                >
                  <FaExternalLinkAlt />
                  Live Preview
                </a>
              )}
            </div>
          </motion.div>

          {/* Right Side - Laptop Mockup */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="relative w-full max-w-2xl">
              {/* Laptop Frame */}
              <div className="relative">
                {/* Screen */}
                <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-t-2xl border-4 border-slate-700 p-4 shadow-2xl">
                  <div className="bg-slate-950 rounded-lg overflow-hidden aspect-video">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                {/* Keyboard Base */}
                <div className="bg-gradient-to-b from-slate-700 to-slate-800 h-5 rounded-b-2xl shadow-lg"></div>
                <div className="bg-slate-800 h-2 w-[110%] -ml-[5%] rounded-b-3xl shadow-2xl"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
