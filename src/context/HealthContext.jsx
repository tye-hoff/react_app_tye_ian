import { createContext, useState } from "react";

export const HealthContext = createContext();

export const HealthProvider = ({ children }) => {
  const [symptoms, setSymptoms] = useState([]);
  const [medications, setMedications] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [metrics, setMetrics] = useState({});

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
