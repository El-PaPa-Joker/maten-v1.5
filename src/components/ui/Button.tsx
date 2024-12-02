import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline';
  fullWidth?: boolean;
  children: React.ReactNode;
}

const Button = ({ 
  variant = 'primary', 
  fullWidth = false, 
  children, 
  className = '',
  ...props 
}: ButtonProps) => {
  const baseStyles = 'px-8 py-3 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105';
  const variants = {
    primary: 'bg-accent text-white hover:bg-blue-400',
    outline: 'bg-transparent border-2 border-accent text-accent hover:bg-accent hover:text-white'
  };
  
  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;