import { useState, useEffect } from "react";
import DashboardLayout from "../layouts/DashboardLayout";

export default function StudentSubjects() {
  const [subject, setSubject] = useState("");
  const [subjects, setSubjects] = useState([]);

  // ✏️ Edit states
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState("");

  // Load from localStorage
  useEffect(() => {
  const loadData = () => {
    const saved = JSON.parse(localStorage.getItem("subjects")) || [];
    setSubjects(saved);
  };

  // initial load
  loadData();

  // reload when coming back to page
  window.addEventListener("focus", loadData);

  return () => {
    window.removeEventListener("focus", loadData);
  };
}, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("subjects", JSON.stringify(subjects));
  }, [subjects]);

  // ➕ Add Subject
  const addSubject = () => {
    if (!subject.trim()) return;

    setSubjects([
      ...subjects,
      { name: subject, completed: false }
    ]);

    setSubject("");
  };

  // ❌ Delete Subject
  const deleteSubject = (index) => {
    const updated = subjects.filter((_, i) => i !== index);
    setSubjects(updated);
  };

  // ✏️ Start Editing
  const startEdit = (index) => {
    setEditIndex(index);
    setEditValue(subjects[index].name); // ✅ FIXED
  };

  // 💾 Save Edit
  const saveEdit = () => {
    const updated = [...subjects];
    updated[editIndex].name = editValue; // ✅ FIXED
    setSubjects(updated);
    setEditIndex(null);
  };

  // ✅ Toggle Complete
  const toggleComplete = (index) => {
    const updated = [...subjects];
    updated[index].completed = !updated[index].completed;
    setSubjects(updated);
  };

  return (
    <DashboardLayout>
      <h1 className="page-title">📚 My Subjects</h1>

      {/* ADD SUBJECT */}
      <div className="card">
        <input
          className="input"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="Enter subject (e.g. DBMS)"
        />

        <button className="btn" onClick={addSubject}>
          ➕ Add Subject
        </button>
      </div>

      {/* SUBJECT LIST */}
      <div className="card">
        <h3>Your Subjects</h3>

        {subjects.length === 0 ? (
          <p>No subjects added yet</p>
        ) : (
          subjects.map((sub, index) => (
            <div key={index} className="subject-item">

              {editIndex === index ? (
                <>
                  <input
                    className="input"
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value)}
                  />

                  <button className="save-btn" onClick={saveEdit}>
                    💾
                  </button>

                  <button
                    className="cancel-btn"
                    onClick={() => setEditIndex(null)}
                  >
                    ❌
                  </button>
                </>
              ) : (
                <>
                  <span
                    style={{
                      textDecoration: sub.completed
                        ? "line-through"
                        : "none",
                    }}
                  >
                    {sub.name}
                  </span>

                  <div>
                    {/* ✅ COMPLETE BUTTON */}
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