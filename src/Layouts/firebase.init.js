// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwwjYDEPyze0iroVrbhOCDODbC1mb6bgY",
  authDomain: "simple-firebase-authenti-86ece.firebaseapp.com",
  projectId: "simple-firebase-authenti-86ece",
  storageBucket: "simple-firebase-authenti-86ece.firebasestorage.app",
  messagingSenderId: "345996908635",
  appId: "1:345996908635:web:fd9430884c3a824d18877e",
  measurementId: "G-D2W8HRTX6Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);