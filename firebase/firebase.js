// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore, collection, addDoc, getDocs, updateDoc, doc, deleteDoc } from "firebase/firestore";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0jsuEqCC-KYIz5RdwOPjx6D1snzuOYag",
  authDomain: "meu-diario-de-react.firebaseapp.com",
  projectId: "meu-diario-de-react",
  storageBucket: "meu-diario-de-react.appspot.com",
  messagingSenderId: "759259239102",
  appId: "1:759259239102:web:a0bf822763ba8f1ed4c4ef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {app,db,getFirestore, collection, addDoc, getDocs, updateDoc, doc, deleteDoc};