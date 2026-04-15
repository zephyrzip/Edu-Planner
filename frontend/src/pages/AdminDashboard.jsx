import DashboardLayout from "../layouts/DashboardLayout";

export default function AdminDashboard() {
  return (
    <DashboardLayout>
      <h1>🛠 Admin Dashboard</h1>

      <div className="dashboard-card">
        <h3>👥 Manage Users</h3>
        <p>Add/remove students and teachers</p>
      </div>

      <div className="dashboard-card">
        <h3>⚙ System Control</h3>
        <p>Manage platform settings</p>
      </div>
    </DashboardLayout>
  );
}