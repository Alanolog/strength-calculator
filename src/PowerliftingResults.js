import React, { useState } from "react";
import {
  TextField,
  Button,
  Select,
  MenuItem,
  InputLabel,
} from "@material-ui/core";
import formStyle from "./welcomScreenFormStyleObject";
function PowerliftingResults() {
  const options = [
    "Przysiad z sztangą",
    "Martwy ciąg",
    "Wyciskanie sztangi na ławce prostej",
  ];

  const [weight, setWeight] = useState("");
  const [reps, setReps] = useState("");
  const [currOption, setCurrOption] = useState(`${options[0]}`);

  return (
    <>
      <h2 style={{ color: "#3f51b5", textAlign: "center" }}>
        Zapisz swój ostatni wynik w danym boju
      </h2>
      <form style={formStyle}>
        <InputLabel id="label">Wybierz bój</InputLabel>
        <Select
          labelId="label"
          id="select"
          value={currOption}
          onChange={(e) => setCurrOption(e.target.value)}
        >
          {options.map((el, i) => {
            return <MenuItem key={i}>{el}</MenuItem>;
          })}
        </Select>

        <TextField
          id="outlined-basic"
          label="Waga"
          variant="outlined"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          type="number"
        />
        <TextField
          id="outlined-basic"
          label="Ilość powtórzeń"
          variant="outlined"
          value={reps}
          onChange={(e) => setReps(e.target.value)}
          type="number"
        />
        <Button
          variant="contained"
          color="primary"
          onClick={() => console.log("dupa")}
        >
          Oblicz swoje FFMI
        </Button>
      </form>
    </>
  );
}
export default PowerliftingResults;
