import { Fragment } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import clsx from "clsx";
import { useAppStore } from "../stores/useAppStore";
import { Recipe } from "../types";

export default function Modal() {
  const modal = useAppStore((state) => state.modal);
  const closeModal = useAppStore((state) => state.closeModal);
  const selectedRecipe = useAppStore((state) => state.selectedRecipe);
  const handleClickFavorite = useAppStore((state) => state.handleClickFavorite);
  const favoriteExists = useAppStore((state) => state.favoriteExists);

  const renderIngredients = () => {
    const ingredients: JSX.Element[] = [];
    for (let i = 1; i <= 6; i++) {
      const ingredient = selectedRecipe[`strIngredient${i}` as keyof Recipe];
      const measure = selectedRecipe[`strMeasure${i}` as keyof Recipe];

      if (ingredient && measure) {
        ingredients.push(
          <li key={i} className="text-lg font-normal">
            {ingredient} - {measure}
          </li>
        );
      }
    }
    return ingredients;
  };

  return (
    <>
      <Transition appear show={modal} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <TransitionChild as={Fragment}>
            <DialogBackdrop
              className={clsx([
                // Base styles
                "fixed inset-0 bg-black bg-opacity-75 transition",
                // Shared closed styles
                "data-[closed]:opacity-0",
                // Entering styles
                "data-[enter]:duration-300 data-[enter]:ease-out",
                // Leaving styles
                "data-[leave]:duration-200 data-[leave]:ease-in",
              ])}
            />
          </TransitionChild>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <TransitionChild as={Fragment}>
                <DialogPanel
                  className={clsx([
                    // Base styles
                    "relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl sm:p-6",
                    // Shared closed styles
                    "data-[closed]:opacity-0 data-[closed]:scale-95",
                    // Entering styles
                    "data-[enter]:duration-300 data-[enter]:ease-out",
                    // Leaving styles
                    "data-[leave]:duration-200 data-[leave]:ease-in",
                  ])}
                >
                  <DialogTitle
                    as="h3"
                    className="text-gray-900 text-4xl font-extrabold my-5 text-center"
                  >
                    {selectedRecipe.strDrink}
                  </DialogTitle>
                  <img
                    src={selectedRecipe.strDrinkThumb}
                    alt={`${selectedRecipe.strDrink} image`}
                    className="mx-auto w-96"
                  ></img>
                  <DialogTitle
                    as="h3"
                    className="text-gray-800 text-2xl font-extrabold my-5"
                  >
                    Ingredients and Measure
                  </DialogTitle>
                  {renderIngredients()}
                  <DialogTitle
                    as="h3"
                    className="text-gray-900 text-2xl font-extrabold my-5"
                  >
                    Instructions
                  </DialogTitle>
                  <p className="text-lg">{selectedRecipe.strInstructions}</p>
                  <div className="mt-5 flex justify-between gap-4">
                    <button
                      type="button"
                      className="w-full rounded bg-gray-600 p-3 
                      font-bold uppercase shadow text-white hover:bg-gray-500"
                      onClick={closeModal}
                    >
                      Close
                    </button>
                    <button
                      type="button"
                      className="w-full rounded bg-orange-600 p-3 
                      font-bold uppercase shadow text-white hover:bg-orange-500"
                      onClick={() => {
                        handleClickFavorite(selectedRecipe), closeModal();
                      }}
                    >
                      {favoriteExists(selectedRecipe.idDrink)
                        ? "Delete of Favorites"
                        : "Add to Favorites"}
                    </button>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
