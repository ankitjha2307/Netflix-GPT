// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrd6-y2omXFOtHgPmtiUW5ZU58yHHQwRE",
  authDomain: "netflixgpt-9fe6d.firebaseapp.com",
  projectId: "netflixgpt-9fe6d",
  storageBucket: "netflixgpt-9fe6d.firebasestorage.app",
  messagingSenderId: "822936382007",
  appId: "1:822936382007:web:782bcff8d32a04ad5f2db2",
  measurementId: "G-R7F8C7DZBD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
