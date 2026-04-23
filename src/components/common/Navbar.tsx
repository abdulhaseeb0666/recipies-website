import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="sticky top-0 w-full bg-white/70 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-orange-500">
          🍲 RecipeHub
        </Link>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <Link to="/" className="hover:text-orange-500 transition">Home</Link>
          <Link to="/about" className="hover:text-orange-500 transition">About</Link>
          <Link to="/contact" className="hover:text-orange-500 transition">Contact</Link>
          <Link to="/all-recipies" className="hover:text-orange-500 transition">Recipies</Link>
        </div>

        {/* Search + Actions */}
        <div className="flex items-center gap-3">
          <a href="/all-recipies">
            <button className="px-4 py-2 bg-orange-500 text-white rounded-xl hover:bg-orange-600 transition">

              Explore
            </button>
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar