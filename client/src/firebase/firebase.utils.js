
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import SignInUpEmail from '../components/sign-in-up-email/sign-in-up-email.component';

const config = {
  apiKey: "AIzaSyBWKYHBH1TWhmCKh9vU-X6bloD8yFKg_OI",
    authDomain: "planteen-c72b5.firebaseapp.com",
    databaseURL: "https://planteen-c72b5.firebaseio.com",
    projectId: "planteen-c72b5",
    storageBucket: "planteen-c72b5.appspot.com",
    messagingSenderId: "1085248095635",
    appId: "1:1085248095635:web:f0c5a82288456d0a301466"
  };

firebase.initializeApp(config);
export const auth = firebase.auth();
export const db = firebase.firestore();

const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account'});

const facebookProvider = new firebase.auth.FacebookAuthProvider();
facebookProvider.setCustomParameters({'display': 'popup'});
facebookProvider.addScope('email');

const providers = {
  google: googleProvider,
  facebook: facebookProvider
};

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

export const getCartDoc = async uid => {
  try {
    const cartRef = await db.doc(`carts/${uid}`).get();
    return cartRef.exists? cartRef.data().cartItems: [];
  } catch(err) {
    console.log('Error in retrieving cart from storage:', err);
  }
}

export const updateCartDoc  = async (uid, cartItems) => {
  const cartRef = await db.doc(`carts/${uid}`);
  try {
    await cartRef.set({cartItems});
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

export const createOrderDoc = async (orderItems, shippingAddress, contactInfo,  uid) => {
  try {
    const orderRef = await db.collection('orders').add({
      createdAt: Date.now(),
      contactInfo,
      orderItems,
      status: 'Ordered',
      shippingAddress,
      uid
    });
    return orderRef.id;
  } catch(err) {
    console.log('Failed to store order:', err);
    return null;
  }
}