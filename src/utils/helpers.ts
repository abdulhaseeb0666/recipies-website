import type { Recipe } from '../types/recipe';

export const getTotalTime = (recipe: Recipe): number => 
  recipe.prepTimeMinutes + recipe.cookTimeMinutes;

export const getDifficultyColor = (difficulty: string): string => {
  switch (difficulty) {
    case 'Easy': return 'bg-green-100 text-green-700';
    case 'Medium': return 'bg-amber-100 text-amber-700';
    default: return 'bg-red-100 text-red-700';
  }
};

export const filterRecipes = (
  recipes: Recipe[], 
  category: string, 
  searchQuery: string
): Recipe[] => {
  return recipes.filter(recipe => {
    const matchesCategory = 
      category === 'All' || 
      recipe.cuisine === category || 
      (category === 'Asian' && ['Asian', 'Japanese', 'Korean', 'Thai', 'Indian', 'Pakistani'].includes(recipe.cuisine)) ||
      (category === 'Easy' && recipe.difficulty === 'Easy') ||
      (category === 'Quick' && getTotalTime(recipe) <= 30) ||
      (category === 'Top Rated' && recipe.rating >= 4.8);
    
    const matchesSearch = 
      searchQuery === '' || 
      recipe.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      recipe.ingredients.some(i => i.toLowerCase().includes(searchQuery.toLowerCase())) ||
      recipe.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });
};

export const getCategories = (recipes: Recipe[]) => [
  { 
    name: 'All', 
    count: recipes.length 
  },
  { 
    name: 'Italian', 
    count: recipes.filter(r => r.cuisine === 'Italian').length 
  },
  { 
    name: 'Asian', 
    count: recipes.filter(r => ['Asian', 'Japanese', 'Korean', 'Thai', 'Indian', 'Pakistani'].includes(r.cuisine)).length 
  },
  { 
    name: 'Easy', 
    count: recipes.filter(r => r.difficulty === 'Easy').length 
  },
  { 
    name: 'Quick', 
    count: recipes.filter(r => getTotalTime(r) <= 30).length 
  },
  { 
    name: 'Top Rated', 
    count: recipes.filter(r => r.rating >= 4.8).length 
  },
];