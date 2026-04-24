import React from 'react';
import type { Category } from '../types/recipe';

interface CategoryCardProps extends Category {
  isActive: boolean;
  onClick: () => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ 
  name, 
  count, 
  icon, 
  color, 
  isActive, 
  onClick 
}) => {
  return (
    <button 
      onClick={onClick}
      className={`group w-full text-left transition-all duration-300 transform hover:scale-105 ${
        isActive ? 'scale-105' : ''
      }`}
    >
      <div className={`${color} p-6 rounded-2xl transition-all duration-300 flex flex-col items-center gap-3 border-2 ${
        isActive ? 'border-orange-500 shadow-lg' : 'border-transparent'
      }`}>
        <div className="p-3 bg-white/60 rounded-full">
          {icon}
        </div>
        <div className="text-center">
          <h3 className="font-semibold text-gray-900">{name}</h3>
          <p className="text-sm opacity-70">{count} recipes</p>
        </div>
      </div>
    </button>
  );
};

export default CategoryCard;