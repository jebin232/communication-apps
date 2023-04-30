import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { getStorage } from "firebase/storage";
import { initializeFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAefu-kow4YTn6SWaVagAdskbBMHl5VqxY",
  authDomain: "chat-4d94d.firebaseapp.com",
  projectId: "chat-4d94d",
  storageBucket: "chat-4d94d.appspot.com",
  messagingSenderId: "961853723735",
  appId: "1:961853723735:web:62b34a8e24f13cc54f3f12",
  measurementId: "G-2XW2ZLYL2Z"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = initializeFirestore(app, {experimentalForceLongPolling: true,
});

export function signIn(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}
export function signUp(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}