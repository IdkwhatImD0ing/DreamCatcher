// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const analytics = getAnalytics(app);
