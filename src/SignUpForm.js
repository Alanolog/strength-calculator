import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import validator from "validator";
import Swal from "sweetalert2";
import { database, auth } from "./firebase";
function SignUpForm({ setLogin }) {
  const [email, setEmail] = useState("");
  const [email2, setEmail2] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  function validateEmail() {
    if (!validator.isEmail(email)) {
      Swal.fire({
        icon: "error",
        title: "Ups...",
        text: "Niestety to nie jest poprawny email!",
      });
      return false;
    }
    if (!validator.equals(email, email2)) {
      Swal.fire({
        icon: "error",
        title: "Ups...",
        text: "Emaile nie są takie same!",
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
    if (!validator.equals(password, password2)) {
      Swal.fire({
        icon: "error",
        title: "Ups...",
        text: "Hasła nie są takie same!",
      });
      return false;
    }
  }
  function signUpButton() {
    if (validateEmail() === false || validatePassword() === false) {
      return;
    }
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        const user = auth.currentUser;
        const databaseRef = database.ref();
        const userData = {
          email: email,
          lastLogin: Date.now(),
        };
        databaseRef.child("users/" + user.uid).set(userData);
        Swal.fire({
          title: "Utworzyłeś konto",
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
        if (err.code == "auth/email-already-in-use") {
          Swal.fire({
            icon: "error",
            title: "Ups...",
            text: "Podany email jest już używany przez kogoś innego!",
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
        label="Powtórz Email"
        variant="outlined"
        value={email2}
        onChange={(e) => setEmail2(e.target.value)}
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
      <TextField
        id="outlined-basic"
        label="Powtórz Hasło"
        variant="outlined"
        value={password2}
        onChange={(e) => setPassword2(e.target.value)}
        type="password"
      />
      <Button variant="contained" color="secondary" onClick={signUpButton}>
        Zarejestruj się
      </Button>
    </form>
  );
}

export default SignUpForm;
