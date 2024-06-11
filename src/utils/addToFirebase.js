import { JSDOM } from "jsdom";
import { v4 as uuidv4 } from "uuid";

import { db } from "../firebase/firebase.js";
import {
  arrayUnion,
  doc,
  getDoc,
  serverTimestamp,
  Timestamp,
  updateDoc,
  setDoc,
} from "firebase/firestore";

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

import { convertDateTime } from "./formatDate.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function addToFirestore() {
  const filePath = path.join(__dirname, "../data/chatbox-structure.html");
  const html = fs.readFileSync(filePath, "utf-8");

  const dom = new JSDOM(html);
  const document = dom.window.document;
  const chatRows = document.querySelectorAll(".chat_row");

  chatRows.forEach(async (chatRow) => {
    const userPhoto = chatRow.querySelector(".ipsUserPhoto img").src;
    const userName = chatRow.querySelector(".chatterName").dataset.member;
    const message = chatRow.querySelector(".chatbox_msg").innerHTML.trim();
    const timestampStr = chatRow.querySelector("time").getAttribute("datetime");

    let timestamp;
    try {
      timestamp = convertDateTime(timestampStr);
    } catch (error) {
      console.error(error.message); // "Invalid input format"
    }

    const userData = {
      photoURL: userPhoto,
      message: message,
      timestamp: timestamp,
    };

    try {
      const response = await getDoc(doc(db, "users", userName));
      if (!response.exists()) {
        await setDoc(doc(db, "users", userName), { messages: [] });
        console.log("Użytkownik został dodany do listy kontaktów");
      } else {
        console.error(
          "Wybrany użytkownik już znajduje się w Twojej liście kontaków"
        );
      }
    } catch (err) {
      console.error(err);
    }

    try {
      await updateDoc(doc(db, "users", userName), {
        messages: arrayUnion({
          id: uuidv4(),
          message,
          date: timestamp,
          img: userPhoto,
        }),
      });
      console.log(
        `Added/Updated message for user: ${userName} at ${timestamp}`
      );
    } catch (error) {
      console.error(`Error adding/updating user: ${userName}`, error);
    }
  });
}

addToFirestore();
