import { StateCreator } from "zustand"

type Category = {}

export type RecipesSliceType = {
    categories: Category[],
    fetchCategories: () => Promise<void>
}

export const createRecipesSlice : StateCreator<RecipesSliceType>= () => ({
    categories: [],
    fetchCategories: async () => {

    }
})