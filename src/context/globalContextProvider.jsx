import { child, get, ref } from "firebase/database";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { database } from "../firebase/firebase";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [senderName, setSenderName] = useState("blaszczyk");
  const [userMessages, setUserMessages] = useState([]);
  const [numberOfUserMessages, setNumberOfUserMessages] = useState(0);
  const [chatterAvatar, setChatterAvatar] = useState("");
  const { userName: urlUsername } = useParams();

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const [chatboxUsernames, setChatboxUsernames] = useState([]);

  const fetchSpecificChatboxUser = () => {
    const dbRef = ref(database);
    get(child(dbRef, `chatbox/users/${senderName}`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          const messages = snapshot.val().messages;
          // Convert the messages object to an array
          const messagesArray = Object.keys(messages).map((key) => ({
            id: key,
            ...messages[key],
          }));
          setNumberOfUserMessages(messagesArray.length);
          setUserMessages(messagesArray);
          setChatterAvatar(messagesArray[0].img);
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
    const dbRef = ref(database);
    get(child(dbRef, `chatbox/users`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          const usersData = snapshot.val();
          const userNames = Object.keys(usersData);
          console.log(userNames);
          setChatboxUsernames(userNames);
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
    if (urlUsername) setSenderName(urlUsername);
    fetchSpecificChatboxUser();
    fetchAllChatboxNames();
  }, [senderName, urlUsername]);

  useEffect(() => {
    fetchAllChatboxNames();
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
        userMessages,
        chatterAvatar,
        currentPage,
        nextPage,
        prevPage,
        itemsPerPage,
        paginateMessages,
        chatboxUsernames,
        numberOfUserMessages
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
