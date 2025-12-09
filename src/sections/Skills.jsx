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
import ChromaGrid from "../components/ChromaGrid";

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

  return (
    <section id="skills" className="min-h-screen flex items-center py-20">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Tools & Technologies
          </h2>
          <div className="w-20 h-1 bg-blue-400 mx-auto mb-4"></div>
          <p className="text-gray-200 max-w-2xl mx-auto">
            My Professional Skills
          </p>
        </div>

        <ChromaGrid
          items={skills}
          radius={400}
          damping={0.35}
          fadeOut={0.5}
          ease="power3.out"
        />
      </div>
    </section>
  );
};

export default Skills;
