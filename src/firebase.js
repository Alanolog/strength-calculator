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
function getData(userUID, setData) {
  const docRef = db.collection("users").doc(`${userUID}`);
  docRef
    .get()
    .then((doc) => {
      if (doc.exists) {
        setData(doc.data());
      } else console.log("data don't exists");
    })
    .catch((error) => {
      console.log("Error getting document:", error);
    });
}
function logout(setIsLoggedIn) {
  auth.signOut().then(() => {
    setIsLoggedIn(false);
  });
}
export { db, database, auth, getData, logout };
export default firebase;
