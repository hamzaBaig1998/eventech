import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./LandingPage/LandingPage";
import LoginScreen from "./pages/LoginScreen";
import PageNotFound from "./pages/PageNotFound";
import RegisterAdminScreen from "./pages/RegisterAdminScreen";
import RegisterCompanyScreen from "./pages/RegisterCompanyScreen";
import RegisterUserScreen from "./pages/RegisterUserScreen";
import CreateEventForm from "./pages/CreateEventScreen";
import AdminScreen from "./pages/admin/AdminScreen";
import DashCard from "./components/dashcard";
import Sidebar from "./components/sidebar";
<<<<<<< HEAD
import ShowTicket from "./pages/ShowTicket";
=======
import ProfilePage from "./pages/ProfilePage";
import Profile from "./pages/Profile";

>>>>>>> parent of bcb6f2f (Revert "added accordion")

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/registeradmin" element={<RegisterAdminScreen />} />
        <Route path="/registercompany" element={<RegisterCompanyScreen />} />
        <Route path="/registeruser" element={<RegisterUserScreen />} />
<<<<<<< HEAD
        <Route path="/create-event" element={<CreateEventForm />} />
        <Route path="/admin" element={<AdminScreen />} />
        <Route path="/ticket" element={<ShowTicket />} />
        <Route path="*" element={<PageNotFound />} />
=======
        <Route path="/login" element={<CreateEventForm />} />
        <Route path="/test" element={<AdminScreen />} />
        <Route path="/profilepage" element={<ProfilePage />} />
        <Route path="/profile" element={<Profile />} />
>>>>>>> parent of bcb6f2f (Revert "added accordion")
      </Routes>
    </Router>
  );
}
