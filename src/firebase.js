
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmQNsmGswp91I5RNzQy8dTfOaNMttbwV4",
  authDomain: "chat-183fb.firebaseapp.com",
  projectId: "chat-183fb",
  storageBucket: "chat-183fb.appspot.com",
  messagingSenderId: "1061243561010",
  appId: "1:1061243561010:web:6b1b3a0a4eda770df2482b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const getChats = async() => {
    const chatSnapShots = await getDocs(collection(db, "chats"));
    const chatLists = chatSnapShots.docs.map(doc => doc.data());
    return chatLists;
}

