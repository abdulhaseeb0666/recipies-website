import type { Chef } from "../../pages/Chefs";
import { Utensils , Star , MapPin , Clock , Award } from "lucide-react";
export const ChefCardCompact: React.FC<{ chef: Chef }> = ({ chef }) => {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
      <div className="relative aspect-4/5 overflow-hidden">
        <img 
          src={chef.image} 
          alt={chef.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Hover Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <p className="text-white/90 text-sm line-clamp-3 mb-3">{chef.bio}</p>
          <div className="flex items-center gap-2 text-white/80 text-sm">
            <Utensils size={14} />
            <span>{chef.specialty}</span>
          </div>
        </div>

        {/* Top Badge */}
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1.5">
          <Star size={12} className="text-amber-500 fill-amber-500" />
          <span className="text-xs font-bold">{chef.rating}</span>
        </div>
      </div>

      <div className="p-5">
        <h3 className="font-bold text-lg text-gray-900 group-hover:text-orange-600 transition-colors">
          {chef.name}
        </h3>
        <p className="text-orange-500 text-sm font-medium mb-2">{chef.title}</p>
        
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
          <div className="flex items-center gap-1">
            <MapPin size={12} />
            <span>{chef.location}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock size={12} />
            <span>{chef.experience} yrs</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex -space-x-2">
            {chef.awards.slice(0, 3).map((_, i) => (
              <div key={i} className="w-7 h-7 bg-amber-100 rounded-full border-2 border-white flex items-center justify-center">
                <Award size={12} className="text-amber-600" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};