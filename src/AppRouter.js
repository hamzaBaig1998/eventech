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
import RequestEventAdminPage from "./pages/admin/RequestedEventsPage";
import RegisterEventPage from "./pages/attendee/RegisterEventPage";
import QrCodePage from "./pages/admin/QrCodePage";
import AttendeeUpdate from "./pages/admin/AttendeeUpdate";
import JoinPage from "./pages/JoinPage";
import AdminSignup from "./pages/admin/AdminSignup";
import RegisterAttendeePage from "./pages/attendee/RegisterAttendeePage";
import AttendeeLogin from "./pages/attendee/AttendeeLogin";
import AuthRoute from "./AuthRoute";
import EventFeedback from "./pages/admin/EventFeedback";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/join" element={<JoinPage />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/registeradmin" element={<RegisterAdminScreen />} />
        <Route path="/registercompany" element={<RegisterCompanyScreen />} />
        <Route path="/registeruser" element={<RegisterUserScreen />} />
        {/* <Route path="/login" element={<CreateEventForm />} /> */}
        <Route path="/test" element={<AdminScreen />} />
        <Route path="/profilepage" element={<ProfilePage />} />
        <Route path="/ticket" element={<ShowTicket />} />
        <Route path="/profile" element={<Profile />} />
        <Route
          path="/admin"
          element={
            <AuthRoute>
              <AdminScreen />
            </AuthRoute>
          }
        />
        <Route
          path="/create-event"
          element={
            <AuthRoute>
              <CreateEventForm />
            </AuthRoute>
          }
        />
        <Route
          path="/eventlistscreen"
          element={
            <AuthRoute>
              <EventListPage />
            </AuthRoute>
          }
        />
        <Route
          path="/events/:id/edit"
          element={
            <AuthRoute>
              <EditEventPage />
            </AuthRoute>
          }
        />
        <Route
          path="/events/:id/view"
          element={
            <AuthRoute>
              <EventDetailPage />
            </AuthRoute>
          }
        />
        <Route
          path="/events/:id/qrcode"
          element={
            <AuthRoute>
              <QrCodePage />
            </AuthRoute>
          }
        />
        {/* <Route path="/admin" element={<AdminScreen />} /> */}
        {/* <Route path="/create-event" element={<CreateEventForm />} /> */}
        {/* <Route path="/eventlistscreen" element={<EventListPage />} /> */}
        {/* <Route path="/events/:id/edit" element={<EditEventPage />} /> */}
        {/* <Route path="/events/:id/view" element={<EventDetailPage />} /> */}
        {/* <Route path="/events/:id/qrcode" element={<QrCodePage />} /> */}
        <Route
          path="/admin/update_attended/:event_id/:user_id"
          element={
            <AuthRoute>
              <AttendeeUpdate />
            </AuthRoute>
          }
        />
        {/* <Route
          path="/admin/update_attended/:event_id/:user_id"
          element={<AttendeeUpdate />}
        /> */}
        {/* Admin routes */}
        <Route path="/admin-signup" element={<AdminSignup />} />

        {/* Attendee Routes */}
        <Route path="/register-attendee" element={<RegisterAttendeePage />} />
        <Route path="/login-attendee" element={<AttendeeLogin />} />
        {/* <Route path="/attendee-portal" element={<AttendeePortal />} /> */}
        {/* <AuthRoute path="/attendee-portal" element={<AttendeePortal />} /> */}
        <Route
          path="/attendee-portal"
          element={
            <AuthRoute>
              <AttendeePortal />
            </AuthRoute>
          }
        />
        {/* Attendee requested events */}
        <Route
          path="/requested-events"
          element={
            <AuthRoute>
              <RequestedEventsPage />
            </AuthRoute>
          }
        />
        {/* Admin requested events */}
        <Route
          path="/requested-events-admin"
          element={
            <AuthRoute>
              <RequestEventAdminPage />
            </AuthRoute>
          }
        />
        {/* <Route path="/requested-events" element={<RequestedEventsPage />} /> */}
        {/* <Route path="/request-event" element={<RequestEventPage />} /> */}
        <Route
          path="/request-event"
          element={
            <AuthRoute>
              <RequestEventPage />
            </AuthRoute>
          }
        />
        <Route
          path="/register-event"
          element={
            <AuthRoute>
              <RegisterEventPage />
            </AuthRoute>
          }
        />
        <Route
          path="/event-feedback/:user_id"
          element={
            <AuthRoute>
              <EventFeedback />
            </AuthRoute>
          }
        />
        {/* <Route path="/register-event" element={<RegisterEventPage />} /> */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}
