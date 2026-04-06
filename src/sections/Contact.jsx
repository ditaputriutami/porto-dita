import { useState } from "react";
import { motion } from "framer-motion";
import { socialLinks } from "../data/socialLinks";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("https://formspree.io/f/mzdkyozz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setStatus(""), 3000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus(""), 3000);
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus("error");
      setTimeout(() => setStatus(""), 3000);
    }
  };

  return (
    <section id="contact" className="min-h-screen flex items-center py-20">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-blue-400 mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-blue-400 mx-auto mb-4"></div>
          <p className="text-gray-200 max-w-2xl mx-auto">
            Have a project in mind or just want to say hi? Feel free to reach
            out!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Contact Information
            </h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-white">Email</h4>
                  <p className="text-gray-300">ditaputriutami29@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-white">Phone</h4>
                  <p className="text-gray-300">+62 858 7065 4771</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-white">Location</h4>
                  <p className="text-gray-300">Bantul, DI Yogyakarta</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-white mb-4">
                Follow Me
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map(({ label, href, Icon, external }) => (
                  <a
                    key={label}
                    href={href}
                    {...(external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="w-10 h-10 bg-transparent border-2 border-blue-400/40 text-blue-300 rounded-full flex items-center justify-center hover:bg-blue-400/10 hover:border-blue-400/60 transition"
                    aria-label={label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="bg-transparent backdrop-blur-md rounded-2xl p-8 border-2 border-blue-400/40"
            style={{ boxShadow: "0 0 20px rgba(96, 165, 250, 0.2)" }}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-white mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-transparent border-2 border-blue-400/40 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-400 focus:border-blue-400/60 outline-none transition"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-white mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-transparent border-2 border-blue-400/40 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-400 focus:border-blue-400/60 outline-none transition"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-white mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-transparent border-2 border-blue-400/40 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-400 focus:border-blue-400/60 outline-none transition"
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-white mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-transparent border-2 border-blue-400/40 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-400 focus:border-blue-400/60 outline-none transition resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full px-6 py-3 bg-blue-400/5 border-2 border-blue-400/40 text-blue-300 rounded-lg font-semibold hover:bg-blue-400/10 hover:border-blue-400/60 hover:text-blue-200 transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>

              {status === "success" && (
                <div className="text-green-400 text-center font-medium">
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}
              {status === "error" && (
                <div className="text-red-400 text-center font-medium">
                  Failed to send message. Please try again.
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
