// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7LDyWsTBmhIo8H3X6N94p2feD6h_Dusw",
  authDomain: "food-and-drink-8d31c.firebaseapp.com",
  projectId: "food-and-drink-8d31c",
  storageBucket: "food-and-drink-8d31c.appspot.com",
  messagingSenderId: "330899004051",
  appId: "1:330899004051:web:06e697c1bc4a54b1fa0b66",
  measurementId: "G-G9ZWLSC1V4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);