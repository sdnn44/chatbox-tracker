// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOqVL6g0gbs-3nP2dHPIY0KtNt_DnF8SM",
  authDomain: "strefaskilla-chatbox.firebaseapp.com",
  databaseURL: "https://strefaskilla-chatbox-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "strefaskilla-chatbox",
  storageBucket: "strefaskilla-chatbox.appspot.com",
  messagingSenderId: "1048085534455",
  appId: "1:1048085534455:web:335cc3465c77721390e5f2",
  measurementId: "G-JPNKYJ4KQ4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const database = getDatabase(app);