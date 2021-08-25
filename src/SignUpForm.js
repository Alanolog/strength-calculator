import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import formStyle from "./welcomScreenFormStyleObject";
import signUpButton from "./signUpButton";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

function SignUpForm({ setLogin }) {
  const [email, setEmail] = useState("");
  const [email2, setEmail2] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [sex, setSex] = useState("Men");
  const [birthDate, setBirthDate] = useState(Date.now());

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
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Data Urodzenia"
          format="MM/dd/yyyy"
          value={birthDate}
          onChange={(date) => {
            setBirthDate(date);
          }}
          KeyboardButtonProps={{
            "aria-label": "change date",
          }}
        />
      </MuiPickersUtilsProvider>

      <Select
        labelId="demo-customized-select-label"
        id="demo-customized-select"
        value={sex}
        onChange={(e) => setSex(e.target.value)}
      >
        <MenuItem value={"Men"}>Mężczyzna</MenuItem>
        <MenuItem value={"Women"}>Kobieta</MenuItem>
      </Select>
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
              sex: sex,
              birthDate: birthDate,
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
