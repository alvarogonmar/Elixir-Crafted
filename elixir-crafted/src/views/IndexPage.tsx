import { useMemo, useEffect, useState } from "react";
import { useAppStore } from "../stores/useAppStore";
import DrinkCard from "../components/DrinkCard";

export default function IndexPage() {
  const drinks = useAppStore((state) => state.drinks);

  const hasDrinks = useMemo(() => drinks.drinks.length > 0, [drinks]);
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  // Detectar el scroll para mostrar/ocultar el botón
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 900) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Función para regresar al inicio
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="container mx-auto max-w-screen-xl">
        <h1 className="text-6xl font-extrabold">Recipes</h1>
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
      {/* Botón para regresar al inicio */}
      {showScrollToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 bg-orange-500 text-white p-3 rounded-full shadow-lg 
          hover:bg-orange-600 hover:scale-110 transition transform duration-300"
          aria-label="Scroll to top"
        >
          ↑
        </button>
      )}
    </>
  );
}
