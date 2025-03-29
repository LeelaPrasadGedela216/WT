// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA71oJtQutlgQ9mexBWLvlEkbNs-6cTyCQ",
  authDomain: "ecart-ff46d.firebaseapp.com",
  projectId: "ecart-ff46d",
  storageBucket: "ecart-ff46d.appspot.com",  // Fixed storage bucket URL
  messagingSenderId: "401889550195",
  appId: "1:401889550195:web:41828e773e9ec3f6cbef06",
  measurementId: "G-JMPJW1EL7G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
