import { TrendingUp , Users } from "lucide-react";

export const JoinChefSection: React.FC = () => {
  return (
    <section className="py-20 bg-linear-to-br from-orange-50 to-amber-50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-orange-100 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
              <TrendingUp size={14} /> Join Our Community
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Are You a Chef?
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Share your culinary creations with millions of food lovers worldwide. 
              Get featured, build your following, and inspire the next generation of home cooks.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg shadow-orange-500/25">
                Apply as Chef
              </button>
              <button className="bg-white hover:bg-gray-50 text-gray-900 px-8 py-3 rounded-full font-semibold transition-all border border-gray-200">
                Learn More
              </button>
            </div>
          </div>
          <div className="relative w-full md:w-80 h-80 shrink-0">
            <div className="absolute inset-0 bg-linear-to-br from-orange-400 to-amber-500 rounded-3xl rotate-3 opacity-20" />
            <img 
              src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=600&auto=format&fit=crop&q=60" 
              alt="Chef cooking"
              className="relative w-full h-full object-cover rounded-3xl shadow-lg"
            />
            <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-2xl shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Users className="text-green-600" size={24} />
                </div>
                <div>
                  <div className="font-bold text-gray-900">2M+</div>
                  <div className="text-xs text-gray-500">Monthly Readers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};