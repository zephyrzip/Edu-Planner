import DashboardLayout from "../layouts/DashboardLayout";

export default function TeacherDashboard() {
  return (
    <DashboardLayout>
      <h1>👨‍🏫 Teacher Dashboard</h1>

      <div className="dashboard-card">
        <h3>📤 Upload Materials</h3>
        <p>Upload notes and assignments</p>
      </div>

      <div className="dashboard-card">
        <h3>📢 Announcements</h3>
        <p>Post updates for students</p>
      </div>
    </DashboardLayout>
  );
}