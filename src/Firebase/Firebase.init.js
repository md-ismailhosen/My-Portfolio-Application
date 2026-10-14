// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA-CQLrYjaurhZXynYb0aejTdWpRHMFGGg",
    authDomain: "my-react-firebase-auth-c3684.firebaseapp.com",
    projectId: "my-react-firebase-auth-c3684",
    storageBucket: "my-react-firebase-auth-c3684.firebasestorage.app",
    messagingSenderId: "339171547116",
    appId: "1:339171547116:web:5b2f8366c9961e2b71d2c9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);