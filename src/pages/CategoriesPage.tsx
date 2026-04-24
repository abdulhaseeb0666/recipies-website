// src/pages/CategoriesPage.tsx
import React, { useState, useMemo } from 'react';
import { 
  Search, SlidersHorizontal, Grid3X3, LayoutList, ChevronDown 
} from 'lucide-react';
import type { Recipe } from '../types/recipe';
import { useCategories } from '../hooks/useCategories';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import RecipeModal from '../components/common/RecipeModal';
import CuisineCard from '../components/categories/CuisineCard';
import MealTypeCard from '../components/categories/MealTypeCard';
import DifficultyBar from '../components/categories/DifficultyBar';
import TagCloud from '../components/categories/TagCloud';
import RecipeGrid from '../components/categories/RecipeGrid';
import ActiveFilters from '../components/categories/ActiveFilters';
import { useRecipes } from '../hooks/useRecipes';

type ViewMode = 'grid' | 'list';
type SortOption = 'rating' | 'time' | 'calories' | 'reviews';

const CategoriesPage: React.FC = () => {

  const { 
      recipes, 
    } = useRecipes();

  const { cuisines, mealTypes, difficulties, popularTags } = useCategories(recipes);
  
  // Filter states
  const [activeCuisine, setActiveCuisine] = useState<string | null>(null);
  const [activeMealType, setActiveMealType] = useState<string | null>(null);
  const [activeDifficulty, setActiveDifficulty] = useState<string | null>(null);
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [sortBy, setSortBy] = useState<SortOption>('rating');
  const [showSortMenu, setShowSortMenu] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

  // Filtered recipes
  const filteredRecipes = useMemo(() => {
    let result = [...recipes];

    if (activeCuisine) {
      result = result.filter(r => r.cuisine === activeCuisine);
    }
    if (activeMealType) {
      result = result.filter(r => r.mealType.includes(activeMealType));
    }
    if (activeDifficulty) {
      result = result.filter(r => r.difficulty === activeDifficulty);
    }
    if (activeTag) {
      result = result.filter(r => r.tags.includes(activeTag));
    }
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(r => 
        r.name.toLowerCase().includes(q) ||
        r.ingredients.some(i => i.toLowerCase().includes(q)) ||
        r.tags.some(t => t.toLowerCase().includes(q)) ||
        r.cuisine.toLowerCase().includes(q)
      );
    }

    // Sort
    result.sort((a, b) => {
      switch (sortBy) {
        case 'rating': return b.rating - a.rating;
        case 'time': return (a.prepTimeMinutes + a.cookTimeMinutes) - (b.prepTimeMinutes + b.cookTimeMinutes);
        case 'calories': return a.caloriesPerServing - b.caloriesPerServing;
        case 'reviews': return b.reviewCount - a.reviewCount;
        default: return 0;
      }
    });

    return result;
  }, [recipes, activeCuisine, activeMealType, activeDifficulty, activeTag, searchQuery, sortBy]);

  // Active filters list
  const activeFilters = useMemo(() => {
    const filters: { type: string; value: string }[] = [];
    if (activeCuisine) filters.push({ type: 'cuisine', value: activeCuisine });
    if (activeMealType) filters.push({ type: 'mealType', value: activeMealType });
    if (activeDifficulty) filters.push({ type: 'difficulty', value: activeDifficulty });
    if (activeTag) filters.push({ type: 'tag', value: activeTag });
    return filters;
  }, [activeCuisine, activeMealType, activeDifficulty, activeTag]);

  const clearAllFilters = () => {
    setActiveCuisine(null);
    setActiveMealType(null);
    setActiveDifficulty(null);
    setActiveTag(null);
    setSearchQuery('');
  };

  const removeFilter = (type: string) => {
    switch (type) {
      case 'cuisine': setActiveCuisine(null); break;
      case 'mealType': setActiveMealType(null); break;
      case 'difficulty': setActiveDifficulty(null); break;
      case 'tag': setActiveTag(null); break;
    }
  };

  const sortLabels: Record<SortOption, string> = {
    rating: 'Top Rated',
    time: 'Quickest',
    calories: 'Lowest Calories',
    reviews: 'Most Reviewed',
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900 pt-20">
      <Navbar isScrolled={true} />

      {/* Hero Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
                Explore Categories
              </h1>
              <p className="text-gray-500 text-lg">
                Browse {recipes.length} recipes across {cuisines.length} cuisines and {mealTypes.length} meal types
              </p>
            </div>
            
            {/* Search */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input 
                type="text" 
                placeholder="Search recipes, ingredients, cuisines..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-gray-100 border-transparent focus:bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* Meal Types */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Meal Types</h2>
          <p className="text-gray-500 mb-8">Find the perfect dish for any time of day</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {mealTypes.map(mt => (
              <MealTypeCard
                key={mt.name}
                name={mt.name}
                icon={mt.icon}
                recipeCount={mt.recipeCount}
                avgTime={mt.avgTime}
                color={mt.color}
                isActive={activeMealType === mt.name}
                onClick={() => setActiveMealType(
                  activeMealType === mt.name ? null : mt.name
                )}
              />
            ))}
          </div>
        </section>

        {/* Cuisines Section */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">World Cuisines</h2>
              <p className="text-gray-500 mt-1">Discover flavors from around the globe</p>
            </div>
            {activeCuisine && (
              <button 
                onClick={() => setActiveCuisine(null)}
                className="text-sm text-orange-600 hover:text-orange-700 font-medium"
              >
                View all cuisines
              </button>
            )}
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {cuisines.map(cuisine => (
              <CuisineCard
                key={cuisine.name}
                {...cuisine}
                onClick={() => setActiveCuisine(
                  activeCuisine === cuisine.name ? null : cuisine.name
                )}
              />
            ))}
          </div>
        </section>

        {/* Difficulty & Tags Split */}
        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          {/* Difficulty Distribution */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Difficulty</h2>
            <p className="text-gray-500 mb-6">Find recipes matching your skill level</p>
            
            <div className="space-y-4">
              {difficulties.map(diff => (
                <button
                  key={diff.level}
                  onClick={() => setActiveDifficulty(
                    activeDifficulty === diff.level ? null : diff.level
                  )}
                  className="w-full"
                >
                  <DifficultyBar
                    level={diff.level}
                    recipeCount={diff.recipeCount}
                    percentage={diff.percentage}
                    avgTime={diff.avgTime}
                    color={diff.color}
                    bgColor={activeDifficulty === diff.level ? diff.bgColor.replace('50', '100') : diff.bgColor}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Popular Tags */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Popular Tags</h2>
            <p className="text-gray-500 mb-6">Explore by ingredient, style, or dietary preference</p>
            
            <TagCloud
              tags={popularTags}
              activeTag={activeTag}
              onTagClick={setActiveTag}
            />
          </div>
        </div>

        {/* Results Section */}
        <section className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
          {/* Results Header */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                {filteredRecipes.length} {filteredRecipes.length === 1 ? 'Recipe' : 'Recipes'}
              </h2>
              <ActiveFilters 
                filters={activeFilters} 
                onRemove={removeFilter}
                onClearAll={clearAllFilters}
              />
            </div>

            <div className="flex items-center gap-3">
              {/* View Toggle */}
              <div className="flex bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md transition-all ${
                    viewMode === 'grid' ? 'bg-white shadow-sm text-gray-900' : 'text-gray-400'
                  }`}
                >
                  <Grid3X3 size={18} />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md transition-all ${
                    viewMode === 'list' ? 'bg-white shadow-sm text-gray-900' : 'text-gray-400'
                  }`}
                >
                  <LayoutList size={18} />
                </button>
              </div>

              {/* Sort Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setShowSortMenu(!showSortMenu)}
                  className="flex items-center gap-2 px-4 py-2.5 bg-gray-100 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors"
                >
                  <SlidersHorizontal size={16} />
                  {sortLabels[sortBy]}
                  <ChevronDown size={14} />
                </button>
                
                {showSortMenu && (
                  <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50">
                    {(Object.entries(sortLabels) as [SortOption, string][]).map(([key, label]) => (
                      <button
                        key={key}
                        onClick={() => {
                          setSortBy(key);
                          setShowSortMenu(false);
                        }}
                        className={`w-full text-left px-4 py-2.5 text-sm hover:bg-gray-50 transition-colors ${
                          sortBy === key ? 'text-orange-600 font-medium bg-orange-50' : 'text-gray-700'
                        }`}
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Recipe Grid */}
          <RecipeGrid 
            recipes={filteredRecipes} 
            onRecipeClick={setSelectedRecipe}
          />
        </section>
      </div>

      <Footer />

      {/* Recipe Modal */}
      {selectedRecipe && (
        <RecipeModal 
          recipe={selectedRecipe} 
          onClose={() => setSelectedRecipe(null)} 
        />
      )}
    </div>
  );
};

export default CategoriesPage;