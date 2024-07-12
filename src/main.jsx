import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import { Navbar } from "./components/Navbar/Navbar";
import { AppProvider } from "./context/globalContextProvider";
import "./index.css";
import { Leaderboard } from "./pages/Leaderboard/Leaderboard";

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
        <Route
          path="/leaderboard"
          element={
            <AppProvider>
              <Navbar />
              <Leaderboard />
            </AppProvider>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
