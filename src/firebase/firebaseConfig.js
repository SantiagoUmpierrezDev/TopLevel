// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-7BTH2Or6WscyvHPbTqSqwF0p1AEaVj8",
  authDomain: "toplevel-b8b9b.firebaseapp.com",
  projectId: "toplevel-b8b9b",
  storageBucket: "toplevel-b8b9b.appspot.com",
  messagingSenderId: "642541754606",
  appId: "1:642541754606:web:b9abe264766e5f92343bff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)