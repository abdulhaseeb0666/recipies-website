import { useState} from "react"
import RecipeGrid from "./RecipeGrid"

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

const FiltersandGrids = ({recipes} : {recipes: Recipe[]}) => {
    
    const recipies = recipes;
    const [search, setSearch] = useState("")
    const [category, setCategory] = useState("all")

    const filteredRecipes = recipies.filter((recipe) => {
        const matchesSearch = recipe.name
        .toLowerCase()
        .includes(search.toLowerCase())

        const matchesCategory =
        category === "all" || recipe.mealType.includes(category)

        return matchesSearch && matchesCategory
    })

  return (
    <>
      <div className="max-w-6xl mx-auto mt-8 flex flex-col md:flex-row gap-4 justify-between items-center">

          {/* Search */}
          <input
            type="text"
            placeholder="Search recipes..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-1/3 px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400"
          />

          {/* Category Filter */}
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400"
          >
            <option value="All">All</option>
            <option value="Breakfast">Breakfast</option>
            <option value="Lunch">Lunch</option>
            <option value="Dinner">Dinner</option>
            <option value="Snack">Snacks</option>
            <option value="Dessert">Dessert</option>
            <option value="Side Dish">Side Dish</option>
            <option value="Appetizer">Appetizer</option>
          </select>

        </div>
        <RecipeGrid filteredRecipes={filteredRecipes} />
    </>
  )
}

export default FiltersandGrids
