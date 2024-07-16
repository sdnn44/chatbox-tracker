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
    <div className="w-full bg-gradient-to-r from-[#230528] to-[#2305282f] rounded-3xl  border-t-[1px] border-b-[1px] border-[#571464] h-[36rem] md:h-[32rem] items-center justify-center flex flex-col gap-8 overflow-y-auto scrollbar-style ">
      <div className="flex gap-2 justify-center md:justify-start md:gap-5 items-center w-full px-3">
        <button
          className="bg-[#571464] text-sm md:text-base p-2 text-white rounded-[10px] w-32 cursor-pointer hover:bg-[#420f4d] duration-300 ease-in-out"
          onClick={prevPage}
          disabled={currentPage === 1}
        >
          Poprzednia
        </button>
        <button
          className="bg-[#571464] text-sm md:text-base p-2 text-white rounded-[10px] w-32 cursor-pointer hover:bg-[#420f4d] duration-300 ease-in-out"
          onClick={nextPage}
          disabled={
            currentPage >= Math.ceil(userMessages.length / itemsPerPage)
          }
        >
          Następna
        </button>
        <h1 className="text-[12px] md:text-sm">
          Strona {currentPage} z {Math.ceil(userMessages.length / itemsPerPage)}
        </h1>
      </div>
      {paginatedMessages.map((message, index) => (
        <Message messages={message} senderName={senderName} index={index} key={message.id} />
      ))}
    </div>
  );
};
