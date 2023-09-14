// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBblRrnDUhG374E49jdcpDwqmkTVgP-lZY",
  authDomain: "fir-backend-8a36b.firebaseapp.com",
  projectId: "fir-backend-8a36b",
  storageBucket: "fir-backend-8a36b.appspot.com",
  messagingSenderId: "477916755474",
  appId: "1:477916755474:web:5e7a684234b390c6350acb",
  measurementId: "G-9T11MS89BD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)