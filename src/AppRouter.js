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
import ShowTicket from "./pages/ShowTicket";
import Profile from "./pages/Profile";
import ProfilePage from "./pages/ProfilePage";
import DashCard from "./components/dashcard";
import Sidebar from "./components/sidebar";
import EventList from "./pages/admin/EventListPage";
import EventListPage from "./pages/admin/EventListPage";
import EditEventPage from "./pages/admin/EditEventPage";
import EventDetailPage from "./pages/EventDetailPage";
import AttendeePortal from "./pages/attendee/AttendeePortal";
import RequestedEventsPage from "./pages/attendee/RequestedEventsPage";
import RequestEventPage from "./pages/attendee/RequestEventPage";
import RegisterEventPage from "./pages/attendee/RegisterEventPage";
import QrCodePage from "./pages/admin/QrCodePage";
import AttendeeUpdate from "./pages/admin/AttendeeUpdate";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/registeradmin" element={<RegisterAdminScreen />} />
        <Route path="/registercompany" element={<RegisterCompanyScreen />} />
        <Route path="/registeruser" element={<RegisterUserScreen />} />
        {/* <Route path="/login" element={<CreateEventForm />} /> */}
        <Route path="/test" element={<AdminScreen />} />
        <Route path="/profilepage" element={<ProfilePage />} />
        <Route path="/ticket" element={<ShowTicket />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/admin" element={<AdminScreen />} />
        <Route path="/create-event" element={<CreateEventForm />} />
        <Route path="/eventlistscreen" element={<EventListPage />} />
        <Route path="/events/:id/edit" element={<EditEventPage />} />
        <Route path="/events/:id/view" element={<EventDetailPage />} />
        <Route path="/events/:id/qrcode" element={<QrCodePage />} />
        <Route path="/admin/update_attended/:event_id/:user_id" element={<AttendeeUpdate />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}
