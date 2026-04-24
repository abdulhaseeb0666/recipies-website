import React from 'react';
import { Utensils, Globe, Leaf, Clock, TrendingUp, Star } from 'lucide-react';
import CategoryCard from '../components/home/CategoryCard';
import { getCategories } from '../utils/helpers';

interface CategoriesSectionProps {
  recipes: any[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  allCuisines: string[];
  allMealTypes: string[];
  allTags: string[];
}

const iconMap: Record<string, React.ReactNode> = {
  All: <Utensils size={20} />,
  Italian: <Globe size={20} />,
  Asian: <Leaf size={20} />,
  Easy: <Clock size={20} />,
  Quick: <TrendingUp size={20} />,
  'Top Rated': <Star size={20} />,
};

const colorMap: Record<string, string> = {
  All: 'bg-gray-100 text-gray-600',
  Italian: 'bg-green-100 text-green-600',
  Asian: 'bg-emerald-100 text-emerald-600',
  Easy: 'bg-blue-100 text-blue-600',
  Quick: 'bg-teal-100 text-teal-600',
  'Top Rated': 'bg-amber-100 text-amber-600',
};

const CategoriesSection: React.FC<CategoriesSectionProps> = ({ 
  recipes, 
  activeCategory, 
  onCategoryChange,
  allCuisines,
  allMealTypes,
  allTags,
}) => {
  const categories = getCategories(recipes);

  return (
    <section className="py-20 max-w-7xl mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Browse by Category</h2>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Explore {allCuisines.length} cuisines, {allMealTypes.length} meal types, and {allTags.length} unique tags
        </p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {categories.map((cat) => (
          <CategoryCard 
            key={cat.name} 
            name={cat.name}
            count={cat.count}
            icon={iconMap[cat.name]}
            color={colorMap[cat.name]}
            isActive={activeCategory === cat.name}
            onClick={() => onCategoryChange(cat.name)}
          />
        ))}
      </div>
    </section>
  );
};

export default CategoriesSection;