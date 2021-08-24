import React, { useState, useEffect } from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import { db } from "./firebase";
import LongMenu from "./Menu";
import OneRepMaxCalc from "./OneRepMaxCalc";

function WelcomeScreen() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userUID, setUserUID] = useState(false);
  const [data, setData] = useState(false);
  const [CurrOption, setCurrOption] = useState("OneRepMaxCalc");
  useEffect(() => {
    getData();
  }, [userUID]);
  function currentElement(option) {
    if (option === "Kalkulator maksymalnego ciężaru") {
      setCurrOption("OneRepMaxCalc");
    } else if (option === "kalkulator BMR") {
      setCurrOption("BMRCalc");
    }
  }

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
        <h2 style={{ color: "#3f51b5" }}>
          Zaloguj się, jeżeli nie masz konta zarejestruj się!
        </h2>
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
    return (
      <>
        <div style={{ width: "100%", marginBottom: 20 }}>
          <LongMenu currentElement={currentElement} />
          <h3
            style={{
              float: "right",
              width: "50%",
              fontWeight: "600",
              color: "#3f51b5",
            }}
          >
            {data.email}
          </h3>
        </div>
        {CurrOption === "OneRepMaxCalc" ? <OneRepMaxCalc /> : null}
      </>
    );
  }
}

export default WelcomeScreen;
