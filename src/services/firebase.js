import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';

// const firebaseConfig = {
//     apiKey: "AIzaSyDojOMJLCVTE8UOuM7ubxjxxPLMF7W2AF0",
//     authDomain: "levelup-bb9e8.firebaseapp.com",
//     databaseURL: "https://levelup-bb9e8-default-rtdb.firebaseio.com",
//     projectId: "levelup-bb9e8",
//     storageBucket: "levelup-bb9e8.appspot.com",
//     messagingSenderId: "602519641720",
//     appId: "1:602519641720:web:ab9038e83deffcfd4ed78d",
//     measurementId: "G-1N5DR43B1T"
// };

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

export const storage = firebase.storage();
export const fireStore = firebase.firestore();
export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();

export default firebase;