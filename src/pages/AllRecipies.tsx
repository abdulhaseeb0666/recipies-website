import { useEffect, useState } from "react"
import Header from "../components/Recipes/Header"
import FiltersandGrids from "../components/Recipes/FiltersandGrids"
import Navbar from "../components/common/Navbar"
import Footer from "../components/common/Footer"

type Recipe = {
  id: number
  name: string
  ingredients: string[]
  instructions: string[]
  prepTimeMinutes: number
  cookTimeMinutes: number
  servings: number
  difficulty: string
  cuisine: string
  caloriesPerServing: number
  tags: string[]
  userId: number
  image: string
  rating: number
  reviewCount: number
  mealType: string[]
}

const AllRecipes = () => {
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
    <div className="min-h-screen bg-linear-to-b from-orange-50 to-white">
      <Navbar />
      <Header />
      <FiltersandGrids recipes={recipes} />
      <Footer />
    </div>
  )
}

export default AllRecipes