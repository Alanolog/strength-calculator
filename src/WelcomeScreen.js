import React, { useState } from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import { db } from "./firebase";
function WelcomeScreen() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userUID, setUserUID] = useState("");
  function setLogin(state, uid = "") {
    setIsLoggedIn(state);
    setUserUID(uid);
  }
  function getData() {
    let html = "";
    console.log(userUID);
    db.collection("users")
      .doc(userUID)
      .get()
      .then((doc) => {
        html = doc.data().email;
      });
    console.log(html);
    return html;
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
            justifyContent: "space-between",
            gap: "1rem",
          }}
        >
          <SignUpForm setLogin={setLogin} />
          <LoginForm setLogin={setLogin} />
        </div>
      </>
    );
  } else {
    return <>Jesteś zalogowany jako: {getData()}</>;
  }
}

export default WelcomeScreen;
