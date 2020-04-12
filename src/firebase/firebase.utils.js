// This import loads the firebase namespace.
import firebase from 'firebase/app';
 
// These imports load individual services into the firebase namespace.
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/database';

const config = {
  apiKey: "AIzaSyDgU9oOWyhw7OnwqLPOUnInJLRciqvbjzw",
  authDomain: "project-6806762071989746506.firebaseapp.com",
  databaseURL: "https://project-6806762071989746506.firebaseio.com",
  projectId: "project-6806762071989746506",
  storageBucket: "project-6806762071989746506.appspot.com",
  messagingSenderId: "200735254108",
  appId: "1:200735254108:web:18aaf9f64311297bd1a899"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  'prompt': 'select_account'
});

export const createUserProfileDocument = async (userAuth, additionalData) => {
 if (!userAuth) return;
   const userRef = firestore.doc(`users/${userAuth.uid}`);
   const snapshot = await userRef.get();
   console.log(snapshot);
  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    }
    catch(error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef

}

export const signinWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;