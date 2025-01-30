import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";

const IndexPage = lazy(() => import("./views/IndexPage"));
const FavoritesPage = lazy(() => import("./views/FavoritesPage"));
export default function AppRouter() {
  return (
    // Es el principal y tiene que rodear todos los componentes
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route
            path="/"
            element={
              <Suspense fallback="Loading...">
                <IndexPage />
              </Suspense>
            }
            index
          ></Route>
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
