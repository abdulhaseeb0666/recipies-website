// src/pages/ChefsPage.tsx
import React, { useState } from 'react';

import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import { HeroSection } from '../components/chefs/Hero';
import { FeaturedChefCard } from '../components/chefs/FeaturedChefCard';
import { ChefCardCompact } from '../components/chefs/ChefCard';
import { TestimonialSection } from '../components/chefs/Testimonials';
import { JoinChefSection } from '../components/chefs/JoinChef';

// --- Types ---
export type Chef = {
  id: number;
  name: string;
  title: string;
  image: string;
  coverImage: string;
  location: string;
  specialty: string;
  rating: number;
  reviewCount: number;
  experience: number;
  recipesCount: number;
  followers: string;
  bio: string;
  signatureDish: string;
  dishImage: string;
  awards: string[];
  socials: {
    instagram?: string;
    twitter?: string;
    website?: string;
  };
  tags: string[];
  featured?: boolean;
};

// --- Hard-Coded Data ---
const chefs: Chef[] = [
  {
    id: 1,
    name: "Marco Rossi",
    title: "Executive Chef",
    image: "https://images.unsplash.com/photo-1583394293214-28ded15ee548?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    coverImage: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&auto=format&fit=crop&q=60",
    location: "Milan, Italy",
    specialty: "Modern Italian",
    rating: 4.9,
    reviewCount: 2847,
    experience: 18,
    recipesCount: 142,
    followers: "245K",
    bio: "Born into a family of Tuscan restaurateurs, Marco trained under Massimo Bottura before opening his own Michelin-starred establishment in Milan. His philosophy centers on respecting tradition while embracing innovation — transforming humble ingredients into extraordinary experiences.",
    signatureDish: "Deconstructed Osso Buco",
    dishImage: "https://media.istockphoto.com/id/1255928923/photo/backed-ossobuco-with-vegetables-and-potatoes.jpg?s=1024x1024&w=is&k=20&c=5XfcwyAJtf1RGxfvCcX8VkMt-H3qQ3rMeTSp7rPgk_8=",
    awards: ["2 Michelin Stars", "James Beard Award", "World's 50 Best"],
    socials: { instagram: "@marcorossi", twitter: "@chefmarco", website: "marcorossi.com" },
    tags: ["Italian", "Fine Dining", "Michelin"],
    featured: true,
  },
  {
    id: 2,
    name: "Yuki Tanaka",
    title: "Sushi Master",
    image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=400&auto=format&fit=crop&q=60",
    coverImage: "https://images.unsplash.com/photo-1553621042-f6e147245754?w=800&auto=format&fit=crop&q=60",
    location: "Tokyo, Japan",
    specialty: "Edomae Sushi",
    rating: 5.0,
    reviewCount: 1923,
    experience: 25,
    recipesCount: 89,
    followers: "512K",
    bio: "Trained for 10 years at Sukiyabashi Jiro before earning the title of Itamae. Yuki believes sushi is a dialogue between chef and diner — each piece tells the story of the ocean, the season, and decades of perfected technique.",
    signatureDish: "Omakase Nigiri Set",
    dishImage: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=600&auto=format&fit=crop&q=60",
    awards: ["3 Michelin Stars", "Japan Culinary Academy Gold", "Asia's 50 Best"],
    socials: { instagram: "@yukitanaka", website: "yukisushi.jp" },
    tags: ["Japanese", "Sushi", "Traditional"],
    featured: true,
  },
  {
    id: 3,
    name: "Amara Okafor",
    title: "Pastry Chef",
    image: "https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?w=400&auto=format&fit=crop&q=60",
    coverImage: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&auto=format&fit=crop&q=60",
    location: "Lagos, Nigeria",
    specialty: "Afro-Fusion Pastry",
    rating: 4.8,
    reviewCount: 1567,
    experience: 12,
    recipesCount: 203,
    followers: "189K",
    bio: "Amara blends West African flavors with classical French patisserie techniques. Her creations — from hibiscus macarons to plantain mille-feuille — celebrate her heritage while pushing the boundaries of modern dessert.",
    signatureDish: "Hibiscus & Yuzu Tart",
    dishImage: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=600&auto=format&fit=crop&q=60",
    awards: ["Africa's Best Pastry Chef", "Gourmand World Cookbook", "SOBEWFF Winner"],
    socials: { instagram: "@amaraokafor", twitter: "@amara pastry" },
    tags: ["Pastry", "Fusion", "African"],
    featured: true,
  },
  {
    id: 4,
    name: "Jean-Pierre Dubois",
    title: "Chef de Cuisine",
    image: "https://images.unsplash.com/photo-1607631568010-a87245c0daf8?w=400&auto=format&fit=crop&q=60",
    coverImage: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&auto=format&fit=crop&q=60",
    location: "Lyon, France",
    specialty: "Nouvelle Cuisine",
    rating: 4.7,
    reviewCount: 3102,
    experience: 22,
    recipesCount: 178,
    followers: "320K",
    bio: "A protégé of Paul Bocuse, Jean-Pierre brings Lyon's culinary heritage into the modern era. His farm-to-table approach sources ingredients from within 50 kilometers of his restaurant, creating dishes that taste of the terroir.",
    signatureDish: "Truffle-Infused Pigeon",
    dishImage: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format&fit=crop&q=60",
    awards: ["1 Michelin Star", "Bocuse d'Or Finalist", "Gault & Millau 18/20"],
    socials: { instagram: "@jpdubois", website: "jeanpierredubois.fr" },
    tags: ["French", "Farm-to-Table", "Classic"],
  },
  {
    id: 5,
    name: "Sofia Martinez",
    title: "Executive Chef",
    image: "https://images.unsplash.com/photo-1581299894007-aaa50297cf16?w=400&auto=format&fit=crop&q=60",
    coverImage: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&auto=format&fit=crop&q=60",
    location: "Mexico City, Mexico",
    specialty: "Contemporary Mexican",
    rating: 4.9,
    reviewCount: 2234,
    experience: 15,
    recipesCount: 165,
    followers: "478K",
    bio: "Sofia reimagines pre-Hispanic ingredients through a modern lens. Her tasting menus take diners on a journey through Mexico's diverse ecosystems — from Oaxacan moles to Yucatán seafood, each plate is a geography lesson.",
    signatureDish: "Mole Negro with Duck",
    dishImage: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&auto=format&fit=crop&q=60",
    awards: ["Latin America's 50 Best", "AA Rosette", "Mujeres en Gastronomía"],
    socials: { instagram: "@sofiamartinez", twitter: "@chefsofia" },
    tags: ["Mexican", "Contemporary", "Heritage"],
  },
  {
    id: 6,
    name: "Raj Kapoor",
    title: "Master Chef",
    image: "https://images.unsplash.com/photo-1566554273541-37a9ca77b91f?w=400&auto=format&fit=crop&q=60",
    coverImage: "https://images.unsplash.com/photo-1505253758473-96b701d2cd3e?w=800&auto=format&fit=crop&q=60",
    location: "New Delhi, India",
    specialty: "Progressive Indian",
    rating: 4.8,
    reviewCount: 1876,
    experience: 20,
    recipesCount: 134,
    followers: "298K",
    bio: "Raj elevates street food to fine dining, drawing from his childhood memories of Delhi's bustling markets. His molecular gastronomy techniques reimagine classics like butter chicken and biryani into edible art.",
    signatureDish: "Nitro Chaat Sphere",
    dishImage: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=600&auto=format&fit=crop&q=60",
    awards: ["Asia's 50 Best", "San Pellegrino Young Chef", "Times Food Award"],
    socials: { instagram: "@raj_kapoor", website: "rajkapoor.in" },
    tags: ["Indian", "Molecular", "Street Food"],
  },
  {
    id: 7,
    name: "Elena Vasquez",
    title: "Head Baker",
    image: "https://images.unsplash.com/photo-1607417307790-5f3efc48ced3?w=400&auto=format&fit=crop&q=60",
    coverImage: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&auto=format&fit=crop&q=60",
    location: "Barcelona, Spain",
    specialty: "Artisan Bread",
    rating: 4.9,
    reviewCount: 1456,
    experience: 14,
    recipesCount: 98,
    followers: "167K",
    bio: "Elena's sourdough revolution changed Barcelona's bread culture. She mills her own heritage grains and uses natural fermentation techniques passed down through generations of Catalan bakers.",
    signatureDish: "Ancient Grain Sourdough",
    dishImage: "https://images.unsplash.com/photo-1585476263060-b7a6b710f2a1?w=600&auto=format&fit=crop&q=60",
    awards: ["World Bread Awards", "Madrid Fusion Winner", "Slow Food Ambassador"],
    socials: { instagram: "@elenavasquez", twitter: "@elenabakes" },
    tags: ["Baking", "Sourdough", "Artisan"],
  },
  {
    id: 8,
    name: "Kenji Nakamura",
    title: "Ramen Specialist",
    image: "https://images.unsplash.com/photo-1574966739987-65e38db0f7ce?w=400&auto=format&fit=crop&q=60",
    coverImage: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&auto=format&fit=crop&q=60",
    location: "Osaka, Japan",
    specialty: "Tonkotsu Ramen",
    rating: 4.8,
    reviewCount: 3421,
    experience: 16,
    recipesCount: 56,
    followers: "198K",
    bio: "Kenji spent 8 years perfecting his broth recipe, simmering pork bones for 18 hours daily. His ramen shop has a 3-hour waitlist — a testament to the soul he pours into every bowl.",
    signatureDish: "18-Hour Tonkotsu",
    dishImage: "https://images.unsplash.com/photo-1557872943-16a5ac26437e?w=600&auto=format&fit=crop&q=60",
    awards: ["Tokyo Ramen Show Winner", "Tabelog Gold", "Japan Food Journal Grand Prix"],
    socials: { instagram: "@kenjiramen", website: "kenjiramen.jp" },
    tags: ["Japanese", "Ramen", "Comfort Food"],
  },
];

const ChefsPage: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeFilter, setActiveFilter] = useState<'all' | 'featured'>('all');

  const featuredChefs = chefs.filter(c => c.featured);
  const displayChefs = activeFilter === 'featured' ? featuredChefs : chefs;

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Navbar isScrolled={isScrolled} />
      <HeroSection />

      {/* Featured Chefs */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Featured Chefs</h2>
            <p className="text-gray-500">Michelin-starred innovators and culinary pioneers</p>
          </div>
          <div className="flex gap-2 bg-gray-100 p-1 rounded-xl">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-all ${
                activeFilter === 'all' ? 'bg-white shadow-sm text-gray-900' : 'text-gray-500'
              }`}
            >
              All Chefs
            </button>
            <button
              onClick={() => setActiveFilter('featured')}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-all ${
                activeFilter === 'featured' ? 'bg-white shadow-sm text-gray-900' : 'text-gray-500'
              }`}
            >
              Featured
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {featuredChefs.map(chef => (
            <FeaturedChefCard key={chef.id} chef={chef} />
          ))}
        </div>

        {/* All Chefs Grid */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">All Culinary Artists</h2>
          <p className="text-gray-500">{displayChefs.length} chefs from around the world</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayChefs.map(chef => (
            <ChefCardCompact key={chef.id} chef={chef} />
          ))}
        </div>
      </section>

      <TestimonialSection />
      <JoinChefSection />
      <Footer />
    </div>
  );
};

export default ChefsPage;