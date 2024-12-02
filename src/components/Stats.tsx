import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Clock, Target } from 'lucide-react';

const Stats = () => {
  const stats = [
    { 
      icon: Users,
      number: '1000+', 
      label: 'متدرب سعيد',
      color: 'from-blue-500 to-blue-600'
    },
    { 
      icon: Award,
      number: '15+', 
      label: 'سنوات خبرة',
      color: 'from-purple-500 to-purple-600'
    },
    { 
      icon: Clock,
      number: '24/7', 
      label: 'دعم متواصل',
      color: 'from-green-500 to-green-600'
    },
    { 
      icon: Target,
      number: '95%', 
      label: 'نسبة رضا العملاء',
      color: 'from-red-500 to-red-600'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-accent/90 to-blue-600/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="inline-block p-4 rounded-full bg-white/10 mb-4 group-hover:scale-110 transition-transform">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.2, type: "spring" }}
                className="text-4xl font-bold text-white mb-2"
              >
                {stat.number}
              </motion.div>
              <div className="text-lg text-white/90">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;