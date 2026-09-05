import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Shop from "./pages/Shop";
import Marketplace from "./pages/Marketplace";
import ProductDetails from "./pages/ProductDetails";
import "./styles/app.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/shop" replace />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;