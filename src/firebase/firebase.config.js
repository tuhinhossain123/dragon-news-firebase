// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZ88uWjCkd2Ob9qIiVBwX9ujJtGPPhp0w",
  authDomain: "dragon-news-firebase-77a5f.firebaseapp.com",
  projectId: "dragon-news-firebase-77a5f",
  storageBucket: "dragon-news-firebase-77a5f.appspot.com",
  messagingSenderId: "154997180137",
  appId: "1:154997180137:web:12765d316099510d07d278"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;