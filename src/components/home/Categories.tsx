const Categories = () => {
  return (
        <div className="max-w-6xl mx-auto px-6 mt-20">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Popular Categories
        </h2>

        <div className="flex items-center justify-between">
          {["Breakfast", "Lunch", "Dinner", "Snacks","Desserts", "Side Dish"].map((cat) => (
            <div
              key={cat}
              className="w-[10vw] p-5 bg-orange-500 text-white rounded-2xl shadow hover:shadow-lg cursor-pointer text-center font-medium hover:bg-orange-600 transition"
            >
              {cat}
            </div>
          ))}
        </div>
      </div>
    )
}

export default Categories