import React from 'react';
import { Search, ChevronRight, ChevronDown } from 'lucide-react';
import RecipeCard from '../components/RecipeCard';
import type { Recipe } from '../types/recipe';

interface RecipesSectionProps {
  recipes: Recipe[];
  activeCategory: string;
  searchQuery: string;
  visibleRecipes: number;
  onSearchChange: (query: string) => void;
  onLoadMore: () => void;
  onRecipeClick: (recipe: Recipe) => void;
}

const RecipesSection: React.FC<RecipesSectionProps> = ({
  recipes,
  activeCategory,
  searchQuery,
  visibleRecipes,
  onSearchChange,
  onLoadMore,
  onRecipeClick,
}) => {
  return (
    <section className="py-20 max-w-7xl mx-auto px-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {activeCategory === 'All' ? 'All Recipes' : `${activeCategory} Recipes`}
          </h2>
          <p className="text-gray-500">
            {recipes.length} recipes found {searchQuery && `for "${searchQuery}"`}
          </p>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
            <input 
              type="text" 
              placeholder="Filter recipes..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="pl-9 pr-4 py-2 rounded-full bg-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 w-48"
            />
          </div>
          <button className="flex items-center gap-2 text-orange-500 font-semibold hover:gap-3 transition-all">
            View All <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Empty State */}
      {recipes.length === 0 ? (
        <div className="text-center py-20">
          <Search className="mx-auto text-gray-300 mb-4" size={48} />
          <h3 className="text-xl font-bold text-gray-900 mb-2">No recipes found</h3>
          <p className="text-gray-500">Try adjusting your filters or search query</p>
        </div>
      ) : (
        <>
          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recipes.slice(0, visibleRecipes).map((recipe) => (
              <div key={recipe.id} onClick={() => onRecipeClick(recipe)} className="cursor-pointer">
                <RecipeCard recipe={recipe} />
              </div>
            ))}
          </div>

          {/* Load More */}
          {visibleRecipes < recipes.length && (
            <div className="text-center mt-12">
              <button 
                onClick={onLoadMore}
                className="bg-gray-100 hover:bg-gray-200 text-gray-900 px-8 py-3 rounded-full font-semibold transition-all flex items-center gap-2 mx-auto"
              >
                Load More <ChevronDown size={18} />
              </button>
            </div>
          )}
        </>
      )}
    </section>
  );
};

export default RecipesSection;