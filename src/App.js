import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// for debuggin chart
import Chart from "chart.js/auto";

// Import components
import Home from "./components/home/Home";
import Dashboards from "./components/dashboards/Dashboards";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Dashboard" element={<Dashboards />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
