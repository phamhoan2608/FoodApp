// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCN6m50NMmzhYckmDy1DFUhIN3m9DSaPdU",
  authDomain: "foodanddrink-5b8b1.firebaseapp.com",
  projectId: "foodanddrink-5b8b1",
  storageBucket: "foodanddrink-5b8b1.appspot.com",
  messagingSenderId: "731090458181",
  appId: "1:731090458181:web:3d65a1019856b1d469b52c",
  measurementId: "G-F9FDP96Z22"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);