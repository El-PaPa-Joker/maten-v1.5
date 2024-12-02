import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Logo = () => {
  return (
    <motion.div 
      className="flex-shrink-0"
      whileHover={{ scale: 1.05 }}
    >
      <Link 
        to="/" 
        className="text-2xl font-bold bg-gradient-to-r from-accent via-blue-400 to-accent bg-clip-text text-transparent hover:opacity-80 transition-opacity"
      >
        اكاديميه متين
      </Link>
    </motion.div>
  );
};

export default Logo;