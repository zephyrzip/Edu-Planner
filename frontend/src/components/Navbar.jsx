import DarkModeToggle from "./DarkModeToggle";

export default function Navbar() {
  return (
    <div style={{
      display: "flex",
      justifyContent: "space-between",
      padding: "10px 20px"
    }}>
      <h3>Dashboard</h3>
      <DarkModeToggle />
    </div>
  );
}