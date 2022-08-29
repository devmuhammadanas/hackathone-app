import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage"

// const firebaseConfig = {
//     apiKey: "AIzaSyD2zNMOfbJR7xgImUGvEPoBzaYrxPDHoXc",
//     authDomain: "olx-clone-cc374.firebaseapp.com",
//     projectId: "olx-clone-cc374",
//     storageBucket: "olx-clone-cc374.appspot.com",
//     messagingSenderId: "988345861202",
//     appId: "1:988345861202:web:10e54bc05964ba94084b8b"
// };
const firebaseConfig = {
    apiKey: "AIzaSyCLF4kHA__i7EPuw7NJ7fI-LXkXldkr5gI",
    authDomain: "olxapp-a9d5f.firebaseapp.com",
    projectId: "olxapp-a9d5f",
    storageBucket: "olxapp-a9d5f.appspot.com",
    messagingSenderId: "494574652327",
    appId: "1:494574652327:web:a08d226f081429e60f4482",
    measurementId: "G-TWMDPW0X16"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage()