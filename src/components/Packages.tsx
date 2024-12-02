import React from 'react';
import PackageCard from './PackageCard';

const Packages = () => {
  const packages = [
    {
      name: 'الباقة الأساسية',
      price: 500,
      features: [
        'تدريب شخصي مكثف',
        'خطة غذائية أساسية',
        'متابعة أسبوعية',
        'تقارير التقدم الشهرية'
      ]
    },
    {
      name: 'الباقة المتقدمة',
      price: 800,
      features: [
        'تدريب شخصي مكثف',
        'خطة غذائية متخصصة',
        'متابعة يومية',
        'قياسات شهرية',
        'استشارات غذائية'
      ]
    },
    {
      name: 'الباقة الاحترافية',
      price: 1200,
      features: [
        'تدريب شخصي احترافي',
        'خطة غذائية متخصصة',
        'متابعة يومية مستمرة',
        'استشارات مفتوحة',
        'جلسات تحفيزية'
      ]
    },
    {
      name: 'باقة VIP',
      price: 2000,
      features: [
        'تدريب VIP شخصي',
        'خطة غذائية خاصة',
        'متابعة على مدار الساعة',
        'استشارات غذائية مفتوحة',
        'دعم نفسي متخصص',
        'جلسات تأهيل إضافية'
      ],
      isVIP: true
    }
  ];

  return (
    <section id="packages" className="py-20 bg-dark-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">باقاتنا</h2>
          <p className="text-xl text-gray-300">اختر الباقة المناسبة لاحتياجاتك وأهدافك</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {packages.map((pkg, index) => (
            <PackageCard
              key={index}
              name={pkg.name}
              price={pkg.price}
              features={pkg.features}
              isVIP={pkg.isVIP}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;