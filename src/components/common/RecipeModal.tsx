import React from 'react';
import { X, Timer, Flame, Users, Gauge, Utensils, ChefHat, Star } from 'lucide-react';
import type { Recipe } from '../../types/recipe';

interface RecipeModalProps {
  recipe: Recipe | null;
  onClose: () => void;
}

const RecipeModal: React.FC<RecipeModalProps> = ({ recipe, onClose }) => {
  if (!recipe) return null;

  return (
    <div 
      className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" 
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={e => e.stopPropagation()}
      >
        {/* Header Image */}
        <div className="relative aspect-video">
          <img src={recipe.image} alt={recipe.name} className="w-full h-full object-cover" />
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
          >
            <X size={20} />
          </button>
          <div className="absolute bottom-4 left-4 flex gap-2">
            <span className="px-3 py-1 bg-orange-500 text-white rounded-full text-sm font-medium">
              {recipe.cuisine}
            </span>
            <span className="px-3 py-1 bg-white/90 text-gray-900 rounded-full text-sm font-medium">
              {recipe.difficulty}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          {/* Title & Rating */}
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-900">{recipe.name}</h2>
            <div className="flex items-center gap-1 text-amber-500 bg-amber-50 px-3 py-1 rounded-full">
              <Star size={16} className="fill-amber-500" />
              <span className="font-bold">{recipe.rating}</span>
              <span className="text-sm text-gray-500">({recipe.reviewCount} reviews)</span>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-4 gap-4 mb-8">
            {[
              { icon: <Timer size={18} />, label: 'Prep', value: `${recipe.prepTimeMinutes}m` },
              { icon: <Flame size={18} />, label: 'Cook', value: `${recipe.cookTimeMinutes}m` },
              { icon: <Users size={18} />, label: 'Serves', value: `${recipe.servings}` },
              { icon: <Gauge size={18} />, label: 'Calories', value: `${recipe.caloriesPerServing}` },
            ].map((stat, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-3 text-center">
                <div className="text-orange-500 mb-1 flex justify-center">{stat.icon}</div>
                <div className="font-bold text-gray-900">{stat.value}</div>
                <div className="text-xs text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Ingredients */}
          <div className="mb-6">
            <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
              <Utensils size={20} className="text-orange-500" /> Ingredients
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {recipe.ingredients.map((ing, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-600 text-sm">
                  <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-1.5 shrink-0" />
                  {ing}
                </li>
              ))}
            </ul>
          </div>

          {/* Instructions */}
          <div>
            <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
              <ChefHat size={20} className="text-orange-500" /> Instructions
            </h3>
            <div className="space-y-4">
              {recipe.instructions.map((step, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-8 h-8 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center font-bold text-sm shrink-0">
                    {i + 1}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed pt-1">{step}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div className="mt-8 pt-6 border-t border-gray-100 flex flex-wrap gap-2">
            {recipe.tags.map(tag => (
              <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                #{tag}
              </span>
            ))}
            {recipe.mealType.map(type => (
              <span key={type} className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-xs font-medium">
                {type}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeModal;