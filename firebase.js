// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA52ne81iv1deLF7ZgvTweu-bYcNkQb1u8",
  authDomain: "trust-capital-c9a82.firebaseapp.com",
  projectId: "trust-capital-c9a82",
  storageBucket: "trust-capital-c9a82.appspot.com",
  messagingSenderId: "776262696587",
  appId: "1:776262696587:web:14557ab31346f9f4ac1e8e",
  measurementId: "G-SB52CH0XCN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app) 

export { app, auth}