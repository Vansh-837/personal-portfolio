
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown, Brain, Code, Gamepad2 } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const scrollToSection = (sectionId) => {
    // If we're on the portfolio page, navigate to home first
    if (location.pathname === '/portfolio') {
      navigate('/');
      // Wait a bit for navigation to complete, then scroll
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    } else {
      // We're on home page, just scroll
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };
  
  const scrollToAbout = () => scrollToSection("about");
  const scrollToProjects = () => scrollToSection("projects");
  const scrollToContact = () => scrollToSection("contact");
  const scrollToExperience = () => scrollToSection("experience");


  return (
    <section id="home_content" className="relative h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          class="w-full h-full object-cover opacity-40" 
          alt="Vancouver skyline at dusk with city lights"
         src="https://images.unsplash.com/photo-1681205044339-55a40c301b07" />
        <div className="absolute inset-0 bg-gradient-to-b from-netflix-black/80 via-netflix-black/60 to-netflix-black"></div>
      </div>
      
      <div className="netflix-container relative z-10 text-center px-4">
        <motion.h1 
          className="netflix-title text-5xl md:text-7xl lg:text-8xl mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          VANSH BHATT
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <h2 className="text-white text-2xl md:text-4xl mb-6 font-light">
            4th Year Computer Science Student at <span className="font-medium">Simon Fraser University</span>
          </h2>
          <p className="text-netflix-light max-w-3xl mx-auto mb-8 text-lg md:text-xl">
            Building seamless digital experiences from front-end to back-end. Passionate about full-stack development, Agentic AI, and harnessing LLMs to create intelligent, production-ready solutions
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              className="netflix-button text-lg py-6 px-8"
              onClick={scrollToProjects}
            >
             My Projects
            </Button>
            <Button 
              variant="outline" 
              className="border-netflix-red text-netflix-red hover:bg-netflix-red hover:text-white text-lg py-6 px-8"
              onClick={scrollToExperience}
            >
              Work Experience
            </Button>
            <Button 
              variant="outline" 
              className="border-netflix-red text-netflix-red hover:bg-netflix-red hover:text-white text-lg py-6 px-8"
              onClick={scrollToContact}
            >
              Let's Connect
            </Button>
          </div>

          <div className="flex justify-center space-x-6 md:space-x-12 text-netflix-light">
            <motion.div 
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <Brain className="w-8 h-8 text-netflix-red mb-2"/>
              <p>AI & ML Enthusiast</p>
            </motion.div>
            <motion.div 
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              <Code className="w-8 h-8 text-netflix-red mb-2"/>
              <p>Full-Stack Developer</p>
            </motion.div>
            <motion.div 
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.4 }}
            >
              <Gamepad2 className="w-8 h-8 text-netflix-red mb-2"/>
              <p>Creative Problem Solver</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.6 }}
        onClick={scrollToAbout}
      >
        <ChevronDown className="w-10 h-10 text-netflix-light animate-bounce" />
      </motion.div>
    </section>
  );
};

export default Hero;
