import firebase from "firebase";
const config = {
  apiKey: "AIzaSyDUjwvT9xWVBX00pjVeYNFtRXi1be__xAQ",
  authDomain: "strength-calculator.firebaseapp.com",
  projectId: "strength-calculator",
  storageBucket: "strength-calculator.appspot.com",
  messagingSenderId: "373836812423",
  appId: "1:373836812423:web:bdbb73c3993dff41042822",
  measurementId: "G-04HVJZXRTS",
};
firebase.initializeApp(config);
const db = firebase.firestore();

const auth = firebase.auth();
const database = firebase.database();

export { db, database, auth };
export default firebase;
