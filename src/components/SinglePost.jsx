import { React, useEffect, useState } from "react";
import { onSnapshot, query, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase.js";

import Message from "./Message";

const SinglePost = () => {
  const [messages, setMessages] = useState([]);
  const nickname = "DeVoX";

  useEffect(() => {
    const unsubscribe = onSnapshot(doc(db, "users", nickname), (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.data();
        if (data.messages) {
          const uniqueMessages = data.messages.map((message) => ({
            ...message,
            date: message.date
              ? new Date(message.date.seconds * 1000).toLocaleString()
              : "Unknown date",
          }));
          setMessages(uniqueMessages);
        }
      }
      console.log(snapshot.data());
    });
    return () => {
      unsubscribe();
    };
  }, [nickname]);

  return (
    <div className="w-full h-[30rem] items-center justify-center flex flex-col gap-8 overflow-y-auto scrollbar-style pt-32 ">
      {messages.map((message) => (
        <Message messages={message} senderName={nickname} key={message.id} />
      ))}
    </div>
  );
};

export default SinglePost;
