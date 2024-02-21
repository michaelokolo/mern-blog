// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'mern-blog-b9a80.firebaseapp.com',
  projectId: 'mern-blog-b9a80',
  storageBucket: 'mern-blog-b9a80.appspot.com',
  messagingSenderId: '393127253108',
  appId: '1:393127253108:web:decd340a84130aa4986d21',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
