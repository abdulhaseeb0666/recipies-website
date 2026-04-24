import React from 'react';
import { ArrowRight } from 'lucide-react';
import type { HeroStats } from '../../types/recipe';
import { Link } from 'react-router-dom';

interface HeroProps {
  stats: HeroStats;
}

const Hero: React.FC<HeroProps> = ({ stats }) => {
  const heroStats = [
    { label: 'Recipes', value: `${stats.total}+` },
    { label: 'Cuisines', value: `${stats.cuisines}+` },
    { label: 'Avg Rating', value: `${stats.avgRating.toFixed(1)}` },
    { label: 'Countries', value: '20+' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900">
      {/* Background */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1600&auto=format&fit=crop&q=80" 
          alt="Cooking background" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/40 via-transparent to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Cook Like a <span className="text-orange-400">Pro</span>,<br />
          Eat Like a <span className="text-orange-400">King</span>
        </h1>

        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
          Discover mouthwatering recipes, master new cooking techniques, and join a community of food lovers who believe every meal should be extraordinary.
        </p>

        {/* Search CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to={"/categories"}>
            <button className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-xl shadow-orange-500/25">
              Explore Recipes <ArrowRight size={20} />
            </button>
          </Link>
        </div>

        {/* Stats Grid */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
          {heroStats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-white/60 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/60 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;