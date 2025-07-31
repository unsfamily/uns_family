import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "../features/LoginPage";
import RegisterPage from "../features/RegisterPage";
import HomePage from "../features/HomePage";
import DashboardPage from "../features/DashboardPage";
import EmployeeData from "../features/EmployeeData";
import AdminDashboard from "../features/AdminDashboard";
import EmployeeList from "../features/EmployeeList";


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
    <Route path="/admindashboard" element={<AdminDashboard />} />
    <Route path="/employeelist" element={<EmployeeList />} />

    {/* Add protected/private routes here */}
  </Routes>
);

export default AppRoutes;
