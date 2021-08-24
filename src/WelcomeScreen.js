import React, { useState, useEffect } from "react";
import { db } from "./firebase";
import NotLoggedScreen from "./NotLoggedScreen";
import LongMenu from "./Menu";
import OneRepMaxCalc from "./OneRepMaxCalc";

function WelcomeScreen() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userUID, setUserUID] = useState(false);
  const [data, setData] = useState(false);
  const [CurrOption, setCurrOption] = useState("OneRepMaxCalc");

  useEffect(() => {
    getData();
  }, [userUID, CurrOption]);

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
    return <NotLoggedScreen setLogin={setLogin} />;
  } else if (userUID === false) {
    return <>Ładowanie...</>;
  } else {
    return (
      <>
        <div style={{ width: "100%", marginBottom: 20, display: "flex" }}>
          <LongMenu setCurrOption={setCurrOption} />
          <h3
            style={{
              float: "right",
              paddingRight: "5%",
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
