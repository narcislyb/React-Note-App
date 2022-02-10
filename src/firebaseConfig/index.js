import firebase from "firebase";

// // Import the functions you need from the SDKs you need
// // import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID
// };

// // Initialize Firebase
// const app = firebase.initializeApp(firebaseConfig);
// export const NotesDataReference = firebase.database().ref('notes');
// // export const UsersDataReference = firebase.database().ref('users');

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCL4TdJISA_IZzOXLUlbuT776QwUjhc5lM",
  authDomain: "test-firebase-13d3c.firebaseapp.com",
  databaseURL: "https://test-firebase-13d3c-default-rtdb.firebaseio.com",
  projectId: "test-firebase-13d3c",
  storageBucket: "test-firebase-13d3c.appspot.com",
  messagingSenderId: "475965509239",
  appId: "1:475965509239:web:508a43aba11894f27a4072"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const NotesDataReference = firebase.database().ref('notes');

export default app