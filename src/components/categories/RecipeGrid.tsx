


// src/components/categories/RecipeGrid.tsx
import React from 'react';
import type { Recipe } from '../../types/recipe';
import RecipeCard from '../common/RecipeCard';

interface RecipeGridProps {
  recipes: Recipe[];
  onRecipeClick: (recipe: Recipe) => void;
}

const RecipeGrid: React.FC<RecipeGridProps> = ({ recipes, onRecipeClick }) => {
  if (recipes.length === 0) {
    return (
      <div className="text-center py-20">
        <div className="text-6xl mb-4">🔍</div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">No recipes found</h3>
        <p className="text-gray-500">Try adjusting your filters to discover more recipes</p>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {recipes.map(recipe => (
        <div key={recipe.id} onClick={() => onRecipeClick(recipe)} className="cursor-pointer">
          <RecipeCard recipe={recipe} />
        </div>
      ))}
    </div>
  );
};

export default RecipeGrid;