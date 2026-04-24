// src/hooks/useCategories.ts
import { useMemo } from 'react';
import type { Recipe } from '../types/recipe';

export const useCategories = (recipes: Recipe[]) => {
  return useMemo(() => {
    // Cuisine analytics
    const cuisineMap = new Map<string, Recipe[]>();
    recipes.forEach(r => {
      const list = cuisineMap.get(r.cuisine) || [];
      list.push(r);
      cuisineMap.set(r.cuisine, list);
    });

    const cuisines = Array.from(cuisineMap.entries()).map(([name, list]) => ({
      name,
      recipeCount: list.length,
      avgTime: Math.round(list.reduce((a, b) => a + b.prepTimeMinutes + b.cookTimeMinutes, 0) / list.length),
      avgRating: list.reduce((a, b) => a + b.rating, 0) / list.length,
      topTags: Array.from(new Set(list.flatMap(r => r.tags))).slice(0, 4),
      totalCalories: Math.round(list.reduce((a, b) => a + b.caloriesPerServing, 0) / list.length),
      flag: getCuisineFlag(name),
      color: getCuisineColor(name),
    })).sort((a, b) => b.recipeCount - a.recipeCount);

    // Meal type analytics
    const mealTypeMap = new Map<string, Recipe[]>();
    recipes.forEach(r => {
      r.mealType.forEach(mt => {
        const list = mealTypeMap.get(mt) || [];
        list.push(r);
        mealTypeMap.set(mt, list);
      });
    });

    const mealTypes = Array.from(mealTypeMap.entries()).map(([name, list]) => ({
      name,
      recipeCount: list.length,
      avgTime: Math.round(list.reduce((a, b) => a + b.prepTimeMinutes + b.cookTimeMinutes, 0) / list.length),
      color: getMealTypeColor(name),
      icon: getMealTypeIcon(name),
    })).sort((a, b) => b.recipeCount - a.recipeCount);

    // Difficulty distribution
    const difficultyMap = new Map<string, Recipe[]>();
    recipes.forEach(r => {
      const list = difficultyMap.get(r.difficulty) || [];
      list.push(r);
      difficultyMap.set(r.difficulty, list);
    });

    const difficulties = Array.from(difficultyMap.entries()).map(([level, list]) => ({
      level,
      recipeCount: list.length,
      avgTime: Math.round(list.reduce((a, b) => a + b.prepTimeMinutes + b.cookTimeMinutes, 0) / list.length),
      percentage: Math.round((list.length / recipes.length) * 100),
      color: getDifficultyColor(level),
      bgColor: getDifficultyBg(level),
    }));

    // Tag cloud
    const tagMap = new Map<string, number>();
    recipes.forEach(r => r.tags.forEach(t => tagMap.set(t, (tagMap.get(t) || 0) + 1)));
    const popularTags = Array.from(tagMap.entries())
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 20);

    return { cuisines, mealTypes, difficulties, popularTags };
  }, [recipes]);
};

// Helper functions
function getCuisineFlag(cuisine: string): string {
  const flags: Record<string, string> = {
    Italian: '🇮🇹', Asian: '🌏', American: '🇺🇸', Mexican: '🇲🇽',
    Mediterranean: '🇬🇷', Japanese: '🇯🇵', Moroccan: '🇲🇦', Korean: '🇰🇷',
    Greek: '🇬🇷', Pakistani: '🇵🇰', Thai: '🇹🇭', Indian: '🇮🇳',
    Turkish: '🇹🇷', Russian: '🇷🇺', Lebanese: '🇱🇧', Brazilian: '🇧🇷',
    Smoothie: '🥤',
  };
  return flags[cuisine] || '🍽️';
}

function getCuisineColor(cuisine: string): string {
  const colors: Record<string, string> = {
  Italian: 'from-red-400 via-orange-300 to-green-400',
  Asian: 'from-rose-400 via-orange-300 to-amber-300',
  American: 'from-blue-400 via-indigo-300 to-red-300',
  Mexican: 'from-green-400 via-lime-300 to-red-400',
  Mediterranean: 'from-sky-400 via-cyan-300 to-emerald-400',
  Japanese: 'from-rose-300 via-pink-200 to-slate-100',
  Moroccan: 'from-orange-400 via-amber-300 to-yellow-300',
  Korean: 'from-indigo-400 via-blue-300 to-rose-400',
  Greek: 'from-blue-400 via-sky-300 to-slate-100',
  Pakistani: 'from-green-500 via-emerald-400 to-lime-300',
  Thai: 'from-purple-400 via-pink-300 to-amber-300',
  Indian: 'from-orange-400 via-amber-300 to-green-400',
  Turkish: 'from-red-400 via-rose-300 to-slate-100',
  Russian: 'from-blue-500 via-indigo-300 to-slate-100',
  Lebanese: 'from-red-400 via-orange-300 to-amber-300',
  Brazilian: 'from-green-400 via-lime-300 to-yellow-300',
  Smoothie: 'from-pink-400 via-rose-300 to-purple-400',

  Spanish: 'from-yellow-300 via-orange-300 to-red-400',
  Vietnamese: 'from-green-400 via-emerald-300 to-red-300',
  Cocktail: 'from-pink-400 via-fuchsia-300 to-orange-300',
  Hawaiian: 'from-yellow-300 via-pink-300 to-orange-300',
};
  return colors[cuisine] || 'from-gray-500 to-gray-600';
}

function getMealTypeColor(mealType: string): string {
  const colors: Record<string, string> = {
    Breakfast: 'from-amber-400 to-orange-500',
    Lunch: 'from-emerald-400 to-teal-500',
    Dinner: 'from-indigo-500 to-purple-600',
    Dessert: 'from-pink-400 to-rose-500',
    Snack: 'from-yellow-400 to-amber-500',
    Beverage: 'from-cyan-400 to-blue-500',
    'Side Dish': 'from-lime-400 to-green-500',
    Appetizer: 'from-orange-400 to-red-500',
  };
  return colors[mealType] || 'from-gray-400 to-gray-500';
}

function getMealTypeIcon(mealType: string): string {
  const icons: Record<string, string> = {
    Breakfast: '☕', Lunch: '🥗', Dinner: '🍽️', Dessert: '🍰',
    Snack: '🍿', Beverage: '🥤', 'Side Dish': '🥬', Appetizer: '🥟',
  };
  return icons[mealType] || '🍴';
}

function getDifficultyColor(level: string): string {
  switch (level) {
    case 'Easy': return 'text-green-600';
    case 'Medium': return 'text-amber-600';
    default: return 'text-red-600';
  }
}

function getDifficultyBg(level: string): string {
  switch (level) {
    case 'Easy': return 'bg-green-50 border-green-200';
    case 'Medium': return 'bg-amber-50 border-amber-200';
    default: return 'bg-red-50 border-red-200';
  }
}