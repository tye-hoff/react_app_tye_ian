import { createContext, useState, useEffect } from "react";

export const HealthContext = createContext();

export const HealthProvider = ({ children }) => {
  // Load saved data from localStorage
  const [symptoms, setSymptoms] = useState(() => {
    const saved = localStorage.getItem("symptoms");
    return saved ? JSON.parse(saved) : [];
  });

  const [medications, setMedications] = useState(() => {
    const saved = localStorage.getItem("medications");
    return saved ? JSON.parse(saved) : [];
  });

  const [appointments, setAppointments] = useState(() => {
    const saved = localStorage.getItem("appointments");
    return saved ? JSON.parse(saved) : [];
  });

  const [metrics, setMetrics] = useState(() => {
    const saved = localStorage.getItem("metrics");
    return saved ? JSON.parse(saved) : {};
  });

  // Save to localStorage whenever data changes
  useEffect(() => {
    localStorage.setItem("symptoms", JSON.stringify(symptoms));
  }, [symptoms]);

  useEffect(() => {
    localStorage.setItem("medications", JSON.stringify(medications));
  }, [medications]);

  useEffect(() => {
    localStorage.setItem("appointments", JSON.stringify(appointments));
  }, [appointments]);

  useEffect(() => {
    localStorage.setItem("metrics", JSON.stringify(metrics));
  }, [metrics]);

  return (
    <HealthContext.Provider
      value={{
        symptoms,
        setSymptoms,
        medications,
        setMedications,
        appointments,
        setAppointments,
        metrics,
        setMetrics,
      }}
    >
      {children}
    </HealthContext.Provider>
  );
};
