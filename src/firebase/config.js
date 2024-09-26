// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEvbMxeC4NQPNLabLW98YLQZLjbWr_9sg",
  authDomain: "directory-9f909.firebaseapp.com",
  projectId: "directory-9f909",
  storageBucket: "directory-9f909.appspot.com",
  messagingSenderId: "215024655950",
  appId: "1:215024655950:web:59f3f7ed92dea6de54ad1f",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
