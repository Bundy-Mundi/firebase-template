// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, push, onValue } from "firebase/database";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
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

// FireStore
const db = getFirestore(app);
export const getChats = async() => {
    const chatSnapShots = await getDocs(collection(db, "chats"));
    const chatLists = chatSnapShots.docs.map(doc => doc.data());
    return chatLists;
}

// Authentication
const auth = getAuth();
export const signUpCustom = async(email, password) => {
    await createUserWithEmailAndPassword(auth, email, password)
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });
}
export const signInCustom = async(email, password) => {
    await signInWithEmailAndPassword(auth, email, password)
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });
}

// Realtime Database
const realtime_db = getDatabase(app);
export const writeUserData = (name, email, imageUrl) => {
  const newUserRef = ref(realtime_db, 'users/');
  set(newUserRef, {
    username: name,
    email: email,
    profile_picture : imageUrl
  });
}
export const writeChatData = (message) => {
  const newChatRef = push(ref(realtime_db, 'chats/'));
  set(newChatRef, {
    message
  });
}
export const listenTo = (path, updateCallback) => {
  const allRef = ref(realtime_db, path);
  onValue(allRef, (snapshot) => {
    const data = snapshot.val();
    updateCallback(data);
  });
}

