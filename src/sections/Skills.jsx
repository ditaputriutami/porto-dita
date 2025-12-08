const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "Tailwind CSS", level: 90 },
        { name: "HTML/CSS", level: 95 },
        { name: "Next.js", level: 75 },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 80 },
        { name: "MongoDB", level: 75 },
        { name: "PostgreSQL", level: 70 },
        { name: "REST API", level: 85 },
        { name: "GraphQL", level: 65 },
      ],
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "Docker", level: 70 },
        { name: "Firebase", level: 75 },
        { name: "Figma", level: 80 },
        { name: "VS Code", level: 95 },
        { name: "Postman", level: 85 },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-blue-400 mx-auto mb-4"></div>
          <p className="text-gray-200 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="bg-blue-500/10 backdrop-blur-sm rounded-xl shadow-lg p-6 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 border border-blue-400/20"
            >
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-blue-400 font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-blue-900/30 rounded-full h-2.5">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2.5 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Tech Stack */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Tech Stack</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "React",
              "Node.js",
              "JavaScript",
              "TypeScript",
              "Tailwind CSS",
              "MongoDB",
              "Express",
              "Git",
              "Docker",
              "Firebase",
              "Next.js",
              "PostgreSQL",
              "REST API",
              "GraphQL",
              "Figma",
              "VS Code",
            ].map((tech, idx) => (
              <span
                key={idx}
                className="px-6 py-3 bg-blue-500/20 backdrop-blur-sm rounded-full shadow-md text-blue-200 font-medium hover:bg-blue-500 hover:text-white transition transform hover:scale-110 cursor-default border border-blue-400/30"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
