import { create } from "zustand";
import { createRecipesSlice } from "./recepiSlice";

export const useAppStore = create( (...a) => ({
    ...createRecipesSlice(...a)
}))