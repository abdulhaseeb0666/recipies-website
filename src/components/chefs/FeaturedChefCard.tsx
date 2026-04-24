import type { Chef } from "../../pages/Chefs";
import { useState } from "react";

import { 
  Star, 
  Award, 
  MapPin, 
} from 'lucide-react';


export const FeaturedChefCard: React.FC<{ chef: Chef }> = ({ chef }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Cover Image */}
      <div className="relative h-64 overflow-hidden">
        <img 
          src={chef.coverImage} 
          alt={chef.name}
          className={`w-full h-full object-cover transition-transform duration-700 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
        
        {/* Floating Badge */}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1.5 shadow-lg">
          <Star size={14} className="text-amber-500 fill-amber-500" />
          <span className="text-sm font-bold text-gray-900">{chef.rating}</span>
        </div>

        {/* Profile Image */}
        <div className="absolute -bottom-10 left-8">
          <div className="w-24 h-24 rounded-2xl border-4 border-white shadow-xl overflow-hidden">
            <img src={chef.image} alt={chef.name} className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-2 p-6">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
              {chef.name}
            </h3>
            <p className="text-orange-500 font-medium">{chef.title}</p>
          </div>
          <div className="flex items-center gap-1 text-gray-400">
            <MapPin size={14} />
            <span className="text-sm">{chef.location}</span>
          </div>
        </div>

        <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
          {chef.bio}
        </p>

        {/* Stats Row */}
        <div className="flex items-center gap-6 mb-6 pb-6 border-b border-gray-100">
          <div className="text-center">
            <div className="text-lg font-bold text-gray-900">{chef.experience}</div>
            <div className="text-xs text-gray-500">Years</div>
          </div>
          <div className="w-px h-8 bg-gray-200" />
          <div className="text-center">
            <div className="text-lg font-bold text-gray-900">{chef.recipesCount}</div>
            <div className="text-xs text-gray-500">Recipes</div>
          </div>
          <div className="w-px h-8 bg-gray-200" />
          <div className="text-center">
            <div className="text-lg font-bold text-gray-900">{chef.followers}</div>
            <div className="text-xs text-gray-500">Followers</div>
          </div>
        </div>

        {/* Signature Dish */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0">
            <img src={chef.dishImage} alt={chef.signatureDish} className="w-full h-full object-cover" />
          </div>
          <div>
            <div className="text-xs text-gray-500 uppercase tracking-wide mb-0.5">Signature Dish</div>
            <div className="font-semibold text-gray-900">{chef.signatureDish}</div>
          </div>
        </div>

        {/* Awards */}
        <div className="flex flex-col w-fit flex-wrap gap-2 mb-6">
          {chef.awards.map(award => (
            <span key={award} className="px-3 py-1 bg-amber-50 text-amber-700 rounded-full text-xs font-medium border border-amber-100">
              <Award size={10} className="inline mr-1" />{award}
            </span>
          ))}
        </div>
        
      </div>
    </div>
  );
};