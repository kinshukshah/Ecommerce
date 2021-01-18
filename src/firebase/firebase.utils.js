import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
    
const config = {
  apiKey: "AIzaSyDEOCGek4OGj71u-fjWF66CYtPIvzWokfs",
  authDomain: "ecommerce-d83ef.firebaseapp.com",
  projectId: "ecommerce-d83ef",
  storageBucket: "ecommerce-d83ef.appspot.com",
  messagingSenderId: "131426892335",
  appId: "1:131426892335:web:c67eaa3a1a2f64bb9f24da",
  measurementId: "G-PQ5MNP50SH",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
