import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Clock, MapPin, DollarSign, GraduationCap, Users } from 'lucide-react';
import { JOB_LISTINGS } from './constants';
import JobCard from './JobCard';

const JobList = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-dark-100/50 p-6 rounded-xl"
        >
          <Users className="w-8 h-8 text-accent mb-4" />
          <h3 className="text-xl font-bold text-white mb-2">فريق متميز</h3>
          <p className="text-gray-300">انضم إلى فريق من المحترفين في مجال الصحة واللياقة</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-dark-100/50 p-6 rounded-xl"
        >
          <GraduationCap className="w-8 h-8 text-accent mb-4" />
          <h3 className="text-xl font-bold text-white mb-2">تطوير مستمر</h3>
          <p className="text-gray-300">فرص تدريب وتطوير مهني مستمر لجميع الموظفين</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-dark-100/50 p-6 rounded-xl"
        >
          <Briefcase className="w-8 h-8 text-accent mb-4" />
          <h3 className="text-xl font-bold text-white mb-2">بيئة عمل مميزة</h3>
          <p className="text-gray-300">بيئة عمل محفزة وداعمة للإبداع والتطور</p>
        </motion.div>
      </div>

      {JOB_LISTINGS.map((job, index) => (
        <JobCard key={index} job={job} index={index} />
      ))}
    </div>
  );
};

export default JobList;