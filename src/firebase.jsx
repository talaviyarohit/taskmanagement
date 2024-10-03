// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';



const firebaseConfig = {
  apiKey: "AIzaSyAN5kpBvzUgeNVEQb3-7cTdBqdE7lDKM5g",
  authDomain: "keep-note-d6bb5.firebaseapp.com",
  projectId: "keep-note-d6bb5",
  storageBucket: "keep-note-d6bb5.appspot.com",
  messagingSenderId: "220938305966",
  appId: "1:220938305966:web:dbffbd23381cf9ff65083f"
};


 const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
 const db = getDatabase(app);



export { auth, db };