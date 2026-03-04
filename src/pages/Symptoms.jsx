import { useState } from "react";

export default function Symptoms() {
  const [symptoms, setSymptoms] = useState([]);
  const [input, setInput] = useState("");

  const addSymptom = () => {
    setSymptoms([...symptoms, input]);
    setInput("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Track Symptoms</h1>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter symptom"
      />
      <button onClick={addSymptom}>Add</button>

      <ul>
        {symptoms.map((symptom, index) => (
          <li key={index}>{symptom}</li>
        ))}
      </ul>
    </div>
  );
}
