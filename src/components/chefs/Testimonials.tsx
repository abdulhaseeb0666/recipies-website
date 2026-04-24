import { Quote } from "lucide-react";

export const TestimonialSection: React.FC = () => {
  const testimonials = [
    {
      quote: "Marco's deconstructed osso buco changed my understanding of what Italian food could be. A true masterpiece.",
      author: "Food & Wine Magazine",
      role: "Editor's Pick 2025",
    },
    {
      quote: "Yuki-san's omakase is not a meal — it's a meditation. Every piece of nigiri is perfection.",
      author: "Michelin Guide",
      role: "3-Star Review",
    },
    {
      quote: "Amara's fusion pastries bridge continents. The hibiscus macaron is simply transcendent.",
      author: "Bon Appétit",
      role: "Best New Chef",
    },
  ];

  return (
    <section className="py-20 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <Quote className="mx-auto text-orange-500 mb-4" size={40} />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Critical Acclaim</h2>
          <p className="text-gray-400">What the world's top food critics say about our chefs</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all">
              <p className="text-white/90 text-lg leading-relaxed mb-6 italic">"{t.quote}"</p>
              <div>
                <div className="font-semibold text-white">{t.author}</div>
                <div className="text-orange-400 text-sm">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
