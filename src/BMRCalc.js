import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import formStyle from "./welcomScreenFormStyleObject";
import calcBMR from "./calcBMR";

function BMRCalc({ data }) {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [BMR, setBMR] = useState("");
  const age = new Date().getFullYear() - new Date(data.birthDate).getFullYear();
  return (
    <>
      <h2 style={{ color: "#3f51b5", textAlign: "center" }}>Kalkulator BMR</h2>
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
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          type="number"
        />
        <Button
          variant="contained"
          color="primary"
          onClick={() => calcBMR(weight, height, age, data.sex, setBMR)}
        >
          Oblicz swoje BMR
        </Button>
      </form>

      {BMR !== "" ? <p>Twoje BMR wynosi {BMR}kcal</p> : null}
    </>
  );
}
export default BMRCalc;
