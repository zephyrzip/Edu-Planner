import { BrowserRouter, Routes, Route } from "react-router-dom";

import RoleSelect from "./pages/RoleSelect";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import OTPVerify from "./pages/OTPVerify";

import StudentDashboard from "./pages/StudentDashboard";
import TeacherDashboard from "./pages/TeacherDashboard";
import AdminDashboard from "./pages/AdminDashboard";

import StudentSubjects from "./pages/StudentSubjects";
import StudentRoadmap from "./pages/StudentRoadmap";
import StudentAnnouncements from "./pages/StudentAnnouncements";
import StudentSettings from "./pages/StudentSettings";

import ProtectedRoute from "./utils/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* PUBLIC ROUTES */}
        <Route path="/" element={<RoleSelect />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/otp" element={<OTPVerify />} />

        {/* STUDENT ROUTES */}
        <Route
          path="/student"
          element={
            <ProtectedRoute allowedRoles={["student"]}>
              <StudentDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/student/subjects"
          element={
            <ProtectedRoute allowedRoles={["student"]}>
              <StudentSubjects />
            </ProtectedRoute>
          }
        />

        <Route
          path="/student/roadmap"
          element={
            <ProtectedRoute allowedRoles={["student"]}>
              <StudentRoadmap />
            </ProtectedRoute>
          }
        />

        <Route
          path="/student/announcements"
          element={
            <ProtectedRoute allowedRoles={["student"]}>
              <StudentAnnouncements />
            </ProtectedRoute>
          }
        />

        <Route
          path="/student/settings"
          element={
            <ProtectedRoute allowedRoles={["student"]}>
              <StudentSettings />
            </ProtectedRoute>
          }
        />

        {/* TEACHER ROUTE */}
        <Route
          path="/teacher"
          element={
            <ProtectedRoute allowedRoles={["teacher"]}>
              <TeacherDashboard />
            </ProtectedRoute>
          }
        />

        {/* ADMIN ROUTE */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;