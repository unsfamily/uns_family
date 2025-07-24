import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "../features/LoginPage";
import RegisterPage from "../features/RegisterPage";

const Home = () => (
  <div>
    <h2>Home</h2>
    <p>Welcome to UNS Family Data!</p>
  </div>
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
