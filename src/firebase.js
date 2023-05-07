import {initializeApp} from "firebase/app";
import "firebase/database";
import "firebase/auth";
import {getFirestore} from'firebase/firestore';
import 'firebase/firestore'; 
import { getAuth } from "firebase/auth";


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

export const auth = getAuth(app);

export const db = getFirestore(app);

// export const db1 = getFirestore(app);





// export default app;
// export default db; 
// export default db;
