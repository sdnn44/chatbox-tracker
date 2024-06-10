import { cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

import admin from "firebase-admin";
import serviceAccount from "./strefaskilla-chatbox-firebase-adminsdk-brfvj-0a94920fde.json" assert { type: "json" };

admin.initializeApp({
  credential: cert(serviceAccount),
});

export const db = getFirestore();
