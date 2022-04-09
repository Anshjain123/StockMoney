// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDhPrkVg6_qHd4FoLvfv1d31hlaY9Q6Ic",
  authDomain: "sign-in-d9f8c.firebaseapp.com",
  projectId: "sign-in-d9f8c",
  storageBucket: "sign-in-d9f8c.appspot.com",
  messagingSenderId: "1026008315178",
  appId: "1:1026008315178:web:1e114d45e881a1d6ea1a53"
};

// Initialize Firebase
// Through this initializeApp we setup our connection with the firebase 
const app = initializeApp(firebaseConfig);

// through this our user details are being authorized 
// we can check basicaaly who is being authenticated 
export const auth = getAuth(app)           
// this contains all the information related to google authentication         
export const provider = new GoogleAuthProvider(); 
// export const GoogleSignIn = ()=>{
//     signInWithPopup(auth, provider)
// }