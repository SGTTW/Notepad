// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// let's import firestore
import { getFirestore, collection } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCQYUBp_ep_jlNrDYKHRuXx0xXfje_TR4Q",
  authDomain: "react-notes-ccbfe.firebaseapp.com",
  projectId: "react-notes-ccbfe",
  storageBucket: "react-notes-ccbfe.appspot.com",
  messagingSenderId: "833402055570",
  appId: "1:833402055570:web:67fa9942eec87b5c222f4b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// let's export this noteCollection so that we can reference it in the app component
export const notesCollection = collection(db, "notes");

// --------install locally in terminal

// npm install firebase
