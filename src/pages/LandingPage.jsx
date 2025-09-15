
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Briefcase, Users, Globe } from "lucide-react";
import NetflixLogo from "@/components/NetflixLogo";

const profileCards = [
  {
    icon: <Briefcase className="w-12 h-12 text-netflix-red mb-4" />,
    title: "For Recruiters",
    description: "Discover my skills, projects, and experience. See how I can contribute to your team.",
    link: "/portfolio#experience",
    delay: 0.2,
  },
  {
    icon: <Users className="w-12 h-12 text-netflix-red mb-4" />,
    title: "For Collaborators",
    description: "Explore potential projects we can build together. Let's innovate and create something amazing.",
    link: "/portfolio#projects",
    delay: 0.4,
  },
  {
    icon: <Globe className="w-12 h-12 text-netflix-red mb-4" />,
    title: "For Everyone",
    description: "Learn more about my journey, passion for technology, and what drives me.",
    link: "/portfolio#about",
    delay: 0.6,
  },
];

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-netflix-black flex flex-col items-center justify-center p-4 text-white relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img  class="w-full h-full object-cover opacity-30" alt="Abstract matrix-like background with red and black hues" src="https://images.unsplash.com/photo-1686654159302-23f41753b2ff" />
        <div className="absolute inset-0 bg-gradient-to-b from-netflix-black/90 via-netflix-black/70 to-netflix-black"></div>
      </div>

      <motion.div 
        className="relative z-10 text-center mb-16"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="font-netflix text-6xl md:text-8xl lg:text-9xl text-white mb-2">
          VANSH BHATT
        </h1>
        <p className="text-netflix-red font-netflix text-2xl md:text-3xl tracking-wider">
          COMPUTER SCIENCE STUDENT | SOFTWARE DEVELOPER
        </p>
      </motion.div>

      <motion.div 
        className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl w-full"
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.2 } }
        }}
      >
        {profileCards.map((card) => (
          <motion.div
            key={card.title}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut", delay: card.delay } }
            }}
          >
            <Link to={card.link} className="block">
              <div className="profile-card flex flex-col items-center text-center h-full">
                {card.icon}
                <h2 className="text-3xl font-netflix text-white mb-3">{card.title}</h2>
                <p className="text-netflix-light text-md flex-grow">{card.description}</p>
                <div className="mt-6 text-netflix-red font-semibold group-hover:text-white transition-colors duration-300">
                  Explore More &rarr;
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
      
      <motion.div
        className="absolute bottom-8 text-center w-full z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <NetflixLogo className="text-2xl mx-auto" />
        <p className="text-netflix-gray text-sm mt-1">Powered by Creativity & Code</p>
      </motion.div>
    </div>
  );
};

export default LandingPage;
