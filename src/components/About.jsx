
import React from "react";
import { motion } from "framer-motion";
import { Award, BookOpen, Target, GraduationCap, Calendar, Star, MapPin, Globe, Download } from "lucide-react";

const educationData = {
  university: "Simon Fraser University",
  degree: "Bachelor of Science in Computer Science",
  period: "Fourth Year (Expected Graduation: Summer 2026)",
  location: "Vancouver, Canada",
  gpa: "3.9 CGPA",
  courses: [
    "Data Structures & Algorithms",
    "AI & Machine Learning",
    "Full-Stack Web Development",
    "Database Systems & SQL",
    "Operating Systems",
    "Software Engineering Principles",
    "Mobile Application Development",
    "Network Protocols & Design",
  ],
  achievements: [
    "Dean's Honour Roll",
    "President's Honour Roll",
    "SFU Computing Science Student Society Award Recipient",
    "Open Undergraduate Scholarship Recipient",
  ]
};

const About = () => {
  return (
    <section id="about" className="netflix-section bg-gradient-to-b from-netflix-black to-black">
      <div className="netflix-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="netflix-title text-4xl md:text-5xl mb-4">ABOUT ME</h2>
        </motion.div>

        {/* Personal Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start mb-12">
          <motion.div
            className="lg:col-span-2 netflix-card p-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-netflix-light text-lg mb-6 leading-relaxed">
              I'm Vansh Bhatt, a fourth-year Computer Science student at Simon Fraser University. At 18, I moved to Vancouver where I knew no one, navigating an entirely new environment on my own. That experience taught me resilience, independence, and the importance of building connections from scratch, shaping how I adapt quickly, embrace challenges, and grow in unfamiliar situations.
            </p>
            <p className="text-netflix-light text-lg mb-6 leading-relaxed">
              Having grown up across Canada and India, I bring a multicultural perspective, adaptability, and strong collaboration skills to everything I do. My experiences in fast-paced environments have strengthened my ability to communicate clearly, manage multiple priorities, and deliver results under pressure. I thrive in spaces where ideas are exchanged, challenges are welcomed, and growth is continuous.
            </p>
            <p className="text-netflix-light text-lg leading-relaxed">
              Outside of academics, I enjoy strategizing over board games, spiking volleyballs in the rain, and engaging in meaningful conversations. These activities fuel my creativity, problem-solving skills, and social awareness, which I carry into both my professional and personal pursuits.
            </p>
          </motion.div>

          <motion.div
            className="netflix-card p-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-6">
              <div className="bg-netflix-red p-3 rounded-full mr-4">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-netflix text-white">Work Status</h3>
            </div>
            <ul className="space-y-3 mb-8">
              <motion.li 
                className="text-netflix-light flex items-start"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <span className="text-netflix-red mr-2">•</span>
                Canadian Citizen — no work authorization or sponsorship required
              </motion.li>
              <motion.li 
                className="text-netflix-light flex items-start"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <span className="text-netflix-red mr-2">•</span>
                Open to relocation within Canada and internationally
              </motion.li>
            </ul>

            <div className="flex items-center mb-6">
              <div className="bg-netflix-red p-3 rounded-full mr-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-netflix text-white">Interests</h3>
            </div>
            <ul className="space-y-3">
              {["AI & Machine Learning", "Full-Stack Development", "Cloud Computing", "Data Science", "Game Development", "Cybersecurity"].map((interest, index) => (
                 <motion.li 
                    key={index} 
                    className="text-netflix-light flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 + 0.5 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-netflix-red mr-2">•</span>
                    {interest}
                  </motion.li>
              ))}
            </ul>
            
            {/* Resume Download Section */}
            <div className="mt-8 flex items-center mb-6">
              <div className="bg-netflix-red p-3 rounded-full mr-4">
                <Download className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-netflix text-white">Resume</h3>
            </div>
            <motion.div
              className="bg-netflix-dark border border-netflix-gray rounded-lg p-4 hover:border-netflix-red transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <a
                href="./Vansh Bhatt.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between text-netflix-light hover:text-white transition-colors"
              >
                <div className="flex items-center">
                  <Download className="w-5 h-5 text-netflix-red mr-3" />
                  <span className="font-medium">Download Resume (PDF)</span>
                </div>
                <div className="text-sm text-netflix-light">
                  Latest Version
                </div>
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Resume Download Call-to-Action */}
        <motion.div
          className="text-center mt-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="text-netflix-light text-lg mb-4">
            Want a detailed overview of my experience and skills?
          </p>
          <motion.a
            href="./Vansh Bhatt.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="netflix-button px-8 py-3 text-lg inline-flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download className="w-5 h-5 mr-2" />
            Download My Resume
          </motion.a>
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-8 text-center"
        >
          <h3 className="text-3xl md:text-4xl font-netflix text-white mb-4">ACADEMIC JOURNEY</h3>
          <p className="text-netflix-light max-w-2xl mx-auto">
            My educational background and key achievements at Simon Fraser University.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <motion.div 
            className="lg:col-span-3 netflix-card p-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-6">
              <div className="bg-netflix-red p-3 rounded-full mr-4">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <div>
                <h4 className="text-3xl font-netflix text-white">{educationData.university}</h4>
                <p className="text-netflix-light text-lg">{educationData.degree}</p>
              </div>
            </div>
            
            <div className="mb-6 space-y-3">
              <div className="flex items-center">
                <Calendar className="w-5 h-5 text-netflix-red mr-3 flex-shrink-0" />
                <span className="text-netflix-light text-md">{educationData.period}</span>
              </div>
              <div className="flex items-center">
                <Star className="w-5 h-5 text-netflix-red mr-3 flex-shrink-0" />
                <span className="text-netflix-light text-md">{educationData.gpa}</span>
              </div>
               <div className="flex items-center">
                <MapPin className="w-5 h-5 text-netflix-red mr-3 flex-shrink-0" />
                <span className="text-netflix-light text-md">{educationData.location}</span>
              </div>
            </div>
            
            <div>
              <h5 className="text-xl font-medium text-white mb-4 flex items-center">
                <Award className="w-6 h-6 text-netflix-red mr-2" />
                Key Achievements
              </h5>
              <ul className="space-y-2">
                {educationData.achievements.map((achievement, index) => (
                  <motion.li 
                    key={index} 
                    className="text-netflix-light flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-netflix-red mr-2 text-xl">•</span>
                    {achievement}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:col-span-2 netflix-card p-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-6">
              <div className="bg-netflix-red p-3 rounded-full mr-4">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h5 className="text-2xl font-netflix text-white">Relevant Coursework</h5>
            </div>
            
            <div className="space-y-3">
              {educationData.courses.map((course, index) => (
                <motion.div 
                  key={index} 
                  className="bg-netflix-dark border border-netflix-gray rounded-md p-3 text-netflix-light text-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 + 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.03, backgroundColor: "rgba(229, 9, 20, 0.15)", borderColor: "rgba(229,9,20,0.5)" }}
                >
                  {course}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
