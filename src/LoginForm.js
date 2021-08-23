import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import validator from "validator";
import Swal from "sweetalert2";
function LoginForm({ setLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function loginButton() {
    if (!validator.isEmail(email)) {
      Swal.fire({
        icon: "error",
        title: "Ups...",
        text: "Niestety to nie jest poprawny email!",
      });
    }
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
