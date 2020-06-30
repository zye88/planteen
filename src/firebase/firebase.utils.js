
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: "AIzaSyBWKYHBH1TWhmCKh9vU-X6bloD8yFKg_OI",
    authDomain: "planteen-c72b5.firebaseapp.com",
    databaseURL: "https://planteen-c72b5.firebaseio.com",
    projectId: "planteen-c72b5",
    storageBucket: "planteen-c72b5.appspot.com",
    messagingSenderId: "1085248095635",
    appId: "1:1085248095635:web:f0c5a82288456d0a301466"
    // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    // databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    // appId: process.env.REACT_APP_FIREBASE_APP_ID
  };

firebase.initializeApp(config);
export const auth = firebase.auth();
export const db = firebase.firestore();

const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account'});

const facebookProvider = new firebase.auth.FacebookAuthProvider();
facebookProvider.setCustomParameters({'display': 'popup'});
facebookProvider.addScope('email');

export const providers = {
  google: googleProvider,
  facebook: facebookProvider
};

export const signUpWithEmail = async (inputEmail, inputPassword, displayName) => {
  try {
    const {user: {uid, email}} = 
      await auth.createUserWithEmailAndPassword(inputEmail, inputPassword);
    createUserDoc(uid, email, displayName);
  } catch(err) {
    console.log('Failed to sign up with email:', err);
  }
}

export const signInWithEmail = async (email, password) => {
  try {
    auth.signInWithEmailAndPassword(email, password);
  } catch(err) {
    console.log('Failed to sign in with email:', err);
  }
}

export const signInWithPlatform = async platform => {
  try {
    const {user: {uid, email, displayName}} = await auth.signInWithPopup(providers[platform]);
    createUserDoc(uid, email, displayName);
  } catch(err) {
    console.log(`Failed to sign in with ${platform}:`, err);
  }
}

export const updateCartDoc  = async (uid, cart) => {
  const cartRef = await db.doc(`carts/${uid}`);
  try {
    await cartRef.set({cartItems: JSON.stringify(cart)});
  } catch(err) {
    console.log('Error in updating cart in storage:', err);
  }
}

export const signOutUser = async () => {
  try {
      await auth.signOut();
  } catch(err) {
      console.log('Failed to sign out:', err);
  }
}

const createUserDoc = async (uid, email, displayName) => {
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
}