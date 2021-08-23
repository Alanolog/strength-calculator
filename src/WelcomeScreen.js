import React, { useState } from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

function WelcomeScreen() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function setLogin(state) {
    setIsLoggedIn(state);
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
  }
  return <>Jesteś zalogowany!</>;
}

export default WelcomeScreen;
