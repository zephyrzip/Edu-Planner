import DashboardLayout from "../layouts/DashboardLayout";
import "../styles/auth.css";

export default function StudentDashboard() {
  return (
    <DashboardLayout>
      <h1>📚 Student Dashboard</h1>

      <div className="dashboard-card">
        <h3>📢 Announcements</h3>
        <p>Exam next week</p>
        <p>New syllabus uploaded</p>
      </div>

      <div className="dashboard-card">
        <h3>📅 Today's Plan</h3>
        <p>✔ Study DBMS</p>
        <p>✔ Practice DSA</p>
      </div>
    </DashboardLayout>
  );
}