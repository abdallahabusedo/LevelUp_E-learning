import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";

require("dotenv").config();

firebase.initializeApp(firebaseConfig);

export default firebase;
export const storage = firebase.storage();
export const fireStore = firebase.firestore();
export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();
