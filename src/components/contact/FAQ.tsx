const FAQ = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 mt-20 mb-16">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          <div className="bg-white p-5 rounded-xl shadow">
            <h4 className="font-semibold">How can I submit a recipe?</h4>
            <p className="text-sm text-gray-600 mt-1">
              Currently, recipe submission is not available, but we’re working on it!
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow">
            <h4 className="font-semibold">Is RecipeHub free to use?</h4>
            <p className="text-sm text-gray-600 mt-1">
              Yes! All recipes and features are completely free.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow">
            <h4 className="font-semibold">Can I save my favorite recipes?</h4>
            <p className="text-sm text-gray-600 mt-1">
              Yes, you can save recipes locally using the favorites feature.
            </p>
          </div>
        </div>
      </div>
  )
}

export default FAQ
