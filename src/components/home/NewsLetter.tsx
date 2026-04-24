import React from 'react';
import { Mail } from 'lucide-react';

const Newsletter: React.FC = () => {
  return (
    <section className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-orange-500 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-amber-500 rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <Mail className="mx-auto text-orange-500 mb-6" size={48} />
        
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Get Weekly Recipe Inspiration
        </h2>
        
        <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
          Join 50,000+ food lovers receiving exclusive recipes, cooking tips, and seasonal guides directly to your inbox.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
          <input 
            type="email" 
            placeholder="Enter your email address"
            className="flex-1 px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 backdrop-blur-sm"
          />
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg shadow-orange-500/25 whitespace-nowrap">
            Subscribe Now
          </button>
        </div>
        
        <p className="text-gray-500 text-sm mt-4">
          No spam, ever. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;