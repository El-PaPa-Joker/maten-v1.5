import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import SectionTitle from './ui/SectionTitle';

interface Review {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  image: string;
}

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = React.useRef<HTMLDivElement>(null);

  const reviews: Review[] = [
    {
      id: 1,
      name: "أحمد محمد",
      role: "متدرب محترف",
      company: "رياضي محترف",
      content: "تجربتي مع أكاديمية متين كانت تحولية. المدربين محترفين والنتائج مذهلة. خسرت 15 كيلو في 3 أشهر بطريقة صحية ومستدامة.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 2,
      name: "سارة أحمد",
      role: "متدربة",
      company: "موظفة شركة",
      content: "الخطة الغذائية والتدريبية كانت مثالية لجدول أعمالي المزدحم. النتائج فاقت توقعاتي وتحسن مستوى لياقتي بشكل ملحوظ.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 3,
      name: "محمد علي",
      role: "رياضي",
      company: "لاعب كمال أجسام",
      content: "المتابعة اليومية والدعم المستمر ساعدني في تحقيق أهدافي. زيادة في الكتلة العضلية مع خطة غذائية متوازنة.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 4,
      name: "نور حسن",
      role: "متدربة",
      company: "طالبة جامعية",
      content: "تجربة مميزة مع فريق متين. تعلمت الكثير عن التغذية السليمة والتمارين الصحيحة. أنصح كل من يريد تحسين صحته بالتدريب معهم.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 5,
      name: "كريم محمود",
      role: "متدرب محترف",
      company: "مدرب شخصي",
      content: "أفضل أكاديمية للتدريب في المنطقة. النتائج تتحدث عن نفسها. البرامج متكاملة والمدربين على مستوى عالٍ من الاحترافية.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
    }
  ];

  const visibleReviews = () => {
    const result = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % reviews.length;
      result.push(reviews[index]);
    }
    return result;
  };

  return (
    <section id="reviews" className="py-20 bg-dark-300 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-200/50 to-dark-300" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionTitle 
          title="آراء العملاء"
          subtitle="ماذا يقول عملاؤنا عن تجربتهم معنا"
        />

        <div ref={containerRef} className="mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleReviews().map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-dark-100/80 via-dark-200/80 to-dark-100/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-accent/10"
              >
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-accent"
                  />
                  <div>
                    <h4 className="text-lg font-bold text-white">{review.name}</h4>
                    <p className="text-accent">{review.role}</p>
                    <p className="text-sm text-gray-400">{review.company}</p>
                  </div>
                </div>

                <div className="flex mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-5 h-5 text-yellow-400 fill-current" 
                    />
                  ))}
                </div>

                <p className="text-gray-300 leading-relaxed">{review.content}</p>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center mt-8 gap-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'w-8 bg-accent' : 'bg-accent/30'
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;