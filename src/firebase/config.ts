import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDzi0rwlPhcvdyKRIGgf5RLwuLaURNl93I",
  authDomain: "dp-gallery.firebaseapp.com",
  projectId: "dp-gallery",
  storageBucket: "dp-gallery.appspot.com",
  messagingSenderId: "860393373604",
  appId: "1:860393373604:web:bdb75bebe8feb9db424b31",
  measurementId: "G-L1GG7XX079"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();
export type TTimeStamp = firebase.firestore.FieldValue;
export const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export const projectStorage = firebase.storage();
export const projectFireStore = firebase.firestore();