import React, { useState, useEffect } from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import { db } from "./firebase";

function WelcomeScreen() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userUID, setUserUID] = useState(false);
  const [data, setData] = useState(false);
  useEffect(() => {
    getData();
  }, [userUID]);
  function setLogin(state, uid = "") {
    setIsLoggedIn(state);
    setUserUID(uid);
  }
  function getData() {
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
  if (!isLoggedIn) {
    return (
      <>
        <h1 style={{ color: "gray" }}>
          Zaloguj się, jeżeli nie masz konta zarejestruj się!
        </h1>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <LoginForm setLogin={setLogin} />
          <SignUpForm setLogin={setLogin} />
        </div>
      </>
    );
  } else if (userUID === false) {
    return <>Ładowanie...</>;
  } else {
    return <>Jesteś zalogowany jako: {data.email}</>;
  }
}

export default WelcomeScreen;
