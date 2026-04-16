import { useState, useEffect } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import "../styles/auth.css";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function StudentDashboard() {

  // 🔥 Dynamic Stats
  const [stats, setStats] = useState({
    subjects: 5,
    tasks: 12,
    streak: 4,
  });

  // 🔥 Simulate live update
  useEffect(() => {
    setTimeout(() => {
      setStats({
        subjects: 6,
        tasks: 9,
        streak: 5,
      });
    }, 2000);
  }, []);

  // 📊 Chart Data
  const data = [
    { name: "Mon", study: 2 },
    { name: "Tue", study: 3 },
    { name: "Wed", study: 1 },
    { name: "Thu", study: 4 },
    { name: "Fri", study: 2 },
  ];

  return (
    <DashboardLayout>

      <h1 className="page-title">📊 Student Dashboard</h1>

      {/* ===== STATS ===== */}
      <div className="stats">
        <div className="card">
          <h3>📚 Subjects</h3>
          <p>{stats.subjects}</p>
        </div>

        <div className="card">
          <h3>📝 Tasks</h3>
          <p>{stats.tasks}</p>
        </div>

        <div className="card">
          <h3>🔥 Streak</h3>
          <p>{stats.streak} days</p>
        </div>
      </div>

      {/* ===== CHART ===== */}
      <div className="card">
        <h3>📊 Weekly Study Hours</h3>

        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="study" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* ===== PROGRESS ===== */}
      <div className="card">
        <h3>📈 Course Progress</h3>

        <div className="progress-bar">
          <div className="progress-fill" style={{ width: "70%" }}></div>
        </div>

        <p>70% Completed</p>
      </div>

      {/* ===== ANNOUNCEMENTS ===== */}
      <div className="card">
        <h3>📢 Announcements</h3>
        <p>Exam next week</p>
        <p>New syllabus uploaded</p>
      </div>

      {/* ===== TODAY PLAN ===== */}
      <div className="card">
        <h3>📅 Today's Plan</h3>
        <p>✔ Study DBMS</p>
        <p>✔ Practice DSA</p>
      </div>

    </DashboardLayout>
  );
}