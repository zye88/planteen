
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';


const config = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    projectId: process.env. REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
  };

firebase.initializeApp(config);
export const auth = firebase.auth();
export const db = firebase.firestore();

const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account'});

const facebookProvider = {};

const providers = {
  google: googleProvider,
  facebook: facebookProvider
};

export const signInWithPlatform = platform => 
  auth.signInWithPopup(providers[platform]);

export const createUserProfile = async ({uid, email, displayName }) => {
  const userRef = await db.doc(`users/${uid}`);
  const snapShot = await userRef.get();
  
  if(!snapShot.exists) {
    try {
      await userRef.set({
        uid,
        email,
        displayName,
        createdAt: new Date()
      });

    } catch(err) {
      console.log('Error in firebase profile creation:', err);
    }
  }

  return userRef;
}