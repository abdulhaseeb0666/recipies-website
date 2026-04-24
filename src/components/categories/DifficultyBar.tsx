// src/components/categories/DifficultyBar.tsx
import React from 'react';
import { Gauge, Clock } from 'lucide-react';

interface DifficultyBarProps {
  level: string;
  recipeCount: number;
  percentage: number;
  avgTime: number;
  color: string;
  bgColor: string;
}

const DifficultyBar: React.FC<DifficultyBarProps> = ({
  level, recipeCount, percentage, avgTime, color, bgColor
}) => {
  return (
    <div className={`${bgColor} rounded-xl p-5 border transition-all hover:shadow-md`}>
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <Gauge size={18} className={color} />
          <span className="font-bold text-gray-900">{level}</span>
        </div>
        <span className={`text-sm font-semibold ${color}`}>{percentage}%</span>
      </div>
      
      {/* Progress Bar */}
      <div className="w-full h-2 bg-gray-200 rounded-full mb-3 overflow-hidden">
        <div 
          className={`h-full rounded-full transition-all duration-1000 ${
            level === 'Easy' ? 'bg-green-500' : level === 'Medium' ? 'bg-amber-500' : 'bg-red-500'
          }`}
          style={{ width: `${percentage}%` }}
        />
      </div>
      
      <div className="flex items-center justify-between text-sm text-gray-600">
        <span>{recipeCount} recipes</span>
        <div className="flex items-center gap-1">
          <Clock size={12} />
          <span>{avgTime}m avg</span>
        </div>
      </div>
    </div>
  );
};

export default DifficultyBar;