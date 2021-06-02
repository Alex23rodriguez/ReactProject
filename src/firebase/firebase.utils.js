import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBYR8SVeXEw0dYgnxoGLDXjM9k98B-CvlE",
  authDomain: "crwn-db-d4d7c.firebaseapp.com",
  projectId: "crwn-db-d4d7c",
  storageBucket: "crwn-db-d4d7c.appspot.com",
  messagingSenderId: "636106137414",
  appId: "1:636106137414:web:f5e062414f664231370f47",
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
