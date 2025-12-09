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

const Skills = () => {
  const skills = [
    { name: "HTML", icon: FaHtml5, category: "Language", color: "#E34F26" },
    { name: "CSS3", icon: FaCss3Alt, category: "Language", color: "#1572B6" },
    { name: "PHP", icon: FaPhp, category: "Language", color: "#777BB4" },
    { name: "Python", icon: FaPython, category: "Language", color: "#3776AB" },
    {
      name: "Javascript",
      icon: FaJsSquare,
      category: "Language",
      color: "#F7DF1E",
    },
    { name: "Java", icon: FaJava, category: "Language", color: "#007396" },
    {
      name: "Powershell",
      icon: FaTerminal,
      category: "Language",
      color: "#5391FE",
    },
    {
      name: "Bootstrap",
      icon: FaBootstrap,
      category: "Framework",
      color: "#7952B3",
    },
    {
      name: "Laravel",
      icon: FaLaravel,
      category: "Framework",
      color: "#FF2D20",
    },
    {
      name: "Node JS",
      icon: FaNodeJs,
      category: "Framework",
      color: "#339933",
    },
    {
      name: "Visual Studio Code",
      icon: FaCode,
      category: "Tools",
      color: "#007ACC",
    },
    {
      name: "React JS",
      icon: FaReact,
      category: "Framework",
      color: "#61DAFB",
    },
    {
      name: "Tailwind CSS",
      icon: SiTailwindcss,
      category: "Framework",
      color: "#06B6D4",
    },
    {
      name: "Github",
      icon: FaGithub,
      category: "Repository",
      color: "#FFFFFF",
    },
    { name: "Canva", icon: SiCanva, category: "Design App", color: "#00C4CC" },
    { name: "Figma", icon: FaFigma, category: "Design App", color: "#F24E1E" },
    { name: "MySQL", icon: SiMysql, category: "Database", color: "#4479A1" },
    {
      name: "MariaDB",
      icon: SiMariadb,
      category: "Database",
      color: "#C0765A",
    },
    { name: "Git", icon: FaGitAlt, category: "Tools", color: "#F05032" },
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

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className="group relative bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-700/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/20 border border-slate-700/50 hover:border-blue-500/50"
              >
                <div className="flex flex-col items-center gap-3">
                  <div className="text-5xl transition-transform duration-300 group-hover:scale-110">
                    <Icon style={{ color: skill.color }} />
                  </div>
                  <div className="text-center">
                    <h3 className="text-sm font-semibold text-white mb-1">
                      {skill.name}
                    </h3>
                    <p className="text-xs text-gray-400">{skill.category}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Language",
              "Framework",
              "Tools",
              "Database",
              "Design App",
              "Repository",
            ].map((category, idx) => (
              <span
                key={idx}
                className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg text-sm font-bold hover:from-blue-700 hover:to-blue-800 transition-all transform hover:scale-105 shadow-lg"
              >
                {category}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
