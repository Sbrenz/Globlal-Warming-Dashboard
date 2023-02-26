import React from "react";
import ReactDOM from "react-dom/client";

// Style
import "./index.css";
// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
// import App
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
