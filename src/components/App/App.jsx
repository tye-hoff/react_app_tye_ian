// import { useState } from "react";
// import reactLogo from "/assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Dashboard from "../../pages/Dashboard";
import Symptoms from "../../pages/Symptoms";
import Medications from "../../pages/Medications";
import Appointments from "../../pages/Appointments";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/symptoms" element={<Symptoms />} />
        <Route path="/medications" element={<Medications />} />
        <Route path="/appointments" element={<Appointments />} />
      </Routes>
    </Router>
  );
}
