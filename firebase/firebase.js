import { initializeApp } from "firebase/app";
import {getFirestore ,collection, addDoc, getDocs } from "firebase/firestore"; 


const firebaseConfig = {
  apiKey: "AIzaSyBnuFHZbC6oeOMgZdoTG_HL4cbs9rWrIpU",
  authDomain: "app-filmes-legais.firebaseapp.com",
  projectId: "app-filmes-legais",
  storageBucket: "app-filmes-legais.appspot.com",
  messagingSenderId: "310695462707",
  appId: "1:310695462707:web:6c84c7c468c567eec3e046"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {app, db, getFirestore, collection, addDoc, getDocs};