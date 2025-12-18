import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center py-20 px-4"
    >
      {/* Header Section */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-blue-400 mb-4">
          About Me
        </h2>
        <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
          Get to know more about my background, skills, and what drives my
          passion for technology and data.
        </p>
      </motion.div>

      {/* Main Content Container */}
      <motion.div
        className="max-w-6xl w-full bg-transparent backdrop-blur-md rounded-2xl border-2 border-blue-400 p-8 md:p-12"
        style={{ boxShadow: "0 0 30px rgba(96, 165, 250, 0.3)" }}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left - Content */}
          <div className="order-2 md:order-1">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Hi,
              <br />
              My name is Dita Putri Utami
            </h3>
            <p className="text-gray-300 mb-5 leading-relaxed text-sm md:text-base">
              I am an Accounting Information Systems student at the Digital
              Technology University of Indonesia with a strong interest in data
              processing and the field of accounting. I continuously learn how
              data can be used to generate accurate insights and support better
              decision-making.
            </p>
            <p className="text-gray-300 mb-8 leading-relaxed text-sm md:text-base">
              I have a passion for Data Analysis and Accounting, especially in
              connecting data insights with business needs. By combining
              technical skills and financial understanding, I aim to grow into
              someone who can provide effective and valuable data-driven
              solutions.
            </p>

            {/* Stats Grid - 2x2 */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                className="bg-transparent p-5 rounded-xl border-2 border-blue-400 hover:transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-3xl md:text-4xl font-bold text-blue-400 mb-1">
                  2+
                </h3>
                <p className="text-gray-400 text-xs md:text-sm">
                  Years Experience
                </p>
              </motion.div>

              <motion.div
                className="bg-transparent p-5 rounded-xl border-2 border-blue-400 hover:transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-3xl md:text-4xl font-bold text-blue-400 mb-1">
                  24/7
                </h3>
                <p className="text-gray-400 text-xs md:text-sm">
                  Support Available
                </p>
              </motion.div>

              <motion.div
                className="bg-transparent p-5 rounded-xl border-2 border-blue-400 hover:transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-3xl md:text-4xl font-bold text-blue-400 mb-1">
                  15+
                </h3>
                <p className="text-gray-400 text-xs md:text-sm">
                  Projects Completed
                </p>
              </motion.div>

              <motion.div
                className="bg-transparent p-5 rounded-xl border-2 border-blue-400 hover:transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-3xl md:text-4xl font-bold text-blue-400 mb-1">
                  100%
                </h3>
                <p className="text-gray-400 text-xs md:text-sm">
                  Client Satisfaction
                </p>
              </motion.div>
            </div>
          </div>

          {/* Right - Profile Photo */}
          <div className="flex items-center justify-center order-1 md:order-2">
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="w-72 h-96 md:w-80 md:h-[28rem] bg-gradient-to-br from-slate-700/50 to-slate-800/50 rounded-2xl overflow-hidden border border-slate-600/50 shadow-2xl">
                <img
                  src="/Profile.jpg"
                  alt="Dita Putri Utami"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
