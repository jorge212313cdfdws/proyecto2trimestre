import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCDF36rnCL_ZBOQSqB4HyV1gwmBbu3gWj8",
    authDomain: "fittrack-36494.firebaseapp.com",
    databaseURL: "https://fittrack-36494-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "fittrack-36494",
    storageBucket: "fittrack-36494.firebasestorage.app",
    messagingSenderId: "140952848155",
    appId: "1:140952848155:web:f67c8ee353cc70ef39f5be",
    measurementId: "G-6F1Q1B6TE3"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
