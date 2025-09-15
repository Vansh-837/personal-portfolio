
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import NetflixLogo from "@/components/NetflixLogo";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Home, Menu, X } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
                <motion.button
                  key={item}
                  onClick={() => {
                    const element = document.getElementById(item.toLowerCase());
                    if (element) {
                      element.scrollIntoView({ 
                        behavior: 'smooth', 
                        block: 'nearest',
                        inline: 'center'
                      });
                    }
                  }}
                  className="text-netflix-light hover:text-white transition-colors cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                </motion.button>
              ))}
            </nav>
          )}
          
          {/* Mobile Navigation Button */}
          {isPortfolioPage && (
            <button
              className="md:hidden text-netflix-light hover:text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          )}
          
          <div className="flex items-center space-x-4">
            {isPortfolioPage ? (
              <Button 
                variant="ghost" 
                className="text-netflix-light hover:text-white hidden sm:block"
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ 
                      behavior: 'smooth', 
                      block: 'nearest',
                      inline: 'center'
                    });
                  }
                }}
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
        
        {/* Mobile Navigation Menu */}
        {isPortfolioPage && mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-netflix-black border-t border-netflix-gray"
          >
            <nav className="px-4 py-4 space-y-4">
              {["Home", "About", "Experience", "Projects", "Skills", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    const element = document.getElementById(item.toLowerCase());
                    if (element) {
                      element.scrollIntoView({ 
                        behavior: 'smooth', 
                        block: 'nearest',
                        inline: 'center'
                      });
                    }
                    setMobileMenuOpen(false);
                  }}
                  className="block w-full text-left text-netflix-light hover:text-white transition-colors py-2"
                >
                  {item}
                </button>
              ))}
              <Button 
                variant="ghost" 
                className="w-full text-netflix-light hover:text-white justify-start p-2"
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ 
                      behavior: 'smooth', 
                      block: 'nearest',
                      inline: 'center'
                    });
                  }
                  setMobileMenuOpen(false);
                }}
              >
                Connect
              </Button>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Navbar;
