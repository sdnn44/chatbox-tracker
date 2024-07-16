import { AnimatePresence } from "framer-motion";
import React from "react";
import { useLocation, useRoutes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Home } from "./pages/Home/Home";
import { Leaderboard } from "./pages/Leaderboard/Leaderboard";
import { Spammer } from "./pages/Spammer/Spammer";

export default function App() {
  const element = useRoutes([
    {
      path: "/",
      element: (
        <div className="flex justify-center items-center w-full flex-col gap-10">
          <Navbar />
          <Home />
        </div>
      ),
      children: [
        {
          path: "chatter/:userName",
          element: (
            <div className="flex justify-center items-center w-full flex-col gap-10">
              <Navbar />
              <Home />
            </div>
          ),
        },
      ],
    },
    {
      path: "/leaderboard",
      element: (
        <>
          <Navbar />
          <Leaderboard />
        </>
      ),
    },
    {
      path: "/spammer-leaderboard",
      element: (
        <>
          <Navbar />
          <Spammer />
        </>
      ),
    },
  ]);

  const location = useLocation();

  if (!element) return null;

  return (
    <AnimatePresence mode="wait" initial={false}>
      {React.cloneElement(element, { key: location.pathname })}
    </AnimatePresence>
  );
}
