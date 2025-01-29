import { useAppStore } from "../stores/useAppStore";

export default function FavoritesPage() {
  const favorites = useAppStore((state) => state.favorites);
  return (
    <>
      <h1>Favorites</h1>
    </>
  );
}
