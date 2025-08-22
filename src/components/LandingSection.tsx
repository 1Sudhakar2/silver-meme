import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

interface LandingSectionProps {
  onTransition: () => void;
}

const LandingSection: React.FC<LandingSectionProps> = ({ onTransition }) => {
  const [showTagline, setShowTagline] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTagline(false);
      setTimeout(onTransition, 500);
    }, 2000);

    return () => clearTimeout(timer);
  }, [onTransition]);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex flex-col justify-center items-center relative"
    >
      <div className="absolute top-8 left-8 flex items-center">
        <div className="bg-primary p-3 rounded-2xl">
          <Heart className="text-white h-8 w-8" />
        </div>
        <span className="ml-3 text-2xl font-bold text-textPrimary">SkinCare</span>
      </div>

      <div className="absolute top-8 right-8">
        <h1 className="text-3xl font-bold text-textPrimary">Welcome to Better Skin</h1>
      </div>

      <motion.div
        animate={{ opacity: showTagline ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h2 className="text-5xl font-bold text-textPrimary mb-4">
          Your Skin's Best Friend
        </h2>
        <p className="text-2xl text-textSecondary">
          AI-powered skin health analysis at your fingertips
        </p>
      </motion.div>
    </motion.section>
  );
};

export default LandingSection;