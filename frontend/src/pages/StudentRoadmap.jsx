import { useState, useEffect } from "react";
import DashboardLayout from "../layouts/DashboardLayout";

export default function StudentRoadmap() {
  const [subject, setSubject] = useState("");
  const [roadmap, setRoadmap] = useState(null);
  const [completed, setCompleted] = useState([]);

  // ✅ Load from localStorage on start
  useEffect(() => {
    const savedRoadmap = JSON.parse(localStorage.getItem("roadmap"));
    const savedCompleted = JSON.parse(localStorage.getItem("completed"));

    if (savedRoadmap) setRoadmap(savedRoadmap);
    if (savedCompleted) setCompleted(savedCompleted);
  }, []);

  // ✅ Save to localStorage when changed
  useEffect(() => {
    localStorage.setItem("roadmap", JSON.stringify(roadmap));
    localStorage.setItem("completed", JSON.stringify(completed));
  }, [roadmap, completed]);

  // ✅ Generate roadmap
  const generateRoadmap = () => {
    const data = {
      high: ["DBMS Transactions", "OS Scheduling"],
      medium: ["Normalization", "Deadlocks"],
      low: ["History of DBMS"]
    };

    setRoadmap(data);
    setCompleted([]);
  };

  // ✅ Toggle completion
  const toggleComplete = (topic) => {
    setCompleted((prev) =>
      prev.includes(topic)
        ? prev.filter((t) => t !== topic)
        : [...prev, topic]
    );
  };

  // ✅ Progress calculation
  const getProgress = () => {
    if (!roadmap) return 0;

    const total =
      roadmap.high.length +
      roadmap.medium.length +
      roadmap.low.length;

    return Math.round((completed.length / total) * 100);
  };

  // ✅ Render section
  const renderSection = (title, items) => (
    <div className="dashboard-card">
      <h3>{title}</h3>
      {items.map((item, i) => (
        <div key={i}>
          <input
            type="checkbox"
            checked={completed.includes(item)}
            onChange={() => toggleComplete(item)}
          />
          <span style={{ marginLeft: "10px" }}>{item}</span>
        </div>
      ))}
    </div>
  );

  return (
    <DashboardLayout>
      <h1>🗺 AI Study Roadmap</h1>

      {/* Input + Generate */}
      <div className="dashboard-card">
        <h3>🤖 Generate AI Roadmap</h3>

        <input
          className="input"
          placeholder="Enter subject (e.g. DBMS)"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />

        <button className="btn" onClick={generateRoadmap}>
          Generate
        </button>
      </div>

      {/* Progress */}
      {roadmap && (
        <div className="dashboard-card">
          <h3>📊 Progress</h3>
          <p>{getProgress()}% Completed</p>
        </div>
      )}

      {/* Sections */}
      {roadmap && (
        <>
          {renderSection("🔥 High Priority", roadmap.high)}
          {renderSection("⚡ Medium Priority", roadmap.medium)}
          {renderSection("📌 Low Priority", roadmap.low)}
        </>
      )}
    </DashboardLayout>
  );
}