import React from "react";
import { useGlobalContext } from "../../context/globalContextProvider";
import { PodiumItem } from "../PodiumItem/PodiumItem";

export const Podium = () => {
  const { leaderboard } = useGlobalContext();

  return (
    <main className="podium-container">
      <div className="podium">
        {leaderboard.slice(0, 3).map((chatter, index) => (
          <PodiumItem chatter={chatter} index={index} key={index} />
        ))}
      </div>
    </main>
  );
};
