// src/types/category.ts
export type CategoryGroup = {
  id: string;
  name: string;
  description: string;
  iconName: string;
  color: string;
  bgGradient: string;
  count: number;
};

export type CuisineDetail = {
  name: string;
  flag: string;
  description: string;
  recipeCount: number;
  avgTime: number;
  topTags: string[];
  color: string;
};

export type MealTypeDetail = {
  name: string;
  icon: string;
  timeRange: string;
  description: string;
  recipeCount: number;
  color: string;
};

export type DifficultyLevel = {
  level: string;
  description: string;
  color: string;
  bgColor: string;
  recipeCount: number;
  avgTime: number;
};