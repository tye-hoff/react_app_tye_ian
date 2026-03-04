import { v4 as uuidv4 } from "uuid";

export const createMedication = ({
  name,
  dosage,
  frequency,
  startDate,
  endDate = null,
}) => {
  return {
    id: uuidv4(),
    name,
    dosage,
    frequency,
    startDate,
    endDate,
  };
};
