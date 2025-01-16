import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import ProductsPage from "./pages/ProductsPage";
import SingleProduct from "./pages/SingleProduct";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:_id" element={<SingleProduct />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
