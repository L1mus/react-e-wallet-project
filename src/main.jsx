import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./globals.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
// import { initializeDB } from "./data/mockDatabase.js";

// initializeDB();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
