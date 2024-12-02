import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

const SectionTitle = ({ title, subtitle }: SectionTitleProps) => {
  return (
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-white mb-4">{title}</h2>
      {subtitle && <p className="text-xl text-gray-300">{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;