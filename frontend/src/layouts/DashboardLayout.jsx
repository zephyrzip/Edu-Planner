import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function DashboardLayout({ children }) {
  return (
    <>
      <Navbar />
      <Sidebar />

      <div className="main-content">
        {children}
      </div>
    </>
  );
}