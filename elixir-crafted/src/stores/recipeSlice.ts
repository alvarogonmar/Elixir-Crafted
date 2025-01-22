import { StateCreator } from "zustand"
import { getCategories } from "../services/RecipeService"

export type RecipesSliceType = {
    categories: Category[],
    fetchCategories: () => Promise<void>
}

export const createRecipesSlice : StateCreator<RecipesSliceType>= (set) => ({
    categories: [],
    fetchCategories: async () => {
        const categories = await getCategories()
        set({
            categories
        })
    }
})