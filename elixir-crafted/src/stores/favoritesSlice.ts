import { StateCreator } from "zustand";
import { Recipe } from "../types";

export type FavoritesSliceType = {
    favorites: Recipe[]
    handleClickFavorite: (recipe: Recipe) => void
}

export const createFavoritesSlice : StateCreator<FavoritesSliceType> = () => ({
    favorites: [],
    handleClickFavorite: (recipe) => {
        console.log(recipe)
    }
})