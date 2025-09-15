import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "MultiQos Technologies",
      position: "Full-Stack Developer Intern",
      duration: "April 2025 – August 2025",
    
      achievements: [
        "Built AI systems that connect LLMs with company data (Agentic AI). Handled the full process — meeting with clients, understanding requirements, building solutions, and delivering them.",
        "Designed and launched AI chatbots:",
        "• A Personal Finance assistant that helps users with smart financial advice",
        "• An HR chatbot that answers employee questions automatically",
        "• A voice-based Meeting Scheduler using speech-to-text, text-to-speech, and LLMs for hands-free scheduling",
        "Created computer vision applications with OpenCV, such as motion detection and live analytics, which were used in client-facing products.",
        "Gave regular presentations to clients and managers, learning how to explain technical solutions in simple terms.",
        "Learned how to translate business problems into working AI tools, improved teamwork, and gained confidence working directly with executives and product managers."
      ]
    },
    {
      company: "Ascendion Engineering",
      position: "AI Application Intern",
      duration: "May 2024 – September 2024",

      achievements: [
        "Built AI chat applications using OpenAI and Retrieval-Augmented Generation (RAG). Used vector databases to store knowledge and Flask APIs to connect data with the models.",
        "Created a geobot (AI assistant that answers questions about countries and locations) and connected it to a web app using Angular and Node.js.",
        "Contributed to full-stack development of a business platform using ASP.NET Core 8. Added features for admin and business logic, built database access with Dapper, and managed SQL Server databases.",
        "Gained strong experience in both AI and software engineering, learning how to connect LLMs with real products.",
        "Learned how to write production-level code, use modern frameworks, and collaborate in a professional software team."
      ]
    },
    {
      company: "Simon Fraser University",
      position: "Residence Advisor (Contract, Part-Time)",
      duration: "August 2024 – Present",

      achievements: [
        "Fostered a positive and inclusive living environment by building strong community bonds among residents.",
        "Facilitated engaging events and activities to enhance participation and connection.",
        "Resolved conflicts and addressed challenges effectively using problem-solving skills.",
        "Monitored community dynamics proactively to identify and respond to residents' needs.",
        "Provided support and resources to residents, promoting a safe and welcoming atmosphere."
      ]
    }
  ];

  return (
    <section id="experience" className="netflix-section bg-gradient-to-b from-black to-netflix-black">
      <div className="netflix-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="netflix-title text-4xl md:text-5xl mb-4">WORK EXPERIENCE</h2>
          <p className="text-netflix-light text-lg max-w-3xl mx-auto">
            My professional journey in AI/ML development and full-stack engineering
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              className="netflix-card p-8 relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Background accent */}
              <div className="absolute top-0 left-0 w-1 h-full bg-netflix-red"></div>
              
              {/* Header */}
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                <div className="mb-4 lg:mb-0">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {experience.company}
                  </h3>
                  <div className="flex items-center text-netflix-red text-lg font-medium mb-2">
                    <Briefcase className="w-5 h-5 mr-2" />
                    {experience.position}
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 text-netflix-light">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="text-sm">{experience.duration}</span>
                  </div>
                  <div className="flex items-center">
                   
                    <span className="text-sm">{experience.location}</span>
                  </div>
                </div>
              </div>

              {/* Achievements */}
              <div className="space-y-4">
                {experience.achievements.map((achievement, achievementIndex) => (
                  <motion.div
                    key={achievementIndex}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: (index * 0.2) + (achievementIndex * 0.1) }}
                    viewport={{ once: true }}
                  >
                    <div className="w-2 h-2 bg-netflix-red rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <p className="text-netflix-light leading-relaxed">
                      {achievement}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-netflix-light text-lg mb-6">
            Interested in working together? Let's discuss how I can contribute to your team.
          </p>
          <motion.button
            className="netflix-button px-8 py-3 text-lg"
            onClick={() => {
              const contactSection = document.getElementById("contact");
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
              }
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
