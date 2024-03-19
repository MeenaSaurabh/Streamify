// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6OihZbmU_6zfLEj8M0dgPLIxUqlbaV4Y",
  authDomain: "netflix-8f486.firebaseapp.com",
  projectId: "netflix-8f486",
  storageBucket: "netflix-8f486.appspot.com",
  messagingSenderId: "335392988210",
  appId: "1:335392988210:web:0fc9d7240fedb2e635302b",
  measurementId: "G-GE002R18VH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Steps 3rd & 4th will give 

// firebase.json  --
// {
//   "hosting": {
//     "public": "build",
//     "ignore": ["firebase.json", "**/.*", "**/node_modules/**"]
//   }
// }

// &  firebaserc files ------->
// {
//   "projects": {
//     "default": "netflixgpt-57a56"
//   }
// }

// 3.Install Firebase CLI ->
// npm install -g firebase-tools

// 4.Deploy to Firebase Hosting ->
// firebase login
// firebase init
// firebase deploy

// ----------------------------------------------- OLD -----------------------------------------------------------
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAwKbz6Wo1UVp1BzKSJVXV6hTz3vwy74k8",
//   authDomain: "netflixgpt-57a56.firebaseapp.com",
//   projectId: "netflixgpt-57a56",
//   storageBucket: "netflixgpt-57a56.appspot.com",
//   messagingSenderId: "1093133802935",
//   appId: "1:1093133802935:web:c284961959cce2a54adc32",
//   measurementId: "G-DEHFXGZ999",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth();
