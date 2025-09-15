
import React from "react";
import { motion } from "framer-motion";

const NetflixLogo = ({ className }) => {
  return (
    <motion.div 
      className={`text-netflix-red font-netflix text-4xl ${className}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      VANSH BHATT
    </motion.div>
  );
};

export default NetflixLogo;
