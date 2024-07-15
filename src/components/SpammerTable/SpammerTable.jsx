import React from "react";
import { useGlobalContext } from "../../context/globalContextProvider";
import { TableItem } from "../TableItem/TableItem";

export const SpammerTable = () => {
  const { leaderboardEmotes } = useGlobalContext();

  // useEffect(() => {
  //   fetchChatboxEmotesLeaderboard();
  // }, []);

  return (
    <div className="p-10">
      <header className="text-3xl mb-4 podium_header">
        Użytkownicy z największą ilością wysłanych{" "}
        <span className="tracking-wider">emotek</span>:
      </header>
      {leaderboardEmotes.map((chatter, index) => (
        <TableItem chatter={chatter} index={index} key={index} />
      ))}
    </div>
  );
};
