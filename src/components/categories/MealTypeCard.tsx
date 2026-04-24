// src/components/categories/MealTypeCard.tsx
import React from 'react';
import { Clock, ArrowRight } from 'lucide-react';

interface MealTypeCardProps {
  name: string;
  icon: string;
  recipeCount: number;
  avgTime: number;
  color: string;
  isActive: boolean;
  onClick: () => void;
}

const MealTypeCard: React.FC<MealTypeCardProps> = ({
  name, icon, recipeCount, avgTime, color, isActive, onClick
}) => {
  return (
    <button
      onClick={onClick}
      className={`group relative overflow-hidden rounded-2xl p-6 text-left transition-all duration-300 ${
        isActive 
          ? 'ring-2 ring-orange-500 shadow-lg scale-[1.02]' 
          : 'hover:shadow-lg hover:scale-[1.02]'
      }`}
    >
      <div className={`absolute inset-0 bg-linear-to-br ${color} opacity-10`} />
      {isActive && <div className={`absolute inset-0 bg-linear-to-br ${color} opacity-20`} />}
      
      <div className="relative z-10">
        <div className="text-4xl mb-3">{icon}</div>
        <h3 className="text-lg font-bold text-gray-900 mb-1">{name}</h3>
        <p className="text-sm text-gray-500 mb-3">{recipeCount} recipes</p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-sm text-gray-600">
            <Clock size={14} />
            <span>{avgTime}m avg</span>
          </div>
          <ArrowRight 
            size={16} 
            className={`text-gray-400 group-hover:text-orange-500 transition-all group-hover:translate-x-1 ${
              isActive ? 'text-orange-500' : ''
            }`} 
          />
        </div>
      </div>
    </button>
  );
};

export default MealTypeCard;