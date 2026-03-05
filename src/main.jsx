import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App";
import { HealthProvider } from "./context/HealthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HealthProvider>
      <App />
    </HealthProvider>
  </React.StrictMode>,
);
