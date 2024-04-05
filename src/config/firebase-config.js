// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApjRqP38EWzl0W6IOzrqrVXTAewiv1FxY",
  authDomain: "expense-tracker-3f2a4.firebaseapp.com",
  projectId: "expense-tracker-3f2a4",
  storageBucket: "expense-tracker-3f2a4.appspot.com",
  messagingSenderId: "62389493105",
  appId: "1:62389493105:web:487bd03910b8122ff32ad0",
  measurementId: "G-N7LVMYGHVT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
export const db = getFirestore(app)

//firebase login
//firebase init
//firebase deploy