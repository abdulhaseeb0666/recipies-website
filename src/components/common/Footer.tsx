import React from 'react';
import { ChefHat, Share2 } from 'lucide-react';

const Footer: React.FC = () => {
  const footerLinks = {
    explore: ['Trending Recipes', 'New Arrivals', 'Video Tutorials', 'Meal Plans'],
    community: ['Join as Chef', 'Submit Recipe', 'Cooking Classes', 'Forum'],
    social: ['Twitter', 'Instagram', 'YouTube', 'Pinterest'],
  };

  return (
    <footer className="bg-gray-50 pt-16 pb-8 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between mb-8">
          {/* Brand */}
          <div className='w-fit'> 
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-orange-500 p-1.5 rounded-lg">
                <ChefHat className="text-white" size={20} />
              </div>
              <span className="text-xl font-bold text-gray-900">RecipeNow</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed w-50">
              Your ultimate destination for discovering, creating, and sharing extraordinary recipes from around the world.
            </p>
          </div>
          
          {/* Explore */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Explore</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              {footerLinks.explore.map(item => (
                <li key={item}>
                  <a href="#" className="hover:text-orange-500 transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Community */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Community</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              {footerLinks.community.map(item => (
                <li key={item}>
                  <a href="#" className="hover:text-orange-500 transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">© 2026 RecipeNow. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-gray-600">Privacy Policy</a>
            <a href="#" className="hover:text-gray-600">Terms of Service</a>
            <a href="#" className="hover:text-gray-600">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;