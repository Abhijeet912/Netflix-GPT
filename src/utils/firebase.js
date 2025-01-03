// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDv1g5ny2i-rd1eczW1-7VYrm8QSyjlSA8",
  authDomain: "netflix-gpt-7bd86.firebaseapp.com",
  projectId: "netflix-gpt-7bd86",
  storageBucket: "netflix-gpt-7bd86.firebasestorage.app",
  messagingSenderId: "255745475969",
  appId: "1:255745475969:web:233c225329fc8ce587d480",
  measurementId: "G-2Z0NKLES35"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


 //fire base auth
 export const auth = getAuth();

 
