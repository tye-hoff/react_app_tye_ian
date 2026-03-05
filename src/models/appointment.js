import { v4 as uuidv4 } from "uuid";

export const createAppointment = ({
  doctor = "",
  specialty = "",
  location = "",
  date = "",
  notes = "",
}) => {
  return {
    id: uuidv4(),
    doctor,
    specialty,
    location,
    date,
    notes,
    createdAt: new Date().toISOString(),
  };
};
