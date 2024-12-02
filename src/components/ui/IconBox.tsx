import React from 'react';
import { LucideIcon } from 'lucide-react';

interface IconBoxProps {
  Icon: LucideIcon;
  className?: string;
}

const IconBox = ({ Icon, className = '' }: IconBoxProps) => {
  return (
    <div className={`p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors ${className}`}>
      <Icon className="w-6 h-6 text-accent" />
    </div>
  );
};

export default IconBox;