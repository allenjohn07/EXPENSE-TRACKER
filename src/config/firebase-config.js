import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "API_KEY", // Use functions.config() to access config values
  authDomain: "expense-tracker-3f2a4.firebaseapp.com",
  projectId: "expense-tracker-3f2a4",
  storageBucket: "expense-tracker-3f2a4.appspot.com",
  messagingSenderId: "62389493105",
  appId: "1:62389493105:web:487bd03910b8122ff32ad0",
  measurementId: "G-N7LVMYGHVT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
