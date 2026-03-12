import "./HealthCard.css";

export default function HealthCard({ title, value, subtitle, children }) {
  return (
    <div className="health-card">
      <div className="health-card-header">
        <h3>{title}</h3>
      </div>

      <div className="health-card-body">
        {value && <p className="health-card-value">{value}</p>}
        {subtitle && <p className="health-card-subtitle">{subtitle}</p>}

        {children}
      </div>
    </div>
  );
}
