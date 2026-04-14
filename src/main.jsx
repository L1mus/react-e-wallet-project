import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./globals.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
// import { initializeDB } from "./data/mockDatabase.js";
import store from "./redux/store.js";
import { Provider } from "react-redux";

// initializeDB();

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>
  </Provider>,
);
