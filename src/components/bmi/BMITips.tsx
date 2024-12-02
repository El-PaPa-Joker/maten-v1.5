import React from 'react';
import { Lightbulb } from 'lucide-react';
import Card from '../ui/Card';

const BMITips = () => {
  const tips = [
    {
      title: 'تناول وجبات متوازنة',
      description: 'احرص على تناول وجبات تحتوي على البروتين والكربوهيدرات المعقدة والدهون الصحية'
    },
    {
      title: 'ممارسة الرياضة بانتظام',
      description: '150 دقيقة على الأقل من النشاط البدني المعتدل أسبوعياً'
    },
    {
      title: 'شرب الماء بكمية كافية',
      description: '8-10 أكواب من الماء يومياً للحفاظ على الترطيب'
    }
  ];

  return (
    <Card hover={false}>
      <div className="flex items-center gap-2 mb-6">
        <Lightbulb className="w-6 h-6 text-accent" />
        <h3 className="text-xl font-bold text-white">نصائح صحية</h3>
      </div>

      <div className="space-y-4">
        {tips.map((tip, index) => (
          <div 
            key={index}
            className="p-4 bg-dark-200 rounded-lg hover:bg-dark-100 transition-colors"
          >
            <h4 className="text-lg font-semibold text-accent mb-2">{tip.title}</h4>
            <p className="text-gray-300">{tip.description}</p>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default BMITips;