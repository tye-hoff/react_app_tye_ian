import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ display: "flex", gap: "20px", padding: "20px" }}>
      <Link to="/">Dashboard</Link>
      <Link to="/symptoms">Symptoms</Link>
      <Link to="/medications">Medications</Link>
      <Link to="/appointments">Appointments</Link>
    </nav>
  );
}
