import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyC-euFZBbeEzi_-SWod7pzG2NUW1z7ZAdM",
    authDomain: "dashfinance.firebaseapp.com",
    projectId: "dashfinance",
    storageBucket: "dashfinance.appspot.com",
    messagingSenderId: "848937141257",
    appId: "1:848937141257:web:f33d6844ead253335de4d8"
};


// Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);





/*
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-euFZBbeEzi_-SWod7pzG2NUW1z7ZAdM",
  authDomain: "dashfinance.firebaseapp.com",
  projectId: "dashfinance",
  storageBucket: "dashfinance.appspot.com",
  messagingSenderId: "848937141257",
  appId: "1:848937141257:web:f33d6844ead253335de4d8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);*/