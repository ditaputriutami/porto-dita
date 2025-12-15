import { motion, AnimatePresence } from "framer-motion";
import { FiCode, FiCheck, FiAward, FiExternalLink } from "react-icons/fi";
import {
  SiReact,
  SiTailwindcss,
  SiFramer,
  SiJavascript,
  SiHtml5,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiSocketdotio,
  SiFirebase,
  SiNextdotjs,
  SiMysql,
  SiGithub,
} from "react-icons/si";

const getTechIcon = (tech) => {
  const iconProps = { size: 18, className: "text-blue-300" };

  const iconMap = {
    React: <SiReact {...iconProps} />,
    "Tailwind CSS": <SiTailwindcss {...iconProps} />,
    "Framer Motion": <SiFramer {...iconProps} />,
    JavaScript: <SiJavascript {...iconProps} />,
    "HTML/CSS": <SiHtml5 {...iconProps} />,
    "Node.js": <SiNodedotjs {...iconProps} />,
    MongoDB: <SiMongodb {...iconProps} />,
    Express: <SiExpress {...iconProps} />,
    "Socket.io": <SiSocketdotio {...iconProps} />,
    Firebase: <SiFirebase {...iconProps} />,
    "Next.js": <SiNextdotjs {...iconProps} />,
    MySQL: <SiMysql {...iconProps} />,
    "API Integration": <FiCode {...iconProps} />,
    "REST API": <FiCode {...iconProps} />,
    GraphQL: <FiCode {...iconProps} />,
  };

  return iconMap[tech] || <FiCode {...iconProps} />;
};

const ProjectDetailFullPage = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Close Button */}
        <motion.button
          onClick={onClose}
          className="absolute top-6 right-6 z-10 w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center text-white font-bold transition"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          ×
        </motion.button>

        {/* Back Button */}
        <motion.div
          className="pt-6 px-6 md:px-12"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <button
            onClick={onClose}
            className="flex items-center gap-2 px-4 py-2 bg-slate-700/50 hover:bg-slate-600/70 text-white rounded-lg transition-all border border-blue-400/20 hover:border-blue-400/50"
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
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span className="text-sm font-medium">Back to Projects</span>
          </button>
        </motion.div>

        {/* Main Content - No Scrolling */}
        <div className="h-screen pt-8 px-6 md:px-12 pb-12 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 h-full max-w-7xl mx-auto">
            {/* Left Column - Content */}
            <motion.div
              className="flex flex-col justify-center"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <div className="bg-slate-800/30 backdrop-blur-sm border border-blue-400/20 rounded-2xl p-6 md:p-8 shadow-2xl">
                <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent mb-3">
                  {project.title}
                </h1>
                <div className="w-20 h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 mb-6 rounded-full"></div>

                {/* Description */}
                <p className="text-gray-300 leading-relaxed mb-8 text-sm">
                  {project.details?.fullDescription || project.description}
                </p>

                {/* Technologies Used */}
                <div className="mb-8">
                  <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
                    <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                      <FiCode className="text-blue-400" size={16} />
                    </div>
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <motion.div
                        key={idx}
                        className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-blue-500/20 to-blue-00/20 border border-blue-400/30 rounded-lg text-blue-200 text-xs font-medium hover:border-blue-400/50 transition-all"
                        whileHover={{ scale: 1.05, y: -2 }}
                      >
                        {getTechIcon(tech)}
                        <span>{tech}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3 pt-6">
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-blue-700/50 hover:bg-slate-600/70 text-white rounded-lg transition-all duration-300 text-sm font-medium border border-slate-600/50 hover:border-slate-500"
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <SiGithub size={18} />
                      <span>View Code</span>
                    </motion.a>
                  )}
                  {project.demo && (
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-lg transition-all duration-300 text-sm font-medium shadow-lg shadow-blue-500/25"
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <FiExternalLink size={18} />
                      <span>View Live Demo</span>
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>

            {/* Right Column - Image with Laptop Frame */}
            <motion.div
              className="flex items-center justify-center h-full"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              {/* Laptop Mockup */}
              <div className="relative w-full max-w-2xl">
                {/* Screen */}
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-t-2xl border-4 border-slate-700 p-3 shadow-2xl">
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
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectDetailFullPage;
