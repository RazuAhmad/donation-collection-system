// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAe81geiO_trTEZivD0NR0GsTfcK7GAQro",
  authDomain: "donation-system-auth.firebaseapp.com",
  projectId: "donation-system-auth",
  storageBucket: "donation-system-auth.appspot.com",
  messagingSenderId: "920679982725",
  appId: "1:920679982725:web:cd96b8aeaca8c0ac40abec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth =getAuth(app)
export default auth;