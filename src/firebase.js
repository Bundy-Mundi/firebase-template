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
    const userCredential = await createUserWithEmailAndPassword(auth, email, password)
          .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              console.log(errorCode, errorMessage)
          });
    console.log(userCredential)
    // Do something with userCredential ...
    /*
    user: UserImpl
    accessToken: "eyJhbGciOiJSUzI1NiIsImtpZCI6ImY1NWUyOTRlZWRjMTY3Y2Q5N2JiNWE4MTliYmY3OTA2MzZmMTIzN2UiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vY2hhdC0xODNmYiIsImF1ZCI6ImNoYXQtMTgzZmIiLCJhdXRoX3RpbWUiOjE2MzcxNzk1NDEsInVzZXJfaWQiOiJVbjJtVFRoMUJKYzExMzVCUk1SWXlDMnNjbmMyIiwic3ViIjoiVW4ybVRUaDFCSmMxMTM1QlJNUll5QzJzY25jMiIsImlhdCI6MTYzNzE3OTU0MSwiZXhwIjoxNjM3MTgzMTQxLCJlbWFpbCI6ImV4aXQyMXNiQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJleGl0MjFzYkBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.ELcL0mHjFwulh6ruNUwvahkYLOVenjnbWNsBba3P62zf1Rwy9TQPsc2mkyCrAH6db7YoRbMQcRClObFIL1laJ8yDpi7NYticK7gRoupSwzmFjxijEPqgeyAil1EDKMSHqdFJLzhAlh5RDKL9wLX3j_ij5XPbv_7rVcn2Nhn2N2riGTt2A7QkKlYFjCmh1Kr33KaEUP8GzVB8f1dVPlvjc6UlLs2uGy1OBWtIKchp849gTvX7EtW_RqCtnx-5oqRm1sRNsajG414_RGdEaHky6cszw4JeOtj4EjoTmogfj2WDVhdWV2ZOCO11M7dShy3VJsksHWgq3a68tqN_75N02w"
    auth: AuthImpl {app: FirebaseAppImpl, config: {…}, currentUser: UserImpl, emulatorConfig: null, operations: Promise, …}
    displayName: null
    email: "exit21sb@gmail.com"
    emailVerified: false
    isAnonymous: false
    metadata: UserMetadata {createdAt: '1637179541548', lastLoginAt: '1637179541548', lastSignInTime: 'Wed, 17 Nov 2021 20:05:41 GMT', creationTime: 'Wed, 17 Nov 2021 20:05:41 GMT'}
    phoneNumber: null
    photoURL: null
    proactiveRefresh: ProactiveRefresh {user: UserImpl, isRunning: false, timerId: null, errorBackoff: 30000}
    providerData: [{…}]
    providerId: "firebase"
    reloadListener: null
    reloadUserInfo: {localId: 'Un2mTTh1BJc1135BRMRYyC2scnc2', email: 'exit21sb@gmail.com', passwordHash: 'UkVEQUNURUQ=', emailVerified: false, passwordUpdatedAt: 1637179541548, …}
    stsTokenManager: StsTokenManager {refreshToken: 'AFxQ4_p1oksRXeivAyeq11TnfTB4At_o_gO9C_BvkTn-bK9VlX…VXvTTpVVNtGZy7om4b2XTmoxjxWyh_SdDlo9mWrJHykoM62lc', accessToken: 'eyJhbGciOiJSUzI1NiIsImtpZCI6ImY1NWUyOTRlZWRjMTY3Y2…ogfj2WDVhdWV2ZOCO11M7dShy3VJsksHWgq3a68tqN_75N02w', expirationTime: 1637183142307}
    tenantId: null
    uid: "Un2mTTh1BJc1135BRMRYyC2scnc2"
    */
}
export const signInCustom = async(email, password) => {
    const userCredential = await signInWithEmailAndPassword(auth, email, password)
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });
    console.log(userCredential)
    // Do something with userCredential ...
}
export const authState = () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      // ...
    } else {
      // User is signed out
      // ...
    }
  });
}
export const getCurrentUser = () => {
  return auth.currentUser;
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

