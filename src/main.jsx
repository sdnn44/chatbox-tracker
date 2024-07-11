import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import { AppProvider } from "./context/globalContextProvider";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <AppProvider>
              <App />
            </AppProvider>
          }
        />
        <Route
          path="/chatter/:userName"
          element={
            <AppProvider>
              <App />
            </AppProvider>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
