// src/components/categories/CuisineCard.tsx
import React from 'react';
import { Clock, Star, Flame } from 'lucide-react';

interface CuisineCardProps {
  name: string;
  flag: string;
  recipeCount: number;
  avgTime: number;
  avgRating: number;
  topTags: string[];
  color: string;
  onClick: () => void;
}

const CuisineCard: React.FC<CuisineCardProps> = ({
  name, recipeCount, avgTime, avgRating, topTags, onClick
}) => {
  return (
    <button
      onClick={onClick}
      className="group relative overflow-hidden rounded-2xl bg-white shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 text-left w-full"
    >

      {/* Content */}
      <div className="relative z-10 p-5">
        <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-orange-600 transition-colors">
          {name}
        </h3>
        <p className="text-sm text-gray-500 mb-4">{recipeCount} recipes</p>

        <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
          <div className="flex items-center gap-1">
            <Clock size={14} className="text-gray-400" />
            <span>{avgTime}m avg</span>
          </div>
          <div className="flex items-center gap-1">
            <Star size={14} className="text-amber-400 fill-amber-400" />
            <span>{avgRating.toFixed(1)}</span>
          </div>
          <div className="flex items-center gap-1">
            <Flame size={14} className="text-orange-400" />
            <span>{Math.round(recipeCount * 1.5)}k cal</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {topTags.map(tag => (
            <span
              key={tag}
              className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </button>
  );
};

export default CuisineCard;