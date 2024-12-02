import React from 'react';
import { motion } from 'framer-motion';
import Button from './ui/Button';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToPackages = () => {
    document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center text-white">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-200/50 to-dark-300" />
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1605296867424-35fc25c9212a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="Fitness Academy"
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent via-blue-400 to-accent">
              حول حياتك إلى قوة وصحة
            </span>
          </motion.h1>

          <motion.p 
            className="text-xl sm:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            نقدم خدمات احترافية في التدريب والتغذية والتأهيل لمساعدتك في تحقيق أهدافك
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Button onClick={scrollToPackages} variant="primary" className="min-w-[200px]">
              ابدأ رحلتك الآن
            </Button>
            <Button onClick={scrollToAbout} variant="outline" className="min-w-[200px]">
              اعرف المزيد
            </Button>
          </motion.div>
        </motion.div>

        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
          onClick={scrollToAbout}
        >
          <ChevronDown className="w-8 h-8 text-accent" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;