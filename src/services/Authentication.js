import { auth , provider } from "./firebase";

export const createUser = ( email , password ) => {
    return auth.createUserWithEmailAndPassword( email, password );
}

export const userAuth = ( email , password ) => {
    return auth.signInWithEmailAndPassword ( email , password  );
}

export const GoogleAuth = () => {
    provider.addScope('profile');
    provider.addScope('email');
    return auth.signInWithPopup(provider);
}