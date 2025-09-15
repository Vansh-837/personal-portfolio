
import React from "react";
import { motion } from "framer-motion";
import NetflixLogo from "@/components/NetflixLogo";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-netflix-black py-12 border-t border-netflix-gray/20">
      <div className="netflix-container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <NetflixLogo className="mb-2 justify-center md:justify-start flex" />
            <p className="text-netflix-light">Vansh Bhatt | BSc Computer Science, SFU (Graduating: May 2026)</p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-netflix-light mb-2">
              &copy; {currentYear} Vansh Bhatt. All Rights Reserved.
            </p>
            <motion.p 
              className="text-netflix-red text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Crafted with Passion in Vancouver
            </motion.p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
