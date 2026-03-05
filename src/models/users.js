import { v4 as uuidv4 } from "uuid";

export const createUser = ({
  name = "",
  age = null,
  height = null, // in cm
  weight = null, // in kg
}) => {
  return {
    id: uuidv4(),
    name,
    age,
    height,
    weight,
    createdAt: new Date().toISOString(),
  };
};
