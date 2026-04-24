
export type Recipe = {
  id: number;
  name: string;
  ingredients: string[];
  instructions: string[];
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  servings: number;
  difficulty: string;
  cuisine: string;
  caloriesPerServing: number;
  tags: string[];
  userId: number;
  image: string;
  rating: number;
  reviewCount: number;
  mealType: string[];
};

export type RecipeResponse = {
  recipes: Recipe[];
  total: number;
  skip: number;
  limit: number;
};

export type Category = {
  name: string;
  count: number;
  icon: React.ReactNode;
  color: string;
};

export type HeroStats = {
  total: number;
  cuisines: number;
  avgRating: number;
};