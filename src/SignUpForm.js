import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import formStyle from "./welcomScreenFormStyleObject";
import signUpButton from "./signUpButton";
function SignUpForm({ setLogin }) {
  const [email, setEmail] = useState("");
  const [email2, setEmail2] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
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
      <Button
        variant="contained"
        color="secondary"
        onClick={() =>
          signUpButton(
            {
              email: email,
              email2: email2,
              password: password,
              password2: password2,
            },
            setLogin
          )
        }
      >
        Zarejestruj się
      </Button>
    </form>
  );
}

export default SignUpForm;
