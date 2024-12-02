import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Clock, Target, Shield, Trophy } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Users,
      title: 'خبراء متخصصون',
      description: 'فريق من المدربين المحترفين والأخصائيين ذوي الخبرة'
    },
    {
      icon: Award,
      title: 'جودة عالية',
      description: 'نلتزم بأعلى معايير الجودة في جميع خدماتنا'
    },
    {
      icon: Clock,
      title: 'دعم مستمر',
      description: 'متابعة مستمرة ودعم على مدار الساعة لتحقيق أهدافك'
    },
    {
      icon: Target,
      title: 'برامج مخصصة',
      description: 'خطط تدريبية وغذائية مصممة حسب احتياجاتك'
    },
    {
      icon: Shield,
      title: 'بيئة آمنة',
      description: 'نوفر بيئة تدريب آمنة ومريحة لجميع المتدربين'
    },
    {
      icon: Trophy,
      title: 'نتائج مضمونة',
      description: 'نضمن لك تحقيق نتائج ملموسة مع الالتزام ببرامجنا'
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
    <section id="about" className="py-20 bg-gradient-to-b from-dark-300 to-dark-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-6">من نحن</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            نحن أكاديمية رائدة في مجال التدريب والتغذية والتأهيل في مصر. نجمع بين الخبرة والعلم
            لنقدم لك تجربة تدريبية فريدة تساعدك في تحقيق أهدافك بطريقة صحية ومستدامة.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-dark-100 p-8 rounded-xl hover:bg-dark-100/80 transition-colors group"
            >
              <feature.icon className="w-12 h-12 text-accent mb-6 transform transition-transform group-hover:scale-110" />
              <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-300 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;