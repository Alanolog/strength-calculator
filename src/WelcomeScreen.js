import React, { useState, useEffect } from "react";
import { getData } from "./firebase";
import NotLoggedScreen from "./NotLoggedScreen";
import CalcsComponent from "./CalcsComponent";
import Footer from "./Footer";
function WelcomeScreen() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userUID, setUserUID] = useState(0);
  const [data, setData] = useState(false);

  useEffect(() => {
    getData(userUID, setData);
  }, [userUID]);

  function setLogin(state, uid = 0) {
    setIsLoggedIn(state);
    setUserUID(uid);
  }
  if (!isLoggedIn) {
    return (
      <>
        <NotLoggedScreen setLogin={setLogin} />
        <Footer />
      </>
    );
  } else if (userUID === 0) {
    return (
      <>
        Ładowanie...
        <Footer />
      </>
    );
  } else {
    return (
      <>
        <CalcsComponent data={data} setIsLoggedIn={setIsLoggedIn} />
        <Footer />
      </>
    );
  }
}

export default WelcomeScreen;
