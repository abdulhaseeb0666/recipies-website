import { useState, useEffect, useCallback } from 'react';
import type { Recipe, RecipeResponse } from '../types/recipe';

export const useRecipes = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchRecipes = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch('https://dummyjson.com/recipes?limit=50');
      if (!response.ok) throw new Error('Failed to fetch recipes');
      const data: RecipeResponse = await response.json();
      setRecipes(data.recipes);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchRecipes();
  }, [fetchRecipes]);

  // Derived data
  const allTags = Array.from(new Set(recipes.flatMap(r => r.tags)));
  const allCuisines = Array.from(new Set(recipes.map(r => r.cuisine)));
  const allMealTypes = Array.from(new Set(recipes.flatMap(r => r.mealType)));

  const stats = {
    total: recipes.length,
    cuisines: allCuisines.length,
    avgRating: recipes.length > 0 
      ? recipes.reduce((acc, r) => acc + r.rating, 0) / recipes.length 
      : 0,
  };

  const featuredRecipe = recipes.find(r => r.rating >= 4.9 && r.reviewCount > 20) || recipes[0];

  return {
    recipes,
    loading,
    error,
    stats,
    allTags,
    allCuisines,
    allMealTypes,
    featuredRecipe,
    refetch: fetchRecipes,
  };
};