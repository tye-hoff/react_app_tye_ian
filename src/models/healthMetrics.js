export const createHealthMetrics = ({
  bmi = null,
  bloodPressure = "",
  cholesterol = null,
  heartRate = null,
}) => {
  return {
    bmi,
    bloodPressure,
    cholesterol,
    heartRate,
    updatedAt: new Date().toISOString(),
  };
};
