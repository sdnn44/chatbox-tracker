import { child, get, ref } from "firebase/database";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { database } from "../firebase/firebase";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [senderName, setSenderName] = useState("blaszczyk");
  const [userMessages, setUserMessages] = useState([]);
  const [chatterAvatar, setChatterAvatar] = useState("");
  const { username: urlUsername } = useParams();

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; 

  const fetchChatboxUsers = () => {
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
          setUserMessages(messagesArray);
          setChatterAvatar(messagesArray[0].img)
          console.log(messagesArray);
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
    fetchChatboxUsers();
  }, []);

  const paginateMessages = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    console.log(userMessages.slice(startIndex, endIndex))
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
