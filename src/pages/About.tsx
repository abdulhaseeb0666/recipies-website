// src/pages/AboutPage.tsx
import React, { useState, useEffect } from 'react';
import {  
  Heart, 
  Users, 
  Globe, 
  Star, 
  Clock, 
  Leaf, 
  ArrowRight,
  Mail,
  MapPin,
  Phone,
  CheckCircle2,
  Quote
} from 'lucide-react';
import Navbar from '../components/common/Navbar';

const AboutPage: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      
      <Navbar isScrolled={isScrolled} />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1600&auto=format&fit=crop&q=80" 
            alt="Kitchen" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-linear-to-b from-black/50 to-black/70" />
        </div>
        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            Our <span className="text-orange-400">Story</span>
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Born from a love of food and the belief that everyone deserves a great meal
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 max-w-4xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
          <Heart size={14} /> Why We Exist
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Cooking Should Be Joy, Not a Chore
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          Culinara started in a tiny apartment kitchen in 2020. Our founder, tired of boring weeknight dinners and complicated recipes, 
          dreamed of a place where home cooks could find inspiration without the intimidation. Today, we are a community of 
          <span className="font-semibold text-gray-900"> 2 million food lovers</span> who believe that a good recipe can change your day — 
          and maybe even your life.
        </p>
        <p className="text-lg text-gray-600 leading-relaxed">
          We do not believe in perfect plating or expensive ingredients. We believe in the magic of a home-cooked meal, 
          shared with people you love. Whether you are making your first omelet or your hundredth sourdough, 
          Culinara is here to cheer you on.
        </p>
      </section>

      {/* Stats */}
      <section className="py-16 bg-orange-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: <Users size={28} />, number: '2M+', label: 'Home Cooks' },
              { icon: <Globe size={28} />, number: '50+', label: 'Cuisines' },
              { icon: <Star size={28} />, number: '10K+', label: 'Recipes' },
              { icon: <Clock size={28} />, number: '24/7', label: 'Inspiration' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-orange-500 mx-auto mb-4 shadow-sm">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                <div className="text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Makes Us Different</h2>
          <p className="text-gray-500">We are not just another recipe site. Here is why cooks stick with us.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { 
              icon: <CheckCircle2 size={32} className="text-green-500" />, 
              title: 'Tested & Trusted', 
              desc: 'Every recipe is tested by real home cooks in real kitchens. No fancy equipment required. If we would not serve it to our families, we do not publish it.' 
            },
            { 
              icon: <Clock size={32} className="text-blue-500" />, 
              title: 'Honest Timing', 
              desc: 'We tell you exactly how long a recipe takes — prep included. No more "30-minute meals" that actually take 90 minutes. Your time matters.' 
            },
            { 
              icon: <Leaf size={32} className="text-emerald-500" />, 
              title: 'For Every Diet', 
              desc: 'Vegan, keto, gluten-free, or just plain hungry? Our smart filters help you find exactly what you need, no matter your lifestyle.' 
            },
          ].map((item, i) => (
            <div key={i} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all">
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">The People Behind the Plates</h2>
            <p className="text-gray-500">A small team with a big appetite for good food</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Sarah Mitchell', role: 'Founder & CEO', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60' },
              { name: 'James Wilson', role: 'Head of Content', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=60' },
              { name: 'Mia Chen', role: 'Lead Developer', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop&q=60' },
              { name: 'David Park', role: 'Recipe Editor', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=60' },
            ].map((person, i) => (
              <div key={i} className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <img src={person.image} alt={person.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="font-bold text-gray-900">{person.name}</h3>
                <p className="text-orange-500 text-sm">{person.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 max-w-4xl mx-auto px-6 text-center">
        <Quote className="mx-auto text-orange-200 mb-6" size={48} />
        <blockquote className="text-2xl md:text-3xl font-medium text-gray-900 leading-relaxed mb-8">
          "Culinara taught me that cooking is not about perfection. It is about showing up, making a mess, 
          and feeding the people you love. I have never been more confident in the kitchen."
        </blockquote>
        <div className="flex items-center justify-center gap-3">
          <div className="w-12 h-12 rounded-full overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=60" 
              alt="User" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-left">
            <div className="font-bold text-gray-900">Emma Davis</div>
            <div className="text-sm text-gray-500">Home Cook, Portland</div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Have a recipe to share? A question about your sourdough? Or just want to say hi? 
                We would love to hear from you.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-300">
                  <Mail size={20} className="text-orange-400" />
                  <span>hello@culinara.com</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Phone size={20} className="text-orange-400" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <MapPin size={20} className="text-orange-400" />
                  <span>123 Culinary Lane, Food City, FC 90210</span>
                </div>
              </div>
              
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    placeholder="First Name"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-orange-500"
                  />
                  <input 
                    type="text" 
                    placeholder="Last Name"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-orange-500"
                  />
                </div>
                <input 
                  type="email" 
                  placeholder="Email Address"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-orange-500"
                />
                <textarea 
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 resize-none"
                />
                <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-semibold transition-all flex items-center justify-center gap-2">
                  Send Message <ArrowRight size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-400 py-8 text-center text-sm">
        <p> Made with <Heart size={12} className="inline text-red-500 fill-red-500" /> by the Culinara Team. 2026.</p>
      </footer>

    </div>
  );
};

export default AboutPage;