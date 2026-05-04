
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "iqagent-f3684.firebaseapp.com",
  projectId: "iqagent-f3684",
  storageBucket: "iqagent-f3684.firebasestorage.app",
  messagingSenderId: "329546030035",
  appId: "1:329546030035:web:0b669793147dfdc42aad26"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}