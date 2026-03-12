import HealthCard from "../components/HealthCard/HealthCard";
import "./Dashboard.css";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <HealthCard title="BMI" value="24.3" subtitle="Normal range" />

      <HealthCard title="Blood Pressure" value="120/80" subtitle="Healthy" />

      <HealthCard title="Heart Rate" value="72 bpm" subtitle="Resting" />

      <HealthCard title="Upcoming Appointments">
        <p>No upcoming appointments</p>
      </HealthCard>

      <HealthCard title="Recent Symptoms">
        <p>No symptoms logged</p>
      </HealthCard>

      <HealthCard title="Active Medications">
        <p>No medications added</p>
      </HealthCard>
    </div>
  );
}
