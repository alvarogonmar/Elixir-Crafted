import { useAppStore } from "../stores/useAppStore";

export default function IndexPage() {
  const drinks = useAppStore((state) => state.drinks);

  return (
    <>
      <h1>Home</h1>
    </>
  );
}
