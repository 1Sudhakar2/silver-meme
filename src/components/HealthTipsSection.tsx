import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const HealthTipsSection: React.FC = () => {
  const tips = [
    "Apply sunscreen with at least SPF 30 daily, even on cloudy days",
    "Drink plenty of water to keep your skin hydrated from within",
    "Use a gentle cleanser twice daily to remove dirt and oil",
    "Moisturize immediately after showering to lock in hydration",
    "Avoid touching your face frequently to prevent bacteria transfer",
    "Get 7-9 hours of quality sleep for skin repair and regeneration",
    "Eat antioxidant-rich foods like berries, spinach, and nuts",
    "Exfoliate gently 1-2 times per week to remove dead skin cells",
    "Use lukewarm water when washing your face to avoid irritation",
    "Consult a dermatologist for any concerning skin changes"
  ];

  const [currentTip, setCurrentTip] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTip((prev) => (prev + 1) % tips.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex items-center px-8 py-16"
      id="health-tips"
    >
      <div className="max-w-4xl mx-auto w-full text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl lg:text-5xl font-bold text-textPrimary mb-16"
        >
          Daily Skin Health Tips
        </motion.h2>

        <div className="relative h-64 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTip}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl shadow-lg p-8 max-w-2xl"
            >
              <div className="flex items-center justify-center mb-4">
                <span className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold">
                  {currentTip + 1}
                </span>
              </div>
              <p className="text-xl text-textPrimary leading-relaxed">
                {tips[currentTip]}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center space-x-2 mt-8">
          {tips.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTip(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentTip ? 'bg-primary' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default HealthTipsSection;