import { useContext, useState } from "react";
import { HealthContext } from "../../context/HealthContext";
import { createSymptom } from "../../models/symptom";

export default function Symptoms() {
  const { symptoms, setSymptoms } = useContext(HealthContext);
  const [name, setName] = useState("");

  const addSymptom = () => {
    const newSymptom = createSymptom({ name, severity: 5 });
    setSymptoms([...symptoms, newSymptom]);
    setName("");
  };

  return (
    <div>
      <h1>Symptoms</h1>

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter symptom"
      />

      <button onClick={addSymptom}>Add</button>

      <ul>
        {symptoms.map((symptom) => (
          <li key={symptom.id}>{symptom.name}</li>
        ))}
      </ul>
    </div>
  );
}
