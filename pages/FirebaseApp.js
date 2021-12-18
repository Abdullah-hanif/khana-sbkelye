import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc, addDoc, collection, getDocs, query,where,updateDoc, deleteDoc } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyDIJCddz99ZpgphrJt7LmGWIoDxxp-ykmU",
  authDomain: "the-analog-b9b25.firebaseapp.com",
  projectId: "the-analog-b9b25",
  storageBucket: "the-analog-b9b25.appspot.com",
  messagingSenderId: "553257649006",
  appId: "1:553257649006:web:50b63bcaad5f27afbfb77f",
  measurementId: "G-HZ0VP5QJY0"
});

const auth = getAuth();
const db = getFirestore(firebaseApp);
// Get a reference to the storage service, which is used to create references in your storage bucket
const storage = getStorage();

// Create a storage reference from our storage service
const storageRef = ref(storage);



export {
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    storage,
    storageRef,
   updateDoc,
   deleteDoc,

    db,
    doc,
    setDoc,
    getDoc,
    addDoc,
    collection,
    getDocs,
    query,
    where
};