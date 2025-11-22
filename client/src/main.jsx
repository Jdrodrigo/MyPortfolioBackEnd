import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// Your real stylesheet (NOT index.css)
import "./styles.css";

// React Router handles page navigation
import { BrowserRouter } from "react-router-dom";

// Your AuthProvider from Step 1
import { AuthProvider } from "./context/AuthContext.jsx";

// Render the root React component
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Enables page navigation */}
    <BrowserRouter>
      {/* Makes user + token available across the app */}
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);

