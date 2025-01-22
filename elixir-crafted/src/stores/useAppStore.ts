import { create } from "zustand";
import { createRecipesSlice } from "./recIpeSlice";

export const useAppStore = create( (...a) => ({
    ...createRecipesSlice(...a)
}))