import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface NavLinkProps {
  href: string;
  isActive: boolean;
  onClick: (href: string) => void;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, isActive, onClick, children }) => {
  const isHashLink = href.includes('#');

  if (isHashLink) {
    return (
      <motion.a
        href={href}
        onClick={(e) => {
          e.preventDefault();
          onClick(href);
        }}
        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
          isActive
            ? 'bg-accent/20 text-accent'
            : 'text-gray-300 hover:text-white hover:bg-accent/10'
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Link
        to={href}
        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
          isActive
            ? 'bg-accent/20 text-accent'
            : 'text-gray-300 hover:text-white hover:bg-accent/10'
        }`}
      >
        {children}
      </Link>
    </motion.div>
  );
};

export default NavLink;