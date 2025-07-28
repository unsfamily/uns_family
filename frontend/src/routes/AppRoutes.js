import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "../features/LoginPage";
import RegisterPage from "../features/RegisterPage";
import HomePage from "../features/HomePage";
import DashboardPage from "../features/DashboardPage";
import EmployeeData from "../features/EmployeeData";


const Home = () => (
  <HomePage />
);

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/register" element={<RegisterPage />} />
    <Route path="/dashboard" element={<DashboardPage />} />
    <Route path="/employeedata" element={<EmployeeData />} />

    {/* Add protected/private routes here */}
  </Routes>
);

export default AppRoutes;
