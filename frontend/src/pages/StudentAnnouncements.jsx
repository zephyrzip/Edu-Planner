import DashboardLayout from "../layouts/DashboardLayout";

export default function StudentAnnouncements() {
  return (
    <DashboardLayout>
      <h1>📢 Announcements</h1>
      <div className="dashboard-card">No new announcements</div>
    </DashboardLayout>
  );
}