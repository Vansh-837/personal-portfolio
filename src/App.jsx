
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import LandingPage from "@/pages/LandingPage";
import PortfolioPage from "@/pages/PortfolioPage";
import { Toaster } from "@/components/ui/toaster";

const PageLayout = ({ children }) => {
  const location = useLocation();
  return (
    <motion.div
      key={location.pathname}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

const App = () => {
  useEffect(() => {
    document.title = "Vansh Bhatt | Portfolio | CS Student at SFU";
  }, []);

  // Determine basename based on environment
  const basename = import.meta.env.PROD ? '/personal-portfolio' : '';

  return (
    <Router basename={basename}>
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<PageLayout><LandingPage /></PageLayout>} />
          <Route path="/portfolio" element={<PageLayout><PortfolioPage /></PageLayout>} />
        </Routes>
      </AnimatePresence>
      <Toaster />
    </Router>
  );
};

export default App;
