// Import the functions you need from the SDKs you need
import {
  initializeApp
} from "firebase/app";
import { getAuth } from "firebase/auth";



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRTcEluaoLxIkisjKYVF8rvgExlItNaQc",
  authDomain: "quick-ship-36a0b.firebaseapp.com",
  projectId: "quick-ship-36a0b",
  storageBucket: "quick-ship-36a0b.appspot.com",
  messagingSenderId: "357813829351",
  appId: "1:357813829351:web:f8770f2f3aa00f3d132c42"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
export default auth