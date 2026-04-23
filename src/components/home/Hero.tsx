const Hero = () => {
  return (
      <div className="max-w-6xl mx-auto px-6 pt-16 text-center">
            <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">
            Discover & Cook Amazing Recipes 🍽️
            </h1>

            <p className="mt-4 text-lg text-gray-600">
            Explore thousands of delicious recipes from around the world. Find your next meal in seconds.
            </p>

            {/* CTA Buttons */}
            <div className="mt-6 flex justify-center gap-4">
            <button className="px-6 py-3 bg-orange-500 text-white rounded-xl shadow hover:bg-orange-600 transition">
                Explore Recipes
            </button>
            <button className="px-6 py-3 bg-white border rounded-xl shadow hover:bg-gray-50 transition">
                Random Recipe 🎲
            </button>
            </div>
      </div>
  )
}

export default Hero
