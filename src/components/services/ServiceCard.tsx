import React from 'react';
import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
  features: string[];
  buttonText: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon: Icon,
  title,
  description,
  image,
  features,
  buttonText
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-br from-dark-100 via-dark-200 to-dark-100 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-accent/10"
    >
      <div className="relative h-48">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-300/90 to-transparent" />
        <div className="absolute bottom-4 right-4 p-3 bg-gradient-to-r from-accent to-blue-500 rounded-xl shadow-lg">
          <Icon className="w-6 h-6 text-white" />
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
        <p className="text-gray-300 mb-6">{description}</p>

        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2 text-gray-300">
              <span className="w-2 h-2 bg-gradient-to-r from-accent to-blue-500 rounded-full" />
              {feature}
            </li>
          ))}
        </ul>

        <button 
          className="w-full py-3 bg-gradient-to-r from-accent to-blue-500 text-white rounded-xl font-bold hover:opacity-90 transition-opacity shadow-lg"
          onClick={() => window.location.href = '#contact'}
        >
          {buttonText}
        </button>
      </div>
    </motion.div>
  );
};

export default ServiceCard;