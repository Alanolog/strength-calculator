import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import Swal from "sweetalert2";
import { db, auth } from "./firebase";
import loginButton from "./loginButton";
import formStyle from "./welcomScreenFormStyleObject";
function LoginForm({ setLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function resetPassword() {
    auth.useDeviceLanguage();

    auth
      .sendPasswordResetEmail(email)
      .then(() => {
        Swal.fire({
          title: "Wysłaliśmy ci przypomnienie hasła na email " + email,
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });
      })
      .catch((err) => {
        if (err.code === "auth/user-not-found") {
          Swal.fire({
            icon: "error",
            title: "Ups...",
            text: "podany email nie istnieje w zbiorze emaili",
          });
        } else if (err.code === "auth/invalid-email") {
          Swal.fire({
            icon: "error",
            title: "Ups...",
            text: "Podano źle sformatowany email",
          });
        } else {
          Swal.fire({
            icon: "error",
            title: err.code,
            text: err.message,
          });
        }
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
        label="Hasło"
        variant="outlined"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
      />
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          loginButton(email, password, setLogin);
        }}
      >
        Zaloguj się
      </Button>
      <Button variant="contained" onClick={resetPassword}>
        Zresetuj Hasło
      </Button>
    </form>
  );
}

export default LoginForm;
