import React from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="netflix-section bg-gradient-to-b from-black to-netflix-black">
      <div className="netflix-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 flex flex-col items-center justify-center text-center"
        >
          <h2 className="netflix-title text-4xl md:text-5xl mb-4">LET'S CONNECT</h2>
          <p className="text-netflix-light max-w-2xl">
            Interested in collaborating, have questions, or just want to chat about tech, board games, or volleyball? Reach out through email or find me online!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center mx-auto space-y-10"
        >
          <div className="w-full md:w-2/3 lg:w-1/2">
            <h3 className="text-2xl font-netflix text-white mb-6">Get In Touch</h3>
            <div className="space-y-6">
              <div className="flex flex-col items-center md:items-start">
                <div className="bg-netflix-red p-3 rounded-full mb-2">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-medium text-lg">Email</h4>
                  <a
                    href="mailto:vansh.bhatt1102@gmail.com"
                    className="text-netflix-light hover:text-netflix-red transition-colors"
                  >
                    vansh.bhatt1102@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex flex-col items-center md:items-start">
                <div className="bg-netflix-red p-3 rounded-full mb-2">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-medium text-lg">Location</h4>
                  <p className="text-netflix-light">Vancouver, BC, Canada</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-2/3 lg:w-1/2">
            <h3 className="text-2xl font-netflix text-white mb-6">Find Me Online</h3>
            <div className="flex justify-center space-x-4">
              <motion.a
                href="https://github.com/Vansh-837"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-netflix-dark p-4 rounded-full text-netflix-light hover:text-netflix-red hover:bg-netflix-dark/80 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github className="w-7 h-7" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/vansh-bhatt"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-netflix-dark p-4 rounded-full text-netflix-light hover:text-netflix-red hover:bg-netflix-dark/80 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin className="w-7 h-7" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;