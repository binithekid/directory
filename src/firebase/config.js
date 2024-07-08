// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6kDfy-cy_dX3ZAOYCI3YruI5uk1Mzl2c",
  authDomain: "directory-f20d4.firebaseapp.com",
  projectId: "directory-f20d4",
  storageBucket: "directory-f20d4.appspot.com",
  messagingSenderId: "362944096072",
  appId: "1:362944096072:web:8be3b9962b9f95f10b357d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
