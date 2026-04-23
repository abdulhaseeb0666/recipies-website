import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-12">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-white">
              🍲 RecipeHub
            </h2>
            <p className="mt-3 text-sm text-gray-400 leading-relaxed">
              Discover, cook, and share amazing recipes from around the world.
              Your daily cooking inspiration in one place.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-orange-400">Home</Link></li>
              <li><Link to="/about" className="hover:text-orange-400">About</Link></li>
              <li><Link to="/contact" className="hover:text-orange-400">Contact</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-white font-semibold mb-4">Popular Categories</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-orange-400 cursor-pointer">Breakfast</li>
              <li className="hover:text-orange-400 cursor-pointer">Lunch</li>
              <li className="hover:text-orange-400 cursor-pointer">Dinner</li>
              <li className="hover:text-orange-400 cursor-pointer">Desserts</li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between text-sm">

          <p>© {new Date().getFullYear()} RecipeHub. Created by Abdul Haseeb.</p>

          <div className="flex gap-4 mt-4 md:mt-0">
            <span className="hover:text-orange-400 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-orange-400 cursor-pointer">Terms</span>
            <span className="hover:text-orange-400 cursor-pointer">Support</span>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer