import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: import.meta.env.env.REACT_APP_apiKey,
  authDomain: import.meta.env.env.REACT_APP_authDomain,
  projectId: import.meta.env.env.REACT_APP_projectId,
  storageBucket: import.meta.env.env.REACT_APP_storageBucket,
  messagingSenderId: import.meta.env.env.REACT_APP_messagingSenderId,
  appId: import.meta.env.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
