import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { NavItem } from './types';

interface MobileMenuProps {
  isOpen: boolean;
  navItems: NavItem[];
  activeSection: string;
  handleNavClick: (href: string) => void;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  navItems,
  activeSection,
  handleNavClick,
  onClose,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-dark-200/95 backdrop-blur-md overflow-hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.href.includes('#') ? (
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                      onClose();
                    }}
                    className={`block px-3 py-2 rounded-lg text-base font-medium transition-colors ${
                      activeSection === item.href.split('#')[1]
                        ? 'bg-accent/20 text-accent'
                        : 'text-gray-300 hover:text-white hover:bg-accent/10'
                    }`}
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    to={item.href}
                    className={`block px-3 py-2 rounded-lg text-base font-medium transition-colors ${
                      location.pathname === item.href
                        ? 'bg-accent/20 text-accent'
                        : 'text-gray-300 hover:text-white hover:bg-accent/10'
                    }`}
                    onClick={onClose}
                  >
                    {item.name}
                  </Link>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;