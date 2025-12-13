import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaPhp,
  FaPython,
  FaJsSquare,
  FaJava,
  FaBootstrap,
  FaLaravel,
  FaNodeJs,
  FaReact,
  FaGithub,
  FaFigma,
  FaGitAlt,
  FaCode,
  FaTerminal,
} from "react-icons/fa";
import { SiTailwindcss, SiCanva, SiMysql, SiMariadb } from "react-icons/si";
import LogoLoop from "../components/LogoLoop";

const Skills = () => {
  const skills = [
    { title: "HTML", icon: FaHtml5, subtitle: "Language", color: "#E34F26" },
    { title: "CSS3", icon: FaCss3Alt, subtitle: "Language", color: "#1572B6" },
    { title: "PHP", icon: FaPhp, subtitle: "Language", color: "#777BB4" },
    { title: "Python", icon: FaPython, subtitle: "Language", color: "#3776AB" },
    {
      title: "Javascript",
      icon: FaJsSquare,
      subtitle: "Language",
      color: "#F7DF1E",
    },
    { title: "Java", icon: FaJava, subtitle: "Language", color: "#007396" },
    {
      title: "Powershell",
      icon: FaTerminal,
      subtitle: "Language",
      color: "#5391FE",
    },
    {
      title: "Bootstrap",
      icon: FaBootstrap,
      subtitle: "Framework",
      color: "#7952B3",
    },
    {
      title: "Laravel",
      icon: FaLaravel,
      subtitle: "Framework",
      color: "#FF2D20",
    },
    {
      title: "Node JS",
      icon: FaNodeJs,
      subtitle: "Framework",
      color: "#339933",
    },
    {
      title: "Visual Studio Code",
      icon: FaCode,
      subtitle: "Tools",
      color: "#007ACC",
    },
    {
      title: "React JS",
      icon: FaReact,
      subtitle: "Framework",
      color: "#61DAFB",
    },
    {
      title: "Tailwind CSS",
      icon: SiTailwindcss,
      subtitle: "Framework",
      color: "#06B6D4",
    },
    {
      title: "Github",
      icon: FaGithub,
      subtitle: "Repository",
      color: "#FFFFFF",
    },
    { title: "Canva", icon: SiCanva, subtitle: "Design App", color: "#00C4CC" },
    { title: "Figma", icon: FaFigma, subtitle: "Design App", color: "#F24E1E" },
    { title: "MySQL", icon: SiMysql, subtitle: "Database", color: "#4479A1" },
    {
      title: "MariaDB",
      icon: SiMariadb,
      subtitle: "Database",
      color: "#C0765A",
    },
    { title: "Git", icon: FaGitAlt, subtitle: "Tools", color: "#F05032" },
  ];

  // Convert skills to LogoLoop format with React icon nodes
  const midPoint = Math.ceil(skills.length / 2);
  const firstRowLogos = skills.slice(0, midPoint).map((skill) => ({
    node: <skill.icon />,
    title: skill.title,
    color: skill.color,
  }));

  const secondRowLogos = skills.slice(midPoint).map((skill) => ({
    node: <skill.icon />,
    title: skill.title,
    color: skill.color,
  }));

  return (
    <section
      id="skills"
      className="min-h-screen flex items-center py-10 sm:py-20"
    >
      <div className="w-full pr-4 sm:pr-8 md:pr-16 lg:pr-24">
        {/* Container with left edge aligned, right edge rounded */}
        <motion.div
          className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-r-[3rem] border-r border-t border-b border-slate-700/50 py-8 sm:py-12 md:py-16"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          {/* Title Section */}
          <div className="px-4 sm:px-8 md:px-12 mb-8 sm:mb-12">
            <div className="bg-gradient-to-r from-blue-500 to-blue-900 text-white px-4 sm:px-6 py-2 rounded-r-full font-semibold inline-block -ml-4 sm:-ml-8 md:-ml-12 mb-6 sm:mb-8 text-sm sm:text-base">
              Skills & Technologies
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
              My Professional Skills
            </h2>
            <p className="text-gray-300 text-sm sm:text-base max-w-3xl mb-6">
              Passionate about transforming data into actionable insights and
              maintaining financial accuracy through analytical expertise and
              accounting principles
            </p>

            {/* Expertise Labels */}
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <motion.div
                className="bg-gradient-to-r from-blue-500/20 to-blue-900/20 border border-blue-500/50 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-blue-300 font-semibold text-sm sm:text-base">
                  📊 Data Analyst
                </span>
              </motion.div>
              <motion.div
                className="bg-gradient-to-r from-green-500/20 to-emerald-900/20 border border-green-500/50 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-green-300 font-semibold text-sm sm:text-base">
                  💼 Accounting
                </span>
              </motion.div>
            </div>
          </div>

          {/* Animated Skills Showcase */}
          <div className="px-4 sm:px-8 md:px-12 mb-6 sm:mb-8">
            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6">
              All Technologies
            </h3>
          </div>

          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {/* First Row - Left to Right */}
            <LogoLoop
              logos={firstRowLogos}
              speed={50}
              direction="left"
              logoHeight={100}
              gap={16}
              fadeOut={true}
              fadeOutColor="#0f172a"
              scaleOnHover={true}
              pauseOnHover={true}
            />

            {/* Second Row - Right to Left */}
            <LogoLoop
              logos={secondRowLogos}
              speed={50}
              direction="right"
              logoHeight={100}
              gap={16}
              fadeOut={true}
              fadeOutColor="#0f172a"
              scaleOnHover={true}
              pauseOnHover={true}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
