import React from 'react';
import BMIForm from '../components/bmi/BMIForm';
import BMIChart from '../components/bmi/BMIChart';
import BMIInfo from '../components/bmi/BMIInfo';
import SectionTitle from '../components/ui/SectionTitle';

const BMICalculator = () => {
  return (
    <div className="min-h-screen bg-dark-300 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="حاسبة مؤشر كتلة الجسم"
          subtitle="احسب مؤشر كتلة جسمك واكتشف وزنك المثالي"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <div>
            <BMIForm />
          </div>
          <div className="space-y-8">
            <BMIChart />
            <BMIInfo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BMICalculator;