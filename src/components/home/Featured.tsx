import { useState , useEffect } from "react"

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

const Featured = () => {

  const [recipes, setRecipes] = useState<Recipe[]>([])
  
  const fetchRecipes = async (): Promise<Recipe[]> => {
    const res = await fetch("https://dummyjson.com/recipes")
    const data = await res.json()
    return data.recipes
  }

   useEffect(() => {
          const loadRecipes = async () => {
          const data = await fetchRecipes()
          setRecipes(data)
          }
  
          loadRecipes()
      }, [])

  return (
    <div className="max-w-6xl mx-auto px-6 mt-20 mb-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Featured Recipes 🔥
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          
          {/* Cards */}
          {recipes.slice(0, 3).map((item) => (
            <div
              key={item.name}
              className="bg-white rounded-2xl shadow hover:shadow-xl transition overflow-hidden"
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-44 w-full object-cover"
              />

              <div className="p-4">
                <h3 className="font-semibold text-lg">
                  {item.name}
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                  {item.cuisine} • {item.mealType}
                </p>

                <div className="flex justify-between items-center mt-3 text-sm text-gray-600">
                  <span>⏱ {item.prepTimeMinutes} min</span>
                  <span>🔥 {item.caloriesPerServing} cal</span>
                </div>

                <button className="mt-4 text-orange-500 font-medium">
                  View Recipe →
                </button>
              </div>
            </div>
          ))}

        </div>
      </div>
  )
}

export default Featured
