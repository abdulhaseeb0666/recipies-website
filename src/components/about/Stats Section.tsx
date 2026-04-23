const Stats = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">

        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="text-2xl font-bold text-orange-500">100+</h3>
          <p className="text-sm text-gray-600 mt-1">Recipes</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="text-2xl font-bold text-orange-500">20+</h3>
          <p className="text-sm text-gray-600 mt-1">Categories</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="text-2xl font-bold text-orange-500">10k+</h3>
          <p className="text-sm text-gray-600 mt-1">Users</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="text-2xl font-bold text-orange-500">4.8★</h3>
          <p className="text-sm text-gray-600 mt-1">Rating</p>
        </div>

      </div>
  )
}

export default Stats
