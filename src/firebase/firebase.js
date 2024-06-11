// import { cert } from "firebase-admin/app";
// import { getFirestore } from "firebase-admin/firestore";

// import admin from "firebase-admin";
// import serviceAccount from "./strefaskilla-chatbox-firebase-adminsdk-brfvj-0a94920fde.json" assert { type: "json" };

// admin.initializeApp({
//   credential: cert(serviceAccount),
// });

// export const db = getFirestore();

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDOqVL6g0gbs-3nP2dHPIY0KtNt_DnF8SM",
  authDomain: "strefaskilla-chatbox.firebaseapp.com",
  projectId: "strefaskilla-chatbox",
  storageBucket: "strefaskilla-chatbox.appspot.com",
  messagingSenderId: "1048085534455",
  appId: "1:1048085534455:web:335cc3465c77721390e5f2",
  measurementId: "G-JPNKYJ4KQ4",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
