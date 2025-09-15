
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const sections = [
  { id: "home", component: <Hero />, title: "Home" },
  { id: "about", component: <About />, title: "About Me" },
  { id: "experience", component: <Experience />, title: "Work Experience" },
  { id: "projects", component: <Projects />, title: "My Projects" },
  { id: "skills", component: <Skills />, title: "Skills & Expertise" },
  { id: "contact", component: <Contact />, title: "Get In Touch" },
];

const PortfolioPage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        // Wait for layout to settle before scrolling
        setTimeout(() => {
          element.scrollIntoView({ 
            behavior: "smooth", 
            block: "nearest",
            inline: "center"
          });
        }, 500);
      }
    } else {
       // Scroll to top if no hash
       window.scrollTo(0, 0);
    }
  }, [location]);


  return (
    <div className="min-h-screen bg-netflix-black text-white flex flex-col">
      <Navbar />
      <main className="flex-grow pt-[80px]">
        <div className="horizontal-scroll-container no-scrollbar">
          {sections.map((section, index) => (
            <motion.div
              key={section.id}
              id={section.id}
              className="horizontal-scroll-item"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="h-full overflow-y-auto no-scrollbar rounded-lg shadow-xl bg-black/30 backdrop-blur-sm">
                {section.component}
              </div>
            </motion.div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PortfolioPage;
