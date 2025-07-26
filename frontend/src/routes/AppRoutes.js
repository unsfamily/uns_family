import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "../features/LoginPage";
import RegisterPage from "../features/RegisterPage";
import HomePage from "../features/HomePage";

const Home = () => (
  <HomePage />
);

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/register" element={<RegisterPage />} />
    {/* Add protected/private routes here */}
  </Routes>
);

export default AppRoutes;
