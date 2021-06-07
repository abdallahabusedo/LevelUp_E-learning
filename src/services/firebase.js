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

const firebaseConfig = {
    apiKey: "AIzaSyBUxJBKjNK5SYPRH0pO8OT3jBkf1dVhfyQ",
    authDomain: "lvlup-e2894.firebaseapp.com",
    projectId: "lvlup-e2894",
    storageBucket: "lvlup-e2894.appspot.com",
    messagingSenderId: "1033867326442",
    appId: "1:1033867326442:web:3bef29fb112bea234e3893",
    measurementId: "G-1CP8NMGERN"
  };

firebase.initializeApp(firebaseConfig);

export const storage = firebase.storage();
export const fireStore = firebase.firestore();
export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();

export default firebase;