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
      className="min-h-screen flex flex-col items-center justify-center py-20 px-4"
    >
      {/* Header Section */}
      <motion.div
        className="text-center mb-12 max-w-4xl"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-blue-400 mb-4">
          Skills & Technologies
        </h2>
        <p className="text-gray-400 text-sm md:text-base mb-6">
          Passionate about transforming data into actionable insights and
          maintaining financial accuracy through analytical expertise and
          accounting principles
        </p>

        {/* Expertise Labels */}
        <div className="flex flex-wrap gap-4 justify-center">
          <motion.div
            className="bg-transparent border border-blue-500/50 backdrop-blur-sm px-6 py-3 rounded-full"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <span className="text-blue-300 font-semibold text-sm md:text-base">
              📊 Data Analyst
            </span>
          </motion.div>
          <motion.div
            className="bg-transparent border border-green-500/50 backdrop-blur-sm px-6 py-3 rounded-full"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <span className="text-green-300 font-semibold text-sm md:text-base">
              💼 Accounting
            </span>
          </motion.div>
        </div>
      </motion.div>

      {/* All Technologies Section */}
      <div className="w-full mb-8">
        <h3 className="text-xl md:text-2xl font-semibold text-white text-center mb-8">
          All Technologies
        </h3>
      </div>

      {/* Full-width scrolling section with top and bottom borders */}
      <motion.div
        className="w-screen relative border-t-2 border-b-2 border-blue-500/30 py-8 -mx-4"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <div className="space-y-6">
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
      </motion.div>
    </section>
  );
};

export default Skills;
