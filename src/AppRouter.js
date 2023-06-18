import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./LandingPage/LandingPage";
import LoginScreen from "./pages/LoginScreen";
import RegisterAdminScreen from "./pages/RegisterAdminScreen";
import RegisterCompanyScreen from "./pages/RegisterCompanyScreen";
import RegisterUserScreen from "./pages/RegisterUserScreen";
import CreateEventForm from "./pages/CreateEventScreen";
import AdminScreen from "./pages/admin/AdminScreen"
import Card from "./components/card";
import Sidebar from "./components/sidebar";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/registeradmin" element={<RegisterAdminScreen />} />
        <Route path="/registercompany" element={<RegisterCompanyScreen />} />
        <Route path="/registeruser" element={<RegisterUserScreen />} />
        <Route path="/login" element={<CreateEventForm />} />
        <Route path="/test" element={<Sidebar />} />
      </Routes>
    </Router>
  );
}
