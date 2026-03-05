export const calculateBMI = (heightCm, weightKg) => {
  const heightM = heightCm / 100;
  return (weightKg / (heightM * heightM)).toFixed(1);
};

export const getBMICategory = (bmi) => {
  if (bmi < 18.5) return "Underweight";
  if (bmi < 25) return "Normal";
  if (bmi < 30) return "Overweight";
  return "Obese";
};

export const medRiskAlert = () => {
  if (BMI > 30) return "obesity warning";
  if (BP > 140 / 90) return "hypertension alert";
};
