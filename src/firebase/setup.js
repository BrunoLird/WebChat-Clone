// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import {getAuth, GoogleAuthProvider} from "firebase/auth";
// import {getFirestore} from "firebase/firestore"
//
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries
//
// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyB9HD2P4UhtrCs7nXds5ez7vRvLZhjo_8I",
//   authDomain: "whatsapp-3177c.firebaseapp.com",
//   projectId: "whatsapp-3177c",
//   storageBucket: "whatsapp-3177c.appspot.com",
//   messagingSenderId: "365778420130",
//   appId: "1:365778420130:web:2b2160b1fbacb9f0ad72fb",
//   measurementId: "G-PPGJMZGVZV"
// };
//
// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// export const auth = getAuth(app)
// export const googleProvider = new GoogleAuthProvider(app)
// export const database = getFirestore(app)

import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyB9HD2P4UhtrCs7nXds5ez7vRvLZhjo_8I",
  authDomain: "whatsapp-3177c.firebaseapp.com",
  projectId: "whatsapp-3177c",
  storageBucket: "whatsapp-3177c.appspot.com",
  messagingSenderId: "365778420130",
  appId: "1:365778420130:web:2b2160b1fbacb9f0ad72fb",
  measurementId: "G-PPGJMZGVZV"
};



const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider(app)
export const database = getFirestore(app)