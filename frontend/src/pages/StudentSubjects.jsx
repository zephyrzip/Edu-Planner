import { useState, useEffect } from "react";
import DashboardLayout from "../layouts/DashboardLayout";

export default function StudentSubjects() {
  const [subject, setSubject] = useState("");
  const [subjects, setSubjects] = useState([]);

  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState("");

  // 🔍 New states
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  // Load from localStorage
  useEffect(() => {
    const loadData = () => {
      const saved = JSON.parse(localStorage.getItem("subjects")) || [];
      setSubjects(saved);
    };

    loadData();
    window.addEventListener("focus", loadData);

    return () => window.removeEventListener("focus", loadData);
  }, []);

  // Save
  useEffect(() => {
    localStorage.setItem("subjects", JSON.stringify(subjects));
  }, [subjects]);

  // ➕ Add
  const addSubject = () => {
    if (!subject.trim()) return;

    setSubjects([...subjects, { name: subject, completed: false }]);
    setSubject("");
  };

  // ❌ Delete
  const deleteSubject = (index) => {
    const updated = subjects.filter((_, i) => i !== index);
    setSubjects(updated);
  };

  // ✏️ Edit
  const startEdit = (index) => {
    setEditIndex(index);
    setEditValue(subjects[index].name);
  };

  const saveEdit = () => {
    const updated = [...subjects];
    updated[editIndex].name = editValue;
    setSubjects(updated);
    setEditIndex(null);
  };

  // ✅ Toggle
  const toggleComplete = (index) => {
    const updated = [...subjects];
    updated[index].completed = !updated[index].completed;
    setSubjects(updated);
  };

  // 🔍 Filter logic
  const filteredSubjects = subjects
    .filter((s) =>
      s.name.toLowerCase().includes(search.toLowerCase())
    )
    .filter((s) => {
      if (filter === "completed") return s.completed;
      if (filter === "pending") return !s.completed;
      return true;
    });

  return (
    <DashboardLayout>
      <h1 className="page-title">📚 My Subjects</h1>

      {/* ➕ ADD */}
      <div className="card">
        <div style={{ display: "flex", gap: "10px" }}>
          <input
            className="input"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Enter subject (e.g. DBMS)"
          />

          <button className="btn" onClick={addSubject}>
            ➕ Add
          </button>
        </div>
      </div>

      {/* 🔍 SEARCH + FILTER */}
      <div className="card" style={{ display: "flex", gap: "10px" }}>
        <input
          className="input"
          placeholder="🔍 Search subjects..."
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="input"
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="pending">Pending</option>
        </select>
      </div>

      {/* 📊 STATS */}
      <div className="card" style={{ display: "flex", gap: "20px" }}>
        <span>📚 Total: {subjects.length}</span>
        <span>
          ✅ Completed: {subjects.filter((s) => s.completed).length}
        </span>
      </div>

      {/* 📋 LIST */}
      <div className="card">
        <h3>Your Subjects</h3>

        {filteredSubjects.length === 0 ? (
          <p style={{ textAlign: "center", opacity: 0.6 }}>
            📭 No subjects found
          </p>
        ) : (
          filteredSubjects.map((sub, index) => (
            <div
              key={index}
              className="subject-item"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "10px",
              }}
            >
              {editIndex === index ? (
                <>
                  <input
                    className="input"
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value)}
                  />

                  <div>
                    <button className="save-btn" onClick={saveEdit}>
                      💾
                    </button>

                    <button
                      className="cancel-btn"
                      onClick={() => setEditIndex(null)}
                    >
                      ❌
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <span
                    style={{
                      textDecoration: sub.completed
                        ? "line-through"
                        : "none",
                      fontWeight: "500",
                    }}
                  >
                    {sub.name}
                  </span>

                  <div style={{ display: "flex", gap: "8px" }}>
                    <button
                      className="complete-btn"
                      onClick={() => toggleComplete(index)}
                    >
                      {sub.completed ? "✅" : "⬜"}
                    </button>

                    <button
                      className="edit-btn"
                      onClick={() => startEdit(index)}
                    >
                      ✏️
                    </button>

                    <button
                      className="delete-btn"
                      onClick={() => deleteSubject(index)}
                    >
                      🗑
                    </button>
                  </div>
                </>
              )}
            </div>
          ))
        )}
      </div>
    </DashboardLayout>
  );
}