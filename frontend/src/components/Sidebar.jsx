import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();

  return (
    <div className="sidebar">
      <h2>EduPlanner</h2>

      <div className="menu-item" onClick={() => navigate("/student")}>
        🏠 Dashboard
      </div>

      <div className="menu-item" onClick={() => navigate("/student/subjects")}>
        📚 My Subjects
      </div>

      <div className="menu-item" onClick={() => navigate("/student/roadmap")}>
        🗺 Roadmap
      </div>

      <div className="menu-item" onClick={() => navigate("/student/announcements")}>
        📢 Announcements
      </div>

      <div className="menu-item" onClick={() => navigate("/student/settings")}>
        ⚙ Settings
      </div>
    </div>
  );
}