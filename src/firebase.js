// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmQVBZ3EO4xw5Vhk7Ocrzc1XnFh9HII5o",
  authDomain: "anime-react-5d7ac.firebaseapp.com",
  projectId: "anime-react-5d7ac",
  storageBucket: "anime-react-5d7ac.appspot.com",
  messagingSenderId: "864595990946",
  appId: "1:864595990946:web:883a5443626eaac39ffafb",
  measurementId: "G-4H7J0X4Q9H",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const analytics = getAnalytics(app)

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app)

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app)
