import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import DashboardPage from "./pages/DashboardPage";
import Layout from "./components/layout/Layout"; // Ensure Layout exists
import AgriInputs from "./pages/AgriInputs"; // Ensure AgriInputs exists
import ProduceMarket from "./pages/ProduceMarket";
import VendorsPage from "./pages/VendorsPage";
import TransportersPage from "./pages/TransportersPage";
import FarmersPage from "./pages/FarmersPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="products/:id" element={<ProductDetailPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="agri-inputs" element={<AgriInputs />} />
          <Route path="produce-market" element={<ProduceMarket />} />
          <Route path="marketplace" element={<ProductsPage />} />
          <Route path="marketplace/:id" element={<ProductDetailPage />} />
          <Route path="vendors" element={<VendorsPage />} />
          <Route path="transporters" element={<TransportersPage />} />
          <Route path="farmers" element={<FarmersPage />} />
          <Route path="vendors/:id" element={<VendorsPage />} />
          <Route path="transporters/:id" element={<TransportersPage />} />
          <Route path="farmers/:id" element={<FarmersPage />} />

          {/* Protected Routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="cart" element={<CartPage />} />
            <Route path="checkout" element={<CheckoutPage />} />
            <Route path="dashboard" element={<DashboardPage />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
