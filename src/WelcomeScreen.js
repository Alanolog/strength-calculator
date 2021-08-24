import React, { useState, useEffect } from "react";
import { getData } from "./firebase";
import NotLoggedScreen from "./NotLoggedScreen";
import CalcsComponent from "./CalcsComponent";
function WelcomeScreen() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userUID, setUserUID] = useState(false);
  const [data, setData] = useState(false);

  useEffect(() => {
    getData(userUID, setData);
  }, [userUID]);

  function setLogin(state, uid = "") {
    setIsLoggedIn(state);
    setUserUID(uid);
  }

  if (!isLoggedIn) {
    return <NotLoggedScreen setLogin={setLogin} />;
  } else if (userUID === false) {
    return <>Ładowanie...</>;
  } else {
    return <CalcsComponent data={data} />;
  }
}

export default WelcomeScreen;
