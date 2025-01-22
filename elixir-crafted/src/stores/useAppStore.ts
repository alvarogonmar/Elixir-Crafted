import { create } from "zustand";
import { createRecipesSlice, RecipesSliceType } from "./recIpeSlice";

export const useAppStore = create<RecipesSliceType>( (...a) => ({
    ...createRecipesSlice(...a)
}))