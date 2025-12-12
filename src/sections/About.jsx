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
    <section id="about" className="min-h-screen flex items-center py-20 px-4">
      <div className="w-full px-8">
        {/* Top Section - About & Profile in One Box */}
        <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-3xl p-12 border border-slate-700/50 mb-8">
          <div className="bg-gradient-to-r from-blue-500 to-blue-900 text-white px-6 py-2 rounded-r-full font-semibold inline-block -ml-12 mb-8">
            About me
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left - About Content */}
            <div>
              <h3 className="text-3xl font-semibold text-white mb-6">
                Hi,
                <br />
                My name is Dita Putri Utami
              </h3>
              <p className="text-gray-300 mb-5 leading-relaxed text-base">
                I am a 3rd-year student based in Hanoi, UoM there with
                experience through projects and subjects in university.
              </p>
              <p className="text-gray-300 mb-8 leading-relaxed text-base">
                My objective: Challenge myself is a new environment to learn,
                develop and explore new skills through different projects and
                knowledge to be able adapting with my abilities.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-900/50 backdrop-blur-sm p-4 rounded-xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300">
                  <h3 className="text-3xl font-bold text-blue-400 mb-1">2+</h3>
                  <p className="text-gray-300 text-sm">Years Experience</p>
                </div>
                <div className="bg-slate-900/50 backdrop-blur-sm p-4 rounded-xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300">
                  <h3 className="text-3xl font-bold text-blue-400 mb-1">
                    24/7
                  </h3>
                  <p className="text-gray-300 text-sm">Support Available</p>
                </div>
                <div className="bg-slate-900/50 backdrop-blur-sm p-4 rounded-xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300">
                  <h3 className="text-3xl font-bold text-blue-400 mb-1">15+</h3>
                  <p className="text-gray-300 text-sm">Projects Completed</p>
                </div>
                <div className="bg-slate-900/50 backdrop-blur-sm p-4 rounded-xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300">
                  <h3 className="text-3xl font-bold text-blue-400 mb-1">
                    100%
                  </h3>
                  <p className="text-gray-300 text-sm">Client Satisfaction</p>
                </div>
              </div>
            </div>

            {/* Right - Profile Photo */}
            <div className="flex items-center justify-center">
              <div className="relative">
                <div className="w-96 h-[28rem] rounded-[40%_60%_70%_30%/40%_50%_60%_50%] bg-gradient-to-br from-cyan-400 to-blue-500 p-1 shadow-2xl transform hover:scale-105 transition duration-500">
                  <div className="w-full h-full rounded-[40%_60%_70%_30%/40%_50%_60%_50%] overflow-hidden">
                    <img
                      src="/Profile.jpg"
                      alt="Profile Photo"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-36 h-36 border-2 border-slate-700/30 rounded-full"></div>
                <div className="absolute -bottom-8 -left-8 w-28 h-28 border-2 border-slate-700/30 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
