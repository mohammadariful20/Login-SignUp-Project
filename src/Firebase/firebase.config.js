// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnNwr2gBOEIskZ6IFm9tPc-Hnl-Iok1LA",
  authDomain: "login-signup-project-71c39.firebaseapp.com",
  projectId: "login-signup-project-71c39",
  storageBucket: "login-signup-project-71c39.appspot.com",
  messagingSenderId: "586220417241",
  appId: "1:586220417241:web:e271b94b27df9f96668ec8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;