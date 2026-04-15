import { BrowserRouter, Routes, Route } from "react-router-dom";

import RoleSelect from "./pages/RoleSelect";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import OTPVerify from "./pages/OTPVerify";
import StudentDashboard from "./pages/StudentDashboard";

import StudentSubjects from "./pages/StudentSubjects";
import StudentRoadmap from "./pages/StudentRoadmap";
import StudentAnnouncements from "./pages/StudentAnnouncements";
import StudentSettings from "./pages/StudentSettings";
import TeacherDashboard from "./pages/TeacherDashboard";
import AdminDashboard from "./pages/AdminDashboard";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RoleSelect />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/otp" element={<OTPVerify />} />

        <Route path="/student" element={<StudentDashboard />} />
        <Route path="/student/subjects" element={<StudentSubjects />} />
        <Route path="/student/roadmap" element={<StudentRoadmap />} />
        <Route path="/student/announcements" element={<StudentAnnouncements />} />
        <Route path="/student/settings" element={<StudentSettings />} />

        <Route path="/teacher" element={<TeacherDashboard />} />
        <Route path="/admin" element={<AdminDashboard />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;