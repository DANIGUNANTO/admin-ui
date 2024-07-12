import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "store-tutorial-7df4a.firebaseapp.com",
  projectId: "store-tutorial-7df4a",
  storageBucket: "store-tutorial-7df4a.appspot.com",
  messagingSenderId: "231409462475",
  appId: "1:231409462475:web:ed4e7c0895dc1515f07f4e"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);
export const storage = getStorage(app);