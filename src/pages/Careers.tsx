import React from 'react';
import { motion } from 'framer-motion';
import CareerForm from '../components/careers/CareerForm';
import JobList from '../components/careers/JobList';
import SectionTitle from '../components/ui/SectionTitle';

const Careers = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-dark-200 to-dark-300 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <SectionTitle 
            title="الوظائف المتاحة"
            subtitle="انضم إلى فريقنا المتميز وكن جزءاً من نجاحنا"
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-12">
          <div className="lg:col-span-2">
            <JobList />
          </div>
          <div className="lg:col-span-1">
            <CareerForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;