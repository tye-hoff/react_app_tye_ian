import { useContext, useState } from "react";
import { HealthContext } from "../context/HealthContext";
import { createSymptom } from "../models/symptom";
import "../components/App/App.css";

export default function Symptoms() {
  const { symptoms, setSymptoms } = useContext(HealthContext);

  const [formData, setFormData] = useState({
    name: "",
    severity: 5,
    notes: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: name === "severity" ? Number(value) : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formData.name.trim()) return;

    const newSymptom = createSymptom({
      name: formData.name.trim(),
      severity: formData.severity,
      notes: formData.notes.trim(),
    });

    setSymptoms((prev) => [newSymptom, ...prev]);

    setFormData({
      name: "",
      severity: 5,
      notes: "",
    });
  };

  const handleDelete = (id) => {
    setSymptoms((prev) => prev.filter((symptom) => symptom.id !== id));
  };

  return (
    <div className="page-shell">
      <header className="page-header">
        <h1 className="page-title">Symptoms</h1>
        <p className="page-description">
          Log symptoms, track severity, and keep a running history.
        </p>
      </header>

      <section className="health-card">
        <div className="health-card-header">
          <h3>Add Symptom</h3>
        </div>

        <form onSubmit={handleSubmit} className="symptom-form">
          <div className="form-group">
            <label htmlFor="name">Symptom Name</label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Headache"
            />
          </div>

          <div className="form-group">
            <label htmlFor="severity">Severity (1-10)</label>
            <input
              id="severity"
              name="severity"
              type="range"
              min="1"
              max="10"
              value={formData.severity}
              onChange={handleChange}
            />
            <span className="severity-value">{formData.severity}</span>
          </div>

          <div className="form-group">
            <label htmlFor="notes">Notes</label>
            <textarea
              id="notes"
              name="notes"
              rows="4"
              value={formData.notes}
              onChange={handleChange}
              placeholder="Add any context, triggers, or observations"
            />
          </div>

          <button type="submit" className="primary-button">
            Save Symptom
          </button>
        </form>
      </section>

      <section className="health-card">
        <div className="health-card-header">
          <h3>Recent Symptoms</h3>
        </div>

        {symptoms.length === 0 ? (
          <p className="empty-state">No symptoms logged yet.</p>
        ) : (
          <div className="symptom-list">
            {symptoms.map((symptom) => (
              <article key={symptom.id} className="symptom-item">
                <div className="symptom-item-top">
                  <h4>{symptom.name}</h4>
                  <span className="severity-badge">
                    Severity: {symptom.severity}
                  </span>
                </div>

                {symptom.notes && <p>{symptom.notes}</p>}

                <div className="symptom-item-bottom">
                  <small>
                    Logged: {new Date(symptom.date).toLocaleDateString()}
                  </small>

                  <button
                    type="button"
                    className="danger-button"
                    onClick={() => handleDelete(symptom.id)}
                  >
                    Delete
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
