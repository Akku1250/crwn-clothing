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


export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists){
      const {displayName, email} = userAuth;
      const createdAt = new Date();

      try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })

      } catch(err){
        console.log('error creating user', err.message);
      }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;