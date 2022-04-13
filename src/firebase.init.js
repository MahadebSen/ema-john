// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHKC5DczcryVafMlBgZYXf-kGlq4CU-dI",
  authDomain: "ema-jhon-b8636.firebaseapp.com",
  projectId: "ema-jhon-b8636",
  storageBucket: "ema-jhon-b8636.appspot.com",
  messagingSenderId: "1008502832556",
  appId: "1:1008502832556:web:d85dba19dd16abc02a4e09",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
