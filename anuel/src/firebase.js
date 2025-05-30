// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAYs5nTMMuCeOAfB2CRnjiZ0PyVUAjMBd8",
  authDomain: "qubo-db982.firebaseapp.com",
  databaseURL: "https://qubo-db982-default-rtdb.firebaseio.com",
  projectId: "qubo-db982",
  storageBucket: "qubo-db982.firebasestorage.app",
  messagingSenderId: "559657306990",
  appId: "1:559657306990:web:5a51bce39e5ebbc8998f7f"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const database = getDatabase(app);

export { auth, provider, signInWithPopup, database };
