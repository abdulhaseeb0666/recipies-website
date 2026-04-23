type Recipe = 
{
    "id": number,
    "name": string,
    "ingredients": string[],
    "instructions": string[],
    "prepTimeMinutes": number,
    "cookTimeMinutes": number,
    "servings": number,
    "difficulty": string,
    "cuisine": string,
    "caloriesPerServing": number,
    "tags": string[],
    "userId": number,
    "image": string,
    "rating": number,
    "reviewCount": number,
    "mealType": string[]
}

type params = {
    filteredRecipes : Recipe[]
}

const RecipeGrid = (param : params) => {
    const filteredRecipes = param.filteredRecipes;

  return (
    <div className="max-w-6xl mx-auto mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3">

        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe) => (
            <div
              key={recipe.name}
              className="bg-white rounded-2xl shadow hover:shadow-xl transition overflow-hidden"
            >
              <img
                src={recipe.image}
                alt={recipe.name}
                className="h-44 w-full object-cover"
              />

              <div className="p-4">
                <h3 className="font-semibold text-lg">
                  {recipe.name}
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                  {recipe.cuisine} • {recipe.mealType}
                </p>

                <div className="flex justify-between items-center mt-3 text-sm text-gray-600">
                  <span>⏱ {recipe.prepTimeMinutes} min</span>
                  <span>🔥 {recipe.caloriesPerServing} cal</span>
                </div>

                <button className="mt-4 text-orange-500 font-medium">
                  View Recipe →
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No recipes found 😕
          </p>
        )}

      </div>
  )
}

export default RecipeGrid
