import { v4 as uuidv4 } from "uuid";

export const createSymptom = ({
  name,
  severity,
  notes = "",
  date = new Date().toISOString(),
}) => {
  return {
    id: uuidv4(),
    name,
    severity,
    notes,
    date,
  };
};
