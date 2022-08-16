import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Product from "./components/product/Product";
import Homepage from "./pages/homepage/Homepage";
import ProductPage from "./pages/product/ProductPage";
import "./styles.css";

export default function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  );
}
