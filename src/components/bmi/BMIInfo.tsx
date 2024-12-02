import React from 'react';
import { Info } from 'lucide-react';
import Card from '../ui/Card';

const BMIInfo = () => {
  return (
    <Card hover={false}>
      <div className="flex items-center gap-2 mb-6">
        <Info className="w-6 h-6 text-accent" />
        <h3 className="text-xl font-bold text-white">معلومات هامة</h3>
      </div>

      <div className="space-y-4 text-gray-300">
        <p>
          مؤشر كتلة الجسم (BMI) هو مقياس للدهون في الجسم يعتمد على الطول والوزن. 
          يستخدم للتحقق مما إذا كان وزنك صحياً.
        </p>
        <p>
          يرجى ملاحظة أن مؤشر كتلة الجسم هو دليل عام فقط ولا يأخذ في الاعتبار:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>تكوين الجسم (العضلات مقابل الدهون)</li>
          <li>العمر والجنس</li>
          <li>العرق</li>
          <li>مستوى النشاط البدني</li>
        </ul>
        <p className="text-accent">
          استشر أخصائي الصحة للحصول على تقييم شامل لوزنك وصحتك.
        </p>
      </div>
    </Card>
  );
};

export default BMIInfo;