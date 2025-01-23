import { useMemo } from "react";
import { useAppStore } from "../stores/useAppStore";

export default function IndexPage() {
  const drinks = useAppStore((state) => state.drinks);

  const hasDrinks = useMemo(() => drinks.drinks.length > 0, [drinks]);

  return (
    <>
      <h1 className="text-6xl font-extrabold">Recipes</h1>
      {hasDrinks ? (
        <>
          <p>DRINKS YES</p>
        </>
      ) : (
        <p className="my-10 text-center text-2xl">
          There are no recipes yet, use the form
        </p>
      )}
    </>
  );
}
