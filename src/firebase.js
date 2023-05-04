import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";
import 'firebase/firestore'; 
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyDloRff6xVGZHkzDpgTlIH6-trOsy6abao",
    authDomain: "staff-management-system-wault.firebaseapp.com",
    projectId: "staff-management-system-wault",
    storageBucket: "staff-management-system-wault.appspot.com",
    messagingSenderId: "860932610420",
    appId: "1:860932610420:web:e487666c0088414a27b421"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export default function signin_user({ username, password })
{
    const auth = getAuth();
    signInWithEmailAndPassword(auth, username, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
}