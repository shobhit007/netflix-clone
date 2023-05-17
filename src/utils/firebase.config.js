import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { doc, getFirestore, setDoc, getDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDQhI-vFX8FvVR9WpA3yxXQvTgl9szeJ9w",
  authDomain: "netflix-clone-2aa33.firebaseapp.com",
  projectId: "netflix-clone-2aa33",
  storageBucket: "netflix-clone-2aa33.appspot.com",
  messagingSenderId: "607546797160",
  appId: "1:607546797160:web:cda9fd340fbe31e3ba9fdd",
};

initializeApp(firebaseConfig);

export const auth = getAuth();

export const db = getFirestore();

//signup with email and password
export const signupWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

//create user doc
export const createUserDoc = async (userAuth) => {
  if (!userAuth) return;
  const { email, uid } = userAuth;

  const userDocRef = doc(db, "users", email);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    try {
      await setDoc(userDocRef, {
        email,
        uid,
        createdAt: new Date(),
      });
    } catch (error) {
      console.log(error);
    }
  }

  return;
};

//check user doc exits via email
export const isUserExits = async (email) => {
  const userDocRef = doc(db, "users", email);

  const userSnapshot = await getDoc(userDocRef);

  if (userSnapshot.exists()) return true;

  return false;
};

//user sign in with email and password
export const loginWithEmailAndPassword = (email, password) => {
  if (!email || !password) return;

  return signInWithEmailAndPassword(auth, email, password);
};

//user log out
export const signOutUser = async () => await signOut(auth);

//save payment status
export const setUserPaymentStatus = async (user, payment) => {
  const paymentRef = doc(db, "customer", user.email);

  try {
    await setDoc(paymentRef, {
      paymentIntent: payment,
      active: true,
    });
  } catch (error) {
    console.log(error.message);
  }
};
