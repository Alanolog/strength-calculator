import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import validator from "validator";
import Swal from "sweetalert2";
import { database, auth } from "./firebase";
function LoginForm({ setLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function validateEmail() {
    if (!validator.isEmail(email)) {
      Swal.fire({
        icon: "error",
        title: "Ups...",
        text: "Niestety to nie jest poprawny email!",
      });
      return false;
    }
  }
  function validatePassword() {
    if (password.length < 6) {
      Swal.fire({
        icon: "error",
        title: "Ups...",
        text: "Hasło jest za krótkie!",
      });
      return false;
    }
  }
  function loginButton() {
    if (validateEmail() === false || validatePassword() === false) {
      return;
    }
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        const user = auth.currentUser;
        const databaseRef = database.ref();
        const userData = {
          lastLogin: Date.now(),
        };
        databaseRef.child("users/" + user.uid).update(userData);
        Swal.fire({
          title: "Zalogowałeś się na konto",
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });
        setLogin(true);
      })
      .catch((err) => {
        if (err.code == "auth/user-not-found") {
          Swal.fire({
            icon: "error",
            title: "Ups...",
            text: "Nie znaleziono użytkownika z takim emailem!",
          });
        } else if (err.code == "auth/wrong-password") {
          Swal.fire({
            icon: "error",
            title: "Ups...",
            text: "Podałeś złe hasło!",
          });
        } else {
          Swal.fire({
            icon: "error",
            title: err.code,
            text: err.message,
          });
        }
        setLogin(false);
      });
    return;
  }
  return (
    <form
      style={{
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 5,
        paddingRight: 5,
        display: "flex",
        flexDirection: "column",
        width: "50%",
        gap: "1rem",
        border: "1px solid lightgray",
        borderRadius: 20,
        justifyContent: "center",
      }}
    >
      <TextField
        id="outlined-basic"
        label="Email"
        variant="outlined"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
      />
      <TextField
        id="outlined-basic"
        label="Hasło"
        variant="outlined"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
      />
      <Button variant="contained" color="primary" onClick={loginButton}>
        Zaloguj się
      </Button>
    </form>
  );
}

export default LoginForm;
