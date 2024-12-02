import React, { useState } from 'react';
import { Scale, Ruler, Calculator, Activity } from 'lucide-react';
import Card from '../ui/Card';
import { calculateIdealWeight } from '../../utils/bmiCalculations';
import type { BMIResult } from '../../types/bmi';

const BMIForm = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [result, setResult] = useState<BMIResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const calculateBMI = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    
    const weightNum = parseFloat(weight);
    const heightNum = parseFloat(height) / 100; // Convert cm to m
    
    if (weightNum <= 0 || heightNum <= 0) {
      setError('يرجى إدخال قيم صحيحة للوزن والطول');
      return;
    }
    
    if (weightNum > 300 || heightNum > 2.5) {
      setError('يرجى التحقق من القيم المدخلة');
      return;
    }

    const bmi = weightNum / (heightNum * heightNum);
    const idealWeight = calculateIdealWeight(heightNum, gender);
    let category: string;
    let color: string;
    let recommendations: string[] = [];

    if (bmi < 18.5) {
      category = 'نقص في الوزن';
      color = 'text-yellow-400';
      recommendations = [
        'زيادة السعرات الحرارية اليومية',
        'تناول وجبات متعددة صغيرة',
        'التركيز على الأطعمة الغنية بالبروتين'
      ];
    } else if (bmi < 25) {
      category = 'وزن طبيعي';
      color = 'text-green-400';
      recommendations = [
        'الحفاظ على نمط الحياة الصحي',
        'ممارسة الرياضة بانتظام',
        'تناول طعام متوازن'
      ];
    } else if (bmi < 30) {
      category = 'زيادة في الوزن';
      color = 'text-orange-400';
      recommendations = [
        'تقليل السعرات الحرارية اليومية',
        'زيادة النشاط البدني',
        'تجنب الأطعمة المصنعة'
      ];
    } else {
      category = 'سمنة';
      color = 'text-red-400';
      recommendations = [
        'استشارة أخصائي تغذية',
        'وضع خطة غذائية متكاملة',
        'ممارسة الرياضة تحت إشراف مختص'
      ];
    }

    setResult({ bmi, category, color, idealWeight, recommendations });
  };

  return (
    <Card hover={false}>
      <form onSubmit={calculateBMI} className="space-y-6">
        <div className="flex gap-4">
          <button
            type="button"
            onClick={() => setGender('male')}
            className={`flex-1 py-3 rounded-lg font-bold transition-colors ${
              gender === 'male'
                ? 'bg-accent text-white'
                : 'bg-dark-200 text-gray-400 hover:bg-dark-100'
            }`}
          >
            ذكر
          </button>
          <button
            type="button"
            onClick={() => setGender('female')}
            className={`flex-1 py-3 rounded-lg font-bold transition-colors ${
              gender === 'female'
                ? 'bg-accent text-white'
                : 'bg-dark-200 text-gray-400 hover:bg-dark-100'
            }`}
          >
            أنثى
          </button>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            <div className="flex items-center gap-2">
              <Scale className="w-5 h-5 text-accent" />
              <span>الوزن (كجم)</span>
            </div>
          </label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-dark-200 border border-gray-700 text-white focus:outline-none focus:border-accent transition-colors"
            placeholder="أدخل وزنك"
            min="1"
            step="0.1"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            <div className="flex items-center gap-2">
              <Ruler className="w-5 h-5 text-accent" />
              <span>الطول (سم)</span>
            </div>
          </label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-dark-200 border border-gray-700 text-white focus:outline-none focus:border-accent transition-colors"
            placeholder="أدخل طولك"
            min="1"
            step="0.1"
            required
          />
        </div>

        {error && (
          <div className="p-4 bg-red-500/10 border border-red-500 rounded-lg text-red-500 text-center">
            {error}
          </div>
        )}

        <button
          type="submit"
          className="w-full py-4 bg-gradient-to-r from-accent to-blue-500 text-white rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
        >
          <Calculator className="w-5 h-5" />
          احسب مؤشر كتلة الجسم
        </button>

        {result && (
          <div className="mt-6 space-y-6">
            <div className="p-6 bg-dark-200 rounded-xl">
              <h3 className="text-xl font-bold text-white mb-4">النتيجة:</h3>
              <div className="space-y-3">
                <p className="text-gray-300">
                  مؤشر كتلة الجسم: <span className="text-accent font-bold">{result.bmi.toFixed(1)}</span>
                </p>
                <p className="text-gray-300">
                  التصنيف: <span className={`font-bold ${result.color}`}>{result.category}</span>
                </p>
                <p className="text-gray-300">
                  الوزن المثالي: <span className="text-accent font-bold">{result.idealWeight.toFixed(1)} كجم</span>
                </p>
              </div>
            </div>

            <div className="p-6 bg-dark-200 rounded-xl">
              <div className="flex items-center gap-2 mb-4">
                <Activity className="w-5 h-5 text-accent" />
                <h3 className="text-xl font-bold text-white">التوصيات:</h3>
              </div>
              <ul className="space-y-2">
                {result.recommendations.map((rec, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-300">
                    <span className="w-2 h-2 bg-accent rounded-full" />
                    {rec}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </form>
    </Card>
  );
};

export default BMIForm;