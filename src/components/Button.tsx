import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  type?: 'button' | 'submit';
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  className = '',
  type = 'button'
}) => {
  const baseClasses = "px-6 py-3 rounded-xl font-medium transition-all duration-200 shadow-lg";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-blue-600 hover:shadow-xl",
    secondary: "bg-secondary text-white hover:bg-red-500 hover:shadow-xl",
    outline: "bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white"
  };

  return (
    <motion.button
      type={type}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseClasses} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
};

export default Button;