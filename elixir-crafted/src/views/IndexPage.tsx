import { useMemo } from "react";
import { useAppStore } from "../stores/useAppStore";
import DrinkCard from "../components/DrinkCard";

export default function IndexPage() {
  const drinks = useAppStore((state) => state.drinks);

  const hasDrinks = useMemo(() => drinks.drinks.length > 0, [drinks]);

  return (
    <>
      <h1 className="text-6xl font-extrabold">Recipes</h1>
      <div className="container mx-auto">
        {hasDrinks ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 my-10 gap-10">
            {drinks.drinks.map((drink) => (
              <DrinkCard key={drink.idDrink} drink={drink} />
            ))}
          </div>
        ) : (
          <p className="my-10 text-center text-2xl">
            There are no recipes yet, use the form
          </p>
        )}
      </div>
    </>
  );
}
