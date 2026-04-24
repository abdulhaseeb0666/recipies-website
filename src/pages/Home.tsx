import React, { useState, useEffect } from 'react';
import { Loader2, AlertCircle, RefreshCw } from 'lucide-react';

// Components
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import FeaturedSection from '../components/FeaturedSection';
import Newsletter from '../components/NewsLetter';
import Footer from '../components/Footer';
import RecipeModal from '../components/RecipeModal';

// Sections
import CategoriesSection from '../sections/CategoriesSection';
import RecipesSection from '../sections/RecipesSection';
import HowItWorksSection from '../sections/HowItWorksSection';

// Hooks & Utils
import { useRecipes } from '../hooks/useRecipes';
import { filterRecipes } from '../utils/helpers';
import type { Recipe } from '../types/recipe';

const App: React.FC = () => {
  const { 
    recipes, 
    loading, 
    error, 
    stats, 
    allTags, 
    allCuisines, 
    allMealTypes, 
    featuredRecipe, 
    refetch 
  } = useRecipes();

  const [isScrolled, setIsScrolled] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
  const [visibleRecipes, setVisibleRecipes] = useState(9);
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Filtered recipes
  const filteredRecipes = filterRecipes(recipes, activeCategory, searchQuery);

  // Handlers
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setVisibleRecipes(9);
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    setVisibleRecipes(9);
  };

  const handleLoadMore = () => {
    setVisibleRecipes(prev => prev + 6);
  };

  // Loading State
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="animate-spin text-orange-500 mx-auto mb-4" size={48} />
          <p className="text-gray-600 font-medium">Loading delicious recipes...</p>
        </div>
      </div>
    );
  }

  // Error State
  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-8 bg-white rounded-2xl shadow-lg">
          <AlertCircle className="text-red-500 mx-auto mb-4" size={48} />
          <h2 className="text-xl font-bold text-gray-900 mb-2">Oops!</h2>
          <p className="text-gray-600 mb-6">{error}</p>
          <button 
            onClick={refetch}
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-medium transition-all flex items-center gap-2 mx-auto"
          >
            <RefreshCw size={18} /> Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Navbar isScrolled={isScrolled} />
      <Hero stats={stats} />
      
      <CategoriesSection 
        recipes={recipes}
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
        allCuisines={allCuisines}
        allMealTypes={allMealTypes}
        allTags={allTags}
      />

      <FeaturedSection recipe={featuredRecipe} />

      <RecipesSection 
        recipes={filteredRecipes}
        activeCategory={activeCategory}
        searchQuery={searchQuery}
        visibleRecipes={visibleRecipes}
        onSearchChange={handleSearchChange}
        onLoadMore={handleLoadMore}
        onRecipeClick={setSelectedRecipe}
      />

      <HowItWorksSection />
      <Newsletter />
      <Footer />

      {/* Modal */}
      {selectedRecipe && (
        <RecipeModal 
          recipe={selectedRecipe} 
          onClose={() => setSelectedRecipe(null)} 
        />
      )}
    </div>
  );
};

export default App;