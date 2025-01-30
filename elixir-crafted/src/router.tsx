import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import IndexPage from "./views/IndexPage";
import Layout from "./layouts/Layout";
const FavoritesPage = lazy(() => import("./views/FavoritesPage"));

export default function AppRouter() {
  return (
    // Es el principal y tiene que rodear todos los componentes
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<IndexPage />} index></Route>
          <Route
            path="/favorites"
            element={
              <Suspense fallback="Loading...">
                <FavoritesPage />
              </Suspense>
            }
          ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
