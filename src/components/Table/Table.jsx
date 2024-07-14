import React, { useEffect } from "react";
import { useGlobalContext } from "../../context/globalContextProvider";
import { TableItem } from "../TableItem/TableItem";

export const Table = () => {
  const { leaderboard } = useGlobalContext();
  // useEffect(() => {
  //   fetchChatboxLeaderboard();
  // }, []);

  return (
    <div>
      <header className="text-3xl mb-2 podium_header">
        Użytkownicy z największą ilością{" "}
        <span className="tracking-wider">wiadomości</span>:
      </header>
      {leaderboard.map((chatter, index) => (
        <TableItem chatter={chatter} index={index} key={index} />
      ))}
    </div>
  );
};
