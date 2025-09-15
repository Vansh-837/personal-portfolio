
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import NetflixLogo from "@/components/NetflixLogo";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isPortfolioPage = location.pathname === "/portfolio";

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    if (isPortfolioPage) {
      window.addEventListener("scroll", handleScroll);
    } else {
      setScrolled(true); 
    }
    
    return () => {
      if (isPortfolioPage) {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, [scrolled, isPortfolioPage]);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || !isPortfolioPage ? "bg-netflix-black shadow-md" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/">
            <NetflixLogo />
          </Link>
          
          {isPortfolioPage && (
            <nav className="hidden md:flex space-x-8">
              {["Home", "About", "Experience", "Projects", "Skills", "Contact"].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-netflix-light hover:text-white transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                </motion.a>
              ))}
            </nav>
          )}
          
          <div className="flex items-center space-x-4">
            {isPortfolioPage ? (
              <Button 
                variant="ghost" 
                className="text-netflix-light hover:text-white hidden sm:block"
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              >
                Connect
              </Button>
            ) : (
              <Link to="/portfolio">
                <Button className="netflix-button">
                  View My Profile
                </Button>
              </Link>
            )}
             <Link to="/" className="text-netflix-light hover:text-white">
                <Home className="w-6 h-6"/>
             </Link>
            <Avatar>
              <AvatarImage src="" alt="Vansh Bhatt" />
              <AvatarFallback className="bg-netflix-red text-white">VB</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;
