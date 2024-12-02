import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import Logo from './navbar/Logo';
import NavLink from './navbar/NavLink';
import MobileMenu from './navbar/MobileMenu';
import { NAV_ITEMS } from './navbar/constants';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      if (location.pathname === '/') {
        const sections = document.querySelectorAll('section[id]');
        sections.forEach(section => {
          const sectionTop = section.offsetTop - 100;
          const sectionHeight = section.offsetHeight;
          if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            setActiveSection(section.id);
          }
        });
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location]);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    if (href.startsWith('/#')) {
      const element = document.querySelector(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <motion.nav 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-dark-200/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Logo />
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-1 space-x-reverse">
              {NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.name}
                  href={item.href}
                  isActive={
                    item.href.includes('#')
                      ? activeSection === item.href.split('#')[1]
                      : location.pathname === item.href
                  }
                  onClick={handleNavClick}
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-lg hover:bg-accent/20 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      <MobileMenu
        isOpen={isOpen}
        navItems={NAV_ITEMS}
        activeSection={activeSection}
        handleNavClick={handleNavClick}
        onClose={() => setIsOpen(false)}
      />
    </motion.nav>
  );
};

export default Navbar;