import React from 'react';
import { motion } from 'framer-motion';
import BMIForm from './BMIForm';
import BMIChart from './BMIChart';
import BMIInfo from './BMIInfo';
import BMITips from './BMITips';
import SectionTitle from '../ui/SectionTitle';

const BMICalculator = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-dark-200 to-dark-300 py-20">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <SectionTitle 
          title="حاسبة مؤشر كتلة الجسم"
          subtitle="احسب مؤشر كتلة جسمك واكتشف وزنك المثالي مع نصائح مخصصة لصحة أفضل"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <BMIForm />
            <div className="mt-8">
              <BMITips />
            </div>
          </motion.div>
          
          <motion.div 
            className="space-y-8"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <BMIChart />
            <BMIInfo />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default BMICalculator;