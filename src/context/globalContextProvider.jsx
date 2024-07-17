import { child, get, ref } from "firebase/database";
import React, { useContext, useEffect, useState } from "react";
import { database } from "../firebase/firebase";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [senderName, setSenderName] = useState("Trivor");
  const [userMessages, setUserMessages] = useState([]);
  const [numberOfUserMessages, setNumberOfUserMessages] = useState(0);
  const [chatterAvatar, setChatterAvatar] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const [chatboxUsernames, setChatboxUsernames] = useState([]);
  const [leaderboard, setLeaderboard] = useState([]);
  const [leaderboardEmotes, setLeaderboardEmotes] = useState([]);

  const fetchSpecificChatboxUser = () => {
    const cachedUserData = localStorage.getItem(`chatboxUser_${senderName}`);
    if (cachedUserData) {
      const data = JSON.parse(cachedUserData);
      const sortedMessages = data.messagesArray.sort(
        (a, b) => new Date(b.date) - new Date(a.date)
      );
      setUserMessages(sortedMessages);
      setNumberOfUserMessages(data.messagesArray.length);
      setChatterAvatar(data.messagesArray[0]?.img || "");
      setLoading(false);
      return;
    }

    const dbRef = ref(database);
    get(child(dbRef, `chatbox/users/${senderName}`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          const messages = snapshot.val().messages;

          const messagesArray = Object.keys(messages).map((key) => ({
            id: key,
            ...messages[key],
          }));
          const sortedMessages = messagesArray.sort(
            (a, b) => new Date(b.date) - new Date(a.date)
          );
          setNumberOfUserMessages(messagesArray.length);
          setUserMessages(messagesArray);
          setChatterAvatar(messagesArray[0].img);

          localStorage.setItem(
            `chatboxUser_${senderName}`,
            JSON.stringify({ messagesArray })
          );
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const fetchAllChatboxNames = () => {
    const cachedUserNames = localStorage.getItem("chatboxUsernames");
    if (cachedUserNames) {
      console.log("setChatboxUsernames from local storage:");
      setChatboxUsernames(JSON.parse(cachedUserNames));
      setLoading(false);
      return;
    }

    const dbRef = ref(database);
    get(child(dbRef, `chatbox/users`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          const usersData = snapshot.val();
          const userNames = Object.keys(usersData);
          console.log(userNames);
          setChatboxUsernames(userNames);
          localStorage.setItem("chatboxUsernames", JSON.stringify(userNames));
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const fetchChatboxLeaderboard = () => {
    const dbRef = ref(database);
    get(child(dbRef, `chatbox/users`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          const usersData = snapshot.val();
          const userNames = Object.keys(usersData);

          const userMessageCounts = userNames.map((username) => {
            const messages = usersData[username].messages || {};
            return {
              username,
              messageCount: Object.keys(messages).length,
            };
          });

          const sortedUsers = userMessageCounts.sort(
            (a, b) => b.messageCount - a.messageCount
          );
          const topUsers = sortedUsers.slice(0, 10);

          setLeaderboard(topUsers);

          console.log("Top Three Users:", topUsers);
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const fetchChatboxEmotesLeaderboard = () => {
    const dbRef = ref(database);
    get(child(dbRef, `chatbox/users`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          const usersData = snapshot.val();
          const userNames = Object.keys(usersData);

          const userMessageCounts = userNames.map((username) => {
            const messages = usersData[username].messages || {};
            const filteredMessages = Object.values(messages).filter((message) =>
              message.message.match(/^:[^:]+:$/)
            );

            return {
              username,
              messageCount: filteredMessages.length,
            };
          });

          const sortedUsers = userMessageCounts.sort(
            (a, b) => b.messageCount - a.messageCount
          );
          const topUsers = sortedUsers.slice(0, 10);
          setLeaderboardEmotes(topUsers);

          console.log("Top Ten Users by Emotes:", topUsers);
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const fetchChatboxLeaderboards = () => {
    const cachedUserNames = localStorage.getItem("chatboxUsernames");
    const cachedLeaderboard = localStorage.getItem("chatboxLeaderboard");
    const cachedEmotesLeaderboard = localStorage.getItem(
      "chatboxEmotesLeaderboard"
    );
    if (cachedUserNames && cachedLeaderboard && cachedEmotesLeaderboard) {
      setChatboxUsernames(JSON.parse(cachedUserNames));
      setLeaderboard(JSON.parse(cachedLeaderboard));
      setLeaderboardEmotes(JSON.parse(cachedEmotesLeaderboard));
      setLoading(false);
      return;
    }

    const dbRef = ref(database);
    get(child(dbRef, `chatbox/users`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          const usersData = snapshot.val();
          const userNames = Object.keys(usersData);

          setChatboxUsernames(userNames);
          localStorage.setItem("chatboxUsernames", JSON.stringify(userNames));

          const userMessageCounts = userNames.map((username) => {
            const messages = usersData[username].messages || {};
            return {
              username,
              messageCount: Object.keys(messages).length,
            };
          });

          const userEmoteCounts = userNames.map((username) => {
            const messages = usersData[username].messages || {};
            const filteredMessages = Object.values(messages).filter((message) =>
              message.message.match(/^(@[^\s:]+ :[^\s:]+:|:[^\s:]+:)$/)
            );
            return {
              username,
              messageCount: filteredMessages.length,
            };
          });

          const sortedMessageUsers = userMessageCounts.sort(
            (a, b) => b.messageCount - a.messageCount
          );
          const topMessageUsers = sortedMessageUsers.slice(0, 10);
          setLeaderboard(topMessageUsers);
          localStorage.setItem(
            "chatboxLeaderboard",
            JSON.stringify(topMessageUsers)
          );

          const sortedEmoteUsers = userEmoteCounts.sort(
            (a, b) => b.messageCount - a.messageCount
          );
          const topEmoteUsers = sortedEmoteUsers.slice(0, 10);
          setLeaderboardEmotes(topEmoteUsers);
          localStorage.setItem(
            "chatboxEmotesLeaderboard",
            JSON.stringify(topEmoteUsers)
          );

          console.log("Top Ten Users by Messages:", topMessageUsers);
          console.log("Top Ten Users by Emotes:", topEmoteUsers);
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchSpecificChatboxUser();
    // fetchSpecificChatboxUser();
    // fetchAllChatboxNames();
    // fetchChatboxLeaderboard();
    // fetchChatboxEmotesLeaderboard();
  }, [senderName]);

  useEffect(() => {
    // fetchAllChatboxNames();
    fetchChatboxLeaderboards();
  }, []);

  const paginateMessages = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return userMessages.slice(startIndex, endIndex);
  };

  const nextPage = () => {
    if (currentPage < Math.ceil(userMessages.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <AppContext.Provider
      value={{
        loading,
        senderName,
        setSenderName,
        userMessages,
        chatterAvatar,
        currentPage,
        nextPage,
        prevPage,
        itemsPerPage,
        paginateMessages,
        chatboxUsernames,
        numberOfUserMessages,
        leaderboard,
        leaderboardEmotes,
        setCurrentPage,
        // fetchChatboxLeaderboard,
        // fetchChatboxEmotesLeaderboard,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
