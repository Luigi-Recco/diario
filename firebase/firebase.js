import { initializeApp } from "firebase/app";
import {getFirestore ,collection, addDoc, getDocs,updateDoc,deleteDoc ,doc } from "firebase/firestore"; 
import {getStorage} from "firebase/storage";
import firebase from 'firebase/compat/app'
import 'firebase/compat/storage'

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
const storage = getStorage(app);

if(!firebase.apps.length)
{
  firebase.initializeApp(firebaseConfig)
}

export { firebase }

export {app, db, storage, getFirestore, collection, addDoc, getDocs,updateDoc,deleteDoc ,doc};