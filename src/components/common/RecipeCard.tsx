import React, { useState } from 'react';
import { Heart, Timer, Flame, Users, Star, Loader2 } from 'lucide-react';
import type { Recipe } from '../../types/recipe';
import { getTotalTime, getDifficultyColor } from '../../utils/helpers';

interface RecipeCardProps {
  recipe: Recipe;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const totalTime = getTotalTime(recipe);

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
      {/* Image */}
      <div className="relative aspect-4/3 overflow-hidden bg-gray-100">
        <img 
          src={recipe.image} 
          alt={recipe.name}
          className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setImageLoaded(true)}
        />
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
            <Loader2 className="text-gray-400 animate-spin" size={24} />
          </div>
        )}
        
        {/* Like Button */}
        <div className="absolute top-3 right-3">
          <button 
            onClick={(e) => {
              e.stopPropagation();
              setIsLiked(!isLiked);
            }}
            className="p-2 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white transition-colors shadow-sm"
          >
            <Heart 
              size={18} 
              className={`transition-colors ${isLiked ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} 
            />
          </button>
        </div>

        {/* Tags */}
        <div className="absolute top-3 left-3 flex gap-2 flex-wrap">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-gray-700 shadow-sm">
            {recipe.cuisine}
          </span>
          {recipe.mealType.slice(0, 1).map(type => (
            <span key={type} className="px-3 py-1 bg-orange-500/90 backdrop-blur-sm text-white rounded-full text-xs font-medium shadow-sm">
              {type}
            </span>
          ))}
        </div>

        {/* Top Rated Badge */}
        {recipe.rating >= 4.8 && (
          <div className="absolute bottom-3 left-3">
            <span className="px-3 py-1 bg-amber-500 text-white rounded-full text-xs font-medium shadow-sm flex items-center gap-1">
              <Star size={12} className="fill-white" /> Top Rated
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-center gap-2 mb-3 flex-wrap">
          {recipe.tags.slice(0, 2).map((tag) => (
            <span key={tag} className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-md font-medium">
              {tag}
            </span>
          ))}
          <span className={`px-2 py-0.5 text-xs rounded-md font-medium ${getDifficultyColor(recipe.difficulty)}`}>
            {recipe.difficulty}
          </span>
        </div>

        <h3 className="font-bold text-lg text-gray-900 mb-2 line-clamp-1 group-hover:text-orange-600 transition-colors">
          {recipe.name}
        </h3>

        {/* Meta */}
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
          <div className="flex items-center gap-1">
            <Timer size={14} />
            <span>{totalTime} min</span>
          </div>
          <div className="flex items-center gap-1">
            <Flame size={14} />
            <span>{recipe.caloriesPerServing} kcal</span>
          </div>
          <div className="flex items-center gap-1">
            <Users size={14} />
            <span>{recipe.servings} srv</span>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center">
              <span className="text-xs font-bold text-orange-600">U{recipe.userId}</span>
            </div>
            <span className="text-sm font-medium text-gray-700">User #{recipe.userId}</span>
          </div>
          <div className="flex items-center gap-1 text-amber-500">
            <Star size={14} className="fill-amber-500" />
            <span className="text-sm font-semibold">{recipe.rating}</span>
            <span className="text-xs text-gray-400">({recipe.reviewCount})</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;