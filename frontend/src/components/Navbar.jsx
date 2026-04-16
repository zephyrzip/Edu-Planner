import DarkModeToggle from "./DarkModeToggle";

export default function Navbar() {
  return (
    <div className="navbar">
      <h2 className="logo">EduPlanner</h2>

      <div className="nav-right">
        <DarkModeToggle />
      </div>
    </div>
  );
}