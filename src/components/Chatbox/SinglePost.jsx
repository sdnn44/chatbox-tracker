import { React, useEffect, useState } from "react";
import { onSnapshot, query, doc, getDoc, getDocs } from "firebase/firestore";
import { database } from "../../firebase/firebase.js";

import Message from "../Message/Message";
import { useGlobalContext } from "../../context/globalContextProvider.jsx";

export const SinglePost = () => {
  const {
    senderName,
    paginateMessages,
    userMessages,
    nextPage,
    prevPage,
    currentPage,
    itemsPerPage,
  } = useGlobalContext();
  // useEffect(() => {
  // const unsubscribe = onSnapshot(doc(db, "users", nickname), (snapshot) => {
  //   if (snapshot.exists()) {
  //     const data = snapshot.data();
  //     if (data.messages) {
  //       const uniqueMessages = data.messages.map((message) => ({
  //         ...message,
  //         date: message.date
  //           ? new Date(message.date.seconds * 1000).toLocaleString()
  //           : "Unknown date",
  //       }));
  //       setMessages(uniqueMessages);
  //     }
  //   }
  //   console.log(snapshot.data());
  // });
  // return () => {
  //   unsubscribe();
  // };
  // }, [nickname]);

  const paginatedMessages = paginateMessages();

  return (
    <div className="w-full bg-[#230528] border-r-[1px] border-b-[1px] border-[#571464] h-[32rem] items-center justify-center flex flex-col gap-8 overflow-y-auto scrollbar-style ">
      <div className="flex gap-5 item-start w-full">
        <button
          className="bg-[#571464] p-2 text-white rounded-[10px] w-32"
          onClick={prevPage}
          disabled={currentPage === 1}
        >
          Poprzednia
        </button>
        <button
          className="bg-[#571464] p-2 text-white rounded-[10px] w-32"
          onClick={nextPage}
          disabled={
            currentPage >= Math.ceil(userMessages.length / itemsPerPage)
          }
        >
          Następna
        </button>
      </div>
      {paginatedMessages.map((message) => (
        <Message messages={message} senderName={senderName} key={message.id} />
      ))}
    </div>
  );
};
