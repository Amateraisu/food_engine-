// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCHxM_7FDngBoH5HPhb4CLdvGn26SBSLj4",
    authDomain: "food-engine-15003.firebaseapp.com",
    projectId: "food-engine-15003",
    storageBucket: "food-engine-15003.appspot.com",
    messagingSenderId: "840694508073",
    appId: "1:840694508073:web:52adcd7a7688383de88a38",
    measurementId: "G-D8MDVK7BEH",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
