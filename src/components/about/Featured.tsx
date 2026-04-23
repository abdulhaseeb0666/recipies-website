const Featured = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 mt-20">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-10">
          What We Offer
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-lg font-semibold">🍽️ Diverse Recipes</h3>
            <p className="text-sm text-gray-600 mt-2">
              Explore a wide variety of cuisines, from traditional dishes to modern favorites.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-lg font-semibold">⚡ Easy to Follow</h3>
            <p className="text-sm text-gray-600 mt-2">
              Step-by-step instructions designed for cooks of all skill levels.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-lg font-semibold">🔍 Smart Search</h3>
            <p className="text-sm text-gray-600 mt-2">
              Quickly find recipes by ingredients, categories, or preferences.
            </p>
          </div>

        </div>
      </div>
  )
}

export default Featured
