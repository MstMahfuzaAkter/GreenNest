// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
//   authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
//   projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
//   storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
//   appId: import.meta.env.VITE_FIREBASE_APP_ID
// }
const firebaseConfig = {
  apiKey: "AIzaSyBTkKPsMtiIWPRhLWIw-gUrRJ3B0b1D0r8",
  authDomain: "plantgreen-e7dd0.firebaseapp.com",
  projectId: "plantgreen-e7dd0",
  storageBucket: "plantgreen-e7dd0.firebasestorage.app",
  messagingSenderId: "687517592605",
  appId: "1:687517592605:web:e0fe0c4b933dfae29e2af4"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);