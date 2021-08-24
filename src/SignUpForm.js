import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import Swal from "sweetalert2";
import { db, auth } from "./firebase";
import validateSignUp from "./validateSignUp";
import formStyle from "./welcomScreenFormStyleObject";
function SignUpForm({ setLogin }) {
  const [email, setEmail] = useState("");
  const [email2, setEmail2] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  function signUpButton() {
    if (validateSignUp(email, email2, password, password2)) {
      return;
    }
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        const user = auth.currentUser;
        const userData = {
          email: email,
          lastLogin: Date.now(),
        };
        db.collection("users").doc(user.uid).set(userData);
        Swal.fire({
          title: "Utworzyłeś konto",
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });
        setLogin(true, user.uid);
      })
      .catch((err) => {
        if (err.code === "auth/email-already-in-use") {
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
    <form style={formStyle}>
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
