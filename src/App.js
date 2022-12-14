import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Contact from "./components/contact/Contact";
import Homepage from "./pages/homepage/Homepage";
import ProductPage from "./pages/product/ProductPage";
import "./styles.css";
import Footer from "./components/footer/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
