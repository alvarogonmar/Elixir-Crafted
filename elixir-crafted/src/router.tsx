import { BrowserRouter, Routes, Route } from "react-router-dom";
import IndexPage from "./views/IndexPage";

export default function AppRouter() {
  return (
    // Es el principal y tiene que rodear todos los componentes
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
