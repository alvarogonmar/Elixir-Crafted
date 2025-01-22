import { StateCreator } from "zustand"
import { getCategories } from "../services/RecipeService"
import type { Categories } from "../types"

export type RecipesSliceType = {
    categories: Categories,
    fetchCategories: () => Promise<void>,
    searchRecipes: () => Promise<void>
}

export const createRecipesSlice : StateCreator<RecipesSliceType>= (set) => ({
    categories: {
        drinks: []
    },
    fetchCategories: async () => {
        const categories = await getCategories()
        set({
            categories
        })
    },
    searchRecipes: async () => {
        console.log("aaa")
    }
})