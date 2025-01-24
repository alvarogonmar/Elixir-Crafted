import { StateCreator } from "zustand"
import { getCategories, getRecipes } from "../services/RecipeService"
import type { Categories, Drinks, SearchFilter } from "../types"

export type RecipesSliceType = {
    categories: Categories,
    drinks: Drinks,
    fetchCategories: () => Promise<void>,
    searchRecipes: (searchFilters: SearchFilter) => Promise<void>
    selectRecipe: () => Promise<void>
}

export const createRecipesSlice : StateCreator<RecipesSliceType>= (set) => ({
    categories: {
        drinks: []
    },
    drinks: {
        drinks: []
    },
    fetchCategories: async () => {
        const categories = await getCategories()
        set({
            categories
        })
    },
    searchRecipes: async (searchFilters) => {
        const drinks = await getRecipes(searchFilters);
        set({
            drinks
        })
    },
    selectRecipe: async () => {
        console.log("from select")
    }
})