import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDq6wU2JxtUaRWcFlri0FPb4J-FCU9_o1A",
  authDomain: "e-mart-e2bb8.firebaseapp.com",
  projectId: "e-mart-e2bb8",
  storageBucket: "e-mart-e2bb8.appspot.com",
  messagingSenderId: "1003752731745",
  appId: "1:1003752731745:web:a6204e1b37a2c7bc712620",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
