const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="flex justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 p-2 shadow-2xl transform hover:scale-105 transition duration-300">
              <img 
                src="/Profile.jpg" 
                alt="Profile Photo" 
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-4">
              Data Analyst & Accounting Information Systems Student
            </h3>
            <p className="text-gray-200 mb-4 leading-relaxed">
              I'm a dedicated Accounting Information Systems student with a passion 
              for transforming financial data into actionable insights. I specialize 
              in bridging the gap between accounting principles and data analytics 
              to drive smarter business decisions.
            </p>
            <p className="text-gray-200 mb-4 leading-relaxed">
              My journey combines the precision of accounting with the power of 
              data analysis. I leverage tools like Excel, Python, SQL, and Power BI 
              to analyze financial patterns, automate reporting processes, and 
              create data-driven solutions that enhance financial transparency and 
              operational efficiency.
            </p>
            <p className="text-gray-200 mb-6 leading-relaxed">
              Beyond numbers and spreadsheets, I'm passionate about developing 
              accounting information systems that streamline workflows, improve 
              accuracy, and provide real-time financial insights for better 
              strategic planning.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-500/20 backdrop-blur-sm p-4 rounded-lg border border-blue-400/30">
                <h4 className="text-3xl font-bold text-blue-400 mb-1">15+</h4>
                <p className="text-gray-300">Data Projects</p>
              </div>
              <div className="bg-blue-500/20 backdrop-blur-sm p-4 rounded-lg border border-blue-400/30">
                <h4 className="text-3xl font-bold text-blue-400 mb-1">100%</h4>
                <p className="text-gray-300">Accuracy Focus</p>
              </div>
              <div className="bg-blue-500/20 backdrop-blur-sm p-4 rounded-lg border border-blue-400/30">
                <h4 className="text-3xl font-bold text-blue-400 mb-1">5+</h4>
                <p className="text-gray-300">Analysis Tools</p>
              </div>
              <div className="bg-blue-500/20 backdrop-blur-sm p-4 rounded-lg border border-blue-400/30">
                <h4 className="text-3xl font-bold text-blue-400 mb-1">24/7</h4>
                <p className="text-gray-300">Learning Mindset</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
