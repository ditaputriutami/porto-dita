import { motion } from "framer-motion";

const FeaturedProject = ({ project, onDetailsClick }) => {
  return (
    <motion.div
      className="mb-24 md:mb-32"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.7 }}
    >
      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Laptop Mockup */}
        <div className="flex justify-center order-2 lg:order-1">
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
        <div className="order-1 lg:order-2">
          <div className="inline-block mb-4 sm:mb-6">
            <motion.div
              className="bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-2 rounded-full"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-white font-bold text-sm">
                Featured Project
              </span>
            </motion.div>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            {project.title}
          </h2>

          <p className="text-gray-300 text-sm sm:text-base mb-6 leading-relaxed">
            {project.description}
          </p>

          {/* Key Features Preview */}
          {project.details?.keyFeatures && (
            <div className="mb-6">
              <h4 className="text-lg sm:text-xl font-semibold text-white mb-3">
                Key Highlights
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {project.details.keyFeatures.slice(0, 4).map((feature, idx) => (
                  <motion.div
                    key={idx}
                    className="flex items-start text-sm text-gray-300"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="text-blue-400 mr-2 mt-1 flex-shrink-0">
                      ✓
                    </span>
                    <span>{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech, idx) => (
              <motion.span
                key={idx}
                className="px-3 py-1 bg-blue-500/30 text-blue-200 text-xs sm:text-sm rounded-full font-medium border border-blue-400/30"
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "rgba(59, 130, 246, 0.5)",
                }}
                transition={{ duration: 0.2 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>

          {/* Links */}
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.button
              onClick={() => onDetailsClick(project)}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium shadow-lg"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 25px rgba(37, 99, 235, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              View Details
            </motion.button>
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition font-medium shadow-lg flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </motion.a>
          </div>
        </div>

        {/* Decorative Element */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>
    </motion.div>
  );
};

export default FeaturedProject;
