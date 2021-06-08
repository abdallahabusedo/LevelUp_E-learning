import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";

require("dotenv").config();
//console.log(process.env.API_KEY);
/*const firebaseConfig = {
  apiKey: "AIzaSyDobuBTPeK2TQ9kTuU0NJ4EZYS2VSqkYCk",
  authDomain: "lvlup2.firebaseapp.com",
  projectId: "lvlup2",
  storageBucket: "lvlup2.appspot.com",
  messagingSenderId: "812541653360",
  appId: "1:812541653360:web:7158d51446ab0f69911fb5",
  measurementId: "G-Z41X0QQXFB",
};*/

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDobuBTPeK2TQ9kTuU0NJ4EZYS2VSqkYCk",
  authDomain: "lvlup2.firebaseapp.com",
  projectId: "lvlup2",
  storageBucket: "lvlup2.appspot.com",
  messagingSenderId: "812541653360",
  appId: "1:812541653360:web:7158d51446ab0f69911fb5",
  measurementId: "G-Z41X0QQXFB"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
export const storage = firebase.storage();
export const fireStore = firebase.firestore();
export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();
