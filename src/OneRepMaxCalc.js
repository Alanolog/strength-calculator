import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import formStyle from "./welcomScreenFormStyleObject";
import calcOneRepMax from "./calcOneRepMax";
import MaxWeightPerRepTable from "./MaxWeightPerRepTable";
function OneRepMaxCalc() {
  const [weight, setWeight] = useState("");
  const [reps, setReps] = useState("");
  const [max, setMax] = useState("");

  return (
    <>
      <form style={formStyle}>
        <TextField
          id="outlined-basic"
          label="Podniesiona waga"
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
          onClick={() => calcOneRepMax(reps, weight, setMax)}
        >
          Oblicz swój One Rep Max
        </Button>
      </form>
      {max === "" ? null : (
        <>
          <h3 style={{ color: "#3f51b5" }}>Twój one rep max wynosi: {max}kg</h3>
          <MaxWeightPerRepTable max={max} />
        </>
      )}
    </>
  );
}
export default OneRepMaxCalc;
