import { useState, useEffect } from "react";

export default function DarkModeToggle() {
  const [dark, setDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    // ✅ FIX: don't overwrite entire className
    document.body.classList.remove("light", "dark");
    document.body.classList.add(dark ? "dark" : "light");

    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <button onClick={() => setDark(!dark)} className="btn">
      {dark ? "☀" : "🌙"}
    </button>
  );
}