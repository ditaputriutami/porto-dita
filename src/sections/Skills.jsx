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
  FaChartBar,
  FaCalculator,
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
      className="min-h-screen flex items-center py-10 sm:py-20 border-t-2 border-b-2 border-blue-400/30"
    >
      <div className="w-full">
        {/* Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold bg-blue-400 bg-clip-text text-transparent mb-4">
              Skills & Technologies
            </h1>
            <p className="text-gray-300 max-w-2xl mx-auto text-base md:text-lg">
              Passionate about transforming data into actionable insights and
              maintaining financial accuracy through analytical expertise and
              accounting principles
            </p>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Expertise Labels */}
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-12">
              <motion.div
                className="bg-gradient-to-r from-blue-500/20 to-blue-900/20 border-2 border-blue-400/30 hover:border-blue-400/50 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-blue-300 font-semibold text-sm sm:text-base flex items-center gap-2">
                  <FaChartBar className="text-blue-400" />
                  Data Analyst
                </span>
              </motion.div>
              <motion.div
                className="bg-gradient-to-r from-blue-500/20 to-blue-900/20 border-2 border-blue-400/30 hover:border-blue-400/50 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-blue-300 font-semibold text-sm sm:text-base flex items-center gap-2">
                  <FaCalculator className="text-blue-400" />
                  Accounting
                </span>
              </motion.div>
            </div>

            {/* Animated Skills Showcase */}
            <div className="text-center mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl font-semibold text-white">
                All Technologies
              </h3>
            </div>
          </motion.div>
        </div>

        {/* Logo Loop - Full Width */}
        <div className="w-full overflow-hidden">
          <div className="space-y-4">
            {/* First Row - Left to Right */}
            <LogoLoop
              logos={firstRowLogos}
              speed={50}
              direction="left"
              logoHeight={100}
              gap={16}
              fadeOut={false}
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
              fadeOut={false}
              scaleOnHover={true}
              pauseOnHover={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
