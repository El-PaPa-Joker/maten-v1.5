import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

const Card = ({ children, className = '', hover = true }: CardProps) => {
  return (
    <div 
      className={`
        bg-dark-100 rounded-xl p-8 
        ${hover ? 'transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Card;