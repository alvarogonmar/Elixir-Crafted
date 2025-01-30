import { StateCreator } from "zustand";
import { Recipe } from "../types";
import { createNotificationSlice } from "./notificationSlice";

export type FavoritesSliceType = {
    favorites: Recipe[]
    handleClickFavorite: (recipe: Recipe) => void,
    favoriteExists: (id: Recipe['idDrink']) => boolean,
    loadFromStorage: () => void
}

export const createFavoritesSlice : StateCreator<FavoritesSliceType> = (set, get) => ({
    favorites: [],
    handleClickFavorite: (recipe) => {
        if(get().favoriteExists(recipe.idDrink)){
            set((state) => ({
                favorites: state.favorites.filter( favorite => favorite.idDrink !== recipe.idDrink)
            }))
            createNotificationSlice().showNotification({text: "Removed from Favorites", error: false})
        } else {
            set((state) => ({
                favorites: [...state.favorites, recipe]
            }))
            createNotificationSlice().showNotification({text: "Added to Favorites", error: false})
        }
        localStorage.setItem("favorites", JSON.stringify(get().favorites))
    },
    favoriteExists: (id) => {
        return get().favorites.some(favorite => favorite.idDrink === id)
    },
    loadFromStorage: () => {
        const storedFavorites = localStorage.getItem("favorites")
        if(storedFavorites){
            set({
                favorites: JSON.parse(storedFavorites)
            })
        }
    }
})