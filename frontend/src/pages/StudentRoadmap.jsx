import { useState, useEffect } from "react";
import DashboardLayout from "../layouts/DashboardLayout";

export default function StudentRoadmap() {
  const [subject, setSubject] = useState("");
  const [roadmap, setRoadmap] = useState(null);
  const [completed, setCompleted] = useState([]);

  // ✅ Auto-load subject from Subjects page
  useEffect(() => {
    const savedSubjects = JSON.parse(localStorage.getItem("subjects")) || [];
    if (savedSubjects.length > 0) {
      setSubject(savedSubjects[0].name);
    }
  }, []);

  // ✅ Load roadmap + progress
  useEffect(() => {
    const savedRoadmap = JSON.parse(localStorage.getItem("roadmap"));
    const savedCompleted = JSON.parse(localStorage.getItem("completed"));

    if (savedRoadmap) setRoadmap(savedRoadmap);
    if (savedCompleted) setCompleted(savedCompleted);
  }, []);

  // ✅ Save to localStorage
  useEffect(() => {
    if (roadmap) {
      localStorage.setItem("roadmap", JSON.stringify(roadmap));
      localStorage.setItem("completed", JSON.stringify(completed));
    }
  }, [roadmap, completed]);

  // ✅ Generate roadmap based on subject
  const generateRoadmap = () => {
    if (!subject.trim()) return;

    let data;

    if (subject.toLowerCase().includes("dbms")) {
      data = {
        high: ["Transactions", "Normalization", "SQL"],
        medium: ["Indexing", "Joins"],
        low: ["History of DBMS"],
      };
    } else if (subject.toLowerCase().includes("dsa")) {
      data = {
        high: ["Arrays", "Linked List", "Trees"],
        medium: ["Graphs", "Recursion"],
        low: ["Advanced Algorithms"],
      };
    } else {
      data = {
        high: ["Basics", "Core Concepts"],
        medium: ["Practice Problems"],
        low: ["Advanced Topics"],
      };
    }

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
          <span
            style={{
              marginLeft: "10px",
              textDecoration: completed.includes(item)
                ? "line-through"
                : "none",
            }}
          >
            {item}
          </span>
        </div>
      ))}
    </div>
  );

  return (
    <DashboardLayout>
      <h1>🗺 AI Study Roadmap</h1>

      {/* INPUT */}
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

      {/* PROGRESS */}
      {roadmap && (
        <div className="dashboard-card">
          <h3>📊 Progress</h3>
          <p>{getProgress()}% Completed</p>
        </div>
      )}

      {/* ROADMAP */}
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