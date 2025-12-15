import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaPhone,
  FaFigma,
} from "react-icons/fa";
import {
  SiAdobepremierepro,
  SiAdobeaftereffects,
  SiAdobeillustrator,
  SiAdobeindesign,
  SiAdobephotoshop,
} from "react-icons/si";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center py-10 sm:py-20 px-4"
    >
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
            About Me
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-base md:text-lg">
            Get to know more about my background, skills, and what drives my
            passion for technology and data.
          </p>
        </motion.div>

        {/* Content Section - About & Profile */}
        <motion.div
          className="bg-transparent backdrop-blur-sm rounded-3xl p-4 sm:p-8 md:p-12 border-2 border-blue-400/30 hover:border-blue-400/50 transition-all duration-300"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-start">
            {/* Left - About Content */}
            <div className="order-2 md:order-1">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-4 sm:mb-6">
                Hi,
                <br />
                My name is Dita Putri Utami
              </h3>
              <p className="text-gray-300 mb-4 sm:mb-5 leading-relaxed text-sm sm:text-base">
                I am an Accounting Information Systems student at the Digital
                Technology University of Indonesia with a strong interest in
                data processing and the field of accounting. I continuously
                learn how data can be used to generate accurate insights and
                support better decision-making.
              </p>
              <p className="text-gray-300 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
                I have a passion for Data Analysis and Accounting, especially in
                connecting data insights with business needs. By combining
                technical skills and financial understanding, I aim to grow into
                someone who can provide effective and valuable data-driven
                solutions.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="bg-transparent backdrop-blur-sm p-3 sm:p-4 rounded-xl border-2 border-blue-400/30 hover:border-blue-400/50 transition-all duration-300">
                  <h3 className="text-2xl sm:text-3xl font-bold text-blue-400 mb-1">
                    2+
                  </h3>
                  <p className="text-gray-300 text-xs sm:text-sm">
                    Years Experience
                  </p>
                </div>
                <div className="bg-transparent backdrop-blur-sm p-3 sm:p-4 rounded-xl border-2 border-blue-400/30 hover:border-blue-400/50 transition-all duration-300">
                  <h3 className="text-2xl sm:text-3xl font-bold text-blue-400 mb-1">
                    24/7
                  </h3>
                  <p className="text-gray-300 text-xs sm:text-sm">
                    Support Available
                  </p>
                </div>
                <div className="bg-transparent backdrop-blur-sm p-3 sm:p-4 rounded-xl border-2 border-blue-400/30 hover:border-blue-400/50 transition-all duration-300">
                  <h3 className="text-2xl sm:text-3xl font-bold text-blue-400 mb-1">
                    15+
                  </h3>
                  <p className="text-gray-300 text-xs sm:text-sm">
                    Projects Completed
                  </p>
                </div>
                <div className="bg-transparent backdrop-blur-sm p-3 sm:p-4 rounded-xl border-2 border-blue-400/30 hover:border-blue-400/50 transition-all duration-300">
                  <h3 className="text-2xl sm:text-3xl font-bold text-blue-400 mb-1">
                    100%
                  </h3>
                  <p className="text-gray-300 text-xs sm:text-sm">
                    Client Satisfaction
                  </p>
                </div>
              </div>
            </div>

            {/* Right - Profile Photo */}
            <div className="flex items-center justify-center order-1 md:order-2 mb-6 md:mb-0">
              <div className="relative">
                <div className="w-64 h-80 sm:w-80 sm:h-96 md:w-96 md:h-[28rem] rounded-xl border-2 border-blue-400/50 p-1 shadow-2xl transform hover:scale-105 transition duration-500">
                  <div className="w-full h-full rounded-lg overflow-hidden">
                    <img
                      src="/Profile.jpg"
                      alt="Profile Photo"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 border-2 border-slate-700/30 rounded-full"></div>
                <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 md:-bottom-8 md:-left-8 w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 border-2 border-slate-700/30 rounded-full"></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
