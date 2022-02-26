
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBL0voMpCbC0MkSx-DqoYwdRRE9tJAam5M",
  authDomain: "blogapp-e7b92.firebaseapp.com",
  projectId: "blogapp-e7b92",
  storageBucket: "blogapp-e7b92.appspot.com",
  messagingSenderId: "1093350873596",
  appId: "1:1093350873596:web:182cc78bc4f8eaefbe3a79"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const provider=new GoogleAuthProvider();
export const auth=getAuth(app);