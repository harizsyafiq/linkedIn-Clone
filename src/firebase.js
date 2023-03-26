import firebase from "firebase";
/*use this bottom import for latest update firebase 24/3/2023 */
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwl9iZvy3ns9KazmkNAnm8yFrNeqHkk-g",
  authDomain: "linkedin-clone-c10d2.firebaseapp.com",
  projectId: "linkedin-clone-c10d2",
  storageBucket: "linkedin-clone-c10d2.appspot.com",
  messagingSenderId: "45788361875",
  appId: "1:45788361875:web:b8e96ff3bb634591630966",
  measurementId: "G-TYKQQT68Q2",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
