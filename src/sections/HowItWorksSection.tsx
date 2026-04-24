import React from 'react';
import { Search, ChefHat, Share2 } from 'lucide-react';

const HowItWorksSection: React.FC = () => {
  const steps = [
    { 
      step: '01', 
      title: 'Discover', 
      desc: 'Browse thousands of curated recipes with smart filters for dietary needs, cooking time, and ingredients.',
      icon: <Search size={24} />
    },
    { 
      step: '02', 
      title: 'Cook', 
      desc: 'Follow step-by-step instructions with video guides, timer integrations, and adjustable serving sizes.',
      icon: <ChefHat size={24} />
    },
    { 
      step: '03', 
      title: 'Share', 
      desc: 'Rate recipes, upload your creations, and connect with a global community of food enthusiasts.',
      icon: <Share2 size={24} />
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            From discovery to your dinner table in three simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((item, index) => (
            <div 
              key={index} 
              className="relative bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-all"
            >
              <div className="absolute -top-6 left-8 w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                {item.step}
              </div>
              <div className="mt-4 mb-4 text-orange-500">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;