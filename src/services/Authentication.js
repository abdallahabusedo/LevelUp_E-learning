import { auth , provider } from "./firebase";

// Sign Up
export const createUser = ( email , password ) => {
    return auth.createUserWithEmailAndPassword( email, password );
}

// Sign In with Email & Password
export const userAuth = ( email , password ) => {
    return auth.signInWithEmailAndPassword ( email , password  );
}

// Sign In with Google
export const GoogleAuth = () => {
    provider.addScope('profile');
    provider.addScope('email');
    return auth.signInWithPopup(provider);
}
