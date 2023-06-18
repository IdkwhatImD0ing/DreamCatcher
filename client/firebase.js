// firebase.js
"use client";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCYpyxfcR65rleMykNd9_7_TQQY0dnA5jE",
  authDomain: "dreamcatcher-ad91e.firebaseapp.com",
  projectId: "dreamcatcher-ad91e",
  storageBucket: "dreamcatcher-ad91e.appspot.com",
  messagingSenderId: "203272261404",
  appId: "1:203272261404:web:609363f3816bd11bc5b4d9",
  measurementId: "G-X5LB9GBS57",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };