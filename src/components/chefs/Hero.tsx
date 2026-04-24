import { 
  Award, 
  BookOpen, 
  Users, 
  Globe,
} from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900">
      <div className="absolute inset-0">
        <img 
          src="https://plus.unsplash.com/premium_photo-1705927287249-b436b77d66c9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHBpenphJTIwa2l0Y2hlbnxlbnwwfDB8MHx8fDA%3D" 
          alt="Chefs kitchen" 
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/40 via-transparent to-black/60" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Meet the <span className="text-orange-400">Masters</span><br />
          Behind the Magic
        </h1>

        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
          Discover the stories, philosophies, and signature creations of the world's most celebrated chefs. 
          From Michelin-starred innovators to guardians of ancient traditions.
        </p>

        <div className="flex flex-wrap justify-center gap-8 mt-12">
          {[
            { icon: <Users size={20} />, value: "50+", label: "Master Chefs" },
            { icon: <Award size={20} />, value: "120+", label: "Awards Won" },
            { icon: <Globe size={20} />, value: "24", label: "Countries" },
            { icon: <BookOpen size={20} />, value: "10K+", label: "Recipes" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-orange-400 mb-2 mx-auto">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-white/60 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};