import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { userInfoStore } from "./store";

export const firebaseApp = initializeApp({
    apiKey: "AIzaSyBnkgAceXrwLJjIxzyhs_ALyckA5bb8ux0",
    authDomain: "mjfinder-5e451.firebaseapp.com",
    projectId: "mjfinder-5e451",
    storageBucket: "mjfinder-5e451.appspot.com",
    messagingSenderId: "4395369296",
    appId: "1:4395369296:web:3cb89209930c2dc3a0e255"
});

export const db = getFirestore();
export const auth = getAuth();

export const updateUserData = async (uid) => {
    const data = (await getDoc(doc(db, "users", uid))).data();

    userInfoStore.update(store => ({
        ...store,
        data: data
    }));
}

auth.onAuthStateChanged(async (user) => {    
    if (!user) {
        userInfoStore.set(null);
        return;
    }
    
    userInfoStore.update(store => ({
        ...store,
        uid: user.uid,
        email: user.email,
    }));

    updateUserData(user.uid);
});