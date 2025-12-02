const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="flex justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center shadow-2xl transform hover:scale-105 transition duration-300">
              <div className="w-60 h-60 md:w-72 md:h-72 rounded-full bg-white flex items-center justify-center">
                <svg
                  className="w-40 h-40 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Full Stack Developer & UI/UX Enthusiast
            </h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              I'm a passionate developer with 3+ years of experience in building
              web applications. I specialize in creating responsive,
              user-friendly interfaces and robust backend systems.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              My journey in web development started with a curiosity about how
              websites work, and it has grown into a career I truly love. I
              enjoy solving complex problems and turning ideas into reality
              through code.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or sharing knowledge with
              the developer community.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="text-3xl font-bold text-blue-600 mb-1">50+</h4>
                <p className="text-gray-600">Projects Completed</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="text-3xl font-bold text-blue-600 mb-1">3+</h4>
                <p className="text-gray-600">Years Experience</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="text-3xl font-bold text-blue-600 mb-1">30+</h4>
                <p className="text-gray-600">Happy Clients</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="text-3xl font-bold text-blue-600 mb-1">15+</h4>
                <p className="text-gray-600">Awards Won</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
