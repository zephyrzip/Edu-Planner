import { useEffect, useState } from "react";

export default function DarkModeToggle() {
  const [theme, setTheme] = useState("light");

  // Load saved theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);

    document.body.classList.remove("light", "dark");
    document.body.classList.add(savedTheme);
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";

    setTheme(newTheme);

    document.body.classList.remove("light", "dark");
    document.body.classList.add(newTheme);

    localStorage.setItem("theme", newTheme);
  };

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      
      {/* Label */}
      <span style={{ fontSize: "14px", fontWeight: "500" }}>
        {theme === "light" ? "Light Mode" : "Dark Mode"}
      </span>

      {/* Button */}
      <button className="theme-btn" onClick={toggleTheme}>
        {theme === "light" ? "🌙" : "☀️"}
      </button>

    </div>
  );
}