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
      <motion.div
        className="w-full px-2 sm:px-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Top Section - About & Profile in One Box */}
        <motion.div
          className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-3xl p-4 sm:p-8 md:p-12 border border-slate-700/50 mb-8"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="bg-gradient-to-r from-blue-500 to-blue-900 text-white px-4 sm:px-6 py-2 rounded-r-full font-semibold inline-block -ml-4 sm:-ml-8 md:-ml-12 mb-6 sm:mb-8 text-sm sm:text-base">
            About me
          </div>

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
                <div className="bg-slate-900/50 backdrop-blur-sm p-3 sm:p-4 rounded-xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300">
                  <h3 className="text-2xl sm:text-3xl font-bold text-blue-400 mb-1">
                    2+
                  </h3>
                  <p className="text-gray-300 text-xs sm:text-sm">
                    Years Experience
                  </p>
                </div>
                <div className="bg-slate-900/50 backdrop-blur-sm p-3 sm:p-4 rounded-xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300">
                  <h3 className="text-2xl sm:text-3xl font-bold text-blue-400 mb-1">
                    24/7
                  </h3>
                  <p className="text-gray-300 text-xs sm:text-sm">
                    Support Available
                  </p>
                </div>
                <div className="bg-slate-900/50 backdrop-blur-sm p-3 sm:p-4 rounded-xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300">
                  <h3 className="text-2xl sm:text-3xl font-bold text-blue-400 mb-1">
                    15+
                  </h3>
                  <p className="text-gray-300 text-xs sm:text-sm">
                    Projects Completed
                  </p>
                </div>
                <div className="bg-slate-900/50 backdrop-blur-sm p-3 sm:p-4 rounded-xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300">
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
                <div className="w-64 h-80 sm:w-80 sm:h-96 md:w-96 md:h-[28rem] rounded-[40%_60%_70%_30%/40%_50%_60%_50%] bg-gradient-to-br from-cyan-400 to-blue-500 p-1 shadow-2xl transform hover:scale-105 transition duration-500">
                  <div className="w-full h-full rounded-[40%_60%_70%_30%/40%_50%_60%_50%] overflow-hidden">
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
      </motion.div>
    </section>
  );
};

export default About;
