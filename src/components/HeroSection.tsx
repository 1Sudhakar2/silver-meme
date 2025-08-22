import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';

interface HeroSectionProps {
  onNavigate: (section: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex items-center px-8 max-w-7xl mx-auto"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
        <div className="space-y-8">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl lg:text-6xl font-bold text-textPrimary leading-tight"
          >
            Feel better about your skin with{' '}
            <span className="text-primary">quick AI checks</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <Button onClick={() => onNavigate('why-choose-us')} className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white">
              Why choose us?
            </Button>
            <Button onClick={() => onNavigate('health-tips')} className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white">
              Health Tips
            </Button>
            <Button onClick={() => onNavigate('diagnosis')} className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white">
              Diagnosis
            </Button>
            <Button onClick={() => onNavigate('testimonials')} className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white">
              Happy Customers
            </Button>
            <Button onClick={() => onNavigate('contact')} className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white">
              Emergency Contact
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl p-8 flex items-center justify-center min-h-[400px]"
        >
          <div className="text-center">
            <div className="bg-white/50 rounded-full p-8 mb-4 inline-block">
              <div className="w-32 h-32 bg-primary/30 rounded-full flex items-center justify-center">
                <span className="text-4xl">🔬</span>
              </div>
            </div>
            <p className="text-textSecondary text-lg">AI-Powered Skin Analysis</p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroSection;