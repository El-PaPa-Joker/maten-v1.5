import React from 'react';
import { BarChart } from 'lucide-react';
import Card from '../ui/Card';

const BMIChart = () => {
  const categories = [
    { range: '< 18.5', category: 'نقص في الوزن', color: 'bg-yellow-400', description: 'قد تحتاج إلى زيادة الوزن' },
    { range: '18.5 - 24.9', category: 'وزن طبيعي', color: 'bg-green-400', description: 'وزنك في النطاق الصحي' },
    { range: '25 - 29.9', category: 'زيادة في الوزن', color: 'bg-orange-400', description: 'قد تحتاج إلى إنقاص الوزن' },
    { range: '≥ 30', category: 'سمنة', color: 'bg-red-400', description: 'يُنصح باستشارة طبيب' }
  ];

  return (
    <Card hover={false}>
      <div className="flex items-center gap-2 mb-6">
        <BarChart className="w-6 h-6 text-accent" />
        <h3 className="text-xl font-bold text-white">تصنيفات مؤشر كتلة الجسم</h3>
      </div>

      <div className="space-y-6">
        {categories.map((cat, index) => (
          <div key={index} className="relative">
            <div className="flex items-center gap-4">
              <div className={`w-4 h-4 rounded-full ${cat.color}`} />
              <div className="flex-1">
                <p className="text-white font-medium">{cat.category}</p>
                <p className="text-sm text-gray-400">BMI: {cat.range}</p>
                <p className="text-sm text-gray-500 mt-1">{cat.description}</p>
              </div>
            </div>
            {index < categories.length - 1 && (
              <div className="absolute left-2 top-6 bottom-0 w-[1px] bg-gray-700 h-6" />
            )}
          </div>
        ))}
      </div>
    </Card>
  );
};

export default BMIChart;