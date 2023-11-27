// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, onValue } from "firebase/database";
import { getFirestore, collection, addDoc } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const realtimeConfig = {
  apiKey: "AIzaSyCmzwITTR7afWDNiftj-EIcuLSSqDOz8l8",
  authDomain: "water-crop.firebaseapp.com",
  projectId: "water-crop",
  storageBucket: "water-crop.appspot.com",
  messagingSenderId: "152128044274",
  appId: "1:152128044274:web:81689db4c71684f2e4246b",
  measurementId: "G-JHYJCLSC4Y"
};

const firestoreConfig = {
  apiKey: "AIzaSyCmzwITTR7afWDNiftj-EIcuLSSqDOz8l8",
  authDomain: "water-crop.firebaseapp.com",
  databaseURL: "https://water-crop-default-rtdb.firebaseio.com",
  projectId: "water-crop",
  storageBucket: "water-crop.appspot.com",
  messagingSenderId: "152128044274",
  appId: "1:152128044274:web:81689db4c71684f2e4246b",
  measurementId: "G-JHYJCLSC4Y"
};

// Initialize realtime database
const app = initializeApp(realtimeConfig);
export const auth = getAuth(app);
export const realtimeDatabase = getDatabase();
export const RTDBRef = ref(realtimeDatabase, 'Plants/');
export const firestoreDB = initializeApp(firestoreConfig);
export const db = getFirestore(firestoreDB);
export const plantStatsHistory = db.collection('Plant');