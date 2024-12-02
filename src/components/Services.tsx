import React from 'react';
import { Dumbbell, Utensils, Heart } from 'lucide-react';
import SectionTitle from './ui/SectionTitle';
import ServiceCard from './services/ServiceCard';

const Services = () => {
  const services = [
    {
      icon: Dumbbell,
      title: 'التدريب',
      description: 'برامج تدريبية شاملة لتحسين اللياقة البدنية وبناء القوة، مع مدربين محترفين.',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48',
      features: [
        'تدريب شخصي متخصص',
        'برامج لياقة متكاملة',
        'تمارين قوة وتحمل',
        'متابعة مستمرة للأداء'
      ],
      buttonText: 'احجز الآن'
    },
    {
      icon: Heart,
      title: 'التأهيل',
      description: 'برامج تأهيل متخصصة لتحسين الحركة والأداء البدني، مع تقنيات متقدمة وخبرة موثوقة.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d',
      features: [
        'تقييم حالة المفاصل والعضلات',
        'تمارين تأهيلية متخصصة',
        'علاج طبيعي متقدم',
        'خطة تعافي متكاملة'
      ],
      buttonText: 'احجز الآن'
    },
    {
      icon: Utensils,
      title: 'التغذية',
      description: 'خطط غذائية مخصصة تناسب احتياجاتك وأهدافك الصحية، مع متابعة مستمرة ودعم متواصل.',
      image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061',
      features: [
        'تحليل شامل للنظام الغذائي',
        'خطط وجبات متوازنة',
        'نصائح غذائية متخصصة',
        'متابعة أسبوعية للتقدم'
      ],
      buttonText: 'احجز الآن'
    }
  ];

  return (
    <section id="services" className="py-20 bg-dark-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="خدماتنا"
          subtitle="نقدم مجموعة متكاملة من الخدمات المصممة خصيصاً لتلبية احتياجاتك الصحية والبدنية"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;