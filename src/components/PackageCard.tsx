import React from 'react';
import { Check, MessageCircle } from 'lucide-react';

interface PackageProps {
  name: string;
  price: number;
  features: string[];
  isVIP?: boolean;
}

const PackageCard: React.FC<PackageProps> = ({ name, price, features, isVIP }) => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(`مرحبًا، أنا مهتم بحزمة ${name}. أرجو تزويدي بمزيد من التفاصيل.`);
    window.open(`https://wa.me/+201115533537?text=${message}`, '_blank');
  };

  return (
    <div 
      className={`
        relative overflow-hidden rounded-2xl p-8
        ${isVIP 
          ? 'bg-gradient-to-br from-dark-100 to-dark-200 border-2 border-accent' 
          : 'bg-dark-100'
        }
        transform hover:scale-105 transition-all duration-300 shadow-xl
      `}
    >
      {isVIP && (
        <div className="absolute -left-12 top-6 bg-accent text-dark-200 py-1 px-12 transform -rotate-45 text-sm font-bold">
          VIP
        </div>
      )}

      <h3 className={`text-2xl font-bold mb-4 ${isVIP ? 'text-accent' : 'text-white'}`}>
        {name}
      </h3>

      <div className="mb-8">
        <span className="text-4xl font-bold text-white">{price}</span>
        <span className="text-xl text-gray-300 mr-2">ج.م</span>
        <p className="text-sm text-gray-400 mt-2">شهرياً</p>
      </div>

      <ul className="mb-8 space-y-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-3">
            <Check className={`w-5 h-5 ${isVIP ? 'text-accent' : 'text-gray-400'}`} />
            <span className="text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>

      <button
        onClick={handleWhatsAppClick}
        className={`
          w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2
          transition-colors duration-300
          ${isVIP 
            ? 'bg-accent text-dark-200 hover:bg-accent/90' 
            : 'bg-dark-200 text-white hover:bg-dark-300'
          }
        `}
      >
        <MessageCircle className="w-5 h-5" />
        تواصل عبر واتساب
      </button>
    </div>
  );
};

export default PackageCard;