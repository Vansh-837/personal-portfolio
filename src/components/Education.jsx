
import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Calendar, Award, BookOpen, Star, MapPin } from "lucide-react";

const educationData = {
  university: "Simon Fraser University",
  degree: "Bachelor of Science in Computer Science",
  period: " Fourth Year (Expected Graduation: Summer 2026)",
  location: "Vancouver, Canada",
  gpa: "3.92/4.3 CGPA",
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
    "Dean’s Honour Roll",
    "President’s Honour Roll",
    "SFU Computing Science Student Society Award Recipient",
    "Open Undergraduate Scholarship Recipient",
  ]
};

const Education = () => {
  return (
    <section id="education" className="netflix-section bg-black">
      <div className="netflix-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="netflix-title text-4xl md:text-5xl mb-4">ACADEMIC JOURNEY</h2>
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
                <h3 className="text-3xl font-netflix text-white">{educationData.university}</h3>
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
              <h4 className="text-xl font-medium text-white mb-4 flex items-center">
                <Award className="w-6 h-6 text-netflix-red mr-2" />
                Key Achievements
              </h4>
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
            transition={{ duration: 0.5, delay:0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-6">
              <div className="bg-netflix-red p-3 rounded-full mr-4">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-netflix text-white">Relevant Coursework</h3>
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

export default Education;
