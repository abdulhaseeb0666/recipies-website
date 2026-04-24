import React from 'react';
import { Flame, Timer, Gauge, Star, Play, Bookmark, Leaf, Globe } from 'lucide-react';
import type { Recipe } from '../../types/recipe';
import { getTotalTime } from '../../utils/helpers';

interface FeaturedSectionProps {
  recipe: Recipe | null;
}

const FeaturedSection: React.FC<FeaturedSectionProps> = ({ recipe }) => {
  if (!recipe) return null;

  const totalTime = getTotalTime(recipe);

  return (
    <section className="py-20 bg-linear-to-br from-orange-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 md:order-1">
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              <Flame size={14} /> Top Rated — {recipe.rating} Stars
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {recipe.name}
            </h2>
            
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              A delicious {recipe.cuisine} masterpiece featuring {recipe.ingredients.slice(0, 3).join(', ')}, 
              and more. Perfect for {recipe.mealType.join(' or ').toLowerCase()}.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <Timer className="text-orange-500" size={20} />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{totalTime} min</div>
                  <div className="text-sm text-gray-500">Total Time</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <Gauge className="text-orange-500" size={20} />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{recipe.difficulty}</div>
                  <div className="text-sm text-gray-500">Difficulty</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <Star className="text-orange-500" size={20} />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{recipe.rating}</div>
                  <div className="text-sm text-gray-500">{recipe.reviewCount} Reviews</div>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex gap-4">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-all transform hover:scale-105 flex items-center gap-2 shadow-lg shadow-orange-500/25">
                <Play size={18} className="fill-white" /> View Recipe
              </button>
              <button className="bg-white hover:bg-gray-50 text-gray-900 px-8 py-3 rounded-full font-semibold transition-all border border-gray-200 flex items-center gap-2">
                <Bookmark size={18} /> Save Recipe
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 md:order-2 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={recipe.image} 
                alt={recipe.name}
                className="w-full aspect-4/3 object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent" />
            </div>
            
            {/* Floating Badges */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 animate-bounce-slow">
              <div className="bg-green-100 p-2 rounded-full">
                <Leaf className="text-green-600" size={20} />
              </div>
              <div>
                <div className="font-bold text-gray-900">{recipe.ingredients.length}</div>
                <div className="text-xs text-gray-500">Ingredients</div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 animate-bounce-slow delay-150">
              <div className="bg-amber-100 p-2 rounded-full">
                <Globe className="text-amber-600" size={20} />
              </div>
              <div>
                <div className="font-bold text-gray-900">{recipe.cuisine}</div>
                <div className="text-xs text-gray-500">Cuisine</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;