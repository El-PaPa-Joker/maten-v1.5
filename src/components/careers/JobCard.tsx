import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, DollarSign, Briefcase } from 'lucide-react';
import type { Job } from './types';

interface JobCardProps {
  job: Job;
  index: number;
}

const JobCard: React.FC<JobCardProps> = ({ job, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-gradient-to-br from-dark-100 via-dark-200 to-dark-100 rounded-xl p-6 hover:shadow-2xl transition-all duration-300 border border-accent/10"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-accent/10 rounded-xl">
            <Briefcase className="w-6 h-6 text-accent" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">{job.title}</h3>
            <span className="text-accent">{job.type}</span>
          </div>
        </div>
        <span className="px-4 py-1 bg-accent/20 text-accent rounded-full text-sm">
          {job.status}
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div className="flex items-center gap-2 text-gray-300">
          <MapPin className="w-5 h-5 text-accent" />
          {job.location}
        </div>
        <div className="flex items-center gap-2 text-gray-300">
          <Clock className="w-5 h-5 text-accent" />
          {job.timing}
        </div>
        <div className="flex items-center gap-2 text-gray-300">
          <DollarSign className="w-5 h-5 text-accent" />
          {job.salary}
        </div>
      </div>

      <p className="text-gray-300 mb-4">{job.description}</p>

      <div className="mb-4">
        <h4 className="font-bold text-white mb-2">المتطلبات:</h4>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {job.requirements.map((req, idx) => (
            <li key={idx} className="flex items-center gap-2 text-gray-300">
              <span className="w-2 h-2 bg-accent rounded-full" />
              {req}
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-4">
        <h4 className="font-bold text-white mb-2">المميزات:</h4>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {job.benefits.map((benefit, idx) => (
            <li key={idx} className="flex items-center gap-2 text-gray-300">
              <span className="w-2 h-2 bg-accent rounded-full" />
              {benefit}
            </li>
          ))}
        </ul>
      </div>

      <button 
        onClick={() => document.querySelector('form')?.scrollIntoView({ behavior: 'smooth' })}
        className="w-full py-3 bg-gradient-to-r from-accent to-blue-500 text-white rounded-xl font-bold hover:opacity-90 transition-opacity"
      >
        تقدم الآن
      </button>
    </motion.div>
  );
};

export default JobCard;