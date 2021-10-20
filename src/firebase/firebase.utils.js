import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyAof2ELeWEXQkKDutf_5jTtZJdTsCenewM",
  authDomain: "crwn-db-c5ee2.firebaseapp.com",
  projectId: "crwn-db-c5ee2",
  storageBucket: "crwn-db-c5ee2.appspot.com",
  messagingSenderId: "885672520095",
  appId: "1:885672520095:web:ef150f230a0a780b3875aa",
  measurementId: "G-2DHW6HS60P"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;