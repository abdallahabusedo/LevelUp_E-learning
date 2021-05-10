import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyDojOMJLCVTE8UOuM7ubxjxxPLMF7W2AF0",
    authDomain: "levelup-bb9e8.firebaseapp.com",
    databaseURL: "https://levelup-bb9e8-default-rtdb.firebaseio.com",
    projectId: "levelup-bb9e8",
    storageBucket: "levelup-bb9e8.appspot.com",
    messagingSenderId: "602519641720",
    appId: "1:602519641720:web:738fb17cc55c76484ed78d",
    measurementId: "G-GVFZPRQSNN"
};


firebase.initializeApp(firebaseConfig);

export const storage = firebase.storage();
export const database = firebase.database();
export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();

export default firebase;