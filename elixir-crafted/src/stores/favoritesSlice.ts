import { StateCreator } from "zustand";
import { Recipe } from "../types";

export type FavoritesSliceType = {
    favorites: Recipe[]
    handleClickFavorite: (recipe: Recipe) => void
}

export const createFavoritesSlice : StateCreator<FavoritesSliceType> = (set, get) => ({
    favorites: [],
    handleClickFavorite: (recipe) => {
        if(get().favorites.some(favorite => favorite.idDrink === recipe.idDrink)){
            console.log("si")
        } else {
            console.log("no")

            set((state) => ({
                favorites: [...state.favorites, recipe]
            }))
        }
    }
})