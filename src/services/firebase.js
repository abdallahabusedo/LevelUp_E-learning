import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/database'

const firebaseConfig = {
    
};


firebase.initializeApp(firebaseConfig);

export const storage = firebase.storage();
export const database = firebase.database();
export const auth = firebase.auth();

export default firebase;