import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyDmplhaSVj9IwL9bbq_nsZHY4u39YKKrEE",
  authDomain: "react-ecommerce-36231.firebaseapp.com",
  projectId: "react-ecommerce-36231",
  storageBucket: "react-ecommerce-36231.appspot.com",
  messagingSenderId: "65717208716",
  appId: "1:65717208716:web:5ddefbe4aa0af538985da9"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);