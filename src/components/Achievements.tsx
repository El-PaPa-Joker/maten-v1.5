import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Medal, Award, Star } from 'lucide-react';
import SectionTitle from './ui/SectionTitle';

const Achievements = () => {
  const achievements = [
    {
      icon: Trophy,
      title: "أفضل أكاديمية",
      year: "2023",
      description: "حصلنا على جائزة أفضل أكاديمية للتدريب والتغذية"
    },
    {
      icon: Medal,
      title: "1000+ متدرب",
      year: "2023",
      description: "ساعدنا أكثر من 1000 متدرب في تحقيق أهدافهم"
    },
    {
      icon: Award,
      title: "شهادة الجودة",
      year: "2023",
      description: "حاصلون على شهادة الجودة العالمية في التدريب"
    },
    {
      icon: Star,
      title: "تقييم 5 نجوم",
      year: "2023",
      description: "حصلنا على تقييم 5 نجوم من عملائنا"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-dark-300 to-dark-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="إنجازاتنا"
          subtitle="نفخر بما حققناه من نجاحات مع متدربينا"
        />

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-dark-100/50 backdrop-blur-sm p-6 rounded-xl hover:bg-dark-100 transition-all duration-300 group"
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-6 mx-auto group-hover:scale-110 transition-transform">
                <achievement.icon className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-white text-center mb-2">
                {achievement.title}
              </h3>
              <p className="text-accent text-center mb-3">{achievement.year}</p>
              <p className="text-gray-300 text-center">
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;