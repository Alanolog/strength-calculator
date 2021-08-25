import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import formStyle from "./welcomScreenFormStyleObject";

function BMRCalc({ data }) {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  return (
    <form style={formStyle}>
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
        label="Wzrost w centymetrach"
        variant="outlined"
        value={reps}
        onChange={(e) => setHeight(e.target.value)}
        type="number"
      />
      <Button
        variant="contained"
        color="primary"
        onClick={() => calcBMR(weight, height)}
      >
        Oblicz swoje BMR
      </Button>
    </form>
  );
}
export default BMRCalc;
