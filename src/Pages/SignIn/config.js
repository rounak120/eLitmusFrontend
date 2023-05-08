import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyD63D4ATPH3v9Nl6OTUDjwYbvzMx4glUxs",
  authDomain: "elitmus-51c82.firebaseapp.com",
  projectId: "elitmus-51c82",
  storageBucket: "elitmus-51c82.appspot.com",
  messagingSenderId: "838490619665",
  appId: "1:838490619665:web:e1c9e015ec05d21f65d6b0",
  measurementId: "G-MC2HMEJ1JH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider(app);
export {auth,provider};