// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDu5MqSbc8CgZGxIrNJ0ulUIYOS6yy4vng",
  authDomain: "newsapi-2aabf.firebaseapp.com",
  projectId: "newsapi-2aabf",
  storageBucket: "newsapi-2aabf.appspot.com",
  messagingSenderId: "1027138805809",
  appId: "1:1027138805809:web:3e1faccd67c79181937510",
  measurementId: "G-NPMWS9DXPM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };
