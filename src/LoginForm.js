import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import resetPassword from "./resetPassword";
import loginButton from "./loginButton";
import formStyle from "./welcomScreenFormStyleObject";
function LoginForm({ setLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
      <Button
        variant="contained"
        onClick={() => {
          resetPassword(email);
        }}
      >
        Zresetuj Hasło
      </Button>
    </form>
  );
}

export default LoginForm;
